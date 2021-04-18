// SETUP CONSTANTS FOR WELLBEING PROJECT //

var subject_id = jsPsych.randomization.randomID(15); //random 15 digit id

jsPsych.data.addProperties({ // add random data to file
  subject: subject_id
});

/* setup fullscreen mode */
var fullscreen = {
  type: 'fullscreen',
    fullscreen_mode: true
  }

