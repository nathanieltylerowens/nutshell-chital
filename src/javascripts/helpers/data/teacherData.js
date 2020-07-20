import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewTeacher = (teacherObject) => axios.post(`${baseUrl}/teacher.json`, teacherObject);

export default { addNewTeacher };
