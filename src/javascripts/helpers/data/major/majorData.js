import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMajors = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/majors.json`)
    .then((response) => {
      const majorObjects = response.data;
      const majors = [];

      if (majorObjects) {
        Object.keys(majorObjects).forEach((majorId) => {
          majorObjects[majorId].id = majorId;
          majors.push(majorObjects[majorId]);
        });
      }

      resolve(majors);
    })
    .catch((err) => reject(err));
});

const addMajor = (newMajorObj) => axios.post(`${baseUrl}/majors.json`, newMajorObj);

const deleteMajor = (majorId) => axios.delete(`${baseUrl}/majors/${majorId}.json`);

const getMajorById = (id) => axios.get(`${baseUrl}/majors/${id}.json`);

const updateMajor = (id, updateMajorObj) => axios.put(`${baseUrl}/majors/${id}.json`, updateMajorObj);

export default {
  addMajor,
  deleteMajor,
  getMajors,
  getMajorById,
  updateMajor,
};
