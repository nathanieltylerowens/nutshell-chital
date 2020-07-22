import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTeachers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/teachers.json`)
    .then((response) => {
      const teacherObjects = response.data;
      const teachers = [];
      Object.keys(teacherObjects).forEach((teacherId) => {
        teacherObjects[teacherId].id = teacherId;
        teachers.push(teacherObjects[teacherId]);
      });
      resolve(teachers);
    })
    .catch((err) => reject(err));
});

const addStaff = (newStaffObj) => axios.post(`${baseUrl}/Staff.json`, newStaffObj);

const deleteStaff = (teacherId) => axios.delete(`${baseUrl}/Staff/${teacherId}.json`);

const getStaffById = (id) => axios.get(`${baseUrl}/Staff/${id}.json`);

const updateStaff = (id, updateStaffObj) => axios.put(`${baseUrl}/Staff/${id}.json`, updateStaffObj);

export default {
  getTeachers,
  deleteStaff,
  addStaff,
  getStaffById,
  updateStaff,
};
