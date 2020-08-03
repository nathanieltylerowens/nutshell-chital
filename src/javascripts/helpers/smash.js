import classData from './data/classesData';
import studentClassData from './data/classStudents/classStudentsData';
import studentData from './data/student/studentData';
import teacherClassData from './data/teacher/classTeachersData';
import teacherData from './data/teacher/teacherData';
import lessonData from './data/lesson/lessonData';
import majorData from './data/major/majorData';
import majorClassesData from './data/majorClasses/majorClassesData';

const getMajorWithClassLessonsDetails = (majorId) => new Promise((resolve, reject) => {
  let selectedMajor = {};
  majorData.getMajorById(majorId)
    .then((response) => {
      selectedMajor = response.data;
      selectedMajor.id = majorId;

      // The result returned from getting the class datails for the major
      return majorClassesData.getMajorClassesByMajorsId(majorId).then((majorClasses) => {
        const classDetailsPromises = [];
        majorClasses.forEach((majorClass) => {
          // Push promises onto array
          // eslint-disable-next-line no-use-before-define
          classDetailsPromises.push(getClassWithDetails(majorClass.classesId));
        });

        // Call 'Promise.all()' with the promises array which "resolves to an array of the results of the input promises"
        //   --only-- when all of the input's promises have resolved (or no promises).
        //
        // Then return those results back to the original promise (getMajorClassesByMajorsId)
        return Promise.all(classDetailsPromises);
      });
    })

    // This chains off the getMajorById first '.then' call, which is the list of class details
    // we then add those class details to the selectedMajor object and resolve now that we have all class
    // details in the major object
    .then((majorClassDetails) => {
      selectedMajor.classes = majorClassDetails;
      resolve(selectedMajor);
    })
    .catch((err) => reject(err));
});

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
            const grade = classStudent.studentGrade;
            const student = allStudents.find((s) => s.id === classStudent.studentsId);
            if (grade) {
              student.grade = grade;
            } else {
              student.grade = 'No Grade';
            }
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
