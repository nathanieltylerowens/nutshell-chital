import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getLessons = () => new Promise((reject, resolve) => {
  axios.get(`${baseUrl}/lessons.json`)
    .then((response) => {
      const lessonsObjects = response.data;
      const lessons = [];
      if (lessonsObjects) {
        Object.keys(lessonsObjects).forEach((lessonId) => {
          lessonsObjects[lessonId].id = lessonId;
          lessons.push(lessonsObjects[lessonId]);
        });
      }
      resolve(lessons);
    })
    .catch((err) => reject(err));
});

export default { getLessons };
