import { FaPlus } from "react-icons/fa6";
import { Button, Dropdown } from "react-bootstrap";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item>
            <GreenCheckmark /> Publish all assignments
          </Dropdown.Item>
          <Dropdown.Item>Unpublish all assignments</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <input className="form-control d-inline-block w-auto float-start" placeholder="Search for Assignments">
      </input>
    </div>
  );
}
