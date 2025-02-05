import { Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h1>Profile</h1>
      <form className="mt-4">
        <Form.Control 
          value="alice"
          className="mb-2"
        />
        <Form.Control 
          value="123"
          type="password"
          className="mb-2"
        />
        <Form.Control 
          value="Alice"
          className="mb-2"
        />
        <Form.Control 
          value="Wonderland"
          className="mb-2"
        />
        <Form.Control 
          type="date"
          placeholder="mm/dd/yyyy"
          className="mb-2"
        />
        <Form.Control 
          value="alice@wonderland.com"
          type="email"
          className="mb-2"
        />
        <Form.Control 
          value="User"
          className="mb-2"
        />
        <button 
          className="btn btn-danger w-100"
        >
          Signout
        </button>
      </form>
    </div>
  );
}