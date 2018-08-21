(function () {
  'use strict';

  var navToggle = document.querySelector('.main-nav__toggle');
  var header = document.querySelector('.header');
  var linksCollection = document.querySelectorAll('a[href]');

  function removeLinkDefault () {
    var linksCollection = document.querySelectorAll('a[href]');
    for (var i = 0; i < linksCollection.length; i++) {
      linksCollection[i].addEventListener('click', function (evt) {
        evt.preventDefault();
      });
    }
  }
  removeLinkDefault();

  header.classList.remove('header--no-js');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('header--short')) {
      header.classList.remove('header--short');
      header.classList.add('header--full');
    } else {
      header.classList.remove('header--full');
      header.classList.add('header--short');
    }
  });
})();
