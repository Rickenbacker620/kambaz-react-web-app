import { ListGroup } from "react-bootstrap";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { AiOutlineForm } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { useEffect } from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};
export default function Assignments() {
  const navigate = useNavigate();
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === "FACULTY";
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  return (
    <div id="wd-assignments">
      <AssignmentsControls isFaculty={isFaculty} />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignment p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2" />
              <b>ASSIGNMENTS</b>
            </div>
            <div className="d-flex align-items-center">
              <div className="badge rounded-pill border border-dark text-dark px-3 py-2">
                40% of Total
              </div>
              <AssignmentsControlButtons />
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2" />
                    <AiOutlineForm
                      className="text-success me-2"
                      onClick={() =>
                        navigate(
                          `/Kambaz/Courses/${cid}/Assignments/${assignment._id}`
                        )
                      }
                    />
                    <div className="wd-assigment">
                      {isFaculty ? (
                        <Link
                          to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="text-decoration-none text-dark fw-bold me-2"
                        >
                          {assignment.title}
                        </Link>
                      ) : (
                        <span className="text-dark fw-bold me-2">
                          {assignment.title}
                        </span>
                      )}
                      <br />
                      <span className="text-danger">
                        {assignment.modules}
                      </span>{" "}
                      |<b> Not available until </b>{" "}
                      {formatDate(assignment.available_from_date)} |<b> Due </b>{" "}
                      {formatDate(assignment.available_until_date)} |
                      {assignment.points} pts
                    </div>
                  </div>
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) =>
                      removeAssignment(assignmentId)
                    }
                    isFaculty={isFaculty}
                  />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
