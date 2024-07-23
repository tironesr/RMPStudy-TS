// 3-minute timer
setTimeout(function(){
document.getElementById('submit').style.display = 'inline';
}, 300); // timer was originally 180000

const queryString = window.location.search;
console.log(queryString);

// save form data

// get Participnat ID in URL
var urlvar = jsPsych.data.getURLVariable();
jsPsych.data.addProperties({participant_id: urlvar.PID});
console.log(urlvar.PID);


// POST data into OSF
const filename = `${urlvar.PID}.csv`;

const save_data = {
type: jsPsychPipe,
action: "save",
experiment_id: "B2ZcxsecKMWu",
filename: filename,
data_string: ()=>jsPsych.data.get().csv()
};
