///////////////////////////////////////////
// Ravens Advanced Progressive Matrices //
//////////////////////////////////////////
/*
3, 10, 12, 15, 16, 18, 21, 22, 28, 30, 31, 34
and these are the answers: 7, 4, 6, 2, 4, 7, 8, 7, 5, 5, 4, 1
*/

/**************/
/** TIMELINE **/
/**************/

var timeline = []; //specify the jsPsych timeline to which all trials/blocks are pushed

var totalScore = 0; //for logging the total number of correct responses
var totalSeen = 0; //for logging the total number of items participants get to in the specified time frame
var specDuration = 60; //number of MINUTES you want participants to be able to spend on the task

/************************/
/** TIMELINE VARIABLES **/
/************************/

var matrixList = [
{name: 'MAT-01', pattern: 'stim/3.png', option_01: 'stim/3_Answers_01.png', option_02: 'stim/3_Answers_02.png', option_03: 'stim/3_Answers_03.png', option_04: 'stim/3_Answers_04.png', option_05: 'stim/3_Answers_05.png', option_06: 'stim/3_Answers_06.png', option_07: 'stim/3_Answers_07.png', option_08: 'stim/3_Answers_08.png', type: 'one', correct:6},
{name: 'MAT-02', pattern: 'stim/10.png', option_01: 'stim/10_Answers_01.png', option_02: 'stim/10_Answers_02.png', option_03: 'stim/10_Answers_03.png', option_04: 'stim/10_Answers_04.png', option_05: 'stim/10_Answers_05.png', option_06: 'stim/10_Answers_06.png', option_07: 'stim/10_Answers_07.png', option_08: 'stim/10_Answers_08.png', type: 'one', correct:3},
{name: 'MAT-03', pattern: 'stim/12.png', option_01: 'stim/12_Answers_01.png', option_02: 'stim/12_Answers_02.png', option_03: 'stim/12_Answers_03.png', option_04: 'stim/12_Answers_04.png', option_05: 'stim/12_Answers_05.png', option_06: 'stim/12_Answers_06.png', option_07: 'stim/12_Answers_07.png', option_08: 'stim/12_Answers_08.png', type: 'one', correct:5},
{name: 'MAT-04', pattern: 'stim/15.png', option_01: 'stim/15_Answers_01.png', option_02: 'stim/15_Answers_02.png', option_03: 'stim/15_Answers_03.png', option_04: 'stim/15_Answers_04.png', option_05: 'stim/15_Answers_05.png', option_06: 'stim/15_Answers_06.png', option_07: 'stim/15_Answers_07.png', option_08: 'stim/15_Answers_08.png', type: 'one', correct:1},
{name: 'MAT-05', pattern: 'stim/16.png', option_01: 'stim/16_Answers_01.png', option_02: 'stim/16_Answers_02.png', option_03: 'stim/16_Answers_03.png', option_04: 'stim/16_Answers_04.png', option_05: 'stim/16_Answers_05.png', option_06: 'stim/16_Answers_06.png', option_07: 'stim/16_Answers_07.png', option_08: 'stim/16_Answers_08.png', type: 'two', correct:3},
{name: 'MAT-06', pattern: 'stim/18.png', option_01: 'stim/18_Answers_01.png', option_02: 'stim/18_Answers_02.png', option_03: 'stim/18_Answers_03.png', option_04: 'stim/18_Answers_04.png', option_05: 'stim/18_Answers_05.png', option_06: 'stim/18_Answers_06.png', option_07: 'stim/18_Answers_07.png', option_08: 'stim/18_Answers_08.png', type: 'two', correct:6},
{name: 'MAT-07', pattern: 'stim/21.png', option_01: 'stim/21_Answers_01.png', option_02: 'stim/21_Answers_02.png', option_03: 'stim/21_Answers_03.png', option_04: 'stim/21_Answers_04.png', option_05: 'stim/21_Answers_05.png', option_06: 'stim/21_Answers_06.png', option_07: 'stim/21_Answers_07.png', option_08: 'stim/21_Answers_08.png', type: 'two', correct:7},
{name: 'MAT-08', pattern: 'stim/22.png', option_01: 'stim/22_Answers_01.png', option_02: 'stim/22_Answers_02.png', option_03: 'stim/22_Answers_03.png', option_04: 'stim/22_Answers_04.png', option_05: 'stim/22_Answers_05.png', option_06: 'stim/22_Answers_06.png', option_07: 'stim/22_Answers_07.png', option_08: 'stim/22_Answers_08.png', type: 'two', correct:6},
{name: 'MAT-09', pattern: 'stim/28.png', option_01: 'stim/28_Answers_01.png', option_02: 'stim/28_Answers_02.png', option_03: 'stim/28_Answers_03.png', option_04: 'stim/28_Answers_04.png', option_05: 'stim/28_Answers_05.png', option_06: 'stim/28_Answers_06.png', option_07: 'stim/28_Answers_07.png', option_08: 'stim/28_Answers_08.png', type: 'two', correct:4},
{name: 'MAT-10', pattern: 'stim/30.png', option_01: 'stim/30_Answers_01.png', option_02: 'stim/30_Answers_02.png', option_03: 'stim/30_Answers_03.png', option_04: 'stim/30_Answers_04.png', option_05: 'stim/30_Answers_05.png', option_06: 'stim/30_Answers_06.png', option_07: 'stim/30_Answers_07.png', option_08: 'stim/30_Answers_08.png', type: 'two', correct:4},
{name: 'MAT-11', pattern: 'stim/31.png', option_01: 'stim/31_Answers_01.png', option_02: 'stim/31_Answers_02.png', option_03: 'stim/31_Answers_03.png', option_04: 'stim/31_Answers_04.png', option_05: 'stim/31_Answers_05.png', option_06: 'stim/31_Answers_06.png', option_07: 'stim/31_Answers_07.png', option_08: 'stim/31_Answers_08.png', type: 'two', correct:3},
{name: 'MAT-12', pattern: 'stim/34.png', option_01: 'stim/34_Answers_01.png', option_02: 'stim/34_Answers_02.png', option_03: 'stim/34_Answers_03.png', option_04: 'stim/34_Answers_04.png', option_05: 'stim/34_Answers_05.png', option_06: 'stim/34_Answers_06.png', option_07: 'stim/34_Answers_07.png', option_08: 'stim/34_Answers_08.png', type: 'two', correct:0},
];

