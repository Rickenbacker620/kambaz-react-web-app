import * as db from "./Database";

export const enrollInCourse = (userId: string, courseId: string) => {
  return (dispatch: any) => {
    db.enrollments.push({ user: userId, course: courseId });
    dispatch({ type: "ENROLL_IN_COURSE", payload: { userId, courseId } });
  };
};

export const unenrollFromCourse = (userId: string, courseId: string) => {
  return (dispatch: any) => {
    const index = db.enrollments.findIndex(
      (enrollment) => enrollment.user === userId && enrollment.course === courseId,
    );
    if (index !== -1) {
      db.enrollments.splice(index, 1);
      dispatch({ type: "UNENROLL_FROM_COURSE", payload: { userId, courseId } });
    }
  };
};
