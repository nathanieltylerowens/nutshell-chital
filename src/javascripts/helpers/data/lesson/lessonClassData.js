import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getClassByLesson = (lessonId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classLessons.json?orderBy="lessonsId"&equalTo="${lessonId}"`)
    .then((response) => {
      const classLessonsObj = response.data;

      resolve(classLessonsObj);
    })
    .catch((err) => reject(err));
});

export default { getClassByLesson };