//split array based on shortForm
//function to cut the trials in half for short-form version
function odds(array) {
    var oddOnes = [];
    for(var i=0; i<array.length; i++) {
        if(i % 2 == 0) {
			oddOnes.push(array[i]);
		}
	}
    return oddOnes;
};

/* var preload = {
    type: 'preload',
    auto_preload: true,
    show_progress_bar: true,
    images: ['stim/matrix_ex1.png', 'stim/matrix_ex1_ans.png', 
'stim/3.png',  'stim/3_Answers_01.png',  'stim/3_Answers_02.png',  'stim/3_Answers_03.png',  'stim/3_Answers_04.png',  'stim/3_Answers_05.png',  'stim/3_Answers_06.png',  'stim/3_Answers_07.png',  'stim/3_Answers_08.png',
'stim/10.png’, ‘stim/10_Answers_01.png',  'stim/10_Answers_02.png',  'stim/10_Answers_03.png',  'stim/10_Answers_04.png',  'stim/10_Answers_05.png',  'stim/10_Answers_06.png',  'stim/10_Answers_07.png',  'stim/10_Answers_08.png',
'stim/12.png',  'stim/12_Answers_01.png',  'stim/12_Answers_02.png',  'stim/12_Answers_03.png',  'stim/12_Answers_04.png',  'stim/12_Answers_05.png',  'stim/12_Answers_06.png',  'stim/12_Answers_07.png',  'stim/12_Answers_08.png', 
'stim/15.png',  'stim/15_Answers_01.png',  'stim/15_Answers_02.png',  'stim/15_Answers_03.png',  'stim/15_Answers_04.png',  'stim/15_Answers_05.png',  'stim/15_Answers_06.png',  'stim/15_Answers_07.png',  'stim/15_Answers_08.png',
'stim/16.png',  'stim/16_Answers_01.png',  'stim/16_Answers_02.png',  'stim/16_Answers_03.png',  'stim/16_Answers_04.png',  'stim/16_Answers_05.png',  'stim/16_Answers_06.png',  'stim/16_Answers_07.png',  'stim/16_Answers_08.png',
'stim/18.png',  'stim/18_Answers_01.png',  'stim/18_Answers_02.png',  'stim/18_Answers_03.png',  'stim/18_Answers_04.png',  'stim/18_Answers_05.png',  'stim/18_Answers_06.png',  'stim/18_Answers_07.png',  'stim/18_Answers_08.png',
'stim/21.png',  'stim/21_Answers_01.png',  'stim/21_Answers_02.png',  'stim/21_Answers_03.png',  'stim/21_Answers_04.png',  'stim/21_Answers_05.png',  'stim/21_Answers_06.png',  'stim/21_Answers_07.png',  'stim/21_Answers_08.png',
'stim/22.png',  'stim/22_Answers_01.png',  'stim/22_Answers_02.png',  'stim/22_Answers_03.png',  'stim/22_Answers_04.png',  'stim/22_Answers_05.png',  'stim/22_Answers_06.png',  'stim/22_Answers_07.png',  'stim/22_Answers_08.png',
'stim/28.png',  'stim/28_Answers_01.png',  'stim/28_Answers_02.png',  'stim/28_Answers_03.png',  'stim/28_Answers_04.png',  'stim/28_Answers_05.png',  'stim/28_Answers_06.png',  'stim/28_Answers_07.png',  'stim/28_Answers_08.png',
'stim/30.png',  'stim/30_Answers_01.png',  'stim/30_Answers_02.png',  'stim/30_Answers_03.png',  'stim/30_Answers_04.png',  'stim/30_Answers_05.png',  'stim/30_Answers_06.png',  'stim/30_Answers_07.png',  'stim/30_Answers_08.png',
'stim/31.png',  'stim/31_Answers_01.png',  'stim/31_Answers_02.png',  'stim/31_Answers_03.png',  'stim/31_Answers_04.png',  'stim/31_Answers_05.png',  'stim/31_Answers_06.png',  'stim/31_Answers_07.png',  'stim/31_Answers_08.png',
'stim/34.png',  'stim/34_Answers_01.png',  'stim/34_Answers_02.png',  'stim/34_Answers_03.png',  'stim/34_Answers_04.png',  'stim/34_Answers_05.png',  'stim/34_Answers_06.png',  'stim/34_Answers_07.png',  'stim/34_Answers_08.png']
};

*/

