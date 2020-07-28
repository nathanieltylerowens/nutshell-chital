import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// add classStudents (C)
const addClassStudents = (newClassStudentsObj) => axios.post(`${baseUrl}/classStudents.json`, newClassStudentsObj);

// get classStudents (R)
const getClassStudents = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classStudents.json`)
    .then((response) => {
      const classStudentsObjects = response.data;
      const classStudents = [];
      Object.keys(classStudentsObjects).forEach((classStudentsId) => {
        classStudentsObjects[classStudentsId].id = classStudentsId;

        classStudents.push(classStudentsObjects[classStudentsId]);
      });
      resolve(classStudents);
    })
    .catch((err) => reject(err));
});

// get classStudentsByStudentId
const getClassStudentsByStudentId = (studentId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classStudents.json?orderBy="studentsId"&equalTo="${studentId}"`)
    .then((response) => {
      const classStudentsObj = response.data;
      const classStudents = [];
      Object.keys(classStudentsObj).forEach((classStudentsId) => {
        classStudentsObj[classStudentsId].id = classStudentsId;
        classStudents.push(classStudentsObj[classStudentsId]);
      });
      resolve(classStudents);
    })
    .catch((err) => reject(err));
});

// get classStudentsByClassId (maybe not needed yet?)

// update classStudents (U)

// delete classStudents (D)

export default {
  addClassStudents,
  getClassStudents,
  getClassStudentsByStudentId,
};
