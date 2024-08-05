// 3-minute timer
setTimeout(function(){
document.getElementById('submit').style.display = 'inline';
}, 30); // timer was originally 180000

// get PID from URL parameters
const queryString = window.location.search;
console.log(queryString);

// experiment ID
const experimentID = "B2ZcxsecKMWu"

// records start time when page loads
let startTime;

window.onload = function() {
    startTime = new Date().getTime();
};

// records end time when page unloads
window.onbeforeunload = function() {
    const endTime = new Date().getTime();
    const timeSpent = endTime - startTime; // Time in milliseconds
    
    console.log(`User spent ${timeSpent / 1000} seconds on the page.`);
    
    // Optionally send this data to a server or analytics service
};
