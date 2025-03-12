import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignments.assignments);
  const existingAssignment = assignments.find((a) => a._id === assignmentId);

  const [title, setTitle] = useState(existingAssignment ? existingAssignment.title : "");
  const [description, setDescription] = useState(existingAssignment ? existingAssignment.description : "");
  const [points, setPoints] = useState(existingAssignment ? existingAssignment.points : 0);
  const [dueDate, setDueDate] = useState(existingAssignment ? existingAssignment.dueDate : "");
  const [availableFrom, setAvailableFrom] = useState(existingAssignment ? existingAssignment.availableFrom : "");
  const [availableUntil, setAvailableUntil] = useState(existingAssignment ? existingAssignment.availableUntil : "");
  const dispatch = useDispatch();

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(
        updateAssignment({ _id: assignmentId, title, description, points, dueDate, availableFrom, availableUntil }),
      );
    } else {
      dispatch(addAssignment({ title, description, points, dueDate, availableFrom, availableUntil }));
    }
  };

  return (
    <div>
      <h2>Assignment Editor</h2>
      <form>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Points</label>
          <input type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} />
        </div>
        <div>
          <label>Due Date</label>
          <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        </div>
        <div>
          <label>Available From</label>
          <input type="date" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
        </div>
        <div>
          <label>Available Until</label>
          <input type="date" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}
