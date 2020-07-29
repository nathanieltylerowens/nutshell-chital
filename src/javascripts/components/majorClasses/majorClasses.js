// Manage the majorClasses join table
import majorClassesData from '../../helpers/data/majorClasses/majorClassesData';

const modifyMajorClasses = (majorId, activeClasses, availableClasses) => {
  if (activeClasses) {
    majorClassesData.getMajorClassesByMajorsId(majorId)
      .then((majorClasses) => {
        const recordsFound = [];
        const recordsNew = [];
        activeClasses.forEach((activeClass) => {
          const search = majorClasses.find(((mc) => mc.classesId === activeClass));
          if (search) {
            recordsFound.push(search);
          } else {
            const newRecord = {
              classesId: activeClass,
              majorsId: majorId,
            };
            recordsNew.push(newRecord);
          }
        });
        recordsNew.forEach((record) => {
          majorClassesData.addMajorClasses(record);
        });
      })
      .catch((err) => console.error('Could not getMajorClassesByMajorsId', err));
  }

  if (availableClasses) {
    majorClassesData.getMajorClassesByMajorsId(majorId)
      .then((majorClasses) => {
        availableClasses.forEach((availableClass) => {
          console.error('AvailableClass: ', availableClass);
          const searchMajorClasses = majorClasses.find(((mc) => mc.classesId === availableClass));
          if (searchMajorClasses) {
            majorClassesData.deleteMajorClasses(searchMajorClasses.id);
          }
        });
      })
      .catch((err) => console.error('Could not getMajorClassesByMajorsId', err));
  }
};

export default {
  modifyMajorClasses,
};
