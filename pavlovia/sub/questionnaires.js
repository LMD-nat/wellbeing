// QUESTIONNAIRES //

var welcome = {
    type: 'instructions',
    pages: [
        '<p>Welcome! In this study you\'ll be answering some questions about your well being.</p>',
        '<p>Please make sure you have your unique ID code handy. You\'ll need it for the first set of questions.</p>',
        '<p>About half way through this study, we\'ll ask you to provide some information from your student transcript.</p>',
        '<p>You can access your unofficial transcript by accessing the MyConcordia portal (https://my.concordia.ca). Click on <b>My Student Centre</b>, then the <b>View My Grades</b> tab. On the left hand side, click <b>Academics</b> and then select <b>View Unofficial Transcript</b>. Click the blue button that says <b>Undergraduate/Graduate Record</b> to view your transcript.</p>',
        '<p>We will remind you to open up your transcript a bit later in the study. We\'ll also provide you with the instructions once more.</p>'
    ],
    show_clickable_nav: true,
    allow_backward: true,
}

var demo1 = {
  type: 'survey-text',
  questions: [
    {prompt: "Please enter the unique ID Code assigned to you in the e-mail you received", required: true, name:'ID'},
    {prompt: "What is your age in years?", required: true, name:'age'},
    {prompt: "What is your weight (in lbs.; 1 lbs = 0.45kg = 0.07 stones)? Just type the number (e.g., if you weigh 100 lbs just type 100).", required: true, name:'weight'},
    {prompt: "What is your height (in feet; 1 foot = 0.3 meters)? Just type the number: If you are 5 foot 5 inches tall, type 5.5.", required: true, name:'height'},
    {prompt: "Please enter your date of birth", required: true, placeholder: "DD/MM/YYYY", name:'dob'},
    {prompt: "Please indicate your marital status (Single, In a relationship, Married, Separated, Widowed, Other (if other please specify))", required: true, placeholder: "e.g., Single", name:'marital'},
    {prompt: "Please enter your first (native) language", required: true, placeholder: "English, French, Arabic, German, etc.", name:'natlang'},
    ],
  preamble: '<br><i> Welcome! Here are some questions about your background. Please answer the following demographic questions as honestly as possible. All of your responses are strictly confidential</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      ID:  JSON.parse(data.responses)['ID'],
      age: JSON.parse(data.responses)['age'],
      weight: JSON.parse(data.responses)['weight'],
      height: JSON.parse(data.responses)['height'],
      dob: JSON.parse(data.responses)['dob'],
      marital: JSON.parse(data.responses)['marital'],
      natlang: JSON.parse(data.responses)['natlang'],
    });
  }
};

var s1_instruc = {
    type: 'instructions',
    pages: [
        '<p>Thanks! For these next few questions, you will be asked to use a slider to indicate your answer</p>',
        '<p>You can slide the slider all the way to the left, or all the way to the right if you feel strongly about your response.</p>',
        '<p>You can also answer somewhere in the middle! Slide the slider anywhere between the two points to do so, but you will <b>have to move the slider</b> before continuing on to the next question.</p>'
    ],
    show_clickable_nav: true,
    allow_backward: true,
}

var pre_well = {
    type: 'html-slider-response',
    stimulus: '<p>Please rate your general well being <b>before</b> the onset of the pandemic</p>',
    labels: ['0: very poor', '100: very good'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your Pre-Pandemic Well Being
};

var contrac_prob = {
    type: 'html-slider-response',
    stimulus: '<p>Please rate your <b>perceived likelihood</b> of contracting the novel coronavirus</p>',
    labels: ['0: very unlikely', '100: certain'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your likelihood of catching the novel coronavirus
};

var cur_well = {
    type: 'html-slider-response',
    stimulus: '<p>Please rate your <b>current</b> general well being</p>',
    labels: ['0: very poor', '100: very good'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // You Current Well Being
};

var tuition = {
    type: 'html-slider-response',
    stimulus: '<p>Please rate how you would evaluate the cost of tuition at Concordia <b>over the course of the pandemic</b></p>',
    labels: ['0: tuition is overpriced', '100: tuition is cheap'],
    slider_width: 500,
    require_movement: true,
    prompt: "</b></p>" // You thoughts on tuition costs
};

var profs = {
    type: 'html-slider-response',
    stimulus: '<p>How flexible and accommodating have Concordia professors been over the course of the pandemic?</p>',
    labels: ['0: very inflexible', '100: very flexible'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your satisfaction with Concordia professors
};

var ac_workload = {
    type: 'html-slider-response',
    stimulus: '<p>Has your <b>academic workload</b> changed over the course of the pandemic?</p>',
    labels: ['0: my workload has decreased', '100: my workload has increased'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>We are interested in your own <b>subjective</b> perception of how your workload has changed.</p>" // Your change in academic workload
};

var ip_workload = {
    type: 'html-slider-response',
    stimulus: '<p>What percentage of your academic activity is currently happening online?</p>',
    labels: ['0: none of it is online', '100: all of it has moved online'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>We are interested in your own <b>subjective</b> perception of how your university experience has changed from in-person to online. If you currently have in-person labs, these would not be considered online.</p>" // Your change in academic workload
};

var online_workload = {
    type: 'html-slider-response',
    stimulus: '<p>What percentage of your academic activity was happening online <b>BEFORE</b> the pandemic?</p>',
    labels: ['0: none of it is online', '100: all of it has moved online'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>We are interested in your own <b>subjective</b> perception of how your univerity experience was <b>BEFORE</b> the pandemic. Recall that in-person labs would not be considered online activity.</p>" // Your change in academic workload
};

sliders1 = {
  timeline: [s1_instruc, pre_well, contrac_prob, cur_well, tuition, profs, ac_workload, ip_workload, online_workload],
};

var ngs_instruc = {
    type: 'instructions',
    pages: [
        '<p>Thanks! This next set of questionnaires are about your cognition and your psychological health.</p>',
        '<p>This is the longest part of the study, so take your time.</p>',
        '<p>After this, there are three more sliders, and then the cognitive task. You\'re doing great!</p>',
        ],
    show_clickable_nav: true,
    allow_backward: true,
}

var ngs = ['Extremely uncharacteristic of me', 'Somewhat uncharacteristic of me', 'Uncertain', 'Somewhat characteristic of me', 'Extremely characteristic of me']
var NGS = {
  type: 'survey-likert',
  questions: [
    {prompt: "I prefer complex to simple problems.", name:'ngs_01', labels: ngs, required:true},
    {prompt: "I like to have the responsibility of handling a situation that requires a lot of thinking.", name:'ngs_02', labels: ngs, required:true},
    {prompt: "Thinking is not my idea of fun.", name:'ngs_03', labels: ngs, required:true},
    {prompt: "I would rather do something that requires little thought than something that is sure to challenge my thinking abilities.", name:'ngs_04', labels: ngs, required:true},
    {prompt: "I try to anticipate and avoid situations where there is a likely chance I will have to think in depth about something.", name:'ngs_05', labels: ngs, required:true},
    {prompt: "I find satisfaction in deliberating hard and for long hours.", name:'ngs_06', labels: ngs, required:true},
    {prompt: "I only think as hard as I have to.", name:'ngs_07', labels: ngs, required:true},
    {prompt: "I prefer to think about small daily projects to long term ones.", name:'ngs_08', labels: ngs, required:true},
    {prompt: "I like tasks that require little thought once I have learned them.", name:'ngs_09', labels: ngs, required:true},
    {prompt: "The idea of relying on thought to make my way to the top appeals to me.", name:'ngs_10', labels: ngs, required:true},
    {prompt: "I really enjoy a task that involves coming up with new solutions to problems.", name:'ngs_11', labels: ngs, required:true},
    {prompt: "Learning new ways to think does not excite me very much.", name:'ngs_12', labels: ngs, required:true},
    {prompt: "I prefer my life to be filled with puzzles I must solve.", name:'ngs_13', labels: ngs, required:true},
    {prompt: "The notion of thinking abstractly is appealing to me.", name:'ngs_14', labels: ngs, required:true},
    {prompt: "I would prefer a task that is intellectual, difficult, and important to one that is somewhat important but does not require much thought.", name:'ngs_15', labels: ngs, required:true},
    {prompt: "I feel relief rather than satisfaction after completing a task that requires a lot of mental effort.", name:'ngs_16', labels: ngs, required:true},
    {prompt: "It's enough for me that something gets the job done; I do not care how or why it works.", name:'ngs_17', labels: ngs, required:true},
    {prompt: "I usually end up deliberating about issues even when they do not affect me personally.", name:'ngs_18', labels: ngs, required:true}
      ],
  preamble: '<br><i>For each of the statements below, please indicate whether or not the statement is characteristic of you or of what you believe. For example, if the statement is extremely uncharacteristic of you or of what you believe about yourself (not at all like you) please select "1". If the statement is extremely characteristic of you or of what you believe about yourself (very much like you) please select "5".</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      ngs_01: JSON.parse(data.responses)['ngs_01'],
      ngs_02: JSON.parse(data.responses)['ngs_02'],
      ngs_03: JSON.parse(data.responses)['ngs_03'],
      ngs_04: JSON.parse(data.responses)['ngs_04'],
      ngs_05: JSON.parse(data.responses)['ngs_05'],
      ngs_06: JSON.parse(data.responses)['ngs_06'],
      ngs_07: JSON.parse(data.responses)['ngs_07'],
      ngs_08: JSON.parse(data.responses)['ngs_08'],
      ngs_09: JSON.parse(data.responses)['ngs_09'],
      ngs_10: JSON.parse(data.responses)['ngs_10'],
      ngs_11: JSON.parse(data.responses)['ngs_11'],
      ngs_12: JSON.parse(data.responses)['ngs_12'],
      ngs_13: JSON.parse(data.responses)['ngs_13'],
      ngs_14: JSON.parse(data.responses)['ngs_14'],
      ngs_15: JSON.parse(data.responses)['ngs_15'],
      ngs_16: JSON.parse(data.responses)['ngs_16'],
      ngs_17: JSON.parse(data.responses)['ngs_17'],
      ngs_18: JSON.parse(data.responses)['ngs_18']
    });
  }
};

var lsns_instruc = {
    type: 'instructions',
    pages: [
        '<p>You\'re doing great! These next two sets of questions are about your social interactions.</p>',
        ],
    show_clickable_nav: true,
    allow_backward: true,
}

var lsns = ['None', 'One', 'Two', 'Three or four', 'Five to eight', 'Eight or more']
var lsns_fam = {
  type:'survey-likert',
  questions:[
    {prompt: "How many relatives do you see or hear from at least once a month?", name:'lsns_fam_1', labels: lsns, required:true},
    {prompt: "How many relatives do you feel close to such that you could call on them for help?", name:'lsns_fam_2', labels: lsns, required:true},
    {prompt: "How many relatives do you feel at ease with that you can talk about private matters?", name:'lsns_fam_3', labels: lsns, required:true}
  ],
  preamble: '<br><i>Considering the people to whom you are related either by birth or marriage:</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      lsns_fam_1: JSON.parse(data.responses)['lsns_fam_1'],
      lsns_fam_2: JSON.parse(data.responses)['lsns_fam_2'],
      lsns_fam_3: JSON.parse(data.responses)['lsns_fam_3']
    });
  }
};

var lsns_fri = {
  type:'survey-likert',
  questions:[
    {prompt: "How many friends do you see or hear from at least once a month?", name:'lsns_fri_1', labels: lsns, required:true},
    {prompt: "How many friends do you feel close to such that you could call on them for help?", name:'lsns_fri_2', labels: lsns, required:true},
    {prompt: "How many friends do you feel at ease with that you can talk about private matters?", name:'lsns_fri_3', labels: lsns, required:true}
  ],
  preamble: '<br><i>Considering all of your friends including those who live in your neighbourhood:</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      lsns_fri_1: JSON.parse(data.responses)['lsns_fri_1'],
      lsns_fri_2: JSON.parse(data.responses)['lsns_fri_2'],
      lsns_fri_3: JSON.parse(data.responses)['lsns_fri_3']
    });
  }
};

