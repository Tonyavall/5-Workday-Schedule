let grabCurrentDate = moment().format('MMMM Do, YYYY');
let grabCurrentHour = moment().format('h');

// Check if current date works
// console.log(grabCurrentDate)
// Check to see if the current hour works
// console.log(grabCurrentHour)

// Using jquery to set the currentDay text content to grabCurrentDate
$('#currentDay').text(grabCurrentDate);