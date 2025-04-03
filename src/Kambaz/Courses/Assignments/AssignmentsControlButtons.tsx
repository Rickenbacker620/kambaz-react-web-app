import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
export default function AssignmentsControlButtons() {
  const { cid } = useParams();
  const navigate = useNavigate();
  return (
    <div className="float-end">
      <BsPlus className="fs-4" 
      onClick={() =>
        navigate(
          `/Kambaz/Courses/${cid}/Assignments/new`
        )
      }/>
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
