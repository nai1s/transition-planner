


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
    var muscleMass = "Decreased Muscle Mass";
    var skinSoften = "Skin Softening";
    var breastGrowth = "Breast Growth";
    var smallerTestes = "Smaller Testes";
    var decreasedLibido = "Decreased Libido";
    var decreasedErections = "Decreased Erections";
    var moodChanges = "Mood Changes";
    var baldness = "Baldness Loss Stops";
    var bodyHair = "Thinning Body Hair";
    var maleSexDysfunction = "Male sexual dysfunction";
    var decreasedSperm = "Lower sperm production";

var taskNamesInOriginalOrder = [ comeOut, spermCryoLabel, hormonesLabel, lasersLabel, 
    consultation, counseling, bloodTest,
    speechTherapySession, socialTransition, legalNameChange,  
    hairTransplantLabel, ffsLabel, topSurgery, bottomSurgery, 
    bodyFat, muscleMass, skinSoften, breastGrowth, smallerTestes, decreasedErections, 
    decreasedLibido, moodChanges, baldness, bodyHair, maleSexDysfunction, decreasedSperm  
];

function generateAndRenderMtFPlan(
    spermCryoStartDate, spermCryoStatus,
    hormoneStartDate, hormoneStatus,
    comeOutDate, comeOutStatus,
    socialTransitionStartDate, socialTransitionStatus,
    hairTransplantDate, hairTransplantStatus,
    ffsStartDate, ffsStatus,
    topSurgeryStartDate, topStatus,
    bottomSurgeryStartDate, bottomStatus,
    nameChangeDate, nameChangeStatus,
    laserStartDate, 
    numberLaserAppointments, laserStatus,
    counselingStartDate,
    counselingDaysBetween,
    counselingNumberSessions, counselingStatus,
    speechTherapyStartDate,
    speechTherapyNumberSessions,
    speechTherapyDaysBetween, speechTherapyStatus,
    consultationStartDate,
    consultationNumberAppointments, consultationStatus,
    bloodTestStartDate, bloodTestNumber, bloodTestStatus
    ) {
ganttChartJSON = GenerateMtFTransitionPlannerJSON(
    spermCryoStartDate, spermCryoStatus,
    hormoneStartDate, hormoneStatus,
    comeOutDate, comeOutStatus,
    socialTransitionStartDate, socialTransitionStatus,
    hairTransplantDate, hairTransplantStatus,
    ffsStartDate, ffsStatus,
    topSurgeryStartDate, topStatus,
    bottomSurgeryStartDate, bottomStatus,
    nameChangeDate, nameChangeStatus,
    laserStartDate, 
    numberLaserAppointments, laserStatus,
    counselingStartDate,
    counselingDaysBetween,
    counselingNumberSessions, counselingStatus,
    speechTherapyStartDate,
    speechTherapyNumberSessions,
    speechTherapyDaysBetween, speechTherapyStatus,
    consultationStartDate,
    consultationNumberAppointments, consultationStatus,
    bloodTestStartDate, bloodTestNumber, bloodTestStatus
    );
renderGanttChart( );
document.getElementById('editPlanModalButton').style.display = "block";
}




