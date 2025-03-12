import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons({
  deleteLesson,
}: {
  deleteLesson: () => void;
}) {
  return (
    <div className="float-end d-flex align-items-center" style={{ paddingTop: "2px" }}>
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteLesson()} />
      <div style={{ marginTop: "-2px" }}>
        <GreenCheckmark />
      </div>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
