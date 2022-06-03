var initialData = {
  time: null,
  day: null,
  description: '',
  nextEntryId: 1
};

var data = {
  schedule: {
    sunday: [initialData],
    monday: [initialData],
    tuesday: [initialData],
    wednesday: [initialData],
    thursday: [initialData],
    friday: [initialData],
    saturday: [initialData]
  }
};

var $entryButton = document.querySelector('.entry-button');
var $modal = document.querySelector('.modal');
var $overLay = document.querySelector('.overlay');
var $form = document.querySelector('form');
var $dayOfWeek = document.querySelector('#day-of-the-week');
var $time = document.querySelector('#time');
var $description = document.querySelector('textarea');
var $tableData = document.querySelectorAll('td');

$entryButton.addEventListener('click', event => {
  $entryButton.className = '.entry-button hidden';
  $modal.className = 'container modal';
  $overLay.className = 'overlay open';

});

$form.addEventListener('submit', function (e) {
  event.preventDefault();

  var entryId = initialData.nextEntryId;
  initialData.nextEntryId++;

  var entry = {
    time: $time.value,
    day: $dayOfWeek.value,
    description: $description.value,
    id: entryId
  };

  data.schedule.monday.push(entry);

  render();

  $entryButton.className = '.entry-button';
  $modal.className = 'container modal hidden';
  $overLay.className = 'overlay closed';
});

function render() {
  for (var i = 0; i < $tableData.length; i += 2) {
    var entryIndex = i / 2;
    var entry = data.schedule.monday[entryIndex];
    if (entry) {
      $tableData[i].textContent = entry.time;
      $tableData[i + 1].textContent = entry.description;
    }

  }
}

// time/description-even:time, odd:description
// assign it to tableData index
