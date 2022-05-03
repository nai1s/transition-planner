(function(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        ganttChartJSON = JSON.parse(event.target.result);
        renderGanttChart( );
        // alert_data(obj.name, obj.family);
    }
    
    // function alert_data(name, family){
    //     alert('Name : ' + name + ', Family : ' + family);
    // }
 
    document.getElementById('file').addEventListener('change', onChange);

}());