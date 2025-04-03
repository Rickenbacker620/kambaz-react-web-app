import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
  isFaculty,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  isFaculty: boolean;
}) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      {isFaculty && (
        <FaTrash
          onClick={() => deleteAssignment(assignmentId)}
          className="text-danger me-3"
        />
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
