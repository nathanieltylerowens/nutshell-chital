import utils from '../../../helpers/utils';

const getClasses = () => utils.readData('classes');

const buildClasses = () => {
  getClasses()
    .then((classes) => {
      console.warn('it works', classes);
    })
    .catch((err) => console.error('error retrieving class list', err));
};

export default { buildClasses };
