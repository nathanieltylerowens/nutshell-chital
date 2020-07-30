import authData from '../../helpers/data/authData';
import teacherData from '../../helpers/data/teacher/teacherData';
import teacherMaker from './teachers';
import utils from '../../helpers/utils';
import editForm from './editTeacher';

import './teachers.scss';
import multiSelect from '../multiSelect/multiSelect';
import classTeachers from './classTeachers';

const buildTeacherModule = () => {
  utils.clearGridClasses();
  teacherData.getTeachers()
    .then((faculty) => {
      let domString = `
      <div class="formDiv hide"></div>
      <div class="mainModule">
        <h2 class="text-center homeH3 mt-2">Teachers</h2>
      `;

      if (authData.isAuthenticated()) {
        domString += `
        <div class="text-center mb-3"><button type="submit" class="btn btn-primary show-teacher-form">New Hire Form</button></div>
        `;
      } else {
        domString += `
        <div class="text-center mb-3"><button type="submit" class="btn btn-primary show-teacher-form hide">New Hire Form</button></div>
        `;
      }

      domString += '<div class="d-flex flex-wrap teacherLounge">';

      faculty.forEach((teacher) => {
        domString += teacherMaker.TeacherCardMaker(teacher);
      });

      domString += '</div></div>';

      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('buildTeacherModule failed', err));
};

const deleteTeacher = (e) => {
  const teacherId = e.target.closest('.card').id;
  teacherData.deleteTeacher(teacherId)
    .then(() => {
      buildTeacherModule();
    })
    .catch((err) => console.error(err));
};

const addTeacher = (e) => {
  e.preventDefault();

  const newTeacherObj = {
    name: $('#teacher-name').val(),
    imageUrl: $('#teacher-image').val(),
    teacherId: $('#teacher-id').val(),
  };

  teacherData.addTeacher(newTeacherObj)
    .then(() => {
      utils.printToDom('.formDiv', '');
      buildTeacherModule();
    })
    .catch((err) => console.error('addTeacher failed', err));
};

const showEditTeacherForm = (e) => {
  const teacherId = e.target.closest('.card').id;
  teacherData.getTeacherById(teacherId)
    .then((response) => {
      const teacherObj = response.data;
      editForm.buildEditForm(teacherId, teacherObj);
    });
};

const editTeacher = (e) => {
  e.preventDefault();
  const teacherId = e.target.closest('.teacher-updater').id;
  const addedClasses = multiSelect.getSelectedMultiSelect();
  const availableClasses = multiSelect.getAvailableMultiSelect();

  const updateTeacherObj = {
    name: $('#edit-teacher-name').val(),
    imageUrl: $('#edit-teacher-image').val(),
  };

  teacherData.updateTeacher(teacherId, updateTeacherObj)
    .then(() => {
      classTeachers.modifyClassTeachers(teacherId, addedClasses, availableClasses);
    })
    .then(() => {
      buildTeacherModule();
    })
    .catch((err) => console.error('editTeacher failed', err));
};

export default {
  buildTeacherModule,
  deleteTeacher,
  addTeacher,
  showEditTeacherForm,
  editTeacher,
};
