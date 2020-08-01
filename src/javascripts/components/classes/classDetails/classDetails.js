import utils from '../../../helpers/utils';
import smash from '../../../helpers/smash';
import classStudentData from '../../../helpers/data/classStudents/classStudentsData';
import buildClass from '../buildClasses/buildClasses';

import './classDetails.scss';

const showClassInfo = (e) => {
  const classId = e.target.closest('.card').id;
  $('.infoDiv').removeClass('hide');
  utils.addInfoGrid();
  let domString = '';
  smash.getClassWithDetails(classId)
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
        <div class="card border-0 rounded-0 bg-light tSext-dark mb-3" id="student1">
        <div class="card-header text-center">${teacher.name}</div>
        </div>
        `;
      });
      domString += `
      <div id="class-lessons">
      <h6 class="detailsHeading">Lessons:</h6>`;
      singleClass.lessons.forEach((lesson) => {
        domString += `
        <div id="lesson1" class="card lesson text-dark ml-0 mr-0 mt-0">
        <div class="lesson-card-body">
        <h6 class="lesson-card-header">${lesson.name}</h6>
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
        domString += `
        <div class="col-4 studentContainer">
        <div class="card border-0 rounded-0 bg-light text-dark mb-3 studentName">
        <div class="card-header text-center"  id="${student.id}" data-className="${singleClass.id}">${student.studentName}</div>
        <div class="card-footer">Grade: ${student.grade}</div>
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
  const domString = `
  <div class="gradeFormCont">
  <form>
  <div class="form-group gradeFormText">
    <label for="gradeInput">Grade:</label>
    <input type="text" class="form-control" id="gradeInput" aria-describedby="emailHelp" placeholder="Grade">
  </div>
  <button class="btn btn-primary gradeSubmitbtn" data-studentid="${studentId}" data-classid="${classId}">Submit</button>
</form>
</div>
  `;
  utils.printToDom('.gradeDiv', domString);
};

const assignGrade = (e) => {
  const studentId = e.target.dataset.studentid;
  const classId = e.target.dataset.classid;
  classStudentData.getClassStudentsByStudentId(studentId)
    .then((classStudent) => {
      const classs = classStudent.find((c) => c.classesId === classId);
      const newClassStudentObj = {
        classesId: classs.classesId,
        studentsId: classs.studentsId,
        studentGrade: $('#gradeInput').val(),
      };
      const studentClassId = classs.id;
      classStudentData.updateClassStudent(studentClassId, newClassStudentObj)
        .then(() => {
          buildClass.buildClassModule();
        });
    })
    .catch((err) => console.error(err));
};

export default {
  showClassInfo,
  assignGrade,
  showGradeForm,
};
