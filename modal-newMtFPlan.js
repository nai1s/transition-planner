


//Define some manual table elements to collect
//Are you planning to:
var questionsRoundOne = 
[ 
  "Freeze sperm prior to starting hormones?",
  "Take feminizing hormones (HRT)?",
  "Come out publicly as female?",
  "Socially transition to female?",
  "Seek Hair Transplant Surgery (Hair Plugs)?",
  "Seek Facial Feminization Surgery (FFS)?",
  "Seek Top (aka Breast) Surgery?",
  "Seek Bottom (aka Genital) Surgery?",
  "Legally Change Your Name?",
  "Get Laser Hair Removal Treatment?",
  "Get Mental Health Counseling? (My biased opinion) you really should.",
  "Get Speech Therapy?",
  "Consult with a physician?",
  "Get regular blood tests?"
 ]



 //When will you:
 var questionsRoundTwo = [
   "Start sperm preservation? This can take 2-3 weeks.",
   "Start HRT? If you are preserving sperm you should wait until that's finished to start HRT.",
   "Come out publicly?",
   "Start Social Transition?",
   "Schedule Hair Transplants?",
   "Schedule FFS?",
   "Schedule Top Surgery?",
   "Schedule Bottom Surgery?  Typically this requires a year or two of social transition + counseling.",
   "Start the Legal Name Change?",
   "Start Laser Hair Removal?   Note that this works best at least 6 weeks after starting hormones.",
   "Start Counseling?",
   "Start Speech Therapy?",
   "Start Physician Consultations?",
   "Start Blood Tests?"
 ]

var today = new Date();

 var answersRoundTwo = [
   today,
   new Date(today.getTime()+(14 * msInDay)),
   new Date(today.getTime()+(14 * msInDay)),
   new Date(today.getTime()+(14 * msInDay)),
   new Date(today.getTime()+(365 * msInDay)),
   new Date(today.getTime()+(400 * msInDay)),
   new Date(today.getTime()+(500 * msInDay)),
   new Date(today.getTime()+(700 * msInDay)),
   new Date(today.getTime()+(500 * msInDay)),
   new Date(today.getTime()+(56 * msInDay)),
   new Date(today.getTime()+(7 * msInDay)),
   new Date(today.getTime()+(14 * msInDay)),
   new Date(today.getTime()+(1 * msInDay)),
   new Date(today.getTime()+(1 * msInDay)),
 ]

 //How many:

 var questionsRoundThree = [
   "Laser Sessions are you planning? 6-12 are common to start with occasional followups, but sometimes more are needed.",
   "Counseling Sessions are you planning? If you don't know just leave this at 50.",
   "Speech Therapy Sessions are you planning?",
   "Consultations are you planning? These drop off in frequency over time and are usually every 3 months to start.",
    "Blood Tests are you planning? Typically these are once a month to start and less frequent over time."
 ]

 var answersRoundThree = [
   16,
80,
12,
10,
22
]

//How frequently:

var questionsRoundFour = [
  "Counseling Sessions?",
  "Speech Therapy Sessions?"
]

var answersRoundFour = [
  14,
  30
]

var allQuestionHTML = "";

var roundOneResponses = [];
var roundTwoResponses = [];
var roundThreeResponses = [];
var roundFourResponses = [];


function parseMtFQuestionTableToJSON(iterator) {

  var tableLength = document.getElementById("mtfQuestionTable").rows.length;
  for(var taskIterator = 0; taskIterator < tableLength - 1; taskIterator++) {
      if (iterator == 0) {
        var statusSelect = document.getElementById("question-round-one-status-select-" + taskIterator)
        roundOneResponses.push(statusSelect.options[statusSelect.selectedIndex].value);
      }
      else if (iterator == 1) {
        var newDate = new Date(document.getElementById("mtf-plan-start-date-" + taskIterator).value);
        roundTwoResponses.push(newDate);
      }
      else if (iterator == 2) {
        var number = document.getElementById("mtf-plan-number-" + taskIterator).value;
        roundThreeResponses.push(number)
      }
      else if (iterator == 3) {
        var number = document.getElementById("mtf-plan-freq-" + taskIterator).value;
        roundFourResponses.push(number)
      }

  }
}


function formatTableCellFromObjRoundOne(question, index, arr) {
  var selectStatusOptionHTML = ""
      selectStatusOptionHTML += "<option selected='true' value='NEEDS-SCHEDULING'>Yes, I haven't scheduled it</option>"; 
      selectStatusOptionHTML += "<option value='SCHEDULED'>Yes, I have scheduled this.</option>"; 
      selectStatusOptionHTML += "<option value='IN-PROGRESS'>Yes, this is in progress.</option>"; 
      selectStatusOptionHTML += "<option value='TBD'>I haven't decided</option>"; 
      selectStatusOptionHTML += "<option value='DONE'>Yes, I already did this.</option>"; 
      selectStatusOptionHTML += "<option value='WILL-NOT-DO'>No, I won't do this</option>"; 
  var tableRow = "<tr>" + 
  "<td>" + question + "</td>" +
  "<td><select name='question-round-one-status-" + index + "' id='question-round-one-status-select-" + index + "'>" + selectStatusOptionHTML + "</select></td>";
  allQuestionHTML += tableRow;
}

