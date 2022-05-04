
function parseTableToJSON() {

    var tableLength = document.getElementById("editPlanTable").rows.length;

    var allTasks = [];

    for(var taskIterator = 0; taskIterator < tableLength - 1; taskIterator++) {
      
        var statusSelect = document.getElementById("status-select-" + taskIterator)

            var newTask = {
                "startDate": new Date(document.getElementById("start-" + taskIterator).value),
                "endDate": new Date(document.getElementById("end-" + taskIterator).value),
                "taskName": document.getElementById("name-" + taskIterator).value,
                "status": statusSelect.options[statusSelect.selectedIndex].value,
                //"status": document.getElementById("status-" + taskIterator).options[getElementById("status-" + taskIterator).selectedIndex].value,
            //"status": document.getElementById("status-select-" + taskIterator).options[getElementById("status-select-" + taskIterator).selectedIndex].value,
            
            }
            allTasks.push(newTask);
    }

    ganttChartJSON.tasks = allTasks;

}