const printToDom = (selector, text) => {
  $(selector).html(text);
};

const gridCheckAdd = () => {
  const content = $('#content');
  if (content.hasClass('oneColumn')) {
    content.removeClass('oneColumn');
    content.addClass('twoColumns');
  } else if (content.hasClass('twoColumns')) {
    content.removeClass('twoColumns');
    content.addClass('threeColumns');
  }
};

const gridCheckDelete = () => {
  const content = $('#content');
  if (content.hasClass('twoColumns')) {
    content.removeClass('twoColumns');
    content.addClass('oneColumn');
  } else if (content.hasClass('threeColumns')) {
    content.removeClass('threeColumns');
    content.addClass('twoColumns');
  }
};

const clearInfoDiv = () => {
  const domString = '';
  printToDom('.infoDiv', domString);
  gridCheckDelete();
};

export default {
  printToDom,
  gridCheckAdd,
  gridCheckDelete,
  clearInfoDiv,
};
