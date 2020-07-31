import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getClassLessons = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classLessons.json`)
    .then((response) => {
      const classLessonsObjects = response.data;
      const classLessons = [];
      Object.keys(classLessonsObjects).forEach((classLessonsId) => {
        classLessonsObjects[classLessonsId].id = classLessonsId;

        classLessons.push(classLessonsObjects[classLessonsId]);
      });
      resolve(classLessons);
    })
    .catch((err) => reject(err));
});

const getClassByLesson = (lessonId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classLessons.json?orderBy="lessonsId"&equalTo="${lessonId}"`)
    .then((response) => {
      const classLessonsObj = response.data;
      const classLessons = [];
      Object.keys(classLessonsObj).forEach((classLessonsId) => {
        classLessonsObj[classLessonsId].id = classLessonsId;
        classLessons.push(classLessonsObj[classLessonsId]);
      });
      resolve(classLessons);
    })
    .catch((err) => reject(err));
});

const deleteClassLessons = (classLessonsId) => axios.delete(`${baseUrl}/classLessons/${classLessonsId}.json`);

export default {
  getClassByLesson,
  getClassLessons,
  deleteClassLessons,
};
