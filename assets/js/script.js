$(document).ready(function() {
  
  // displayTime() : get the current date and time and format it
  function displayTime() {
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
    $('#currentTime').text(dayjs().format('HH:mm:ss'));
  };
  
  // calls the displayTime() every second
  setInterval(displayTime, 1000);

});