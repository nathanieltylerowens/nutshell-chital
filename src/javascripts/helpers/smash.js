import classData from './data/classesData';
import studentClassData from './data/classStudents/classStudentsData';
import studentData from './data/student/studentData';
import teacherClassData from './data/teacher/classTeachersData';
import teacherData from './data/teacher/teacherData';
import lessonData from './data/lesson/lessonData';

const getClassWithDetails = (classId) => new Promise((resolve, reject) => {
  classData.getClassByClassId(classId)
    .then((response) => {
      const selectedClass = response.data;
      selectedClass.id = classId;
      selectedClass.students = [];
      selectedClass.teachers = [];
      selectedClass.lessons = [];
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
              lessonData.getClassLessonsByClassId(classId).then((classLessons) => {
                lessonData.getLessonData().then((allLessons) => {
                  classLessons.forEach((classLesson) => {
                    const lesson = allLessons.find((l) => l.id === classLesson.lessonsId);
                    selectedClass.lessons.push(lesson);
                  });
                  resolve(selectedClass);
                });
              });
            });
          });
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getClassWithDetails };
