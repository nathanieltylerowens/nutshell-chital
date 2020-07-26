import '../lessons.scss';
import authData from '../../../helpers/data/authData';
import lessonData from '../../../helpers/data/lessonData';
import utils from '../../../helpers/utils';

const printLessons = () => {
  utils.clearGridClasses();
  lessonData.getLessonData()
    .then((lessons) => {
      let domString = `
      <div id="lesson-div">
        <h2 class="text-center homeH3">Lessons<h2>`;

      if (authData.isAuthenticated()) {
        domString += `
          <div id="new-lesson">
            <button class="btn btn-primary" id="add-lesson-form"><i class="fas fa-plus"></i>New Lesson</button>
          </div>
          `;
      } else {
        domString += `
          <div class="hide" id="new-lesson">
            <button class="btn btn-primary hide" id="add-lesson-form"><i class="fas fa-plus"></i> New Lesson</button>
          </div>
          `;
      }
      domString += `
          <div id="new-lesson-form"></div>
          <div class="d-flex flex-wrap lesson-container">
          `;
      lessons.forEach((lesson) => {
        domString += `
          <div id="${lesson.id}" class="card lesson" style="width: 18rem;">
            <div class="lesson-card-body">
              <h4 class="lesson-card-title">${lesson.name}</h4>
              <p class="hours">Length: ${lesson.hours}</p>
              <p class="materials">Materials Provided: "${lesson.materialsProvided}"</p>`;
        if (authData.isAuthenticated()) {
          domString += `
            <div class="lesson-card-buttons">
              <a href="#" class="btn btn-warning update-lesson" id="update-lesson">Edit</a>
              <a href="#" class="btn btn-danger remove-lesson" id="remove-lesson">Delete</a>
            </div>  
              `;
        } else {
          domString += `
        <a href="#" class="btn btn-primary hide" id="update-lesson"><i class="fas fa-edit"></i></a>
        <a href="#" class="btn btn-danger hide" id="remove-lesson"><i class="fas fa-trash"></i></a>
        `;
        }
        domString += `
            </div>
          </div>`;
      });
      domString += `
        </div>
      </div>
       `;
      utils.printToDom('#content', domString);
    })
    .catch((err) => console.error('display lessons broke', err));
};

export default { printLessons };
