$(document).ready(function() {
  
  // displayTime() : get the current date and time and format it
  function displayTime() {
    $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
    $('#currentTime').text(dayjs().format('HH:mm:ss'));
  };
  
  // calls the displayTime() every second
  setInterval(displayTime, 1000);

  // updateHour() : update current time status
  function updateHour() {
    // obtaining the current hour using the dayjs().hour() method
    let currentHour = dayjs().hour();
    // selects all elements with the class .time-block
    let timeBlocks = $('.time-block');
    
    // timeBlocks() : iterates through the selected time blocks
    timeBlocks.each(function() {
      // extracts the hour from the element's ID
      let blockHour = parseInt($(this).attr('id'));
      // applies appropriate classes to the element
      if (currentHour > blockHour) {
        $(this).addClass('past');
      } else if (currentHour === blockHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      };
    });
  };
  
  // calls the updateHour() every minute
  updateHour();
  setInterval(updateHour, 60000);

  // adds the text from the corresponding '.description' to the localStorage
  $('.btn-add').on('click', function() {
    // extracts the text from the .time-block element
    const timeBlock = $(this).siblings('.time-block').text();
    // extracts the text from the .description element
    const descriptionVal = $(this).siblings('.description').val();
    // store event data in localStorage
    localStorage.setItem(timeBlock, descriptionVal);
  });

});