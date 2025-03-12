const initialState = {
  enrollments: [],
};

const enrollmentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ENROLL_IN_COURSE":
      return {
        ...state,
        enrollments: [...state.enrollments, { user: action.payload.userId, course: action.payload.courseId }],
      };
    case "UNENROLL_FROM_COURSE":
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment) => !(enrollment.user === action.payload.userId && enrollment.course === action.payload.courseId),
        ),
      };
    default:
      return state;
  }
};

export default enrollmentReducer;
