/* init connection with pavlovia.org */
var pavlovia_init = {
	type: "pavlovia",
	command: "init"
};

var pavlovia_finish = {
	type: "pavlovia",
	command: "finish"
	};
	
/* setup fullscreen mode */
var fullscreen = {
  type: 'fullscreen',
  fullscreen_mode: true
  }

      
all_imgs = ['stim/matrix_ex1.png',
'stim/matrix_ex1_ans.png',
'stim/3.png',
'stim/3_Answers_01.png',
'stim/3_Answers_02.png',
'stim/3_Answers_03.png',
'stim/3_Answers_04.png',
'stim/3_Answers_05.png',
'stim/3_Answers_06.png',
'stim/3_Answers_07.png',
'stim/3_Answers_08.png',
'stim/10.png', 
'stim/10_Answers_01.png',
'stim/10_Answers_02.png',
'stim/10_Answers_03.png',
'stim/10_Answers_04.png',
'stim/10_Answers_05.png',
'stim/10_Answers_06.png',
'stim/10_Answers_07.png',
'stim/10_Answers_08.png',
'stim/12.png',
'stim/12_Answers_01.png',
'stim/12_Answers_02.png',
'stim/12_Answers_03.png',
'stim/12_Answers_04.png',
'stim/12_Answers_05.png',
'stim/12_Answers_06.png',
'stim/12_Answers_07.png',
'stim/12_Answers_08.png',
'stim/15.png',
'stim/15_Answers_01.png',
'stim/15_Answers_02.png',
'stim/15_Answers_03.png',
'stim/15_Answers_04.png',
'stim/15_Answers_05.png',
'stim/15_Answers_06.png',
'stim/15_Answers_07.png',
'stim/15_Answers_08.png',
'stim/16.png',
'stim/16_Answers_01.png',
'stim/16_Answers_02.png',
'stim/16_Answers_03.png',
'stim/16_Answers_04.png',
'stim/16_Answers_05.png',
'stim/16_Answers_06.png',
'stim/16_Answers_07.png',
'stim/16_Answers_08.png',
'stim/18.png',
'stim/18_Answers_01.png',
'stim/18_Answers_02.png',
'stim/18_Answers_03.png',
'stim/18_Answers_04.png',
'stim/18_Answers_05.png',
'stim/18_Answers_06.png',
'stim/18_Answers_07.png',
'stim/18_Answers_08.png',
'stim/21.png',
'stim/21_Answers_01.png',
'stim/21_Answers_02.png',
'stim/21_Answers_03.png',
'stim/21_Answers_04.png',
'stim/21_Answers_05.png',
'stim/21_Answers_06.png',
'stim/21_Answers_07.png',
'stim/21_Answers_08.png',
'stim/22.png',
'stim/22_Answers_01.png',
'stim/22_Answers_02.png',
'stim/22_Answers_03.png',
'stim/22_Answers_04.png',
'stim/22_Answers_05.png',
'stim/22_Answers_06.png',
'stim/22_Answers_07.png',
'stim/22_Answers_08.png',
'stim/28.png',
'stim/28_Answers_01.png',
'stim/28_Answers_02.png',
'stim/28_Answers_03.png',
'stim/28_Answers_04.png',
'stim/28_Answers_05.png',
'stim/28_Answers_06.png',
'stim/28_Answers_07.png',
'stim/28_Answers_08.png',
'stim/30.png',
'stim/30_Answers_01.png',
'stim/30_Answers_02.png',
'stim/30_Answers_03.png',
'stim/30_Answers_04.png',
'stim/30_Answers_05.png',
'stim/30_Answers_06.png',
'stim/30_Answers_07.png',
'stim/30_Answers_08.png',
'stim/31.png',
'stim/31_Answers_01.png',
'stim/31_Answers_02.png',
'stim/31_Answers_03.png',
'stim/31_Answers_04.png',
'stim/31_Answers_05.png',
'stim/31_Answers_06.png',
'stim/31_Answers_07.png',
'stim/31_Answers_08.png',
'stim/34.png',
'stim/34_Answers_01.png',
'stim/34_Answers_02.png',
'stim/34_Answers_03.png',
'stim/34_Answers_04.png',
'stim/34_Answers_05.png',
'stim/34_Answers_06.png',
'stim/34_Answers_07.png',
'stim/34_Answers_08.png'];

// test var timeline = [pavlovia_init, consent, questionnaires, matrices, debrief, pavlovia_finish]
var timeline = [pavlovia_init, fullscreen, questionnaires, matrices, pavlovia_finish]
timeline.push();

// run
  jsPsych.init({
    timeline: timeline,
    preload_images: all_imgs,
    show_preload_progress_bar: true,
		on_finish: function(data){
			//jsPsych.data.get().localSave('csv','TEST_PICCBI_'+subject_id+'_'+cond+'.csv'); // download locally if piloting
			document.body.innerHTML = '<br> <p style="font-size:35px"> <center>Thank you for completing the study! You can now close this page.</center></p>'
			/* In case we run on prolific or a similiar platform, here's the link
			document.body.innerHTML = '<p> Please wait. You will be redirected back to Prolific in a few moments.</p>'
      setTimeout(function () { location.href = "https://app.prolific.co/submissions/complete?cc=[insert completion code here]" }, 10000) // send back to Prolific once study is online
	*/	}
});
