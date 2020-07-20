import axios from 'axios';
import apiKeys from '../../../helpers/apiKeys.json';
import buildClasses from '../buildClasses/buildClasses';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const deleteClass = (classId) => axios.delete(`${baseUrl}/classes/${classId}.json`, classId);

const removeClass = (e) => {
  deleteClass(e.target.closest('.card').id)
    .then(() => {
      buildClasses.buildClasses();
    })
    .catch((err) => console.error('could not delete class', err));
};

export default { removeClass };
