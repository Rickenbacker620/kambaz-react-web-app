import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <Container id="wd-signin-screen" className="mt-4">
      <h1>Sign in</h1>

      <Form>
        <Form.Group controlId="wd-username" className="mb-2">
          <Form.Control
            placeholder="username"
            defaultValue={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="wd-password" className="mb-2">
          <Form.Control
            placeholder="password"
            type="password"
            defaultValue={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
        </Form.Group>

        <Button onClick={signin} id="wd-signin-btn" className="w-100 mb-2" variant="primary">
          Sign in
        </Button>

        <div>
          <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
            Sign up
          </Link>
        </div>
      </Form>
    </Container>
  );
}