var ses_instruc = {
    type: 'instructions',
    pages: [
        '<p>Thanks so much! The next set of questions are all about socioeconomic status and education.</p>',
        ],
    show_clickable_nav: true,
    allow_backward: true,
}

var SESincome = {
  type:'survey-likert',
  questions:[
    {prompt: "Please indicate your parents\' weekly income", name:'sesparent', labels: ['I am not sure', '< 100$', '101-200$', '201-300$', '301-400$', '401-500$', '501-600$', '601-700$', '701-800$', '801-900$', '901$ +'], required:true},
    {prompt: "Please indicate your weekly income", name:'sesstudent', labels: ['I am not sure', '< 100$', '101-200$', '201-300$', '301-400$', '401-500$', '501-600$', '601-700$', '701-800$', '801-900$', '901$ +'], required:true},
    {prompt: "Please indicate your current living situation", name:'seshome', labels: ['Living with parents or family', 'Living with significant other', 'Living with roommates', 'Living alone', 'Student housing', 'Public housing', 'No fixed address', 'I am not sure', 'Other'], required:true},
    {prompt: "We are interested in how you perceive your life. Think of a ladder representing where people stand in North America. At the top of the ladder are the people who are the best off -- those who have the most money, the most education, and the most respected jobs. At the bottom are the people who are the worst off -- who have the least money, least education, and the least respected jobs or no job. The higher up you are on this ladder, the closer you are to the people at the very top; the lower you are, the closer you are to the people at the very bottom. Imagine this rating scale represents the ladder. Where would you place yourself, relative to other people in North America?", name:'sesladder', labels: ['1, very low on the social ladder', '2', '3', '4', '5', '6', '7', '8', '9', '10, very high on the social ladder'], required:true}
  ],
  preamble: '<br> <i>We are interested in your current socioeconomic status, please answer the following questions.</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      sesparent: JSON.parse(data.responses)['sesparent'],
      sesstudent: JSON.parse(data.responses)['sesstudent'],
      seshome: JSON.parse(data.responses)['seshome'],
      sesladder: JSON.parse(data.responses)['sesladder']
    });
  }
};

var EDUC = {
  type:'survey-text',
  questions:[
    {prompt: "If you completed High School (Secondary School), what was your average grade approximately?", required: true, placeholder: "e.g., 87%", name:'educ_hs', },
    {prompt: "If you completed High School (Secondary School), what was your average grade approximately in your <b>last year</b>?", required: true, placeholder: "e.g., 90%", name:'educ_hs_ly'},
    {prompt: "If you completed studies at a non-university college (or post-secondary institution), or CEGEP what was your average grade approximately?", required: true, placeholder: "e.g., 77%", name:'educ_ce'}
  ],
  preamble: '<br><i>Here are some additional questions about your education background. <br> We are looking for your best numerical estimate in per cent. <br> For instance, here are some letter grades and their numeric intervals. <br> 90-100 (A+), 85-89 (A), 80-84 (A-), 77-79 (B+), 73-76 (B), 70-72 (B-), <br> 67-70 (C+), 63-66 (C), 60-62 (C-), 57-59 (D+), 53-56 (D), 50-52 (D-), < 50 (F)</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      educ_hs: JSON.parse(data.responses)['educ_hs'],
      educ_hs_ly: JSON.parse(data.responses)['educ_hs_ly'],
      educ_ce: JSON.parse(data.responses)['educ_ce']
    });
  }
};

var ungrd = {
  type: 'survey-text',
  questions: [
    {prompt: "How many program credits have you earned towards your <b>undergraduate</b> degree so far?", required: true, name:'earned'},
    {prompt: "How many program credits do you have left in your <b>undergraduate</b> degree?", required: true, name:'cleft'},
    {prompt: "What is your undergraduate cumulative Grade Point Average (cGPA)? Please provide what it was out of 4.3 (e.g., 3.5/4.3)", required: true, placeholder: "e.g. 3.00/4.3", name:'cgpa'},
    {prompt: "What was or is your undergraduate institution?", placeholder:"Concordia University", required: true, name:'ugradu'},
    {prompt: "Are you attending school full time or part time?", placeholder:"Full time", required: true, name:'fptime'},
    {prompt: "How many years have you spent completing your undergraduate degree so far?", placeholder:"Concordia University", required: true, name:'ycom'},
    {prompt: "What year of university are you in currently? Please write 1 for 1st year; 2 for 2nd year; 3 for 3rd year; 4 for 4th year; 5 for 5th year; or 6+ for 6th year and up", placeholder:"e.g. 1, 2, 3, 4, 5, 6+", required: true, name:'yearu'}
  ],
  preamble: '<br><i>Thank you for all of your help so far! This part can get a little complicated, so here are some instructions. <br> To answer these questions, please have your unofficial transcript open. You can access your unofficial transcript by accessing the MyConcordia portal (https://my.concordia.ca). Click on <b>My Student Centre</b>, then the <b>View My Grades</b> tab. On the left hand side, click <b>Academics</b> and then select <b>View Unofficial Transcript</b>. Click the blue button that says <b>Undergraduate/Graduate Record</b> to view your transcript. If any of these questions don\'t apply to you, simply enter N/A.</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      earned:  JSON.parse(data.responses)['earned'],
      cleft: JSON.parse(data.responses)['cleft'],
      cgpa: JSON.parse(data.responses)['cgpa'],
      ugradu: JSON.parse(data.responses)['ugradu'],
      fptime: JSON.parse(data.responses)['fptime'],
      ycom: JSON.parse(data.responses)['ycom'],
      yearu: JSON.parse(data.responses)['yearu']
    });
  }
};

