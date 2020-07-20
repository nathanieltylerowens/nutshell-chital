import deleteClass from './deleteClass/deleteClass';

const classEventListeners = () => {
  $('body').on('click', '#delete-class', deleteClass.removeClass);
  /* $('body').on('click', '#submit-class', addClassEvent);
  $('body').on('click', '#edit-class-form', showEditForm);
  $('body').on('click', '#edit-class', updateLesson); */
};

export default { classEventListeners };
