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

  // loop through all elements with .time-block class
  $('.time-block').each(function() {
    // gets the element ID
    const timeBlockID = $(this).closest('.time-block').text();
    // gets the event stored in localStorage
    const event = localStorage.getItem(timeBlockID);

    // if the event exists
    if (event) {
      // gets the corresponding .description element
      const description = $(this).siblings('.description');
      // sets the value of the .description element for the event
      description.val(event);
    }
  });

  // removes the corresponding event data from the localStorage
  $('.btn-clear').on("click", function() {
    // extracts the text from the .time-block element 
    let timeBlockText = $(this).siblings('.time-block').text();
    // extracts the text from the .description element 
    let descriptionValue = $(this).siblings('.description').val();
    
    // removes the saved events data from the localStorage
    localStorage.removeItem(timeBlockText, descriptionValue);
    // sets the value of the .description element to an empty string
    $(this).siblings('.description').val('');
  });

});