import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { Form, Button, Container } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  });

  return (
    <Container id="wd-profile-screen" className="mt-4">
      <h1>Profile</h1>
      {profile && (
        <Form className="mt-4">
          <Form.Group className="mb-2">
            <Form.Label>Username</Form.Label>
            <Form.Control
              defaultValue={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              defaultValue={profile.password}
              type="password"
              onChange={(e) => setProfile({ ...profile, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              defaultValue={profile.firstName}
              onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              defaultValue={profile.lastName}
              onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              defaultValue={profile.dob}
              type="date"
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              defaultValue={profile.email}
              type="email"
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              defaultValue={profile.role}
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Control>
          </Form.Group>
          <Button onClick={signout} className="w-100 mb-2" variant="danger">
            Sign out
          </Button>
        </Form>
      )}
    </Container>
  );
}
