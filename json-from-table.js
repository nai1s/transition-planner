
function parseTableToJSON() {

    var tableLength = document.getElementById("editPlanTable").rows.length;

    var allTasks = [];

    for(var taskIterator = 0; taskIterator < tableLength - 1; taskIterator++) {
      try {
        var statusSelect = document.getElementById("status-select-" + taskIterator)

            var newTask = {
                "startDate": new Date(document.getElementById("start-" + taskIterator).value),
                "endDate": new Date(document.getElementById("end-" + taskIterator).value),
                "taskName": document.getElementById("name-" + taskIterator).value,
                "status": statusSelect.options[statusSelect.selectedIndex].value,
            
            }
            allTasks.push(newTask);
        }
        catch {
            //TODO - better handling. This will happen if a row was deleted from the table.
        }
    }

    ganttChartJSON.tasks = allTasks;

}