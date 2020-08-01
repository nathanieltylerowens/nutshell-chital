import classData from './data/classesData';
import studentClassData from './data/classStudents/classStudentsData';
import studentData from './data/student/studentData';
import teacherClassData from './data/teacher/classTeachersData';
import teacherData from './data/teacher/teacherData';
import lessonData from './data/lessonData';
import majorData from './data/major/majorData';
import majorClassesData from './data/majorClasses/majorClassesData';

const getMajorWithClassLessonsDetails = (majorId) => new Promise((resolve, reject) => {
  majorData.getMajorById(majorId)
    .then((response) => {
      const selectedMajor = response.data;
      selectedMajor.id = majorId;
      selectedMajor.classes = [];

      majorClassesData.getMajorClassesByMajorsId(majorId)
        .then((majorClasses) => {
          classData.getClasses()
            .then((allClasses) => {
              majorClasses.forEach((majorClass) => {
                const majClass = allClasses.find((m) => m.id === majorClass.classesId);
                selectedMajor.classes.push(majClass);
              });
              console.error('slectedMajor: ', selectedMajor);
              //   lessonData.getClassLessonsByClassId(majClass.id)
              //     .then((classLessons) => {
              //       // majClass.lessons = classLessons;
              //       // console.error('majClass: ', JSON.stringify(majClass), 'classLessons: ', JSON.stringify(classLessons));
              //       // selectedMajor.classes.push(majClass);
              //       // console.error(selectedMajor.classes.find((cl) => cl.id === classLessons.id));
              //       resolve(selectedMajor);
              //     });
              // });
              resolve(selectedMajor);
            });
        });
    })
    .catch((err) => reject(err));
});

// const test2 = {
//   name: 'majorName',
//   id: 'majorId',
//   classes: [{
//     name: 'className1',
//     schedule: 'schedule',
//     lessons: [{
//       name: 'lessonName',
//       hours: 6,
//     }, {
//       name: 'lessonName2',
//       hours: 7,
//     }],
//   }],
// };

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

export default {
  getClassWithDetails,
  getMajorWithClassLessonsDetails,
};