/************************/
/** BASIC INSTRUCTIONS **/
/************************/

var matrix_instructions = {
	type: 'html-button-response',
	stimulus: '<p><b>Cognitive Task</b></p><p>This is a test of observation and clear thinking. You will be presented with patterns, one pattern at a time.'+
			  '<p>You will see a series of patterns that have a missing bit and possible pieces that complete each pattern.</p>',
	choices: ['Next']
}

var identity = {
  type: 'survey-text',
  questions: [
    {prompt: "Please enter the unique ID Code assigned to you in the e-mail you received", required: true, name:'ID'},
    ],
  on_finish: function(data){
    jsPsych.data.addProperties({
      ID:  JSON.parse(data.responses)['ID']
    });
  }
};

var matrix_ex1_q = {
	type: 'html-button-response',
	stimulus: '<p>The top of this problem is a pattern with a bit cut out of it. Look at the pattern, think what the missing bit must be like to complete the pattern correctly.</p>'+
  '<p>The pattern can be completed both down and across. Find the right bit out of the eight bits shown below the picture. For each pattern, there is only one correct solution.</p>'+
			  '<p>Which piece competes the pattern?</p>'+
        '<p><img src="stim/matrix_ex1.png"></img></p>',
	choices: ['Show Answer']
}

var matrix_ex1_ans = {
	type: 'html-button-response',
	stimulus: '<p>In this example, Number 1 completes the pattern correctly downwards, but is wrong the other way. Number 4 is correct along, but wrong downwards.'+
			  '<p>The answer is Number 8, because it completes pattern both downwards and along.</p>'+
        '<p><img src="stim/matrix_ex1_ans.png"></img></p>',
	choices: ['Next']
}

var matrix_start = {
	type: 'html-button-response',
	stimulus: '<p> When the real task starts you can simply click on your answer.</p>'+
			  '<p>Take your time, and you can adjust the size of your browser window if you are having a hard time viewing the task.</p>',
	choices: ['Start the Task!']
}

/**************************/
/** MAIN RESPONSE SCREEN **/
/**************************/

var matrix_response = {
	type: 'ravens-matrix',
	stimulus: jsPsych.timelineVariable('pattern'),
	data: {item: jsPsych.timelineVariable('name'), correct_ans: jsPsych.timelineVariable('correct')},
	post_trial_gap: 250,
	choices: [
	jsPsych.timelineVariable('option_01'),
	jsPsych.timelineVariable('option_02'),
	jsPsych.timelineVariable('option_03'),
	jsPsych.timelineVariable('option_04'),
	jsPsych.timelineVariable('option_05'),
	jsPsych.timelineVariable('option_06'),
	jsPsych.timelineVariable('option_07'),
	jsPsych.timelineVariable('option_08')
	],
	on_finish:function(data){
		//score the response
		if(data.button_pressed == data.correct_ans){
			var gotitright = 1;
			totalScore += 1;
			console.log("correct");
		} else {
			var gotitright = 0;
			console.log("NOPE");
		}

		 jsPsych.data.addDataToLastTrial({
			  designation: "MATRIX-RESP",
			  correct: gotitright
            });

		totalSeen += 1;	//add to the total number of seen items
	}
};


var matrix_proc = {
	timeline: [matrix_response],
	timeline_variables: matrixList,
	//function to terminate this timeline after a specific duration
	on_start: function(){
		setTimeout(function(){
		jsPsych.endCurrentTimeline();
		}, (specDuration*60000));
	}
};


/*************/
/** WRAP-UP **/
/*************/

//final feedback screen
var matrix_goodbye = {
    type: "html-button-response",
    stimulus: "<p>This concludes the pattern completion task.</p><p>Thank you for your responses!</p>",
    choices: ['Exit']
    };


/******************/
/** MAIN OUTPUTS **/
/******************/

//This is the ultimate variable that you will push to the timeline in the main section
var matrices = {
	timeline: [matrix_instructions, matrix_ex1_q, matrix_ex1_ans, matrix_start, matrix_proc, matrix_goodbye]
}

//This function will allow you to assign the to-be-preloaded images to a variable name of your choice
// function return_matrices_folder(){
//	return img_preload;
//}