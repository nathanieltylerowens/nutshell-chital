// Manage the classStudents join table
import classStudentsData from '../../helpers/data/classStudents/classStudentsData';

const modifyClassStudents = (studentId, addedClasses) => {
  // if there are addedClasses
  // then we need to check if a record exists for that student/class assignment already
  // if there is, then we don't add it
  if (addedClasses) {
    classStudentsData.getClassStudentsByStudentId(studentId)
      .then((classStudents) => {
        const recordsFound = [];
        const recordsNew = [];
        addedClasses.forEach((addedClass) => {
          console.error('AddedClass: ', addedClass);
          const search = classStudents.find(((cs) => cs.classesId === addedClass));
          if (search) {
            recordsFound.push(search);
          } else {
            const newRecord = {
              studentsId: studentId,
              classesId: addedClass,
            };
            recordsNew.push(newRecord);
          }
        });
        console.error('Records Found: ', recordsFound);
        console.error('NEW Records Found: ', recordsNew);
        recordsNew.forEach((record) => {
          classStudentsData.addClassStudents(record);
        });
      })
      .catch((err) => console.error('Could not getClassStudentsByStudentId', err));
  }
};

export default {
  modifyClassStudents,
};
