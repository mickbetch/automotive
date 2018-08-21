(function () {
  'use strict';
  var popup = document.querySelector('.modal');
  var popupName = popup.querySelector('[name="name"]');
  var popupEmail = popup.querySelector('[name="email"]');
  var storage = localStorage.getItem('login');
  var close = popup.querySelector('.modal__close');
  var delayPopup = 10000;
  var ESC_KEYCODE = 27;
  var form = popup.querySelector('.modal__form');

  function pressEscPopup (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }

  function openPopup () {
    popup.classList.add('modal--active');
    popupName.focus();
    if (storage) {
      popupName.value = storage;
      popupEmail.focus();
    } else {
      popupName.focus();
    }
    window.addEventListener('keydown', pressEscPopup);
  }

  function closePopup() {
    popup.classList.remove('modal--active');
    if (popup.classList.contains('modal--error')) {
      popup.classList.remove('modal--error');
    }
  }

  function checkValidity (evt) {
    if (!popupName.value || !popupEmail.value) {
      evt.preventDefault();
      popup.classList.add('modal--error');
    } else {
      localStorage.setItem("login", popupName.value);
    }
  }

  setTimeout(openPopup, delayPopup);
  close.addEventListener('click', closePopup);
  form.addEventListener('submit', checkValidity);
})();
