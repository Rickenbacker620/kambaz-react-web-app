import { ListGroup } from "react-bootstrap";
import { BsFileEarmarkRichtext, BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  return (
    <div>
      <AssignmentControls />
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
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsFileEarmarkRichtext className="me-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/1">A1 - ENV + HTML</a>
              <LessonControlButtons />
              <div className="ms-4 ps-2 text-secondary">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12am |
                <b>Due</b> May 30 at 11:59pm | 100 pts
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsFileEarmarkRichtext className="me-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/2">A2 - CSS + BOOTSTRAP</a>
              <LessonControlButtons />
              <div className="ms-4 ps-2 text-secondary">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12am |
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <BsFileEarmarkRichtext className="me-3" />
              <a href="#/Kambaz/Courses/1234/Assignments/3">A3 - JAVASCRIPT + REACT</a>
              <LessonControlButtons />
              <div className="ms-4 ps-2 text-secondary">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12am |
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
