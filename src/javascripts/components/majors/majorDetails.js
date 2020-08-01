import utils from '../../helpers/utils';
import smash from '../../helpers/smash';

import './majorDetails.scss';

const showMajorInfo = (e) => {
  const majorId = e.target.closest('.card').id;
  $('.infoDiv').removeClass('hide');
  utils.addInfoGrid();
  let domString = '';
  smash.getMajorWithClassLessonsDetails(majorId)
    .then((singleMajor) => {
      domString += `
      <div class="closeButton">
      <i class="fas fa-window-close closeInfo mb-1"></i>
      </div>
      <h3 class="homeH3 mb-0 text-center">${singleMajor.name}</h3>`;

      domString += `
      <div id="major-classes">
      <h6 class="detailsHeading text-center mt-4">Classes and Lessons</h6>
      <div class="d-flex flex-wrap">`;

      singleMajor.classes.forEach((majClass) => {
        domString += `
        <div class="col-12 col-xl-6 bg-major-class">
          <div id="${majClass.id}" class="card lesson bg-success text-light ml-1 mr-1 mt-3">
            <div class="">
              <h6 class="text-center text-shadow-2 m-auto">${majClass.name}</h6>
            </div>
          </div>
          <div class="d-flex flex-wrap">
        `;

        majClass.lessons.forEach((lesson) => {
          domString += `
            <div class="col col-xs-12 col-xl-12">
              <div class="card border-0 rounded-0 bg-info text-light mb-3">
                <div class="card-header text-center text-shadow-1">${lesson.name}</div>
              </div>
            </div>
          `;
        });
        domString += '</div></div>';
      });
      domString += '</div>';

      utils.printToDom('.infoDiv', domString);
    })
    .catch((err) => console.error(err));
};

export default {
  showMajorInfo,
};
