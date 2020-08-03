// import classData from '../../../helpers/data/classesData';
import buildClasses from '../buildClasses/buildClasses';
import auth from '../../../helpers/data/authData';
import smash from '../../../helpers/smash';

const deleteClass = (e) => {
  if (!auth.isAuthenticated()) return;
  const classId = e.target.closest('.card').id;
  smash.destroyClass(classId)
    .then(() => {
      buildClasses.buildClassModule();
    })
    .catch((err) => err);
};

export default {
  deleteClass,
};
