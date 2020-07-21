import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseUrl;

const getLessonData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/lessons.json`)
    .then((response) => {
      const lessonObjects = response.data;
      const lessons = [];
      if (lessonObjects) {
        Object.keys(lessonObjects).forEach((lessonId) => {
          lessonObjects[lessonId].id = lessonId;
          lessons.push(lessonObjects[lessonId]);
        });
      }
      resolve(lessons);
    })
    .catch((err) => reject(err));
});

const deleteLesson = (lessonId) => axios.delete(`${baseUrl}/lessons/${lessonId}.json`);

const addLesson = (newLessonObj) => axios.post(`${baseUrl}/lessons.json`, newLessonObj);

const getLessonById = (lessonId) => axios.get(`${baseUrl}/lessons/${lessonId}.json`);

// const updateLesson = (lessonId, editedVisitor) => axios.put(`${baseUrl}/lessons/${lessonId}.json`, editedVisitor);

export default {
  getLessonData,
  deleteLesson,
  addLesson,
  getLessonById,
  // updateLesson,
};