var ungrdgpas = {
  type: 'survey-text',
  questions: [
    {prompt: "What was your term GPA for Winter 2019 (the GPA you received in April or May 2019 after final exams) if applicable?", required: true, placeholder: "e.g. 3.00", name:'gpaw19'},
    {prompt: "What was your term GPA for Fall 2019 (the GPA you received in December 2019 after final exams) if applicable?", required: true, placeholder: "e.g. 3.83", name:'gpaf19'},
    {prompt: "Are you paying attention? <b>What color is grass?</b> Please enter your response in the box", required: true, name:'catch1'},
    {prompt: "What was your term GPA for Winter 2020 (the GPA you received in April or May 2020 after final exams) if applicable?", required: true, placeholder: "e.g. 3.00", name:'gpaw20'},
    {prompt: "What was your term GPA for Fall 2020 (the GPA you received in December 2020 after final exams) if applicable?", required: true, placeholder: "e.g. 3.00", name:'gpaf20'}
      ],
  preamble: '<br><i>Thank you! Keep that transcript open because now we would like you to report your term GPAs just before the start of the pandemic up to now. <br> If you do not have a GPA for a given semester, please enter N/A. <br> After this set of questions you can go ahead and close your transcript. Thanks!</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      gpaw19:  JSON.parse(data.responses)['gpaw19'],
      gpaf19: JSON.parse(data.responses)['gpaf19'],
      gpaw20: JSON.parse(data.responses)['gpaw20'],
      catch1: JSON.parse(data.responses)['catch1'],
      gpaf20: JSON.parse(data.responses)['gpaf20']
    });
  }
};

var cov19 = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Have you ever had a COVID-19 test administered?", options: ['Yes', 'No'],  name:'cov01', required: true, horizontal: true,},
    {prompt: "Have you ever tested positive for the novel coronavirus?", options: ['Yes', 'No'],  name:'cov02', required: true, horizontal: true,},
  ],
    preamble: '',
    on_finish: function(data){
        jsPsych.data.addProperties({
        cov01: JSON.parse(data.responses)['cov01'],
        cov02: JSON.parse(data.responses)['cov02']
    });
  }
};

var substance = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Over the past three months, have you consumed any of the above substances?", options: ['Yes', 'No'],  name:'substance01', required: true, horizontal: true,},
  ],
    preamble: 'The next few sets of questions will revolve around substance use. All of your responses will be kept strictly confidential. In the past three months, have you ever consumed <b>any</b> of the following substances? Substances include tobacco products, alcoholic beverages, cannabis, cocaine, amphetamine, inhalants, sedatives, hallucinogens, or opioids?',
    on_finish: function(data){
        jsPsych.data.addProperties({
        substance01: JSON.parse(data.responses)['substance01']
    });
  }
};

var assist = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assist08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'], name:'assist09', horizontal: true,},
    {prompt: "Other", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'], name:'assist10', horizontal: true,}
  ],
    preamble: '<br><i>During the past three months, how often have you used these substances?</i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assist01: JSON.parse(data.responses)['assist01'],
        assist02: JSON.parse(data.responses)['assist02'],
        assist03: JSON.parse(data.responses)['assist03'],
        assist04: JSON.parse(data.responses)['assist04'],
        assist05: JSON.parse(data.responses)['assist05'],
        assist06: JSON.parse(data.responses)['assist06'],
        assist07: JSON.parse(data.responses)['assist07'],
        assist08: JSON.parse(data.responses)['assist08'],
        assist09: JSON.parse(data.responses)['assist09'],
        assist10: JSON.parse(data.responses)['assist10']
    });
  }
};

var assist_other_1 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_1'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_1:  JSON.parse(data.responses)['other_1']
    });
  }
};

var assisttwo = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo09', horizontal: true,},
    {prompt: "Other", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assisttwo10', horizontal: true,}
  ],
    preamble: '<br><i> During the past three months, how often have you had <b>a strong desire or urge to use</b> any of the following?</i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assisttwo01: JSON.parse(data.responses)['assisttwo01'],
        assisttwo02: JSON.parse(data.responses)['assisttwo02'],
        assisttwo03: JSON.parse(data.responses)['assisttwo03'],
        assisttwo04: JSON.parse(data.responses)['assisttwo04'],
        assisttwo05: JSON.parse(data.responses)['assisttwo05'],
        assisttwo06: JSON.parse(data.responses)['assisttwo06'],
        assisttwo07: JSON.parse(data.responses)['assisttwo07'],
        assisttwo08: JSON.parse(data.responses)['assisttwo08'],
        assisttwo09: JSON.parse(data.responses)['assisttwo09'],
        assisttwo10: JSON.parse(data.responses)['assisttwo10']
    });
  }
};

var assist_other_2 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_2'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_2:  JSON.parse(data.responses)['other_2']
    });
  }
};

var assistthree = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree09', horizontal: true,},
    {prompt: "Other", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistthree10', horizontal: true,}
  ],
    preamble: '<br><i>During the past three months, how often has <b>your use of these drugs led to health, social, legal, or financial problems?</b></i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assistthree01: JSON.parse(data.responses)['assistthree01'],
        assistthree02: JSON.parse(data.responses)['assistthree02'],
        assistthree03: JSON.parse(data.responses)['assistthree03'],
        assistthree04: JSON.parse(data.responses)['assistthree04'],
        assistthree05: JSON.parse(data.responses)['assistthree05'],
        assistthree06: JSON.parse(data.responses)['assistthree06'],
        assistthree07: JSON.parse(data.responses)['assistthree07'],
        assistthree08: JSON.parse(data.responses)['assistthree08'],
        assistthree09: JSON.parse(data.responses)['assistthree09'],
        assistthree10: JSON.parse(data.responses)['assistthree10']
    });
  }
};

var assist_other_3 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_3'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_3:  JSON.parse(data.responses)['other_3']
    });
  }
};

var assistfour = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour09', horizontal: true,},
    {prompt: "Other", options: ['Never', 'Once or twice', 'Monthly', 'Weekly', 'Daily or almost daily'],  name:'assistfour10', horizontal: true,}
  ],
    preamble: '<br><i>During the past three months, how often have you <b>failed to do what was normally expected of you</b> because of your use of these drugs?</b></i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assistfour01: JSON.parse(data.responses)['assistfour01'],
        assistfour02: JSON.parse(data.responses)['assistfour02'],
        assistfour03: JSON.parse(data.responses)['assistfour03'],
        assistfour04: JSON.parse(data.responses)['assistfour04'],
        assistfour05: JSON.parse(data.responses)['assistfour05'],
        assistfour06: JSON.parse(data.responses)['assistfour06'],
        assistfour07: JSON.parse(data.responses)['assistfour07'],
        assistfour08: JSON.parse(data.responses)['assistfour08'],
        assistfour09: JSON.parse(data.responses)['assistfour09'],
        assistfour10: JSON.parse(data.responses)['assistfour10']
    });
  }
};

var assist_other_4 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_4'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_4:  JSON.parse(data.responses)['other_4']
    });
  }
};

var assistfive = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive09', horizontal: true,},
    {prompt: "Other", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistfive10', horizontal: true,}
  ],
    preamble: '<br><i>Has a friend or relative or anyone else ever <b>expressed concern</b> about your use of any of the following?</i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assistfive01: JSON.parse(data.responses)['assistfive01'],
        assistfive02: JSON.parse(data.responses)['assistfive02'],
        assistfive03: JSON.parse(data.responses)['assistfive03'],
        assistfive04: JSON.parse(data.responses)['assistfive04'],
        assistfive05: JSON.parse(data.responses)['assistfive05'],
        assistfive06: JSON.parse(data.responses)['assistfive06'],
        assistfive07: JSON.parse(data.responses)['assistfive07'],
        assistfive08: JSON.parse(data.responses)['assistfive08'],
        assistfive09: JSON.parse(data.responses)['assistfive09'],
        assistfive10: JSON.parse(data.responses)['assistfive10']
    });
  }
};

var assist_other_5 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_5'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_5:  JSON.parse(data.responses)['other_5']
    });
  }
};

var assistsix = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix01', horizontal: true,},
    {prompt: "Alcoholic beverages (beer, wine, spirits, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix02', horizontal: true,},
    {prompt: "Cannabis (marijuana, pot, grass, hash, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix03', horizontal: true,},
    {prompt: "Cocaine (coke, crack, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix04', horizontal: true,},
    {prompt: "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix05', horizontal: true,},
    {prompt: "Inhalants (nitrous, glue, petrol, paint thinner, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix06', horizontal: true,},
    {prompt: "Sedatives (Valium, Serepax, Rohypnol, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix07', horizontal: true,},
    {prompt: "Hallucinogens (LSD, acid, mushrooms, PCP, Ketamine, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix08', horizontal: true,},
    {prompt: "Opioids (heroin, morphine, methadone, codeine, etc.)", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix09', horizontal: true,},
    {prompt: "Other", options: ['No, Never', 'Yes, in the past 3 months', 'Yes, but not in the past 3 months'],  name:'assistsix10', horizontal: true,}
  ],
    preamble: '<br><i>Have you ever Have you ever <b>tried and failed to control, cut down or stop using</b> any of the following?</i>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        assistsix01: JSON.parse(data.responses)['assistsix01'],
        assistsix02: JSON.parse(data.responses)['assistsix02'],
        assistsix03: JSON.parse(data.responses)['assistsix03'],
        assistsix04: JSON.parse(data.responses)['assistsix04'],
        assistsix05: JSON.parse(data.responses)['assistsix05'],
        assistsix06: JSON.parse(data.responses)['assistsix06'],
        assistsix07: JSON.parse(data.responses)['assistsix07'],
        assistsix08: JSON.parse(data.responses)['assistsix08'],
        assistsix09: JSON.parse(data.responses)['assistsix09'],
        assistsix10: JSON.parse(data.responses)['assistsix10']
    });
  }
};

var assist_other_6 = {
  type: 'survey-text',
  questions: [
    {prompt: "If other, please specify what substance", name:'other_6'}
    ],
  preamble: 'If you selected other in the last set of answers, please specify what substance you used. Remember that any and all answers you provide are strictly confidential',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_6:  JSON.parse(data.responses)['other_6']
    });
  }
};

