import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getLessonbyClass = (classId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classLessons.json?orderBy="classesId"&equalTo="${classId}"`)
    .then((response) => {
      const lessonClass = response.data;

      console.error(lessonClass);
    })
    .catch((err) => reject(err));
});

export default { getLessonbyClass };
