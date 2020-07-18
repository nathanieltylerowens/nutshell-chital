/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */
import lessonData from '../../helpers/data/lessonsData';
import utils from '../../helpers/utils';
import lessonsMakers from './lessonMaker';

const lessonMaker = () => {
  lessonData.getLessons()
    .then((lessons) => {
      lessons.forEach((lesson) => {
        const domString = lessonsMakers.lessonBuilder(lesson);
        utils.printToDom('#lessons-container', domString);
      });
    })
    .catch((err) => console.error('get lessons broke *sad panda*', err));
};

export default { lessonMaker };
