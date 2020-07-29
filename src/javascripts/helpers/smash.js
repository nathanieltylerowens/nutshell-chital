import classData from './data/classesData';
import studentClassData from './data/classStudents/classStudentsData';
import studentData from './data/student/studentData';
import teacherClassData from './data/teacher/classTeachersData';
import teacherData from './data/teacher/teacherData';

const getClassWithDetails = (classId) => new Promise((resolve, reject) => {
  classData.getClassByClassId(classId)
    .then((response) => {
      const selectedClass = response.data;
      selectedClass.id = classId;
      selectedClass.students = [];
      selectedClass.teachers = [];
      studentClassData.getClassStudentsByClassId(classId).then((classStudents) => {
        studentData.getStudents().then((allStudents) => {
          classStudents.forEach((classStudent) => {
            const student = allStudents.find((s) => s.id === classStudent.studentsId);
            selectedClass.students.push(student);
          });
          teacherClassData.getClassTeachersByClassId(classId).then((classTeachers) => {
            teacherData.getTeachers().then((allTeachers) => {
              classTeachers.forEach((classTeacher) => {
                const teacher = allTeachers.find((t) => t.id === classTeacher.teachersId);
                selectedClass.teachers.push(teacher);
              });
              resolve(selectedClass);
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getClassWithDetails };
