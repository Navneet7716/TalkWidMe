import React, { useRef } from "react";

import { Container, Form, Button } from "react-bootstrap";

import { v4 as uuidv4 } from "uuid";

function Login(prop: { onIdSubmit: (arg0: string) => void }) {
  const idRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    prop.onIdSubmit(idRef.current.value);
  };

  function createNewId() {
    prop.onIdSubmit(uuidv4());
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{
        height: "100vh",
      }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button
          type="submit"
          style={{
            marginRight: "1rem",
          }}
        >
          Login
        </Button>
        <Button onClick={createNewId} variant="secondary">
          Create a New Id
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
