import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <Container className="wd-signup-screen mt-4">
      <h1>Sign up</h1>
      <Form>
        <Form.Group className="mb-2 wd-username">
          <Form.Control
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
          />
        </Form.Group>

        <Form.Group className="mb-2 wd-password">
          <Form.Control
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            placeholder="password"
          />
        </Form.Group>

        <Button
          onClick={signup}
          className="wd-signup-btn w-100 mb-2"
          variant="primary"
        >
          Sign up
        </Button>

        <div>
          <Link to="/Kambaz/Account/Signin" className="wd-signin-link">
            Sign in
          </Link>
        </div>
      </Form>
    </Container>
  );
}
