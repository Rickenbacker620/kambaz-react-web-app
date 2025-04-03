import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as courseClient from "../client";
import * as assignmentClient from "./client";
export default function AssignmentEditor() {
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const isNew = aid === "new";
  const existingAssignment = assignments.find(
    (assignment: any) => assignment.course === cid && assignment._id === aid
  );
  const [assignment, setAssignment] = useState(
    isNew
      ? {
          title: "",
          course: cid,
          modules: "",
          available_from_date: new Date().toISOString(),
          available_until_date: new Date(
            new Date().setDate(new Date().getDate() + 14)
          ).toISOString(),
          points: 100,
        }
      : existingAssignment || {}
  );
  const handleSave = async () => {
    if (!cid) return;
    try {
      if (isNew) {
        console.log(
          "Updating assignment with _id:",
          assignment._id,
          assignment
        );
        const savedAssignment = await courseClient.createAssignmentForCourse(
          cid,
          assignment
        );
        dispatch(addAssignment(savedAssignment));
      } else {
        console.log(
          "Updating assignment with _id:",
          assignment._id,
          assignment
        );
        const updatedAssignment = await assignmentClient.updateAssignment(
          assignment
        );
        dispatch(updateAssignment(updatedAssignment));
      }
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };
  const formatDateForInput = (isoString: string | undefined) => {
    if (!isoString) return "";
    return new Date(isoString).toISOString().slice(0, 16);
  };
  const handleDateChange = (field: string, value: string) => {
    setAssignment({ ...assignment, [field]: new Date(value).toISOString() });
  };
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form.Group className="mb-3" controlId="wd-name">
        <Form.Label>Assignment Name</Form.Label>
        <Form.Control
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          placeholder="Enter assignment name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-description">
        <Form.Control
          as="textarea"
          rows={5}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          placeholder="Enter assignment description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-points">
        <Form.Label>Points</Form.Label>
        <Form.Control
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-group">
        <Form.Label>Assignment Group</Form.Label>
        <Form.Select defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECTS">PROJECTS</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-display-grade-as">
        <Form.Label>Display Grade as</Form.Label>
        <Form.Select defaultValue="Percentage">
          <option value="percentage">Percentage</option>
          <option value="points">Points</option>
          <option value="complete/incomplete">Complete/Incomplete</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-submission-type">
        <Form.Label>Submission Type</Form.Label>
        <Form.Select defaultValue="Online">
          <option value="online">Online</option>
          <option value="paper">Paper</option>
          <option value="none">None</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Online Entry Options</Form.Label>
        <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
        <Form.Check
          type="checkbox"
          id="wd-website-url"
          label="Website URL"
          defaultChecked
        />
        <Form.Check
          type="checkbox"
          id="wd-media-recordings"
          label="Media Recordings"
        />
        <Form.Check
          type="checkbox"
          id="wd-student-annotation"
          label="Student Annotation"
        />
        <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="wd-assign-to">
        <Form.Label>Assign to</Form.Label>
        <Form.Control defaultValue="Everyone" />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="wd-available-from">
            <Form.Label>Available from</Form.Label>
            <Form.Control
              type="datetime-local"
              value={formatDateForInput(assignment.available_from_date)}
              onChange={(e) =>
                handleDateChange("available_from_date", e.target.value)
              }
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="wd-available-until">
            <Form.Label>Until</Form.Label>
            <Form.Control
              type="datetime-local"
              value={formatDateForInput(assignment.available_until_date)}
              onChange={(e) =>
                handleDateChange("available_until_date", e.target.value)
              }
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          className="me-2"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
        >
          Cancel
        </Button>
        <Button variant="danger" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}
