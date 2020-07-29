import classData from './data/classesData';
import studentData from './data/classStudents/classStudentsData';
import students from './data/student/studentData';

const getClassWithDetails = (classId) => new Promise((resolve, reject) => {
  classData.getClassByClassId(classId)
    .then((response) => {
      const selectedClass = response.data;
      selectedClass.id = classId;
      selectedClass.students = [];
      studentData.getClassStudentsByClassId(classId).then((classStudents) => {
        students.getStudents().then((allStudents) => {
          classStudents.forEach((classStudent) => {
            const student = allStudents.find((s) => s.id === classStudent.studentsId);
            selectedClass.students.push(student);
          });
          resolve(selectedClass);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getClassWithDetails };
