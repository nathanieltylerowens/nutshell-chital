import classData from '../../../helpers/data/classesData';
import buildClasses from '../buildClasses/buildClasses';
import auth from '../../../helpers/data/authData';

const deleteClass = (e) => {
  if (!auth.isAuthenticated()) return;
  const classId = e.target.closest('.card').id;
  classData.deleteClass(classId)
    .then(() => {
      buildClasses.buildClassModule();
    })
    .catch((err) => err);
};

export default {
  deleteClass,
};
