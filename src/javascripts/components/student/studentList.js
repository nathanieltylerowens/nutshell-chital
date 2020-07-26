import authData from '../../helpers/data/authData';
import studentData from '../../helpers/data/student/studentData';
import studentCardMaker from './student';
import utils from '../../helpers/utils';

const buildAuthRequiredModal = () => {
  const alertModal = `
  <div class="modal" tabindex="-1" role="dialog" id="myModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Authentication Required</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>You must be logged in to perform that action.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;

  return alertModal;
};

const buildStudentList = () => {
  utils.clearGridClasses();
  studentData.getStudents()
    .then((students) => {
      let domString = buildAuthRequiredModal();
      domString += `
      <h2 class="text-center homeH3 mt-3">Clown College Students</h2>`;
      if (authData.isAuthenticated()) {
        domString += `
        <div class="text-center">
          <button class="btn btn-primary" id="add-student">Add/Create a Student<i class="fas fa-plus ml-1"></i></button>
        </div>
        <div id="student-form"></div>
        `;
      } else {
        domString += `
        <div class="text-center"><i class="fas fa-plus-circle fa-2x hide" id="add-student"></i></div>
        <div id="student-form"></div>
        `;
      }
      domString += '<div class="d-flex flex-wrap mt-2">';

      students.forEach((student) => {
        domString += studentCardMaker.studentCardMaker(student);
      });

      domString += '</div>';

      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('buildStudentList failed', err));
};

export default {
  buildStudentList,
};
