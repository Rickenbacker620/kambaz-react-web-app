import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
export default function AssignmentsControls({
  isFaculty,
}: {
  isFaculty: boolean;
}) {
  const { cid } = useParams();
  const navigate = useNavigate();
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between align-items-center mb-3"
    >
      <InputGroup style={{ maxWidth: "300px" }}>
        <InputGroup.Text className="bg-light border-secondary">
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          aria-label="Search for Assignments"
          id="wd-search-assignment"
          className="border-secondary"
        />
      </InputGroup>
      {isFaculty && (
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Button
            variant="outline-secondary"
            className="me-2 d-flex align-items-center px-3"
            id="wd-add-assignment-group"
          >
            <BsPlus className="position-relative me-2" /> Group
          </Button>

          <Button
            variant="danger"
            className="d-flex align-items-center px-3"
            id="wd-add-assignment"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
          >
            <BsPlus className="position-relative me-2" /> Assignment
          </Button>
        </div>
      )}
    </div>
  );
}
