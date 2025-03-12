import { ListGroup, Button } from "react-bootstrap";
import { BsFileEarmarkRichtext, BsGripVertical } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import assignments from "../../Database/assignments.json";

export default function Assignments() {
  const history = useHistory();

  const handleAddAssignment = () => {
    history.push("/Kambaz/Courses/Assignments/Editor");
  };

  const handleEditAssignment = (assignmentId) => {
    history.push(`/Kambaz/Courses/Assignments/Editor/${assignmentId}`);
  };

  return (
    <div>
      <AssignmentControls />
      <Button onClick={handleAddAssignment}>+ Assignment</Button>
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS
            <AssignmentControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroup.Item key={assignment._id} className="wd-lesson p-3 ps-1" onClick={() => handleEditAssignment(assignment._id)}>
                <BsGripVertical className="me-2 fs-3" />
                <BsFileEarmarkRichtext className="me-3" />
                <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}>{assignment.title}</a>
                <LessonControlButtons />
                <div className="ms-4 ps-2 text-secondary">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12am |
                  <b>Due</b> May 30 at 11:59pm | 100 pts
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
