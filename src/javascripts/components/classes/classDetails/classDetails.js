import utils from '../../../helpers/utils';
import smash from '../../../helpers/smash';
import classStudentData from '../../../helpers/data/classStudents/classStudentsData';

import './classDetails.scss';

const showClassInfo = (selectedClass) => {
  $('.infoDiv').removeClass('hide');
  utils.addInfoGrid();
  let domString = '';
  smash.getClassWithDetails(selectedClass)
    .then((singleClass) => {
      domString += `
      <div class="closeButton">
      <i class="fas fa-window-close closeInfo mb-1"></i>
      </div>
      <h5 class="homeH3 mb-0 text-center">${singleClass.name}</h5>
      <p class="text-center text-white"><small>Schedule: ${singleClass.schedule}</small></p>
      <h6 class="detailsHeading">Teacher:</h6>
      <div class="col-12 teacherCont">`;
      singleClass.teachers.forEach((teacher) => {
        domString += `
        <div class="card border-0 rounded-0 bg-light text-dark mb-3 major-card-shadow" id="student1">
        <div class="card-header text-center"><h6>${teacher.name}</h6></div>
        </div>
        `;
      });
      domString += `
      <div id="class-lessons">
      <h6 class="detailsHeading">Lessons:</h6>`;
      singleClass.lessons.forEach((lesson) => {
        domString += `
        <div id="lesson1" class="card lesson rounded-0 text-dark ml-0 mr-0 mt-0 major-card-shadow">
        <div class="lesson-card-body">
        <h6 class="lesson-card-header text-center">${lesson.name}</h6>
        </div>
        </div>
        `;
      });
      domString += `
      </div>
      <div id="class-students">
      <h6 class="detailsHeading">Students:</h6>
      <div class="d-flex flex-wrap">
      `;
      singleClass.students.forEach((student) => {
        if (student.grade === 'A' || student.grade === 'B') {
          domString += `
          <div class="col-4 studentContainer">
          <div class="card border-0 rounded-0 bg-light text-dark mb-3 studentName major-card-shadow"  id="${student.id}" data-className="${singleClass.id}" data-studentname="${student.studentName}">
          <div class="card-header text-center gradehead goodGrade">${student.studentName}</div>
          <div class="card-footer gradefoot"><div class="dropdown">
          <select id="${student.id}" class="ddrp1 ${student.id}2" data-className="${singleClass.id}">
          <option value="${student.grade}">Grade: ${student.grade}</option>

          `;
        } else if (student.grade === 'C' || student.grade === 'D') {
          domString += `
          <div class="col-4 studentContainer">
          <div class="card border-0 rounded-0 bg-light text-dark mb-3 studentName major-card-shadow"  id="${student.id}" data-className="${singleClass.id}" data-studentname="${student.studentName}">
          <div class="card-header text-center gradehead mehGrade">${student.studentName}</div>
          <div class="card-footer gradefoot"><div class="dropdown">
          <select id="${student.id}" class="ddrp1 ${student.id}2" data-className="${singleClass.id}">
          <option value="${student.grade}">Grade: ${student.grade}</option>

          `;
        } else if (student.grade === 'F') {
          domString += `
          <div class="col-4 studentContainer">
          <div class="card border-0 rounded-0 bg-light text-dark mb-3 studentName major-card-shadow"  id="${student.id}" data-className="${singleClass.id}" data-studentname="${student.studentName}">
          <div class="card-header text-center gradehead badGrade">${student.studentName}</div>
          <div class="card-footer gradefoot"><div class="dropdown">
          <select id="${student.id}" class="ddrp1 ${student.id}2" data-className="${singleClass.id}">
          <option value="${student.grade}">Grade: ${student.grade}</option>

          `;
        } else {
          domString += `
          <div class="col-4 studentContainer">
          <div class="card border-0 rounded-0 bg-light text-dark mb-3 studentName major-card-shadow"  id="${student.id}" data-className="${singleClass.id}" data-studentname="${student.studentName}">
          <div class="card-header text-center gradehead">${student.studentName}</div>
          <div class="card-footer gradefoot"><div class="dropdown">
          <select id="${student.id}" class="ddrp1 ${student.id}2" data-className="${singleClass.id}">
          <option value="${student.grade}">Grade: ${student.grade}</option>
          `;
        }
        domString += `
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="F">F</option>
        </select>
        </div>
        </div>
        </div>
        </div>
        `;
      });
      domString += `
      </div>
      <div class="gradeDiv"></div>
      </div>
      </div>
      `;
      utils.printToDom('.infoDiv', domString);
    })
    .catch((err) => console.error(err));
};

const showGradeForm = (e) => {
  e.preventDefault();
  const studentId = e.target.id;
  const classId = e.target.dataset.classname;
  classStudentData.getClassStudentsByStudentId(studentId)
    .then((classStudent) => {
      const classs = classStudent.find((c) => c.classesId === classId);
      const newClassStudentObj = {
        classesId: classs.classesId,
        studentsId: classs.studentsId,
        studentGrade: $(`.${studentId}2`).val(),
      };
      const studentClassId = classs.id;
      classStudentData.updateClassStudent(studentClassId, newClassStudentObj)
        .then(() => {
          showClassInfo(classId);
        });
    })
    .catch((err) => console.error(err));
};

const showClassEvent = (e) => {
  const selectedClass = e.target.closest('.card').id;
  showClassInfo(selectedClass);
};

export default {
  showClassInfo,
  showGradeForm,
  showClassEvent,
};
