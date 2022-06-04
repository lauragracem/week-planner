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
var currentDay = 'monday';
// var $ul = document.querySelector('ul');
// var $mon = document.querySelector('.mon');
// var $tues = document.querySelector('.tues');
// var $wed = document.querySelector('.wed');
// var $thurs = document.querySelector('.thurs');
// var $fri = document.querySelector('.fri');
// var $sat = document.querySelector('.sat');
// var $sun = document.querySelector('.sun');

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
  currentDay = $dayOfWeek.value;

  if (entry.day.toString() === 'monday') {
    data.schedule.monday.push(entry);
  } else if (entry.day.toString() === 'tuesday') {
    data.schedule.tuesday.push(entry);
  } else if (entry.day.toString() === 'wednesday') {
    data.schedule.wednesday.push(entry);
  } else if (entry.day.toString() === 'thursday') {
    data.schedule.thursday.push(entry);
  } else if (entry.day.toString() === 'friday') {
    data.schedule.friday.push(entry);
  } else if (entry.day.toString() === 'saturday') {
    data.schedule.saturday.push(entry);
  } else if (entry.day.toString() === 'sunday') {
    data.schedule.sunday.push(entry);
  }

  render();

  $entryButton.className = '.entry-button';
  $modal.className = 'container modal hidden';
  $overLay.className = 'overlay closed';
});

function render() {
  for (var i = 0; i < $tableData.length; i += 2) {
    var entryIndex = i / 2;

    if (currentDay.toString() === 'monday') {
      var x = data.schedule.monday[entryIndex];
    } else if (currentDay.toString() === 'tuesday') {
      x = data.schedule.tuesday[entryIndex];
    } else if (currentDay.toString() === 'wednesday') {
      x = data.schedule.wednesday[entryIndex];
    } else if (currentDay.toString() === 'thursday') {
      x = data.schedule.thursday[entryIndex];
    } else if (currentDay.toString() === 'friday') {
      x = data.schedule.friday[entryIndex];
    } else if (currentDay.toString() === 'saturday') {
      x = data.schedule.saturday[entryIndex];
    } else if (currentDay.toString() === 'sunday') {
      x = data.schedule.sunday[entryIndex];
    }

    if (x) {
      $tableData[i].textContent = x.time;
      $tableData[i + 1].textContent = x.description;
    }
  }
}

// $ul.addEventListener('click', function (e) {
//   if (e.target === $mon) {

//   }
// });

// time/description-even:time, odd:description
// assign it to tableData index
