import { Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Nav variant="pills" id="wd-toc">
      <NavItem>
        <NavLink id="wd-a" href="#/Labs">
          Labs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-a1" href="#/Labs/Lab1" className={pathname.includes("Lab1") ? "active" : ""}>
          Lab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-a2" href="#/Labs/Lab2" className={pathname.includes("Lab2") ? "active" : ""}>
          Lab 2
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-a3" href="#/Labs/Lab3" className={pathname.includes("Lab3") ? "active" : ""}>
          Lab 3
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-a3" href="#/Labs/Lab4" className={pathname.includes("Lab4") ? "active" : ""}>
          Lab 4
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-k" href="#/Kambaz">
          Kambaz
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink id="wd-github" href="https://github.com/jannunzi" target="_blank">
          My GitHub
        </NavLink>
      </NavItem>
    </Nav>
  );
}
