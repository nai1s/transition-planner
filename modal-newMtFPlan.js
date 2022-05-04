// Get the modal
var mtfModal = document.getElementById("mtfModal");

var todaysDate = new Date();
var nextWeek = new Date(todaysDate.getTime()+(14 * msInDay));
document.getElementById('hormoneStartDate').valueAsDate = nextWeek;

// Get the button that opens the modal
var btn = document.getElementById("newMtFModalButton");

var newPlanButton = document.getElementById("generateMtF");


// When the user clicks on the button, open the modal
btn.onclick = function() {
  mtfModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
newPlanButton.onclick = function() {
    var hormoneStartDate = document.getElementById('hormoneStartDate').valueAsDate
    generateAndRenderMtFPlan(hormoneStartDate);
    mtfModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mtfModal) {
    mtfModal.style.display = "none";
  }
}