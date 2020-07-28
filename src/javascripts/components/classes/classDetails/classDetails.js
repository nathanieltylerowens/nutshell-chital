import utils from '../../../helpers/utils';
import './classDetails.scss';

const showClassInfo = () => {
  $('.infoDiv').removeClass('hide');
  utils.addInfoGrid();
  const domString = `
  <div class="closeButton">
  <i class="fas fa-window-close closeInfo mb-1"></i>
  </div>
  <h5 class="homeH3 mb-0 text-center">Class Name</h5>
  <p class="text-center text-white"><small>Schedule: M W F</small></p>
  <h6 class="detailsHeading">Teacher:</h6>
  <div class="col-12 teacherCont">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Teacher Name</div>
  </div>
  <div id="class-lessons">
  <h6 class="detailsHeading">Lessons:</h6>
  <div id="lesson1" class="card lesson text-dark ml-0 mr-0 mt-0">
  <div class="lesson-card-body">
  <h6 class="lesson-card-title">Face creating 101</h6>
  </div>
  </div>
  <div id="lesson2" class="card lesson text-dark ml-0 mr-0">
  <div class="lesson-card-body">
  <h6 class="lesson-card-title">Face creating 102</h6>
  </div>
  </div>
  <div id="lesson3" class="card lesson text-dark ml-0 mr-0">
  <div class="lesson-card-body">
  <h6 class="lesson-card-title">Face creating 103</h6>
  </div>
  </div>
  </div>
  <div id="class-students">
  <h6 class="detailsHeading">Students:</h6>
  <div class="d-flex flex-wrap">
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Amelia Butler</div>
  </div>
  </div>
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Delores Johnson</div>
  </div>
  </div><div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Harvey Michaels</div>
  </div>
  </div>
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Boris Vhycoff</div>
  </div>
  </div><div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Robert Jordan</div>
  </div>
  </div>
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Austin Thomas</div>
  </div>
  </div>
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">Gregory Buchanan</div>
  </div>
  </div>
  <div class="col-4 studentContainer">
  <div class="card border-0 rounded-0 bg-light text-dark mb-3" id="student1">
  <div class="card-header text-center">David Smith</div>
  </div>
  </div>
  </div>
  </div>
  </div>
  `;
  utils.printToDom('.infoDiv', domString);
};

export default {
  showClassInfo,
};
