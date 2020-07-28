// Manage the classStudents join table
import classStudentsData from '../../helpers/data/classStudents/classStudentsData';

const modifyClassStudents = (studentId, activeClasses, availableClasses) => {
  // if there are activeClasses
  // then we need to check if a record exists for that student/class assignment already
  // if there is, then we don't add it
  if (activeClasses) {
    classStudentsData.getClassStudentsByStudentId(studentId)
      .then((classStudents) => {
        const recordsFound = [];
        const recordsNew = [];
        activeClasses.forEach((activeClass) => {
          const search = classStudents.find(((cs) => cs.classesId === activeClass));
          if (search) {
            recordsFound.push(search);
          } else {
            const newRecord = {
              studentsId: studentId,
              classesId: activeClass,
            };
            recordsNew.push(newRecord);
          }
        });
        recordsNew.forEach((record) => {
          classStudentsData.addClassStudents(record);
        });
      })
      .catch((err) => console.error('Could not getClassStudentsByStudentId', err));
  }

  if (availableClasses) {
    // Check if there are records for this student and class
    // If so, then we need to delete that record to make this class available to the student again
    classStudentsData.getClassStudentsByStudentId(studentId)
      .then((classStudents) => {
        availableClasses.forEach((availableClass) => {
          const searchClassStudents = classStudents.find(((cs) => cs.classesId === availableClass));
          if (searchClassStudents) {
            classStudentsData.deleteClassStudents(searchClassStudents.id);
          }
        });
      })
      .catch((err) => console.error('Could not getClassStudentsByStudentId', err));
  }
};

export default {
  modifyClassStudents,
};
