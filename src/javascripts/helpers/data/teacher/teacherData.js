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

const addTeacher = (newTeacherObj) => axios.post(`${baseUrl}/teachers.json`, newTeacherObj);

const deleteTeacher = (teacherId) => axios.delete(`${baseUrl}/teachers/${teacherId}.json`);

const getTeacherById = (id) => axios.get(`${baseUrl}/teachers/${id}.json`);

const updateTeacher = (id, updateTeacherObj) => axios.put(`${baseUrl}/teachers/${id}.json`, updateTeacherObj);

export default {
  getTeachers,
  addTeacher,
  deleteTeacher,
  getTeacherById,
  updateTeacher,
};
