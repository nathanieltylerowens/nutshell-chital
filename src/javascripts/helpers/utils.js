const printToDom = (selector, text) => {
  $(selector).html(text);
};

const addFormGrid = () => {
  const content = $('#content');
  if (content.hasClass('twoColumnsDetails')) {
    content.removeClass('twoColumnsDetails');
    content.addClass('threeColumns');
  } else {
    content.addClass('twoColumnsForm');
  }
};

const addInfoGrid = () => {
  const content = $('#content');
  if (content.hasClass('twoColumnsForm')) {
    content.removeClass('twoColumnsForm');
    content.addClass('threeColumns');
  } else {
    content.addClass('twoColumnsDetails');
  }
};

const clearInfoDiv = () => {
  $('.infoDiv').addClass('hide');
  const content = $('#content');
  const domString = '';
  printToDom('.infoDiv', domString);
  if (content.hasClass('threeColumns')) {
    content.removeClass('threeColumns');
    content.addClass('twoColumnsForm');
  } else {
    content.removeClass();
  }
};

const clearFormDiv = () => {
  $('.show-teacher-form').removeClass('hide');
  $('.createClassBtn').removeClass('hide');
  $('.formDiv').addClass('hide');
  const content = $('#content');
  const domString = '';
  printToDom('.formDiv', domString);
  if (content.hasClass('threeColumns')) {
    content.removeClass('threeColumns');
    content.addClass('twoColumnsDetails');
  } else {
    content.removeClass();
  }
};

const clearGridClasses = () => $('#content').removeClass();

const clearGradeForm = () => {
  const domString = '';
  printToDom('.gradeDiv', domString);
};

export default {
  printToDom,
  addFormGrid,
  addInfoGrid,
  clearInfoDiv,
  clearFormDiv,
  clearGridClasses,
  clearGradeForm,
};
