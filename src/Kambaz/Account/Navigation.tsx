import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("Signin") && (
        <Link
          to="/Kambaz/Account/Signin"
          id="wd-course-home-link"
          className={`list-group-item ${pathname === "/Kambaz/Account/Signin" ? "active" : ""} border border-0`}
        >
          Signin
        </Link>
      )}
      {links.includes("Signup") && (
        <Link
          to="/Kambaz/Account/Signup"
          id="wd-course-modules-link"
          className={`list-group-item text-danger ${pathname === "/Kambaz/Account/Signup" ? "active" : ""} border border-0`}
        >
          Signup
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to="/Kambaz/Account/Profile"
          id="wd-course-piazza-link"
          className={`list-group-item text-danger ${pathname === "/Kambaz/Account/Profile" ? "active" : ""} border border-0`}
        >
          Profile
        </Link>
      )}
    </div>
  );
}
