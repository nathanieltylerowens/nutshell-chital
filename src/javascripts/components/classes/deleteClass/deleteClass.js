import axios from 'axios';
import apiKeys from '../../../helpers/apiKeys.json';

import buildClasses from '../buildClasses/buildClasses';
import modButtons from '../../modButtons/modButtons';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const deleteClass = (classId) => axios.delete(`${baseUrl}/classes/${classId}.json`, classId);

const removeClass = (e) => {
  deleteClass(e.target.closest('.card').id)
    .then(() => {
      modButtons.printModButtons();
      buildClasses.buildClasses();
    })
    .catch((err) => console.error('could not delete class', err));
};

export default { removeClass };
