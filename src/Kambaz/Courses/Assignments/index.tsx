import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button, Modal } from "react-bootstrap";
import { BsFileEarmarkRichtext, BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [, setShowEditor] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  function handleEditAssignment(_id: any): void {
    console.log("Edit assignment", _id);
  }

  function confirmDeleteAssignment(): void {
    dispatch(deleteAssignment(assignmentToDelete));
    setShowDeleteModal(false);
    setAssignmentToDelete(null);
  }

  return (
    <div>
      <AssignmentControls
        setAssignmentName={setAssignmentName}
        assignmentName={assignmentName}
        addAssignment={() => setShowEditor(true)}
      />
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
            {assignments.map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-lesson p-3 ps-1"
                onClick={() => handleEditAssignment(assignment._id)}
              >
                <BsGripVertical className="me-2 fs-3" />
                <BsFileEarmarkRichtext className="me-3" />
                <a href={`#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}`}>{assignment.title}</a>
                <LessonControlButtons deleteLesson={() => dispatch(deleteAssignment(assignment._id))} />
                <div className="ms-4 ps-2 text-secondary">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12am |
                  <b>Due</b> May 30 at 11:59pm | 100 pts
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteAssignment}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
