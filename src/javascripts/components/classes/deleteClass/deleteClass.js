import classData from '../../../helpers/data/classesData';
import buildClasses from '../buildClasses/buildClasses';
import auth from '../../../helpers/data/authData';

const deleteClass = (e) => {
  if (!auth.isAuthenticated()) return;
  const rideId = e.target.closest('.card').id;
  classData.deleteClass(rideId)
    .then(() => {
      buildClasses.buildClassModule();
    })
    .catch((err) => err);
};

export default {
  deleteClass,
};
