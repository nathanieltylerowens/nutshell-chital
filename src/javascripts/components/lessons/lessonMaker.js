import utils from '../../helpers/utils';

const lessonBuilder = (lesson) => {
  const domString = `
  <div class="card" style="width: 18rem;" id="${lesson.id}>
    <div class="card-body">
    <h5>${lesson.name}</h5>
    <p>${lesson.hours}</p>
    `;
  utils.printToDom('#lessons-container', domString);
};

export default { lessonBuilder };
