import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [isSpanVisible, setIsSpanVisible] = useState(false);
  const showSpan = () => {
    // setIsSpanVisible(true);
    setTimeout(() => {
      setIsSpanVisible(true);
    }, 3000);
  };
  return (
    <>
      <h1>Contac</h1>
      <span
        data-testid="span"
        style={{ visibility: isSpanVisible ? "visible" : "hidden" }}
      >
        Hi {name}, message sent to {email}
      </span>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button data-testid="test-button" onClick={showSpan}>
        Send
      </button>
    </>
  );
}

export default Contact;
