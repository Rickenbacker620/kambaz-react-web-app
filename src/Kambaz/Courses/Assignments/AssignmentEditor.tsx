import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export default function AssignmentEditor({
  show,
  handleClose,
  dialogTitle,
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  assignmentName: string;
  setAssignmentName: (name: string) => void;
  addAssignment: () => void;
}) {
  const [formData, setFormData] = useState({
    name: assignmentName,
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddAssignment = () => {
    setAssignmentName(formData.name);
    addAssignment();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{dialogTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control mb-2"
          name="name"
          value={formData.name}
          placeholder="Assignment Name"
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="points"
          type="number"
          value={formData.points}
          placeholder="Points"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          placeholder="Due Date"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="availableFrom"
          type="date"
          value={formData.availableFrom}
          placeholder="Available From"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="availableUntil"
          type="date"
          value={formData.availableUntil}
          placeholder="Available Until"
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleAddAssignment}>
          Add Assignment
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
