import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const deleteEnrollment = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${ENROLLMENTS_API}/users/${userId}/courses/${courseId}`);
    return response.data; 
};
export const createEnrollment = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENTS_API}/users/${userId}/courses/${courseId}`);
    return response.data;
};
export const getEnrollments = async () => {
    const response = await axios.get(ENROLLMENTS_API);
    return response.data;
}; 