assist_q = {
  timeline: [assist, assist_other_1, assisttwo, assist_other_2, assistthree, assist_other_3, assistfour, assist_other_4, assistfive, assist_other_5, assistsix, assist_other_6],
};

var cas_scale = ['Not at all', 'Rare, less than a day or two', 'Several days', 'More than 7 days', 'Nearly every day over the last 2 weeks']
var cas = {
  type:'survey-likert',
  questions:[
    {prompt: "I felt dizzy, lightheaded, or faint, when I read or listened to news about the coronavirus.", name:'cas_1', labels: cas_scale, required:true},
    {prompt: "I had trouble falling or staying asleep because I was thinking about the coronavirus.", name:'cas_2', labels: cas_scale, required:true},
    {prompt: "I felt paralyzed or frozen when I thought about or was exposed to information about the coronavirus.", name:'cas_3', labels: cas_scale, required:true},
    {prompt: "I lost interest in eating when I thought about or was exposed to information about the coronavirus.", name:'cas_4', labels: cas_scale, required:true},
    {prompt: "I felt nauseous or had stomach problems when I thought about or was exposed to information about the coronavirus.", name:'cas_5', labels: cas_scale, required:true}
  ],
  preamble: '<br> How often have you experienced the following over the last 2 weeks?',
  on_finish: function(data){
    jsPsych.data.addProperties({
      cas_1: JSON.parse(data.responses)['cas_1'],
      cas_2: JSON.parse(data.responses)['cas_2'],
      cas_3: JSON.parse(data.responses)['cas_3'],
      cas_4: JSON.parse(data.responses)['cas_4'],
      cas_5: JSON.parse(data.responses)['cas_5']
    });
  }
};

var wsas_scale = ['0: Not at all', '1', '2: Slightly', '3', '4: Definitely', '5', '6: Markedly', '7', '8: Very severely']
var wsas = {
  type:'survey-likert',
  questions:[
    {prompt: "Because of the pandemic, my ability to complete my academic work is impaired.", name:'wsas_1', labels: wsas_scale, required:true},
    {prompt: "Because of the pandemic, my home management (cleaning, tidying, shopping, cooking, looking after home or children, paying bills) is impaired.", name:'wsas_2', labels: wsas_scale, required:true},
    {prompt: "Because of the pandemic, my social leisure activities (with other people e.g. parties, bars, clubs, outings, visits, dating, home entertaining) are impaired.", name:'wsas_3', labels: wsas_scale, required:true},
    {prompt: "Because of the pandemic, my private leisure activities (done alone, such as reading, gardening, collecting, sewing, walking alone) are impaired.", name:'wsas_4', labels: wsas_scale, required:true},
    {prompt: "If you are paying attention, please select Very Severely for this question.", name:'catch2', labels: wsas_scale, required:true},
    {prompt: "Because of the pandemic, my ability to form and maintain close relationships with others, including those I live with, is impaired.", name:'wsas_5', labels: wsas_scale, required:true}
  ],
  preamble: '<br> People have problems that sometimes affect their ability to do certain day-to-day tasks in their lives. To rate your problems look at each section and determine on the scale provided how much your problem impairs your ability to carry out the activity. In this instance we are interested in how your work and social life has been affected by the Covid-19 pandemic. Here, <b>0</b> means <b>not at all impaired</b> and <b>8<b> means <b>very severely impaired</b>.',
  on_finish: function(data){
    jsPsych.data.addProperties({
      wsas_1: JSON.parse(data.responses)['wsas_1'],
      wsas_2: JSON.parse(data.responses)['wsas_2'],
      wsas_3: JSON.parse(data.responses)['wsas_3'],
      wsas_4: JSON.parse(data.responses)['wsas_4'],
      catch2: JSON.parse(data.responses)['catch2'],
      wsas_5: JSON.parse(data.responses)['wsas_5']
    });
  }
};

var bai_scale = ['Not at All', 'Mildly', 'Moderately', 'Severely']
var bai = {
  type:'survey-likert',
  questions:[
    {prompt: "Numbness or tingling", name:'bai_1', labels: bai_scale, required:true},
    {prompt: "Feeling hot", name:'bai_2', labels: bai_scale, required:true},
    {prompt: "Wobbliness in legs", name:'bai_3', labels: bai_scale, required:true},
    {prompt: "Unable to relax", name:'bai_4', labels: bai_scale, required:true},
    {prompt: "Fear of the worst happening", name:'bai_5', labels: bai_scale, required:true},
    {prompt: "Dizzy or lightheaded", name:'bai_6', labels: bai_scale, required:true},
    {prompt: "Heart pounding or racing", name:'bai_7', labels: bai_scale, required:true},
    {prompt: "Unsteady", name:'bai_8', labels: bai_scale, required:true},
    {prompt: "If you are paying attention, please select 'Not at All' for this question.", name:'catch3', labels: bai_scale, required:true},
    {prompt: "Terrified or afraid", name:'bai_9', labels: bai_scale, required:true},
    {prompt: "Nervous", name:'bai_10', labels: bai_scale, required:true},
    {prompt: "Feeling of choking", name:'bai_11', labels: bai_scale, required:true},
    {prompt: "Hands trembling", name:'bai_12', labels: bai_scale, required:true},
    {prompt: "Shaky or unsteady", name:'bai_13', labels: bai_scale, required:true},
    {prompt: "Fear of losing control", name:'bai_14', labels: bai_scale, required:true},
    {prompt: "Difficulty breathing", name:'bai_15', labels: bai_scale, required:true},
    {prompt: "Fear of dying", name:'bai_16', labels: bai_scale, required:true},
    {prompt: "Scared", name:'bai_17', labels: bai_scale, required:true},
    {prompt: "Indigestion", name:'bai_18', labels: bai_scale, required:true},
    {prompt: "Faint or light headed", name:'bai_19', labels: bai_scale, required:true},
    {prompt: "Face flushed", name:'bai_20', labels: bai_scale, required:true},
    {prompt: "Hot or cold sweats", name:'bai_21', labels: bai_scale, required:true}
  ],
  preamble: '<br> Below is a list of common symptoms of anxiety. Please carefully read each item in the list. Indicate how much you have been bothered by that symptom during the past month, including today, by circling the number in the corresponding space in the column next to each symptom. Select <b>Not at All</b> if you were not bothered, <b>Mildly</b> if it did not bother you much, <b>Moderately</b> if you found the symptom was not pleasant at times, and select <b>Severely</b> if the symptom it bothered you a lot',
  on_finish: function(data){
    jsPsych.data.addProperties({
      bai_1: JSON.parse(data.responses)['bai_1'],
      bai_2: JSON.parse(data.responses)['bai_2'],
      bai_3: JSON.parse(data.responses)['bai_3'],
      bai_4: JSON.parse(data.responses)['bai_4'],
      bai_5: JSON.parse(data.responses)['bai_5'],
      bai_6: JSON.parse(data.responses)['bai_6'],
      bai_7: JSON.parse(data.responses)['bai_7'],
      bai_8: JSON.parse(data.responses)['bai_8'],
      catch3: JSON.parse(data.responses)['catch3'],
      bai_9: JSON.parse(data.responses)['bai_9'],
      bai_10: JSON.parse(data.responses)['bai_10'],
      bai_11: JSON.parse(data.responses)['bai_11'],
      bai_12: JSON.parse(data.responses)['bai_12'],
      bai_13: JSON.parse(data.responses)['bai_13'],
      bai_14: JSON.parse(data.responses)['bai_14'],
      bai_15: JSON.parse(data.responses)['bai_15'],
      bai_16: JSON.parse(data.responses)['bai_16'],
      bai_17: JSON.parse(data.responses)['bai_17'],
      bai_18: JSON.parse(data.responses)['bai_18'],
      bai_19: JSON.parse(data.responses)['bai_19'],
      bai_20: JSON.parse(data.responses)['bai_20'],
      bai_21: JSON.parse(data.responses)['bai_21']
    });
  }
};

