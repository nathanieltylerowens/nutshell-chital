import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/students.json`)
    .then((response) => {
      const studentObjects = response.data;
      const students = [];

      if (studentObjects) {
        Object.keys(studentObjects).forEach((studentId) => {
          studentObjects[studentId].id = studentId;
          students.push(studentObjects[studentId]);
        });
      }

      resolve(students);
    })
    .catch((err) => reject(err));
});

const addStudent = (newStudentObj) => axios.post(`${baseUrl}/students.json`, newStudentObj);

const deleteStudent = (studentId) => axios.delete(`${baseUrl}/students/${studentId}.json`);

const getStudentById = (id) => axios.get(`${baseUrl}/students/${id}.json`);

const updateStudent = (id, updateStudentObj) => axios.put(`${baseUrl}/students/${id}.json`, updateStudentObj);

export default {
  addStudent,
  deleteStudent,
  getStudents,
  getStudentById,
  updateStudent,
};
