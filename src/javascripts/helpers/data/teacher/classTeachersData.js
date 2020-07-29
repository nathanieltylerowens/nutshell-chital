import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getClassTeachers = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classTeachers.json`)
    .then((response) => {
      const classTeachersObjects = response.data;
      const classTeachers = [];
      Object.keys(classTeachersObjects).forEach((classTeachersId) => {
        classTeachersObjects[classTeachersId].id = classTeachersId;

        classTeachers.push(classTeachersObjects[classTeachersId]);
      });
      resolve(classTeachers);
    })
    .catch((err) => reject(err));
});

const getClassTeachersByTeacherId = (teacherId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classTeachers.json?orderBy="teachersId"&equalTo="${teacherId}"`)
    .then((response) => {
      const classTeacherObj = response.data;
      const classTeachers = [];
      Object.keys(classTeacherObj).forEach((classTeachersId) => {
        classTeacherObj[classTeachersId].id = classTeachersId;
        classTeachers.push(classTeacherObj[classTeachersId]);
      });
      resolve(classTeachers);
    })
    .catch((err) => reject(err));
});

export default { getClassTeachers, getClassTeachersByTeacherId };
