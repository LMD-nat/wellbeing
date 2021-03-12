/*
///////////////////////////////////////////
// Ravens Advanced Progressive Matrices //
//////////////////////////////////////////
ok so this is the order:
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
{name: 'MAT-01', pattern: '3.png', option_01: '3_Answers_01.png', option_02: '3_Answers_02.png', option_03: '3_Answers_03.png', option_04: '3_Answers_04.png', option_05: '3_Answers_05.png', option_06: '3_Answers_06.png', option_07: '3_Answers_07.png', option_08: '3_Answers_08.png', type: 'one', correct:7},
{name: 'MAT-02', pattern: '10.png', option_01: '10_Answers_01.png', option_02: '10_Answers_02.png', option_03: '10_Answers_03.png', option_04: '10_Answers_04.png', option_05: '10_Answers_05.png', option_06: '10_Answers_06.png', option_07: '10_Answers_07.png', option_08: '10_Answers_08.png', type: 'one', correct:4},
{name: 'MAT-03', pattern: '12.png', option_01: '12_Answers_01.png', option_02: '12_Answers_02.png', option_03: '12_Answers_03.png', option_04: '12_Answers_04.png', option_05: '12_Answers_05.png', option_06: '12_Answers_06.png', option_07: '12_Answers_07.png', option_08: '12_Answers_08.png', type: 'one', correct:6},
{name: 'MAT-04', pattern: '15.png', option_01: '15_Answers_01.png', option_02: '15_Answers_02.png', option_03: '15_Answers_03.png', option_04: '15_Answers_04.png', option_05: '15_Answers_05.png', option_06: '15_Answers_06.png', option_07: '15_Answers_07.png', option_08: '15_Answers_08.png', type: 'one', correct:2},
{name: 'MAT-05', pattern: '16.png', option_01: '16_Answers_01.png', option_02: '16_Answers_02.png', option_03: '16_Answers_03.png', option_04: '16_Answers_04.png', option_05: '16_Answers_05.png', option_06: '16_Answers_06.png', option_07: '16_Answers_07.png', option_08: '16_Answers_08.png', type: 'two', correct:4},
{name: 'MAT-06', pattern: '18.png', option_01: '18_Answers_01.png', option_02: '18_Answers_02.png', option_03: '18_Answers_03.png', option_04: '18_Answers_04.png', option_05: '18_Answers_05.png', option_06: '18_Answers_06.png', option_07: '18_Answers_07.png', option_08: '18_Answers_08.png', type: 'two', correct:7},
{name: 'MAT-07', pattern: '21.png', option_01: '21_Answers_01.png', option_02: '21_Answers_02.png', option_03: '21_Answers_03.png', option_04: '21_Answers_04.png', option_05: '21_Answers_05.png', option_06: '21_Answers_06.png', option_07: '21_Answers_07.png', option_08: '21_Answers_08.png', type: 'two', correct:8},
{name: 'MAT-08', pattern: '22.png', option_01: '22_Answers_01.png', option_02: '22_Answers_02.png', option_03: '22_Answers_03.png', option_04: '22_Answers_04.png', option_05: '22_Answers_05.png', option_06: '22_Answers_06.png', option_07: '22_Answers_07.png', option_08: '22_Answers_08.png', type: 'two', correct:7},
{name: 'MAT-09', pattern: '28.png', option_01: '28_Answers_01.png', option_02: '28_Answers_02.png', option_03: '28_Answers_03.png', option_04: '28_Answers_04.png', option_05: '28_Answers_05.png', option_06: '28_Answers_06.png', option_07: '28_Answers_07.png', option_08: '28_Answers_08.png', type: 'two', correct:5},
{name: 'MAT-10', pattern: '30.png', option_01: '30_Answers_01.png', option_02: '30_Answers_02.png', option_03: '30_Answers_03.png', option_04: '30_Answers_04.png', option_05: '30_Answers_05.png', option_06: '30_Answers_06.png', option_07: '30_Answers_07.png', option_08: '30_Answers_08.png', type: 'two', correct:5},
{name: 'MAT-11', pattern: '31.png', option_01: '31_Answers_01.png', option_02: '31_Answers_02.png', option_03: '31_Answers_03.png', option_04: '31_Answers_04.png', option_05: '31_Answers_05.png', option_06: '31_Answers_06.png', option_07: '31_Answers_07.png', option_08: '31_Answers_08.png', type: 'two', correct:4},
{name: 'MAT-12', pattern: '34.png', option_01: '34_Answers_01.png', option_02: '34_Answers_02.png', option_03: '34_Answers_03.png', option_04: '34_Answers_04.png', option_05: '34_Answers_05.png', option_06: '34_Answers_06.png', option_07: '34_Answers_07.png', option_08: '34_Answers_08.png', type: 'two', correct:1},
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


/* //preload the image files
var img_preload = [
'16.png', '16_Answers.png', '16_Answers_01.png', '16_Answers_02.png', '16_Answers_03.png', '16_Answers_04.png', '16_Answers_05.png', '16_Answers_06.png', '16_Answers_07.png', '16_Answers_08.png',
'18.png', '18_Answers.png', '18_Answers_01.png', '18_Answers_02.png', '18_Answers_03.png', '18_Answers_04.png', '18_Answers_05.png', '18_Answers_06.png', '18_Answers_07.png', '18_Answers_08.png',
'two/A3D4.png', 'two/A3D4_Answers.png', 'two/A3D4_Answers_01.png', 'two/A3D4_Answers_02.png', 'two/A3D4_Answers_03.png', 'two/A3D4_Answers_04.png', 'two/A3D4_Answers_05.png', 'two/A3D4_Answers_06.png', 'two/A3D4_Answers_07.png', 'two/A3D4_Answers_08.png',
'two/A4E5.png', 'two/A4E5_Answers.png', 'two/A4E5_Answers_01.png', 'two/A4E5_Answers_02.png', 'two/A4E5_Answers_03.png', 'two/A4E5_Answers_04.png', 'two/A4E5_Answers_05.png', 'two/A4E5_Answers_06.png', 'two/A4E5_Answers_07.png', 'two/A4E5_Answers_08.png',
'two/B1D2.png', 'two/B1D2_Answers.png', 'two/B1D2_Answers_01.png', 'two/B1D2_Answers_02.png', 'two/B1D2_Answers_03.png', 'two/B1D2_Answers_04.png', 'two/B1D2_Answers_05.png', 'two/B1D2_Answers_06.png', 'two/B1D2_Answers_07.png', 'two/B1D2_Answers_08.png',
'two/B2E3.png', 'two/B2E3_Answers.png', 'two/B2E3_Answers_01.png', 'two/B2E3_Answers_02.png', 'two/B2E3_Answers_03.png', 'two/B2E3_Answers_04.png', 'two/B2E3_Answers_05.png', 'two/B2E3_Answers_06.png', 'two/B2E3_Answers_07.png', 'two/B2E3_Answers_08.png',
'two/B5C1.png', 'two/B5C1_Answers.png', 'two/B5C1_Answers_01.png', 'two/B5C1_Answers_02.png', 'two/B5C1_Answers_03.png', 'two/B5C1_Answers_04.png', 'two/B5C1_Answers_05.png', 'two/B5C1_Answers_06.png', 'two/B5C1_Answers_07.png', 'two/B5C1_Answers_08.png',
'two/C3D4.png', 'two/C3D4_Answers.png', 'two/C3D4_Answers_01.png', 'two/C3D4_Answers_02.png', 'two/C3D4_Answers_03.png', 'two/C3D4_Answers_04.png', 'two/C3D4_Answers_05.png', 'two/C3D4_Answers_06.png', 'two/C3D4_Answers_07.png', 'two/C3D4_Answers_08.png',
'two/C4E5.png', 'two/C4E5_Answers.png', 'two/C4E5_Answers_01.png', 'two/C4E5_Answers_02.png', 'two/C4E5_Answers_03.png', 'two/C4E5_Answers_04.png', 'two/C4E5_Answers_05.png', 'two/C4E5_Answers_06.png', 'two/C4E5_Answers_07.png', 'two/C4E5_Answers_08.png',
'two/D5E1.png', 'two/D5E1_Answers.png', 'two/D5E1_Answers_01.png', 'two/D5E1_Answers_02.png', 'two/D5E1_Answers_03.png', 'two/D5E1_Answers_04.png', 'two/D5E1_Answers_05.png', 'two/D5E1_Answers_06.png', 'two/D5E1_Answers_07.png', 'two/D5E1_Answers_08.png',
'three/A1D3E2.png', 'three/A1D3E2_Answers.png', 'three/A1D3E2_Answers_01.png', 'three/A1D3E2_Answers_02.png', 'three/A1D3E2_Answers_03.png', 'three/A1D3E2_Answers_04.png', 'three/A1D3E2_Answers_05.png', 'three/A1D3E2_Answers_06.png', 'three/A1D3E2_Answers_07.png', 'three/A1D3E2_Answers_08.png',
'three/A2B3E4.png', 'three/A2B3E4_Answers.png', 'three/A2B3E4_Answers_01.png', 'three/A2B3E4_Answers_02.png', 'three/A2B3E4_Answers_03.png', 'three/A2B3E4_Answers_04.png', 'three/A2B3E4_Answers_05.png', 'three/A2B3E4_Answers_06.png', 'three/A2B3E4_Answers_07.png', 'three/A2B3E4_Answers_08.png',
];
I think cognition.run will preload all this stuff for me
*/

/************************/
/** BASIC INSTRUCTIONS **/
/************************/

var matrix_instructions = {
	type: 'html-button-response',
	stimulus: '<p><b>Cognitive Task</b></p><p>This is a test of observation and clear thinking. You will be presented with patterns, one pattern at a time.'+
			  '<p>You will see a series of patterns that have a missing bit and possible pieces that complete each pattern.</p>',
	choices: ['See Example']
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
        '<p><img src="matrix_ex1.png"></img></p>',
	choices: ['Show Answer']
}

var matrix_ex1_ans = {
	type: 'html-button-response',
	stimulus: '<p>In this example, Number 1 completes the pattern correctly downwards, but is wrong the other way. Number 4 is correct along, but wrong downwards.'+
			  '<p>The answer is Number 8, because it completes pattern both downwards and along.</p>'+
        '<p><img src="matrix_ex1_ans.png"></img></p>',
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
	timeline: [matrix_instructions, identity, matrix_ex1_q, matrix_ex1_ans, matrix_start, matrix_proc, matrix_goodbye]
}

/*
//This function will allow you to assign the to-be-preloaded images to a variable name of your choice
function return_matrices_folder(){
	return img_preload;
}
*/