function formatTableCellFromObjRoundTwo(question,index,arr) {
  var answer = answersRoundTwo[index];
  var disabledText = "";
  if (roundOneResponses[index] === "WILL-NOT-DO") {
    disabledText = " disabled";
  }
  var tableRow = "<tr>" + 
  "<td>" + question + "</td>" +
  "<td><input type='date' id='mtf-plan-start-date-" + index + "' value='" + answer.toISOString().split('T')[0] + "'" + disabledText + "></input></td>"
  allQuestionHTML += tableRow;
}

function formatTableCellFromObjRoundThree(question,index,arr) {
  var answer = answersRoundThree[index];
  var disabledText = "";

  //Mapping from earlier questions
  var roundOneQuestionIndex = [9, 10, 11, 12, 13]

  if (roundOneResponses[roundOneQuestionIndex[index]] === "WILL-NOT-DO") {
    disabledText = " disabled";
  }
  var tableRow = "<tr>" + 
  "<td>" + question + "</td>" +
  "<td><input type='number' id='mtf-plan-number-" + index + "' value='" + answer + "'" + disabledText + "></input></td>"
  allQuestionHTML += tableRow;
}

function formatTableCellFromObjRoundFour(question,index,arr) {
  var answer = answersRoundFour[index];
  var disabledText = "";

  //Mapping from earlier questions
  var roundOneQuestionIndex = [10, 11]

  if (roundOneResponses[roundOneQuestionIndex[index]] === "WILL-NOT-DO") {
    disabledText = " disabled";
  }
  var tableRow = "<tr>" + 
  "<td>" + question + "</td>" +
  "<td><input type='number' id='mtf-plan-freq-" + index + "' value='" + answer + "'" + disabledText + "></input></td>"
  allQuestionHTML += tableRow;
}

function nextMtFButton(iterator) {
  parseMtFQuestionTableToJSON(iterator);
  iterator += 1;

  if (iterator == 4) {
    //Use all the responses, there will be a lot of them
    generateAndRenderMtFPlan(
      roundTwoResponses[0], roundOneResponses[0],
      roundTwoResponses[1], roundOneResponses[1],
      roundTwoResponses[2], roundOneResponses[2],
      roundTwoResponses[3], roundOneResponses[3],
      roundTwoResponses[4], roundOneResponses[4],
      roundTwoResponses[5], roundOneResponses[5],
      roundTwoResponses[6], roundOneResponses[6],
      roundTwoResponses[7], roundOneResponses[7],
      roundTwoResponses[8], roundOneResponses[8],
      roundTwoResponses[9], 
      roundThreeResponses[0], roundOneResponses[9],
    roundTwoResponses[10],
    roundFourResponses[0],
    roundThreeResponses[1], roundOneResponses[10],
    roundTwoResponses[11],
    roundThreeResponses[2],
    roundFourResponses[1], roundOneResponses[11],
    roundTwoResponses[12],
    roundThreeResponses[3], roundOneResponses[12],
    roundTwoResponses[13], roundThreeResponses[4], roundOneResponses[13]
      
      );
    mtfModal.style.display = "none";
  }

  formatTableQuestions(iterator);
}

function formatTableQuestions(iterator) {
  var div = document.getElementById('mtfQuestions');
  allQuestionHTML = '<table id="mtfQuestionTable" class="table table-striped">';
  if (iterator == 0) {
    allQuestionHTML += '<tr><th>Are you planning to:</th><th>Answer</th></tr>'
    questionsRoundOne.forEach(formatTableCellFromObjRoundOne)
  }
  else if (iterator == 1) {
    allQuestionHTML += '<tr><th>When will you:</th><th>Date</th></tr>'
    questionsRoundTwo.forEach(formatTableCellFromObjRoundTwo)
  }
  else if (iterator == 2) {
    allQuestionHTML += '<tr><th>How Many:</th><th>Date</th></tr>'
    questionsRoundThree.forEach(formatTableCellFromObjRoundThree)
  }
  else if (iterator == 3) {
    allQuestionHTML += '<tr><th>How Many Days Between:</th><th>Date</th></tr>'
    questionsRoundFour.forEach(formatTableCellFromObjRoundFour)
  }


  allQuestionHTML += "</table>"

    allQuestionHTML += "<button id='nextMtFQuestion' onClick=nextMtFButton(" + iterator + ")>Next</button>"
  

  // else if (iterator == 3) {
  //   <button id="generateMtF">Generate New MtF Plan</button>
  // }


  div.innerHTML = allQuestionHTML;

  

}


// Get the modal
var mtfModal = document.getElementById("mtfModal");


// Get the button that opens the modal
var btn = document.getElementById("newMtFModalButton");

var newPlanButton = document.getElementById("generateMtF");


// When the user clicks on the button, open the modal
btn.onclick = function() {
  formatTableQuestions(0);
  mtfModal.style.display = "block";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mtfModal) {
    mtfModal.style.display = "none";
  }
}