import axios from "axios";

const API_URL = "http://localhost:3001/students";

export const getAllStudent = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    return [];
  }
};

export const getStudentById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Không tìm thấy sinh viên với id = ${id}`);
    return null;
  }
};

export const createStudent = async (student: any) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    return null;
  }
};

export const updateStudent = async (id: number, student: any) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, student);
    return response.data;
  } catch (error) {
    console.error("Error updating student:", error);
    return null;
  }
};

export const deleteStudent = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error deleting student:", error);
    return false;
  }
};
