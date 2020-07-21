import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTeachers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/teachers.json`)
    .then((response) => {
      const teacherObjects = response.data;
      const teachers = [];
      Object.keys(teacherObjects).forEach((employeeId) => {
        teacherObjects[employeeId].id = employeeId;
        teachers.push(teacherObjects[employeeId]);
      });
      resolve(teachers);
    })
    .catch((err) => reject(err));
});

const addStaff = (newStaffObj) => axios.post(`${baseUrl}/Staff.json`, newStaffObj);

const deleteStaff = (employeeId) => axios.delete(`${baseUrl}/Staff/${employeeId}.json`);

const getStaffById = (id) => axios.get(`${baseUrl}/Staff/${id}.json`);

const updateStaff = (id, updateStaffObj) => axios.put(`${baseUrl}/Staff/${id}.json`, updateStaffObj);

export default {
  getTeachers,
  deleteStaff,
  addStaff,
  getStaffById,
  updateStaff,
};
