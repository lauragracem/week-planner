var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $overLay = document.querySelector('.overlay');
var $form = document.querySelector('form');

$entryButton.addEventListener('click', event => {
  $entryButton.className = '.entry-button hidden';
  $modal.className = 'container modal';
  $overLay.className = 'overlay open';

});

$form.addEventListener('submit', function (e) {
  event.preventDefault();

  // var entry = {
  //   time: $form.elements
  // };

});