var sex_options = ["Female", "Male", "Intersex"];
var gender_options = ["Female", "Male", "Transgender", "Non-Binary"];
var ethnicity_options = ["American Indian or Alaskan Native", "Native Hawaiian or Other Pacific Islander", "Asian", "Hispanic or Latino or Spanish Origin of any race", "Black or African American", "Middle Eastern or North African", "White or Caucasian", "I would rather not answer"];
var school_options = ["Yes, but not at a university", "Yes, Undergraduate studies", "Other, I'll specify on the next page"];
var demo2 = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "What is your biological sex?", options: sex_options, name:'sex', required: true, horizontal: false,},
    {prompt: "What is your gender identity?", options: gender_options, name:'gender', required: true, horizontal: false,},
    {prompt: "What is your ethnicity?", options: ethnicity_options, name:'ethnicity', required: true, horizontal: false,}, // Adapted from https://ir.aa.ufl.edu/surveys/race-and-ethnicity-survey/
    {prompt: "Are you currently attending school?", name:'educ_c', options: school_options, required: false}
  ],
    preamble: '<br> Here are some more demographic questions. </br>',
    on_finish: function(data){
        jsPsych.data.addProperties({
        sex: JSON.parse(data.responses)['sex'],
        gender: JSON.parse(data.responses)['gender'],
        ethnicity: JSON.parse(data.responses)['ethnicity'],
        educ_c: JSON.parse(data.responses)['educ_c']
    });
  }
};

var educ_other = {
  type: 'survey-text',
  questions: [
    {prompt: "If you selected <b>other</b> on the previous page, please elaborate on what you are currently doing.", placeholder: "Medical school, trade school, full time work, etc.", name:'other_educ'}
    ],
  preamble: '',
  on_finish: function(data){
    jsPsych.data.addProperties({
      other_educ:  JSON.parse(data.responses)['other_educ']
    });
  }
};

var cesd_scale = ['Rarely or none of the time (Less than one day)', 'Some of a little of the time (1 to 2 days)', 'Occasionally or a moderate amount of time (3 to 4 days)', 'Most or all of the time (5 to 7 days)']
var cesd = {
  type:'survey-likert',
  questions:[
    {prompt: "I was bothered by things that usually do not bother me.", name:'cesd_1', labels: cesd_scale, required:true},
    {prompt: "I did not feel like eating; my appetite was poor.", name:'cesd_2', labels: cesd_scale, required:true},
    {prompt: "I felt that I could not shake off the blues even with help from my family or friends.", name:'cesd_3', labels: cesd_scale, required:true},
    {prompt: "I felt I was just as good as other people.", name:'cesd_4', labels: cesd_scale, required:true},
    {prompt: "I had trouble keeping my mind on what I was doing.", name:'cesd_5', labels: cesd_scale, required:true},
    {prompt: "I felt depressed.", name:'cesd_6', labels: cesd_scale, required:true},
    {prompt: "I felt that everything I did was an effort.", name:'cesd_7', labels: cesd_scale, required:true},
    {prompt: "I felt hopeful about the future.", name:'cesd_8', labels: cesd_scale, required:true},
    {prompt: "I thought my life had been a failure.", name:'cesd_9', labels: cesd_scale, required:true},
    {prompt: "I felt fearful.", name:'cesd_10', labels: cesd_scale, required:true},
    {prompt: "My sleep was restless.", name:'cesd_11', labels: cesd_scale, required:true},
    {prompt: "I was happy.", name:'cesd_12', labels: cesd_scale, required:true},
    {prompt: "I talked less than usual.", name:'cesd_13', labels: cesd_scale, required:true},
    {prompt: "I felt lonely.", name:'cesd_14', labels: cesd_scale, required:true},
    {prompt: "People were unfriendly.", name:'cesd_15', labels: cesd_scale, required:true},
    {prompt: "I enjoyed life.", name:'cesd_16', labels: cesd_scale, required:true},
    {prompt: "I had crying spells.", name:'cesd_17', labels: cesd_scale, required:true},
    {prompt: "I felt sad.", name:'cesd_18', labels: cesd_scale, required:true},
    {prompt: "I felt that people dislike me.", name:'cesd_19', labels: cesd_scale, required:true},
    {prompt: "I could not get going", name:'cesd_20', labels: cesd_scale, required:true}
  ],
  preamble: '<br>Below is a list of some ways you may have felt or behaved. Please indicate how often you have felt this way during the last <b>week</b> by clicking the appropriate space.',
  on_finish: function(data){
    jsPsych.data.addProperties({
      cesd_1: JSON.parse(data.responses)['cesd_1'],
      cesd_2: JSON.parse(data.responses)['cesd_2'],
      cesd_3: JSON.parse(data.responses)['cesd_3'],
      cesd_4: JSON.parse(data.responses)['cesd_4'],
      cesd_5: JSON.parse(data.responses)['cesd_5'],
      cesd_6: JSON.parse(data.responses)['cesd_6'],
      cesd_7: JSON.parse(data.responses)['cesd_7'],
      cesd_8: JSON.parse(data.responses)['cesd_8'],
      catch3: JSON.parse(data.responses)['catch3'],
      cesd_9: JSON.parse(data.responses)['cesd_9'],
      cesd_10: JSON.parse(data.responses)['cesd_10'],
      cesd_11: JSON.parse(data.responses)['cesd_11'],
      cesd_12: JSON.parse(data.responses)['cesd_12'],
      cesd_13: JSON.parse(data.responses)['cesd_13'],
      cesd_14: JSON.parse(data.responses)['cesd_14'],
      cesd_15: JSON.parse(data.responses)['cesd_15'],
      cesd_16: JSON.parse(data.responses)['cesd_16'],
      cesd_17: JSON.parse(data.responses)['cesd_17'],
      cesd_18: JSON.parse(data.responses)['cesd_18'],
      cesd_19: JSON.parse(data.responses)['cesd_19'],
      cesd_20: JSON.parse(data.responses)['cesd_20']
    });
  }
};

var s2_instruc = {
    type: 'instructions',
    pages: [
        '<p>These next few questions are specifically about how some common symptoms of depression have worsened or improved over the pandemic.</p>',
        '<p>You will be asked to use a slider to indicate whether the feelings described have worsened or improved for you over the pandemic.</p>',
        '<p>You can slide the slider all the way to the left to indicate worsening, and all the way to the right if you feel like the described feeling has improved for you.</p>',
        '<p>You can also slide the slider anywhere between the two points, but you will <b>have to move the slider</b> before continuing on to the next question.</p>',
    ],
    show_clickable_nav: true,
    allow_backward: true,

}

