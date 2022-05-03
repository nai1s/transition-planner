
function renderGanttChart(tasks, taskNames, taskStatus, minDate, maxDate) {
    

    var format = "%Y %B";

    var gantt = d3.gantt().taskTypes(taskNames).taskStatus(taskStatus).tickFormat(format).timeDomain([minDate, maxDate]);
    gantt(tasks);
}