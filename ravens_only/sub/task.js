var timeline = [matrices]
timeline.push();

// run
  jsPsych.init({
    timeline: timeline,
    show_preload_progress_bar: true,
		on_finish: function(data){
			//jsPsych.data.get().localSave('csv','TEST_PICCBI_'+subject_id+'_'+cond+'.csv'); // download locally if piloting
			document.body.innerHTML = '<br> <p style="font-size:35px"> <center>Thank you for completing the study! You can now close this page.</center></p>'
			/* In case we run on prolific or a similiar platform, here's the link
			document.body.innerHTML = '<p> Please wait. You will be redirected back to Prolific in a few moments.</p>'
      setTimeout(function () { location.href = "https://app.prolific.co/submissions/complete?cc=[insert completion code here]" }, 10000) // send back to Prolific once study is online
	*/	}
});
