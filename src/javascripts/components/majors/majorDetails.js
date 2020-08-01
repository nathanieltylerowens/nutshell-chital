import utils from '../../helpers/utils';
import smash from '../../helpers/smash';

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
      <h5 class="homeH3 mb-0 text-center">${singleMajor.name}</h5>`;

      domString += `
      <div id="major-classes">
      <h6 class="detailsHeading">Classes and Lessons</h6>
      <div class="d-flex flex-wrap">`;

      // console.error('MajorClasses: ', JSON.stringify(singleMajor));
      // console.error('MajorClasses: ', singleMajor);

      singleMajor.classes.forEach((majClass) => {
        domString += `
        <div class="col-6">
          <div id="${majClass.id}" class="card lesson text-dark ml-0 mr-0 mt-0">
            <div class="lesson-card-body">
              <h6 class="lesson-card-header">${majClass.name}</h6>
            </div>
          </div>
        `;

        // majClass.lessons.forEach((lesson) => {
        //   domString += `
        //     <div class="col">
        //       <div class="card lesson text-dark ml-0 mr-0 mt-0">
        //         <div class="card-header text-center">${lesson.name}</div>
        //       </div>
        //     </div>
        //   `;
        // });
        domString += '</div></div>';
      });

      utils.printToDom('.infoDiv', domString);
    })
    .catch((err) => console.error(err));
};

export default {
  showMajorInfo,
};
