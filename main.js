var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $overLay = document.querySelector('.overlay');

$entryButton.addEventListener('click', event => {
  $entryButton.className = '.entry-button hidden';
  $modal.className = 'container modal';
  $overLay.className = 'overlay open';

});
