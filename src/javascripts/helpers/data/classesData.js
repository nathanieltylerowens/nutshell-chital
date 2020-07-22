import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getClasses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classes.json`)
    .then((response) => {
      const classObjects = response.data;
      const classes = [];
      if (classObjects) {
        Object.keys(classObjects).forEach((classId) => {
          classObjects[classId].id = classId;
          classes.push(classObjects[classId]);
        });
      }
      resolve(classes);
    })
    .catch((err) => reject(err));
});

const deleteClass = (classId) => axios.delete(`${baseUrl}/classes/${classId}.json`);

const updateClass = (classId, updatedClass) => axios.put(`${baseUrl}/classes/${classId}.json`, updatedClass);

const addNewClass = (newClassObj) => axios.post(`${baseUrl}/classes.json`, newClassObj);

export default {
  getClasses,
  deleteClass,
  updateClass,
  addNewClass,
};
