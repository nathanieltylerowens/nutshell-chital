import lesson from '../displayLessons/lesson';
import lessonData from '../../../helpers/data/lessonData';
import auth from '../../../helpers/data/authData';

const deleteLesson = (e) => {
  if (!auth.isAuthenticated()) return;
  const lessonCardId = (e.target.closest('.card').id);
  lessonData.deleteLesson(lessonCardId)
    .then(() => {
      lesson.printLessons(e.target.id);
    })
    .catch((err) => console.error('delete lesson broke', err));
};

export default { deleteLesson };
