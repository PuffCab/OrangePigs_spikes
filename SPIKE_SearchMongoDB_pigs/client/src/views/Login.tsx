import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap";
import { ToastPosition } from "react-bootstrap/esm/ToastContainer";

type LoginCredentials = {
  email: string;
  password: string;
};
type User = {
  userName: string;
  email: string;
  userImage?: string;
};
type LoginResponse = {
  msg: string;
  user: User;
  token: string;
};
interface ToastInfoType {
  background: string;
  text: string;
}
interface ErrorResponse {
  error: string;
  msg?: string;
}

function Login() {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentials | null>(null);
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastInfo, setToastInfo] = useState<ToastInfoType | null>(null);
  const [position, setPosition] = useState<ToastPosition>("top-end");

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.name :>> ", e.target.name);
    setLoginCredentials({
      ...(loginCredentials as LoginCredentials),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("loginCredentials :>> ", loginCredentials);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", loginCredentials!.email);
    urlencoded.append("password", loginCredentials!.password);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/login",
        requestOptions
      );

      if (response.ok) {
        const result: LoginResponse = await response.json();
        console.log("result. :>> ", result);
        setLoading(false);
        toggleShowToast({ background: "success", text: result.msg });
        const token = result.token;
        if (token) {
          localStorage.setItem("token", token);
        }
      }
      if (!response.ok) {
        const result = (await response.json()) as ErrorResponse;
        toggleShowToast({ background: "warning", text: result.msg! });

        console.log("result :>> ", result);
      }
    } catch (err) {
      const error = err as Error;
      console.log("error :>> ", error.message);
      toggleShowToast({ background: "danger", text: error.message });
    }
  };

  const isUserLoggedIn = () => {
    const token = localStorage.getItem("token");

    return token ? true : false;
  };
  const toggleShowToast = (toastInfo: ToastInfoType) => {
    setShowToast(!showToast);
    setToastInfo(toastInfo);
  };

  useEffect(() => {
    const isLoggedIn = isUserLoggedIn();
    if (isLoggedIn) {
      console.log("user LoggedIn");
    } else {
      console.log("user is NOT logged in");
    }
  }, []);

  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={handleSubmitLogin}>
        <Row className="align-items-center">
          <Form.Group
            as={Row}
            className="mb-3 custom-center"
            controlId="formGroupEmail"
          >
            <Form.Label column sm={2}>
              Email address
            </Form.Label>
            <Col xs="auto">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleLoginInput}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 custom-center"
            controlId="formGroupPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col xs="auto">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleLoginInput}
              />
            </Col>
          </Form.Group>
          <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
      <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
        <Toast
          show={showToast}
          onClose={toggleShowToast}
          delay={4000}
          autohide
          bg={toastInfo?.background}
        >
          <Toast.Body>{toastInfo?.text}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Login;
