import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const readData = (file) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${file}.json`)
    .then((response) => {
      const objects = response.data;
      const array = [];
      Object.keys(objects).forEach((objectId) => {
        objects[objectId].id = objectId;
        array.push(objects[objectId]);
      });
      resolve(array);
    })
    .catch((err) => reject(err));
});

const printToDom = (selector, text) => {
  $(selector).html(text);
};

let selectedData = '';

const selector = (selected) => {
  selectedData = selected;
};

const dataSelector = () => selectedData;

export default {
  readData, printToDom, dataSelector, selector,
};
