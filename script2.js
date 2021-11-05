document.querySelectorAll('.accordian__button').forEach(button => {
    button.addEventListener('click', () => {
      // const accordian__content = button.nextElementSibling;
  
      button.classList.toggle('accordian__button--active');
  
      // // if (button.classList.contains('accordian__button--active')) {
      // //   accordian__content.style.maxHeight = accordian__content.scrollHeight + 'px'
      // // }
      // // else {
      // //   accordian__content.style.maxHeight = 0;
      // }
    });
  });