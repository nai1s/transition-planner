

function generateAndRenderMtFPlan(hormoneStartDate) {
ganttChartJSON = GenerateMtFTransitionPlannerJSON(hormoneStartDate);
renderGanttChart( );
formatJSONToEditableTable();
}




function GenerateMtFTransitionPlannerJSON(hormoneStartDate) {

    var msInDay = 24*60*60*1000;

    var spermCryoLabel = "Sperm Cryopreservation";
    var hormonesLabel = "Start Hormone Therapy";
    var lasersLabel = "Laser Hair Removal";

    var hairTransplantLabel = "Hair Transplant";
    var ffsLabel = "Facial Feminization";
    var topSurgery = "Top Surgery";
    var bottomSurgery = "Bottom Surgery";
    var counseling = "Counseling Sessions";
    var bloodTest = "Blood Tests";
    var consultation = "Medical Consultations";
    var comeOut = "Come Out Publicly";
    var legalNameChange = "Legal Name Change";
    var socialTransition = "Social Transition";
    var speechTherapySession = "Speech Therapy Sessions";



    //Medical effects

    var bodyFat = "Body Fat Redistribution";
    var muscleMass = "Decreased Muscle\n Mass/Strength";
    var skinSoften = "Skin Softening";
    var breastGrowth = "Breast Growth";
    var smallerTestes = "Smaller Testes";
    var decreasedLibido = "Decreased Libido";
    var decreasedErections = "Decreased Erections";
    var moodChanges = "Mood Changes";
    var baldness = "Male Pattern Baldness\n Loss Stops";
    var bodyHair = "Thinning Body Hair";
    var maleSexDysfunction = "Male sexual dysfunction";
    var decreasedSperm = "Decreased sperm production";

    //Month is 0-indexed
    var spermCryoStart = new Date();
    var spermCryoEnd = new Date(spermCryoStart.getTime()+(14 * msInDay));
    

    var hrtStart = hormoneStartDate;
    var laserStart = new Date(spermCryoEnd.getTime()+(42 * msInDay));
    
    var comeOutStart = new Date(hrtStart.getTime()+(1 * msInDay));
    var comeOutEnd = new Date(hrtStart.getTime()+(2 * msInDay));

    var socialTransitionStart = new Date(hrtStart.getTime()+(1 * msInDay));
    var socialTransitionEnd = new Date(hrtStart.getTime()+(365 * msInDay));


    var hrtEnd = new Date(hrtStart.getTime()+(1 * msInDay));
    var hairTransplantStart = new Date(hrtStart.getTime()+(365 * msInDay));
    var hairTransplantEnd = new Date(hrtStart.getTime()+(366 * msInDay));

    var ffsStart = new Date(hrtStart.getTime()+(500 * msInDay));
    var ffsEnd = new Date(hrtStart.getTime()+(501 * msInDay));

    var topStart = new Date(hrtStart.getTime()+(600 * msInDay));
    var topEnd = new Date(hrtStart.getTime()+(601 * msInDay));

    var bottomStart = new Date(hrtStart.getTime()+(700 * msInDay));
    var bottomEnd = new Date(hrtStart.getTime()+(701 * msInDay));

    var nameChangeStart = new Date(hrtStart.getTime()+(650 * msInDay));
    var nameChangeEnd = new Date(hrtStart.getTime()+(700 * msInDay));


    var chartEnd = new Date(hrtStart.getTime()+(720 * msInDay));

    var bodyFatStart = new Date(hrtStart.getTime()+(90 * msInDay));
    var bodyFatMaxEffect = new Date(hrtStart.getTime()+(720 * msInDay));

    var muscleMassStart  = new Date(hrtStart.getTime()+(90 * msInDay));
    var muscleMassMaxEffect = new Date(hrtStart.getTime()+(360 * msInDay));

    var skinSoftenStart  = new Date(hrtStart.getTime()+(90 * msInDay));


    var decreasedLibidoStart  = new Date(hrtStart.getTime()+(30 * msInDay));
    var decreasedLibidoMaxEffect = new Date(hrtStart.getTime()+(360 * msInDay));

    var decreasedErectionsStart = new Date(hrtStart.getTime()+(30 * msInDay));
    var decreasedErectionsMaxEffect = new Date(hrtStart.getTime()+(90 * msInDay));

    var breastGrowthStart  = new Date(hrtStart.getTime()+(90 * msInDay));
    var breastGrowthMaxEffect = new Date(hrtStart.getTime()+(720 * msInDay));

    var decreasedTestesStart  = new Date(hrtStart.getTime()+(90 * msInDay));
    var decreasedTestesMaxEffect = new Date(hrtStart.getTime()+(720 * msInDay));

    var thinnedBodyHairStart = new Date(hrtStart.getTime()+(180 * msInDay));
    var thinnedBodyHairMaxEffect = new Date(hrtStart.getTime()+(1080 * msInDay));

    var maleBaldnessStart = new Date(hrtStart.getTime()+(30 * msInDay));
    var maleBaldnessMaxEffect = new Date(hrtStart.getTime()+(360 * msInDay));

    var moodChangesStart = new Date(hrtStart.getTime()+(30 * msInDay));
    var moodChangesMaxEffect = new Date(hrtStart.getTime()+(360 * msInDay));


    var tasks = [
        {"startDate": spermCryoStart,"endDate": spermCryoEnd,"taskName": spermCryoLabel,"status":"NEEDS-SCHEDULING"},
        {"startDate": hrtStart,"endDate":hrtEnd,"taskName":hormonesLabel,"status":"NEEDS-SCHEDULING"},
        {"startDate": nameChangeStart,"endDate":nameChangeEnd,"taskName":legalNameChange,"status":"NEEDS-SCHEDULING"},
        {"startDate": comeOutStart,"endDate":comeOutEnd,"taskName":comeOut,"status":"NEEDS-SCHEDULING"},
        {"startDate": socialTransitionStart,"endDate":socialTransitionEnd,"taskName":socialTransition,"status":"NEEDS-SCHEDULING"},
        {"startDate": hairTransplantStart,"endDate": hairTransplantEnd,"taskName": hairTransplantLabel,"status":"NEEDS-SCHEDULING"},
        {"startDate": ffsStart,"endDate": ffsEnd,"taskName": ffsLabel,"status":"TBD"},
        {"startDate": topStart,"endDate": topEnd,"taskName": topSurgery,"status":"TBD"},
        {"startDate": bottomStart,"endDate": bottomEnd,"taskName": bottomSurgery,"status":"TBD"},
        {"startDate": hrtStart,"endDate": bodyFatStart,"taskName": bodyFat,"status":"BEFORE"},
        {"startDate": bodyFatStart,"endDate": bodyFatMaxEffect,"taskName": bodyFat,"status":"ONSET"},
        {"startDate": bodyFatMaxEffect,"endDate": chartEnd,"taskName": bodyFat,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": muscleMassStart,"taskName": muscleMass,"status":"BEFORE"},
        {"startDate": muscleMassStart,"endDate": muscleMassMaxEffect,"taskName": muscleMass,"status":"ONSET"},
        {"startDate": muscleMassMaxEffect,"endDate": chartEnd,"taskName": muscleMass,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": skinSoftenStart,"taskName": skinSoften,"status":"BEFORE"},
        {"startDate": skinSoftenStart,"endDate": chartEnd,"taskName": skinSoften,"status":"ONSET"},
        {"startDate": hrtStart,"endDate": decreasedLibidoStart,"taskName": decreasedLibido,"status":"BEFORE"},
        {"startDate": decreasedLibidoStart,"endDate": decreasedLibidoMaxEffect,"taskName": decreasedLibido,"status":"ONSET"},
        {"startDate": decreasedLibidoMaxEffect,"endDate": chartEnd,"taskName": decreasedLibido,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": decreasedTestesStart,"taskName": smallerTestes,"status":"BEFORE"},
        {"startDate": decreasedTestesStart,"endDate": decreasedTestesMaxEffect,"taskName": smallerTestes,"status":"ONSET"},
        {"startDate": decreasedTestesMaxEffect,"endDate": chartEnd,"taskName": smallerTestes,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": decreasedLibidoStart,"taskName": decreasedLibido,"status":"BEFORE"},
        {"startDate": decreasedLibidoStart,"endDate": decreasedLibidoMaxEffect,"taskName": decreasedLibido,"status":"ONSET"},
        {"startDate": decreasedLibidoMaxEffect,"endDate": chartEnd,"taskName": decreasedLibido,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": breastGrowthStart,"taskName": breastGrowth,"status":"BEFORE"},
        {"startDate": breastGrowthStart,"endDate": breastGrowthMaxEffect,"taskName": breastGrowth,"status":"ONSET"},
        {"startDate": breastGrowthMaxEffect,"endDate": chartEnd,"taskName": breastGrowth,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": decreasedErectionsStart,"taskName": decreasedErections,"status":"BEFORE"},
        {"startDate": decreasedErectionsStart,"endDate": decreasedErectionsMaxEffect,"taskName": decreasedErections,"status":"ONSET"},
        {"startDate": decreasedErectionsMaxEffect,"endDate": chartEnd,"taskName": decreasedErections,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": thinnedBodyHairStart,"taskName": bodyHair,"status":"BEFORE"},
        {"startDate": thinnedBodyHairStart,"endDate": thinnedBodyHairMaxEffect,"taskName": bodyHair,"status":"ONSET"},
        {"startDate": thinnedBodyHairMaxEffect,"endDate": chartEnd,"taskName": bodyHair,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": maleBaldnessStart,"taskName": baldness,"status":"BEFORE"},
        {"startDate": maleBaldnessStart,"endDate": maleBaldnessMaxEffect,"taskName": baldness,"status":"ONSET"},
        {"startDate": maleBaldnessMaxEffect,"endDate": chartEnd,"taskName": baldness,"status":"MAX-EFFECT"},
        {"startDate": hrtStart,"endDate": moodChangesStart,"taskName": moodChanges,"status":"BEFORE"},
        {"startDate": moodChangesStart,"endDate": moodChangesMaxEffect,"taskName": moodChanges,"status":"ONSET"},
        {"startDate": moodChangesMaxEffect,"endDate": chartEnd,"taskName": moodChanges,"status":"MAX-EFFECT"},

        {"startDate": hrtStart,"endDate": chartEnd,"taskName": maleSexDysfunction,"status":"VARIABLE"},
        {"startDate": hrtStart,"endDate": chartEnd,"taskName": decreasedSperm,"status":"VARIABLE"},
        
    ];
        

    var lasersAptStart = [];
    var lasersAptEnd = [];
    for(var i = 0; i < 18; i++) {
        
        var daysBetweenApts = 30;
        lasersAptStart[i]  = new Date(laserStart.getTime()+(daysBetweenApts * i * msInDay));
        if (i > 6) {
            daysBetweenApts = 42;
            lasersAptStart[i] = new Date(lasersAptStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }
        if (i > 12) {
            daysBetweenApts = 180;
            lasersAptStart[i] = new Date(lasersAptStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }

        
        lasersAptEnd[i] = new Date(lasersAptStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": lasersAptStart[i],"endDate":  lasersAptEnd[i],"taskName": lasersLabel,"status":"NEEDS-SCHEDULING"},)
    }

    var counselingStarts = new Date();
    var counselingAptsStart = [];
    var counselingAptsEnd = [];
    for(var i = 0; i < 100; i++) {
        
        var daysBetweenApts = 14;

        counselingAptsStart[i] = new Date(counselingStarts.getTime()+(daysBetweenApts * i * msInDay));
        counselingAptsEnd[i] = new Date(counselingAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": counselingAptsStart[i],"endDate":  counselingAptsEnd[i],"taskName": counseling,"status":"NEEDS-SCHEDULING"},)
    }

    var speechTherapyStart = new Date();
    var speechTherapyAptsStart = [];
    var speechTherapyAptsEnd = [];
    for(var i = 0; i < 50; i++) {
        
        var daysBetweenApts = 30;

        speechTherapyAptsStart[i] = new Date(speechTherapyStart.getTime()+(daysBetweenApts * i * msInDay));
        speechTherapyAptsEnd[i] = new Date(speechTherapyAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": speechTherapyAptsStart[i],"endDate":  speechTherapyAptsEnd[i],"taskName": speechTherapySession,"status":"NEEDS-SCHEDULING"},)
    }

    var consultationStart = new Date();
    var consultationAptsStart = [];
    var consultationAptsEnd = [];
    for(var i = 0; i < 11; i++) {
        
        var daysBetweenApts = 90;
        consultationAptsStart[i] = new Date(consultationStart.getTime()+(daysBetweenApts * i * msInDay));
        if (i > 6) {
            daysBetweenApts = 180;
            consultationAptsStart[i] = new Date(consultationAptsStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }

        consultationAptsEnd[i] = new Date(consultationAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": consultationAptsStart[i],"endDate":  consultationAptsEnd[i],"taskName": consultation,"status":"NEEDS-SCHEDULING"},)
    }

    var bloodTestStart = new Date();
    var bloodTestAptsStart = [];
    var bloodTestAptsEnd = [];
    for(var i = 0; i < 24; i++) {
        
        var daysBetweenApts = 30;
        bloodTestAptsStart[i] = new Date(bloodTestStart.getTime()+(daysBetweenApts * i * msInDay));
        if (i > 12) {
            daysBetweenApts = 90;
            bloodTestAptsStart[i] = new Date(bloodTestAptsStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }

        bloodTestAptsEnd[i] = new Date(bloodTestAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": bloodTestAptsStart[i],"endDate":  bloodTestAptsEnd[i],"taskName": bloodTest,"status":"NEEDS-SCHEDULING"},)
    }

    //NEEDS-SCHEDULING
    //SCHEDULED
    //IN-PROGRESS
    //ONSET
    //MAX EFFECT

    var taskStatus = {
        "NEEDS-SCHEDULING" : "bar-needs-scheduling",
        "SCHEDULED" : "bar-scheduled",
        "IN-PROGRESS" : "bar-in-progress",
        "BEFORE" : "bar-before",
        "ONSET": "bar-onset",
        "MAX-EFFECT" : "bar-max-effect",
        "TBD" : "bar-tbd",
        "VARIABLE" : "bar-variable"
    };

    var taskNames = [ comeOut, spermCryoLabel, hormonesLabel, lasersLabel, 
        consultation, counseling, bloodTest,
        speechTherapySession, socialTransition, legalNameChange,  
        hairTransplantLabel, ffsLabel, topSurgery, bottomSurgery, 
        bodyFat, muscleMass, skinSoften, breastGrowth, smallerTestes, decreasedErections, 
        decreasedLibido, moodChanges, baldness, bodyHair, maleSexDysfunction, decreasedSperm
        
    ];

    tasks.sort(function(a, b) {
        return a.endDate - b.endDate;
    });
    var maxDate = tasks[tasks.length - 1].endDate;
    tasks.sort(function(a, b) {
        return a.startDate - b.startDate;
    });
    var minDate = tasks[0].startDate;
    
    var jsonVersion = '1.0.1';

    var completedGanttChart = {
        tasks, taskNames, taskStatus, minDate, maxDate, jsonVersion
    }

    return completedGanttChart;

};