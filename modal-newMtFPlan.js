




var allQuestionHTML = "";

var roundOneResponses = [];
var roundTwoResponses = [];
var roundThreeResponses = [];
var roundFourResponses = [];

var answersRoundOne = [];
var answersRoundTwo = [];
var answersRoundThree = [];
var answersRoundFour = [];

function initMtFModal() {
   answersRoundOne = getAnswersRoundOne();
   answersRoundTwo = getAnswersRoundTwo();
   answersRoundThree = getAnswersRoundThree();
   answersRoundFour = getAnswersRoundFour();
}


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


  var answer = answersRoundOne[index];

  var selectStatusOptionHTML = ""

      if(answer === "NEEDS-SCHEDULING")
        selectStatusOptionHTML += "<option selected='true' value='NEEDS-SCHEDULING'>Yes, I haven't scheduled it</option>"; 
      else
        selectStatusOptionHTML += "<option value='NEEDS-SCHEDULING'>Yes, I haven't scheduled it</option>"; 

      if(answer === "SCHEDULED")
      selectStatusOptionHTML += "<option selected='true' value='SCHEDULED'>Yes, I have scheduled this.</option>"; 
      else
      selectStatusOptionHTML += "<option value='SCHEDULED'>Yes, I have scheduled this.</option>"; 

      if (answer == "IN-PROGRESS" )
        selectStatusOptionHTML += "<option selected='true' value='IN-PROGRESS'>Yes, this is in progress.</option>"; 
      else 
        selectStatusOptionHTML += "<option value='IN-PROGRESS'>Yes, this is in progress.</option>"; 

      if (answer == "TBD" )
      selectStatusOptionHTML += "<option selected='true' value='TBD'>I haven't decided</option>"; 
      else 
      selectStatusOptionHTML += "<option value='TBD'>I haven't decided</option>"; 

      if (answer == "DONE" )
      selectStatusOptionHTML += "<option selected='true' value='DONE'>Yes, I already did this.</option>";
      else
      selectStatusOptionHTML += "<option value='DONE'>Yes, I already did this.</option>";

      if (answer == "WILL-NOT-DO" )
      selectStatusOptionHTML += "<option selected='true' value='WILL-NOT-DO'>No, I won't do this</option>"; 
      else
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
    thisMtFPlan = new MtFPlanObject(
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
    roundTwoResponses[13], roundThreeResponses[4], roundOneResponses[13],
      roundTwoResponses[14], roundOneResponses[14],
      roundTwoResponses[15], roundOneResponses[15]
      );

      generateAndRenderMtFPlan(thisMtFPlan);
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
  initMtFModal();
  formatTableQuestions(0);
  mtfModal.style.display = "block";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == mtfModal) {
    mtfModal.style.display = "none";
  }
}