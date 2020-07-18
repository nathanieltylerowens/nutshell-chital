/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
import utils from '../../helpers/utils';
import lessonsMakers from './lessonMaker';

const getLessons = () => utils.readData('lessons');

const lessonMaker = () => {
  getLessons()
    .then((lessons) => {
      let domString = '';
      lessons.forEach((lesson) => {
        domString += lessonsMakers.lessonBuilder(lesson);
      });
      utils.printToDom('#cards-container', domString);
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

export default { lessonMaker };
