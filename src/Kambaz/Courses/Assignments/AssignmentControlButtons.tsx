import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end d-flex align-items-center" style={{ paddingTop: "2px" }}>
            <div className="border border-dark rounded p-1">
                40% of Total
            </div>
            <BsPlus className="fs-4 mx-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
