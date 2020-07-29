import classTeachersData from '../../helpers/data/teacher/classTeachersData';

const modifyClassTeachers = (teacherId, activeClasses, availableClasses) => {
  if (activeClasses) {
    classTeachersData.getClassTeachersByTeacherId(teacherId)
      .then((classTeachers) => {
        const recordsFound = [];
        const recordsNew = [];
        activeClasses.forEach((activeClass) => {
          const search = classTeachers.find(((ct) => ct.classesId === activeClass));
          if (search) {
            recordsFound.push(search);
          } else {
            const newRecord = {
              teachersId: teacherId,
              classesId: activeClass,
            };
            recordsNew.push(newRecord);
          }
        });
        recordsNew.forEach((record) => {
          classTeachersData.addClassTeachers(record);
        });
      })
      .catch((err) => console.error('getClassTeachersByTeacherId failed', err));
  }

  if (availableClasses) {
    classTeachersData.getClassTeachersByTeacherId(teacherId)
      .then((classTeachers) => {
        availableClasses.forEach((availableClass) => {
          const searchClassTeachers = classTeachers.find(((ct) => ct.classesId === availableClass));
          if (searchClassTeachers) {
            classTeachersData.deleteClassTeachers(searchClassTeachers.id);
          }
        });
      })
      .catch((err) => console.error('getClassTeachersByTeacherId failed', err));
  }
};

export default { modifyClassTeachers };
