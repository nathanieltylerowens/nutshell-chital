import axios from 'axios';
import apiKeys from '../../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getTeachersByClassId = (classId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/classTeachers.json?orderBy="classesId"&equalTo="${classId}"`)
});

export default { getTecherClassByTeacherId };
