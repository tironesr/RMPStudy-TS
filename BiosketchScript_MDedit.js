// 3-minute timer
setTimeout(function(){
document.getElementById('submit').style.display = 'inline';
}, 30); // timer was originally 180000

const queryString = window.location.search;
console.log(queryString);

// save form data


// get Participnat ID in URL
var urlvar = jsPsych.data.getURLVariable();
jsPsych.data.addProperties({participant_id: urlvar.PID});
console.log(urlvar.PID);
