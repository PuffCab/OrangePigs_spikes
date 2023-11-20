import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { ToastPosition } from "react-bootstrap/esm/ToastContainer";

interface ToastInfoType {
  background: string;
  text: string;
}

// interface User extends UserImage {
//   userName: string;
//   email: string;
//   password: string;
// }
interface User {
  userName: string;
  email: string;
  password?: string;
  userImage: string;
}

interface OKResponseFileType {
  message: string;
  userImage: string;
}
interface OKResponseRegisterType {
  msg: string;
  message?: string;
  user: User;
}

interface ErrorResponse {
  error: string;
  msg?: string;
}

function Register() {
  const [isLoading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastInfo, setToastInfo] = useState<ToastInfoType | null>(null);
  const [position, setPosition] = useState<ToastPosition>("top-end");
  const [selectedFile, setselectedFile] = useState<File | string>("");
  // const [newUser, setNewUser] = useState<User>({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   userImage: "",
  // });
  const [newUser, setNewUser] = useState<User | null>(null);

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e :>> ", e.target.files?.[0]);

    setselectedFile(e.target.files?.[0] || "");
  };
  // const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
  const handleFileSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    //for button outside form ￪
    e.preventDefault();
    setLoading(true);

    const formdata = new FormData();
    formdata.append("userImage", selectedFile);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/users/imageUpload",
        requestOptions
      );
      if (response.ok) {
        const result = (await response.json()) as OKResponseFileType;

        console.log("result :>> ", result);
        //here we get the URL for the user profile picture
        setLoading(false);
        toggleShowToast({ background: "success", text: result.message });
        setNewUser({ ...(newUser as User), userImage: result.userImage });
      }
      if (!response.ok) {
        const result = (await response.json()) as ErrorResponse;
        console.log("result :>> ", result.error);
        setLoading(false);
        toggleShowToast({ background: "danger", text: result.error });
      }
    } catch (err) {
      const error = err as Error;
      console.log("error messge:>> ", error.message);
      setLoading(false);
    }
  };

  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log("e.target.name :>> ", e.target.name);
    // console.log("e.target.value :>> ", e.target.value);
    setNewUser({ ...(newUser as User), [e.target.name]: e.target.value });
  };

  const handleSubmitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUser) {
      const urlencoded = new URLSearchParams();
      urlencoded.append("userName", newUser.userName);
      urlencoded.append("email", newUser.email);
      urlencoded.append("password", newUser.password!);
      urlencoded.append(
        "userImage",
        newUser.userImage
          ? newUser.userImage
          : "https://venturebeat.com/wp-content/uploads/2016/02/anonymous-face.shutterstock_365080829.jpg"
      );

      const requestOptions = {
        method: "POST",
        body: urlencoded,
      };

      try {
        const response = await fetch(
          "http://localhost:5001/api/users/register",
          requestOptions
        );
        if (response.ok) {
          const result = (await response.json()) as OKResponseRegisterType;
          toggleShowToast({
            background: "success",
            text: result.msg ? result.msg : result.message,
          });

          console.log("result :>> ", result);
        }
        if (!response.ok) {
          const result = (await response.json()) as ErrorResponse;
          toggleShowToast({ background: "warning", text: result.msg! });

          console.log("result :>> ", result);
        }
      } catch (err) {
        const error = err as Error;
        console.log("error :>> ", error.message);
      }
    } else {
      console.log("you must enter some information first");
    }
  };

  const toggleShowToast = (toastInfo: ToastInfoType) => {
    setShowToast(!showToast);
    setToastInfo(toastInfo);
  };
  return (
    <div>
      <h2>Register</h2>

      <Form onSubmit={handleSubmitRegister}>
        <Row className="align-items-center">
          <Form.Group
            as={Row}
            className="mb-3 custom-center"
            controlId="formGroupUserNameRegister"
          >
            <Form.Label column sm={2}>
              User Name
            </Form.Label>
            <Col xs="auto">
              <Form.Control
                type="text"
                name="userName"
                placeholder="Enter User Name"
                onChange={handleRegisterInput}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 custom-center"
            controlId="formGroupEmailRegister"
          >
            <Form.Label column sm={2}>
              Email address
            </Form.Label>
            <Col xs="auto">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleRegisterInput}
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
                onChange={handleRegisterInput}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 custom-center"
            controlId="formFile"
          >
            {newUser?.userImage ? (
              <img
                src={newUser.userImage}
                style={{ width: "60px", borderRadius: "50%" }}
              />
            ) : (
              <Form.Label column sm={3}>
                Choose your profile image
              </Form.Label>
            )}
            <Col xs="auto">
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  // aria-describedby="basic-addon1"
                  name="file"
                  placeholder="Password"
                  onChange={handleFileInput}
                />
                <InputGroup.Text>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleFileSubmit}
                  >
                    {isLoading ? "Loading…" : "Click to load"}
                  </Button>
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Form.Group>

          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              className="mb-2"
              disabled={
                newUser?.userName && newUser?.email && newUser?.password
                  ? false
                  : true
              }
            >
              Register
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

export default Register;
