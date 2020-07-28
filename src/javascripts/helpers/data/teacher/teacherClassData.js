import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTecherClassByTeacherId = (teacherId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classTeachers.json?orderBy="teachersId"&equalTo="${teacherId}"`)
    .then((response) => {
      const teacherClass = response.data;
      resolve(teacherClass);
    })
    .catch((err) => reject(err));
});

export default { getTecherClassByTeacherId };
