import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getstudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/student.json`)
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

const addstudent = (newstudentObj) => axios.post(`${baseUrl}/student.json`, newstudentObj);

const deletestudent = (studentId) => axios.delete(`${baseUrl}/student/${studentId}.json`);

const getstudentById = (id) => axios.get(`${baseUrl}/student/${id}.json`);

const updatestudent = (id, updatestudentObj) => axios.put(`${baseUrl}/student/${id}.json`, updatestudentObj);

export default {
  addstudent,
  deletestudent,
  getstudents,
  getstudentById,
  updatestudent,
};
