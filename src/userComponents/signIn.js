import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from '../utils/index'

async function GetUser(event, username, password) {
  event.preventDefault();

  const data = await fetch(
    `http://localhost:3001/api/auth/login`, {
    method: 'POST',
    // We convert the React state to JSON and send it as the POST body
    body: JSON.stringify({ username, password })
  });
  const { token, success } = await data.json();
  login(token);
}

export default function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <Form onSubmit={(event) => GetUser(event, username, password)}>
        <Form.Group size="lg" controlId="text">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}