var scesd_3 = {
    type: 'html-slider-response',
    stimulus: '<p>I felt that I could not shake off the blues even with help from my family or friends.</p>',
    labels: ['0: worsened', '100: improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Shaking off the blues during the pandemic
};

var scesd_6 = {
    type: 'html-slider-response',
    stimulus: '<p>I felt depressed.</p>',
    labels: ['worsened', 'improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Feeling depressed
};

var scesd_12 = {
    type: 'html-slider-response',
    stimulus: '<p>I was happy.</p>',
    labels: ['worsened', 'improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Feeling happy
};

var scesd_14 = {
    type: 'html-slider-response',
    stimulus: '<p>I felt lonely.</p>',
    labels: ['worsened', 'improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Feeling lonely
};

var scesd_18 = {
    type: 'html-slider-response',
    stimulus: '<p>I felt sad.</p>',
    labels: ['worsened', 'improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Feeling sad
};

var scesd_20 = {
    type: 'html-slider-response',
    stimulus: '<p>I could not get going</p>',
    labels: ['worsened', 'improved'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p>Please indicate how much this feeling worsened or improved over the pandemic.</p>" // Feeling unable to get started
};

sliders2 = {
  timeline: [s2_instruc, scesd_3, scesd_6, scesd_12, scesd_14, scesd_18, scesd_20],
};

var risc = ['Not true at all', 'Rarely true', 'Sometimes true', 'Often true', 'True nearly all the time']
var risc = {
  type: 'survey-likert',
  questions: [
    {prompt: "I am able to adapt when changes occur.", name:'risc_01', labels: risc, required:true},
    {prompt: "I can deal with whatever comes my way.", name:'risc_02', labels: risc, required:true},
    {prompt: "I try to see the humorous side of things when I am faced with problems.", name:'risc_03', labels: risc, required:true},
    {prompt: "Having to cope with stress can make me stronger.", name:'risc_04', labels: risc, required:true},
    {prompt: "I tend to bounce back after illness, injury or other hardships.", name:'risc_05', labels: risc, required:true},
    {prompt: "I believe I can achieve my goals, even if there are obstacles.", name:'risc_06', labels: risc, required:true},
    {prompt: "Under pressure, I stay focused and think clearly.", name:'risc_07', labels: risc, required:true},
    {prompt: "I am not easily discouraged by failure.", name:'risc_08', labels: risc, required:true},
    {prompt: "I think of myself as a strong person when dealing with life\'s challenges and difficulties.", name:'risc_09', labels: risc, required:true},
    {prompt: "I am able to handle unpleasant or painful feelings like sadness, fear, and anger.", name:'risc_10', labels: risc, required:true}
      ],
  preamble: '<br> Please indicate whether the following statements have been true for you over the past month.',
  on_finish: function(data){
    jsPsych.data.addProperties({
      risc_01: JSON.parse(data.responses)['risc_01'],
      risc_02: JSON.parse(data.responses)['risc_02'],
      risc_03: JSON.parse(data.responses)['risc_03'],
      risc_04: JSON.parse(data.responses)['risc_04'],
      risc_05: JSON.parse(data.responses)['risc_05'],
      risc_06: JSON.parse(data.responses)['risc_06'],
      risc_07: JSON.parse(data.responses)['risc_07'],
      risc_08: JSON.parse(data.responses)['risc_08'],
      risc_09: JSON.parse(data.responses)['risc_09'],
      risc_10: JSON.parse(data.responses)['risc_10']
    });
  }
};

var pss = ['Never', 'Almost never', 'Sometimes', 'Fairly often', 'Very often']
var pss_10 = {
  type: 'survey-likert',
  questions: [
    {prompt: "I have felt affected as if something serious will happen unexpectedly with the pandemic.", name:'pss10_01', labels: pss, required:true},
    {prompt: "I have felt that I am unable to control the important things in my life due to the pandemic.", name:'pss10_02', labels: pss, required:true},
    {prompt: "I have been nervous or stressed by the pandemic.", name:'pss10_03', labels: pss, required:true},
    {prompt: "I have been confident about my ability to handle my personal pandemic related problems.", name:'pss10_04', labels: pss, required:true},
    {prompt: "I have felt that optimistic and that things are going well with the pandemic.", name:'pss10_05', labels: pss, required:true},
    {prompt: "If you are paying attention, please select almost never for this question.", name:'catch3', labels: pss, required:true},
    {prompt: "I have felt unable to cope with the things I have to do to control possibly being infected.", name:'pss10_06', labels: pss, required:true},
    {prompt: "I have felt that I can control the difficulties that could appear in my life if I were infected.", name:'pss10_07', labels: pss, required:true},
    {prompt: "I have felt that I have everything under control in relation to the pandemic.", name:'pss10_08', labels: pss, required:true},
    {prompt: "I have been upset that things related to the pandemic are out of my control.", name:'pss10_09', labels: pss, required:true},
    {prompt: "I have felt that the difficulties accumulate these days due to the pandemic and I feel unable to overcome them.", name:'pss10_10', labels: pss, required:true}
      ],
  preamble: '<br> Please indicate the frequency with which you may have experienced the following scenarios or feelings over the last month.',
  on_finish: function(data){
    jsPsych.data.addProperties({
      pss10_01: JSON.parse(data.responses)['pss10_01'],
      pss10_02: JSON.parse(data.responses)['pss10_02'],
      pss10_03: JSON.parse(data.responses)['pss10_03'],
      pss10_04: JSON.parse(data.responses)['pss10_04'],
      pss10_05: JSON.parse(data.responses)['pss10_05'],
      pss10_06: JSON.parse(data.responses)['pss10_06'],
      pss10_07: JSON.parse(data.responses)['pss10_07'],
      pss10_08: JSON.parse(data.responses)['pss10_08'],
      pss10_09: JSON.parse(data.responses)['pss10_09'],
      pss10_10: JSON.parse(data.responses)['pss10_10'],
      catch3: JSON.parse(data.responses)['catch3']
    });
  }
};

var adhdsub = ['Inattentive', 'Hyperactive', 'Combined (Both)', 'I do not know'];
var learningdiag = ['Dyslexia', 'Dysgraphia', 'Dyscalculia', 'Dyspraxia', 'Auditory Processing Disorder', 'Language Processing Disorder', 'Visual Perception or Visual Motor Deficit', 'Nonverbal Learning Disorder'];
var dev = { //Developmental disorder questions//
  type: 'survey-multi-choice',
  questions: [
    {prompt: "Have you ever been assessed for and, or diagnosed with a developmental disorder (I.e., autism spectrum disorder, cerebral palsy, Tourette disorder, etc.) or intellectual disability?", options: ['Yes', 'No'], name:'dev_dis', required: true, horizontal: true,},
    {prompt: "Have you ever been diagnosed with Attention Deficit Hyperactivity Disorder (ADHD)?", options: ['Yes', 'No'], name:'add_diag', required: true, horizontal: true,},
    {prompt: "If you have ADHD, which subtype were you diagnosed with?", options: adhdsub, name:'adhd_sub', required: false, horizontal: true,},
    {prompt: "Were you diagnosed with ADHD since the onset of the pandemic?", options: ['Yes', 'No'], name:'adhd_diag', required: false, horizontal: true,},
    {prompt: "Since the onset of the pandemic, have you sought treatment for ADHD?", options: ['Yes', 'No'], name:'adhd_seek', required: false, horizontal: true,},
    {prompt: "Are you currently taking ADHD medication?", options: ['Yes', 'No'], name:'adhd_meds', required: false, horizontal: true,},
    {prompt: "Since the onset of the pandemic, have you taken ADHD medication (simulants) to <b>write</b> a test?", options: ['Yes', 'No'], name:'adhd_test', required: false, horizontal: true,},
    {prompt: "Since the onset of the pandemic, have you taken ADHD medication (simulants) to <b>study for</b> a test?", options: ['Yes', 'No'], name:'adhd_study', required: true, horizontal: true,},
    {prompt: "Have you ever been diagnosed with a learning disorder (like dyslexia) <b>not including ADHD</b>?", name:'learning', options: ['Yes', 'No'], required: true, horizontal: true,},
    {prompt: "If you were diagnosed with a learning disorder, which type have you been diagnosed with or assessed for?", name:'learning_diag', options: learningdiag, required: false, horizontal: true,},
    {prompt: "If you were diagnosed with a learning disorder, were you diagnosed with a learning disorder since the onset of the pandemic?", options: ['Yes', 'No'], name:'learning_diagpc', required: false, horizontal: true,}
  ],
    preamble: '<br> <i>Here are some questions about your development and psychological health</i>:',
    on_finish: function(data){
        jsPsych.data.addProperties({
        dev_dis: JSON.parse(data.responses)['dev_dis'],
        add_diag: JSON.parse(data.responses)['add_diag'],
        adhd_sub: JSON.parse(data.responses)['adhd_sub'],
        adhd_diag: JSON.parse(data.responses)['adhd_diag'],
        adhd_seek: JSON.parse(data.responses)['adhd_seek'],
        adhd_meds: JSON.parse(data.responses)['adhd_meds'],
        adhd_test: JSON.parse(data.responses)['adhd_test'],
        adhd_study: JSON.parse(data.responses)['adhd_study'],
        learning: JSON.parse(data.responses)['learning'],
        learning_diag: JSON.parse(data.responses)['learning_diag'],
	   learning_diagpc: JSON.parse(data.responses)['learning_diagpc']
    });
  }
};

var psych = {
    type: 'survey-multi-select',
    questions: [
      {
        prompt: "Have you previously been diagnosed with any of the following mental health conditions?",
        options: ["Bipolar and other related disorders", "Schizophrenia and other psychotic disorders", "Depressive disorders", "Anxiety disorders", "OCD and related disorders (Body Dysmorphic Disorder, Hoarding disorder, Trichotillomania)", "Sleep-Wake disorders", "Substance-Related and Addictive disorders", "Major or Mild Neurocognitive disorders", "No, I have not been diagnosed with any of these"],
        horizontal: true,
        required: true,
        name: 'psych_before'
      },
     {
        prompt: "Are you currently taking any of the following medications?",
        options: ["Anxiolytics or sedatives", "Antidepressants", "Antipsychotics", "Anticonvulsant mood stabilizers", "Anti-seizure drugs", "Opioids", "None of the above"],
        horizontal: true,
        required: true,
        name: 'meds_before'
      },
      {
        prompt: "Have you been diagnosed with any of the following mental health conditions since the onset of the pandemic?",
        options: ["Bipolar and other related disorders", "Schizophrenia and other psychotic disorders", "Depressive disorders", "Anxiety disorders", "OCD and related disorders (Body Dysmorphic Disorder, Hoarding disorder, Trichotillomania)", "Sleep-Wake disorders", "Substance-Related and Addictive disorders", "Major or Mild Neurocognitive disorders", "No, I have not been diagnosed with any of these"],
        horizontal: true,
        required: true,
        name: 'psych_after'
      },
      {
        prompt: "Since the onset of the pandemic, have you started taking any of the following medications?",
        options: ["Anxiolytics or sedatives", "Antidepressants", "Antipsychotics", "Anticonvulsant mood stabilizers", "Anti-seizure drugs", "Opioids", "None of the above"],
        horizontal: true,
        required: true,
        name: 'meds_after'
      },
    ],
    preamble: '<br> Here are some questions about your psychological state. Please select any and all answers that apply to you. Rest assured that all of your answers are completely confidential.',
    randomize_question_order: true
};

var s3_instruc = {
    type: 'instructions',
    pages: [
        '<p>These last few questions are specifically about Concordia and its resources over the pandemic.</p>',
        '<p>You will be asked to rate your satisfaction with various aspects of student life at Concordia.</p>',
        '<p>You probably know the drill by now, but just in case...you can slide the slider all the way to the left to indicate dissatisfaction, and all the way to the right if you are very satisfied.</p>',
        '<p>You can also slide the slider anywhere between the two points, but you will <b>have to move the slider</b> before continuing on to the next question.</p>',
    ],
    show_clickable_nav: true,
    allow_backward: true,
}

var conu_h = {
    type: 'html-slider-response',
    stimulus: '<p>How satisfied are you with Concordia\'s health and psychosocial services over the pandemic?</p>',
    labels: ['0: very dissatisfied', '100: very satisfied'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your satisfaction with Concordia\'s health resources
};

var conu_a = {
    type: 'html-slider-response',
    stimulus: '<p>How satisfied are you with Concordia\'s academic services and resources over the pandemic?</p>',
    labels: ['0: very dissatisfied', '100: very satisfied'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your satisfaction with Concordia\'s academic resources
};

var conu_l = {
    type: 'html-slider-response',
    stimulus: '<p>How satisfied are you with your courses and lectures at Concordia over the pandemic?</p>',
    labels: ['0: very dissatisfied', '100: very satisfied'],
    slider_width: 500,
    require_movement: true,
    prompt: "<p></p>" // Your satisfaction with Concordia\'s online learning
};

var caars = ['Not at all, never', 'Just a little, once in a while ', ' Pretty much, often', 'Very much, very frequently']
var CAARS = {
  type: 'survey-likert',
  questions: [
    {prompt: "I like to be doing active things.", name:'caars_01', labels: ngs, required:true},
    {prompt: "I lose things necessary for active tasks or activities (e.g., to-do lists, pencils, books, or tools).", name:'caars_02', labels: ngs, required:true},
    {prompt: "I don\'t plan ahead.", name:'caars_03', labels: ngs, required:true},
    {prompt: "I blurt out things.", name:'caars_04', labels: ngs, required:true},
    {prompt: "I am a risk-taker or a daredevil.", name:'caars_05', labels: ngs, required:true},
    {prompt: "I get down on myself.", name:'caars_06', labels: ngs, required:true},
    {prompt: "I don\'t finish things I start.", name:'caars_07', labels: ngs, required:true},
    {prompt: "I am easily frustrated.", name:'caars_08', labels: ngs, required:true},
    {prompt: "I talk too much.", name:'caars_09', labels: ngs, required:true},
    {prompt: "I am always on the go, as if driven by a motor.", name:'caars_10', labels: ngs, required:true},
    {prompt: "I\'m disorganised.", name:'caars_11', labels: ngs, required:true},
    {prompt: "I say things without thinking.", name:'caars_12', labels: ngs, required:true},
    {prompt: "It\'s hard for me to stay in one place very long.", name:'caars_13', labels: ngs, required:true},
    {prompt: "I have trouble doing leisure activities quietly.", name:'caars_14', labels: ngs, required:true},
    {prompt: "I\'m not sure of myself.", name:'caars_15', labels: ngs, required:true},
    {prompt: "It\'s hard for me to keep track of several things at once.", name:'caars_16', labels: ngs, required:true},
    {prompt: "I\'m always moving, even when I should be still.", name:'caars_17', labels: ngs, required:true},
    {prompt: "I forget to remember things.", name:'caars_18', labels: ngs, required:true},
    {prompt: "I have a short fuse/hot temper.", name:'caars_19', labels: ngs, required:true},
    {prompt: "I\'m bored easily.", name:'caars_20', labels: ngs, required:true},
    {prompt: "I leave my seat when I am not supposed to.", name:'caars_21', labels: ngs, required:true},
    {prompt: "I have trouble waiting in line or taking turns with others.", name:'caars_22', labels: ngs, required:true},
    {prompt: "I still throw tantrums.", name:'caars_23', labels: ngs, required:true},
    {prompt: "I have trouble keeping my attention focused when working.", name:'caars_24', labels: ngs, required:true},
    {prompt: "I seek out fast-paced, exciting activities.", name:'caars_25', labels: ngs, required:true},
    {prompt: "I avoid new challenges because I lack faith in my abilities.", name:'caars_26', labels: ngs, required:true},
    {prompt: "I feel restless inside even if I am sitting still.", name:'caars_27', labels: ngs, required:true},
    {prompt: "Things I hear or see distract me from what I\'m doing.", name:'caars_28', labels: ngs, required:true},
    {prompt: "I am forgetful in my daily activities.", name:'caars_29', labels: ngs, required:true},
    {prompt: "Many things set me off easily.", name:'caars_30', labels: ngs, required:true},
    {prompt: "I dislike quiet, introspective activities.", name:'caars_31', labels: ngs, required:true},
    {prompt: "I lose things that I need.", name:'caars_32', labels: ngs, required:true},
    {prompt: "I have trouble listening to what other people are saying.", name:'caars_33', labels: ngs, required:true},
    {prompt: "I am an underachiever.", name:'caars_34', labels: ngs, required:true},
    {prompt: "I interrupt others when talking.", name:'caars_35', labels: ngs, required:true},
    {prompt: "I change plans/jobs midstream.", name:'caars_36', labels: ngs, required:true},
    {prompt: "I act okay on the outside, but on the inside I\'m unsure of myself.", name:'caars_37', labels: ngs, required:true},
    {prompt: "I am always on the go.", name:'caars_38', labels: ngs, required:true},
    {prompt: "I make comments/remarks that I wish I could take back.", name:'caars_39', labels: ngs, required:true},
    {prompt: "I can\'t get things done unless there\'s an absolute deadline.", name:'caars_40', labels: ngs, required:true},
    {prompt: "I fidget (with my hands or feet) or squirm in my chair.", name:'caars_41', labels: ngs, required:true},
    {prompt: "I make careless mistakes or have trouble paying close attention to detail.", name:'caars_42', labels: ngs, required:true},
    {prompt: "I step on people\'s toes without meaning to.", name:'caars_43', labels: ngs, required:true},
    {prompt: "I have trouble getting started on a task.", name:'caars_44', labels: ngs, required:true},
    {prompt: "I intrude on others\' activities.", name:'caars_45', labels: ngs, required:true},
    {prompt: "It takes a great deal of effort for me to sit still.", name:'caars_46', labels: ngs, required:true},
    {prompt: "My moods are unpredictable.", name:'caars_47', labels: ngs, required:true},
    {prompt: "I don\'t like homework or job activities where I have to think a lot.", name:'caars_48', labels: ngs, required:true},
    {prompt: "I\'m absent-minded in daily activities.", name:'caars_49', labels: ngs, required:true},
    {prompt: "I am restless or overactive.", name:'caars_50', labels: ngs, required:true},
    {prompt: "I depend on others to keep my life in order and attend to the details.", name:'caars_51', labels: ngs, required:true},
    {prompt: "I annoy other people without meaning to.", name:'caars_52', labels: ngs, required:true},
    {prompt: "Sometimes my attention narrows so much that I\'m oblivious to everything else; other times it\'s so broad that everything distracts me.", name:'caars_53', labels: ngs, required:true},
    {prompt: "I tend to squirm or fidget.", name:'caars_54', labels: ngs, required:true},
    {prompt: "I can\'t keep my mind on something unless it\'s really interesting.", name:'caars_55', labels: ngs, required:true},
    {prompt: "I wish I had greater confidence in my abilities.", name:'caars_56', labels: ngs, required:true},
    {prompt: "I can\'t sit still very long.", name:'caars_57', labels: ngs, required:true},
    {prompt: "I give answers to questions before the questions have been completed.", name:'caars_58', labels: ngs, required:true},
    {prompt: "I like to be up and on the go rather than being in one place.", name:'caars_59', labels: ngs, required:true},
    {prompt: "I have trouble finishing job tasks or homework.", name:'caars_60', labels: ngs, required:true},
    {prompt: "I am irritable.", name:'caars_61', labels: ngs, required:true},
    {prompt: "I interrupt others when they are working or playing.", name:'caars_62', labels: ngs, required:true},
    {prompt: "My past failures make it hard for me to believe in myself.", name:'caars_63', labels: ngs, required:true},
    {prompt: "I am distracted when things are going on around me.", name:'caars_64', labels: ngs, required:true},
    {prompt: "I have problems organising my tasks and activities.", name:'caars_65', labels: ngs, required:true},
    {prompt: "I misjudge how long it takes to do something or go somewhere.", name:'caars_66', labels: ngs, required:true}
      ],
  preamble: '<br>Listed below are items concerning behaviors or problems sometimes experienced by adults. Read each item carefully and decide how much or how frequently each item describes you recently.</br>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      caars_01: JSON.parse(data.responses)['caars_01'],
      caars_02: JSON.parse(data.responses)['caars_02'],
      caars_03: JSON.parse(data.responses)['caars_03'],
      caars_04: JSON.parse(data.responses)['caars_04'],
      caars_05: JSON.parse(data.responses)['caars_05'],
      caars_06: JSON.parse(data.responses)['caars_06'],
      caars_07: JSON.parse(data.responses)['caars_07'],
      caars_08: JSON.parse(data.responses)['caars_08'],
      caars_09: JSON.parse(data.responses)['caars_09'],
      caars_10: JSON.parse(data.responses)['caars_10'],
      caars_11: JSON.parse(data.responses)['caars_11'],
      caars_12: JSON.parse(data.responses)['caars_12'],
      caars_13: JSON.parse(data.responses)['caars_13'],
      caars_14: JSON.parse(data.responses)['caars_14'],
      caars_15: JSON.parse(data.responses)['caars_15'],
      caars_16: JSON.parse(data.responses)['caars_16'],
      caars_17: JSON.parse(data.responses)['caars_17'],
      caars_18: JSON.parse(data.responses)['caars_18'],
      caars_19: JSON.parse(data.responses)['caars_19'],
      caars_20: JSON.parse(data.responses)['caars_20'],
      caars_21: JSON.parse(data.responses)['caars_21'],
      caars_22: JSON.parse(data.responses)['caars_22'],
      caars_23: JSON.parse(data.responses)['caars_23'],
      caars_24: JSON.parse(data.responses)['caars_24'],
      caars_25: JSON.parse(data.responses)['caars_25'],
      caars_26: JSON.parse(data.responses)['caars_26'],
      caars_27: JSON.parse(data.responses)['caars_27'],
      caars_28: JSON.parse(data.responses)['caars_28'],
      caars_29: JSON.parse(data.responses)['caars_29'],
      caars_30: JSON.parse(data.responses)['caars_30'],
      caars_31: JSON.parse(data.responses)['caars_31'],
      caars_32: JSON.parse(data.responses)['caars_32'],
      caars_33: JSON.parse(data.responses)['caars_33'],
      caars_34: JSON.parse(data.responses)['caars_34'],
      caars_35: JSON.parse(data.responses)['caars_35'],
      caars_36: JSON.parse(data.responses)['caars_36'],
      caars_37: JSON.parse(data.responses)['caars_37'],
      caars_38: JSON.parse(data.responses)['caars_38'],
      caars_39: JSON.parse(data.responses)['caars_39'],
      caars_40: JSON.parse(data.responses)['caars_40'],
      caars_41: JSON.parse(data.responses)['caars_41'],
      caars_42: JSON.parse(data.responses)['caars_42'],
      caars_43: JSON.parse(data.responses)['caars_43'],
      caars_44: JSON.parse(data.responses)['caars_44'],
      caars_45: JSON.parse(data.responses)['caars_45'],
      caars_46: JSON.parse(data.responses)['caars_46'],
      caars_47: JSON.parse(data.responses)['caars_47'],
      caars_48: JSON.parse(data.responses)['caars_48'],
      caars_49: JSON.parse(data.responses)['caars_49'],
      caars_50: JSON.parse(data.responses)['caars_50'],
      caars_51: JSON.parse(data.responses)['caars_51'],
      caars_52: JSON.parse(data.responses)['caars_52'],
      caars_53: JSON.parse(data.responses)['caars_53'],
      caars_54: JSON.parse(data.responses)['caars_54'],
      caars_55: JSON.parse(data.responses)['caars_55'],
      caars_56: JSON.parse(data.responses)['caars_56'],
      caars_57: JSON.parse(data.responses)['caars_57'],
      caars_58: JSON.parse(data.responses)['caars_58'],
      caars_59: JSON.parse(data.responses)['caars_59'],
      caars_60: JSON.parse(data.responses)['caars_60'],
      caars_61: JSON.parse(data.responses)['caars_61'],
      caars_62: JSON.parse(data.responses)['caars_62'],
      caars_63: JSON.parse(data.responses)['caars_63'],
      caars_64: JSON.parse(data.responses)['caars_64'],
      caars_65: JSON.parse(data.responses)['caars_65'],
      caars_66: JSON.parse(data.responses)['caars_66']
    });
  }
};

var becker1 = {
    type: 'survey-multi-select',
    questions: [
      {
        prompt: "What event or change to daily life has been the most negative? You may select up to three responses.",
        options: ["Worried about someone who has or has had the virus", "Having to stay at home", "Not seeing friends in person", "Thinking about how many people are dying because of the virus", "Not going to school in person", "Increased amount of schoolwork", "Increased distractions working from home","Spending more time with family", "Increased stress or disorientation from not having a schedule", "Not having access to things I need (i.e., food, products)", "Changes to sleep or sleep schedule", "Lack of Routine"],
        horizontal: true,
        required: true,
        name: 'beck1'
      },
    ],
    preamble: '<br> Here are some questions about your changes to daily life as a result of the COVID-19 pandemic.',
    randomize_question_order: true
};

var beck2 = ['Very slightly', 'Slightly', 'Moderately', 'Quite a Bit', 'Extremely']
var becker2 = {
  type: 'survey-likert',
  questions: [
    {prompt: "Thinking a lot about COVID-19", name:'becker2_01', labels: beck2, required:true},
    {prompt: "Easily distracted", name:'becker2_02', labels: beck2, required:true},
    {prompt: "Forgetful in daily activities", name:'becker2_03', labels: beck2, required:true},
    {prompt: "Able to meet deadlines for school assignments", name:'becker2_04', labels: beck2, required:true},
    {prompt: "Focused", name:'becker2_05', labels: beck2, required:true},
    {prompt: "Disorganized", name:'becker2_06', labels: beck2, required:true},
    {prompt: "Having racing thoughts", name:'becker2_07', labels: beck2, required:true},
    {prompt: "Zoning out", name:'becker2_08', labels: beck2, required:true},
    {prompt: "Able to sustain attention on tasks", name:'becker2_09', labels: beck2, required:true},
    {prompt: "Able to plan activities or work", name:'becker2_10', labels: beck2, required:true},
    {prompt: "Able to review work", name:'becker2_11', labels: beck2, required:true}
      ],
  preamble: '<br><i>Events such as the COVID-19 pandemic can affect how we think. In the past one month, including today, to what extent have you experienced the following:</i>',
  on_finish: function(data){
    jsPsych.data.addProperties({
      becker2_01: JSON.parse(data.responses)['becker2_01'],
      becker2_02: JSON.parse(data.responses)['becker2_02'],
      becker2_03: JSON.parse(data.responses)['becker2_03'],
      becker2_04: JSON.parse(data.responses)['becker2_04'],
      becker2_05: JSON.parse(data.responses)['becker2_05'],
      becker2_06: JSON.parse(data.responses)['becker2_06'],
      becker2_07: JSON.parse(data.responses)['becker2_07'],
      becker2_08: JSON.parse(data.responses)['becker2_08'],
      becker2_09: JSON.parse(data.responses)['becker2_09'],
      becker2_10: JSON.parse(data.responses)['becker2_10'],
      becker2_11: JSON.parse(data.responses)['becker2_11']
    });
  }
};

var mahdy2020 = ['Greatly affected negatively', 'Considerably affected negatively', 'Moderately affected negatively', 'Slightly affected negatively', 'Not affected', 'Slightly affected positively', 'Moderately affected positively', 'Considerably affected positively', 'Greatly affected positively']
var mahdy = {
  type: 'survey-likert',
  questions: [
    {prompt: "How did the COVID-19 pandemic affect your studies?", name:'mahdy_01', labels: mahdy2020, required:true}
      ],
  preamble: '',
  on_finish: function(data){
    jsPsych.data.addProperties({
      mahdy_01: JSON.parse(data.responses)['mahdy_01']
    });
  }
};

becker = {
  timeline: [becker1, becker2, mahdy],
};

sliders3 = {
  timeline: [conu_h, conu_a, conu_l],
};

questionnaires = {
  timeline: [welcome, demo1, demo2, educ_other, sliders1, cov19, dev, psych, substance, assist_q, lsns_instruc, lsns_fri, lsns_fam, ses_instruc, SESincome, EDUC, ungrd, ungrdgpas, becker, ngs_instruc, NGS, CAARS, cas, wsas, bai, cesd, sliders2, risc, pss_10, s3_instruc, sliders3],
};

var raven = {
    type: 'instructions',
    pages: [
        '<p>One last task and then you are done! Click <b>Next</b> to display a link. Click on it and the cognitive task will open in a new tab.</p>',
        '<p style="font-size:45px"><a href="https://run.pavlovia.org/LMD_nat/ravens/html" target="_blank">Click here to start the Task!</a></p>',
        '<p>All done? Click <b>Next</b> next to finish the study!</p>',
    ],
    show_clickable_nav: true,
    allow_backward: true,
}