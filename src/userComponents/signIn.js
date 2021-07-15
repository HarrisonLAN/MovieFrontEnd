import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from '../utils/index'
import axios from 'axios'

async function GetUser(event, name, password) {
  event.preventDefault();
  const url = `http://209.250.229.174:3001/api/auth/login`;
  const payload = { name, password };
  const { data } = await axios.post(url, payload);
  const { token, success } = data;
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