function GenerateMtFTransitionPlannerJSON(
    spermCryoStartDate, spermCryoStatus,
    hormoneStartDate, hormoneStatus,
    comeOutDate, comeOutStatus,
    socialTransitionStartDate, socialTransitionStatus,
    hairTransplantDate, hairTransplantStatus,
    ffsStartDate, ffsStatus,
    topSurgeryStartDate, topStatus,
    bottomSurgeryStartDate, bottomStatus,
    nameChangeDate, nameChangeStatus,
    laserStartDate, 
    numberLaserAppointments, laserStatus,
    counselingStartDate,
    counselingDaysBetween,
    counselingNumberSessions, counselingStatus,
    speechTherapyStartDate,
    speechTherapyNumberSessions,
    speechTherapyDaysBetween, speechTherapyStatus,
    consultationStartDate,
    consultationNumberAppointments, consultationStatus,
    bloodTestStartDate, bloodTestNumber, bloodTestStatus
    ) {


    //Month is 0-indexed
    var spermCryoStart = spermCryoStartDate;
    var spermCryoEnd = new Date(spermCryoStart.getTime()+(14 * msInDay));
    

    var hrtStart = hormoneStartDate;
    var laserStart = laserStartDate;
    
    var comeOutStart = comeOutDate;
    var comeOutEnd = new Date(comeOutDate.getTime()+(2 * msInDay));

    var socialTransitionStart = socialTransitionStartDate
    var socialTransitionEnd = new Date(socialTransitionStartDate.getTime()+(365 * msInDay));


    var hrtEnd = new Date(hrtStart.getTime()+(1 * msInDay));
    var hairTransplantStart = hairTransplantDate
    var hairTransplantEnd = new Date(hairTransplantDate.getTime()+(1 * msInDay));

    var ffsStart = ffsStartDate
    var ffsEnd = new Date(ffsStart.getTime()+(1 * msInDay));

    var topStart = topSurgeryStartDate;
    var topEnd = new Date(topSurgeryStartDate.getTime()+(1 * msInDay));

    var bottomStart = bottomSurgeryStartDate;
    var bottomEnd = new Date(bottomStart.getTime()+(1 * msInDay));

    var nameChangeStart = nameChangeDate
    var nameChangeEnd = new Date(nameChangeDate.getTime()+(90 * msInDay));


    var chartEnd = new Date(hrtStart.getTime()+(1200 * msInDay));

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
        {"startDate": spermCryoStart,"endDate": spermCryoEnd,"taskName": spermCryoLabel,"status":spermCryoStatus},
        {"startDate": hrtStart,"endDate":hrtEnd,"taskName":hormonesLabel,"status":hormoneStatus},
        {"startDate": nameChangeStart,"endDate":nameChangeEnd,"taskName":legalNameChange,"status":nameChangeStatus},
        {"startDate": comeOutStart,"endDate":comeOutEnd,"taskName":comeOut,"status":comeOutStatus},
        {"startDate": socialTransitionStart,"endDate":socialTransitionEnd,"taskName":socialTransition,"status":socialTransitionStatus},
        {"startDate": hairTransplantStart,"endDate": hairTransplantEnd,"taskName": hairTransplantLabel,"status":hairTransplantStatus},
        {"startDate": ffsStart,"endDate": ffsEnd,"taskName": ffsLabel,"status":ffsStatus},
        {"startDate": topStart,"endDate": topEnd,"taskName": topSurgery,"status":topStatus},
        {"startDate": bottomStart,"endDate": bottomEnd,"taskName": bottomSurgery,"status":bottomStatus},
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
    for(var i = 0; i < numberLaserAppointments; i++) {
        
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
        tasks.push({"startDate": lasersAptStart[i],"endDate":  lasersAptEnd[i],"taskName": lasersLabel,"status":laserStatus},)
    }

    var counselingStarts = counselingStartDate;
    var counselingAptsStart = [];
    var counselingAptsEnd = [];
    for(var i = 0; i < counselingNumberSessions; i++) {
        
        var daysBetweenApts = counselingDaysBetween;

        counselingAptsStart[i] = new Date(counselingStarts.getTime()+(daysBetweenApts * i * msInDay));
        counselingAptsEnd[i] = new Date(counselingAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": counselingAptsStart[i],"endDate":  counselingAptsEnd[i],"taskName": counseling,"status":counselingStatus},)
    }

    var speechTherapyStart = speechTherapyStartDate;
    var speechTherapyAptsStart = [];
    var speechTherapyAptsEnd = [];
    for(var i = 0; i < speechTherapyNumberSessions; i++) {
        
        var daysBetweenApts = speechTherapyDaysBetween;

        speechTherapyAptsStart[i] = new Date(speechTherapyStart.getTime()+(daysBetweenApts * i * msInDay));
        speechTherapyAptsEnd[i] = new Date(speechTherapyAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": speechTherapyAptsStart[i],"endDate":  speechTherapyAptsEnd[i],"taskName": speechTherapySession,"status":speechTherapyStatus},)
    }

    var consultationStart = consultationStartDate;
    var consultationAptsStart = [];
    var consultationAptsEnd = [];
    for(var i = 0; i < consultationNumberAppointments; i++) {
        
        var daysBetweenApts = 90;
        consultationAptsStart[i] = new Date(consultationStart.getTime()+(daysBetweenApts * i * msInDay));
        if (i > 6) {
            daysBetweenApts = 180;
            consultationAptsStart[i] = new Date(consultationAptsStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }

        consultationAptsEnd[i] = new Date(consultationAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": consultationAptsStart[i],"endDate":  consultationAptsEnd[i],"taskName": consultation,"status":consultationStatus},)
    }

    var bloodTestStart =  bloodTestStartDate;
    var bloodTestAptsStart = [];
    var bloodTestAptsEnd = [];
    for(var i = 0; i < bloodTestNumber; i++) {
        
        var daysBetweenApts = 30;
        bloodTestAptsStart[i] = new Date(bloodTestStart.getTime()+(daysBetweenApts * i * msInDay));
        if (i > 12) {
            daysBetweenApts = 90;
            bloodTestAptsStart[i] = new Date(bloodTestAptsStart[i-1].getTime()+(daysBetweenApts * msInDay));
        }

        bloodTestAptsEnd[i] = new Date(bloodTestAptsStart[i].getTime()+(1 * msInDay));
        tasks.push({"startDate": bloodTestAptsStart[i],"endDate":  bloodTestAptsEnd[i],"taskName": bloodTest,"status":bloodTestStatus},)
    }

    //Remove any tasks that have the status of "won't do"

    //Remove all the onset/BEFORE/MAX effect tasks if hormones aren't selected


    var taskStatus = {
        "NEEDS-SCHEDULING" : "bar-needs-scheduling",
        "SCHEDULED" : "bar-scheduled",
        "IN-PROGRESS" : "bar-in-progress",
        "BEFORE" : "bar-before-mtf",
        "ONSET": "bar-onset-mtf",
        "MAX-EFFECT" : "bar-max-effect-mtf",
        "TBD" : "bar-tbd",
        "VARIABLE" : "bar-variable",
        "DONE" : "bar-done"
    };

    var taskNames = taskNamesInOriginalOrder;

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