//This global variable gets set by upload or new plan generation.
var ganttChartJSON;

function renderGanttChart() {
    

    var format = "%Y %B";

    var gantt = d3.gantt().taskTypes(ganttChartJSON.taskNames).taskStatus(ganttChartJSON.taskStatus).tickFormat(format).timeDomain([ganttChartJSON.minDate, ganttChartJSON.maxDate]);
    gantt(ganttChartJSON.tasks);
}