import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enrollInCourse: (state, action) => {
      const next_id = state.enrollments.length + 1;
      const new_enrollment = { user: action.payload.user, course: action.payload.course, _id: next_id.toString() };
      state.enrollments = [...state.enrollments, new_enrollment];
    },
    unenrollFromCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === action.payload.user && enrollment.course === action.payload.course),
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
