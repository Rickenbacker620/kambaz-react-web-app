import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button, Form, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "./Enrollment/reducer";
import { useState } from "react";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleEnrollToggle = (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) {
      dispatch(unenrollFromCourse({ user: currentUser._id, course: courseId }));
    } else {
      dispatch(enrollInCourse({ user: currentUser._id, course: courseId }));
    }
  };

  const isStudent = currentUser.role === "STUDENT";

  return (
    <Container id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {isStudent && (
        <Button
          variant="primary"
          className="float-end"
          id="wd-toggle-enrollments"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "My Enrollments" : "All Courses"}
        </Button>
      )}
      {!isStudent && (
        <>
          <h5>
            New Course
            <Button variant="primary" className="float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
              Add
            </Button>
            <Button variant="warning" className="float-end me-2" onClick={updateCourse} id="wd-update-course-click">
              Update
            </Button>
          </h5>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                value={course.name}
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Course Description</Form.Label>
              <Form.Control
                as="textarea"
                value={course.description}
                onChange={(e) => setCourse({ ...course, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </>
      )}
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) => enrollment.user === currentUser._id && enrollment.course === course._id,
            );
            return (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={isEnrolled ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      if (!isEnrolled) {
                        e.preventDefault();
                        navigate("/Kambaz/Dashboard");
                      }
                    }}
                  >
                    <Card.Img variant="top" src={course.image || "/images/reactjs.jpg"} height={160} />
                    <Card.Body>
                      <Card.Title className="wd-dashboard-course-title">{course.name}</Card.Title>
                      <Card.Text className="wd-dashboard-course-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </Card.Text>
                      {isStudent && (
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnrollToggle(course._id, isEnrolled);
                          }}
                          className="float-end"
                          id={isEnrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"}
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                      {!isStudent && (
                        <>
                          <Button variant="primary">Go</Button>
                          <Button
                            variant="warning"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="me-2 float-end"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}
