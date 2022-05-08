function MtFPlanObject(    spermCryoStartDate, spermCryoStatus,
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
    bloodTestStartDate, bloodTestNumber, bloodTestStatus) {
        this.spermCryoStartDate = spermCryoStartDate, 
        this.spermCryoStatus=  spermCryoStatus ;
        this.hormoneStartDate=  hormoneStartDate ; 
        this.hormoneStatus=   hormoneStatus;
    
        this.comeOutDate=  comeOutDate ; 
        this.comeOutStatus=  comeOutStatus ;
        this.socialTransitionStartDate=  socialTransitionStartDate ; 
        this.socialTransitionStatus=  socialTransitionStatus ;
        this.hairTransplantDate=  hairTransplantDate ; 
        this.hairTransplantStatus=  hairTransplantStatus ;
        this.ffsStartDate=  ffsStartDate ;
        this.ffsStatus=  ffsStatus ;
        this.topSurgeryStartDate=  topSurgeryStartDate ; 
        this.topStatus=  topStatus ;
        this.bottomSurgeryStartDate=  bottomSurgeryStartDate ; 
        this.bottomStatus= bottomStatus  ;
        this.nameChangeDate= nameChangeDate  ; 
        this.nameChangeStatus= nameChangeStatus  ;
        this.laserStartDate= laserStartDate  ; 
        this.numberLaserAppointments= numberLaserAppointments  ; 
        this.laserStatus=  laserStatus ;
        this.counselingStartDate=  counselingStartDate ;
        this.counselingDaysBetween= counselingDaysBetween  ;
        this.counselingNumberSessions=  counselingNumberSessions ; 
        this.counselingStatus=  counselingStatus ;
        this.speechTherapyStartDate=  speechTherapyStartDate ;
        this.speechTherapyNumberSessions= speechTherapyNumberSessions  ;
        this.speechTherapyDaysBetween=  speechTherapyDaysBetween ; 
        this.speechTherapyStatus=  speechTherapyStatus ;
        this.consultationStartDate=  consultationStartDate ;
        this.consultationNumberAppointments= consultationNumberAppointments  ;
        this.consultationStatus=  consultationStatus ;
        this.bloodTestStartDate= bloodTestStartDate  ; 
        this.bloodTestNumber= bloodTestNumber  ; 
        this.bloodTestStatus= bloodTestStatus;
    }

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

 function getAnswersRoundOne() {
    if (ganttChartJSON != null) {
        return [ganttChartJSON.MtFPlanObject.spermCryoStatus,
            ganttChartJSON.MtFPlanObject.hormoneStatus,
            ganttChartJSON.MtFPlanObject.comeOutStatus,
            ganttChartJSON.MtFPlanObject.socialTransitionStatus,
            ganttChartJSON.MtFPlanObject.hairTransplantStatus,
            ganttChartJSON.MtFPlanObject.ffsStatus,
            ganttChartJSON.MtFPlanObject.topStatus,
            ganttChartJSON.MtFPlanObject.bottomStatus,
            ganttChartJSON.MtFPlanObject.nameChangeStatus,
            ganttChartJSON.MtFPlanObject.laserStatus,
            ganttChartJSON.MtFPlanObject.counselingStatus,
            ganttChartJSON.MtFPlanObject.speechTherapyStatus,
            ganttChartJSON.MtFPlanObject.consultationStatus,
            ganttChartJSON.MtFPlanObject.bloodTestStatus]
    }
    else return [
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING",
    "NEEDS-SCHEDULING"
 ];
}

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


 function getAnswersRoundTwo() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.MtFPlanObject.spermCryoStartDate,
            ganttChartJSON.MtFPlanObject.hormoneStartDate,
            ganttChartJSON.MtFPlanObject.comeOutDate,
            ganttChartJSON.MtFPlanObject.socialTransitionStartDate,
            ganttChartJSON.MtFPlanObject.hairTransplantDate,
            ganttChartJSON.MtFPlanObject.ffsStartDate,
            ganttChartJSON.MtFPlanObject.topSurgeryStartDate,
            ganttChartJSON.MtFPlanObject.bottomSurgeryStartDate,
            ganttChartJSON.MtFPlanObject.nameChangeDate,
            ganttChartJSON.MtFPlanObject.laserStartDate,
            ganttChartJSON.MtFPlanObject.counselingStartDate,
            ganttChartJSON.MtFPlanObject.speechTherapyStartDate,
            ganttChartJSON.MtFPlanObject.consultationStartDate,
            ganttChartJSON.MtFPlanObject.bloodTestStartDate,
            
        ]
    }
    else {
        var today = new Date();

        return [
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
    }
}
 //How many:

 var questionsRoundThree = [
   "Laser Sessions are you planning? 6-12 are common to start with occasional followups, but sometimes more are needed.",
   "Counseling Sessions are you planning? If you don't know just leave this at 50.",
   "Speech Therapy Sessions are you planning?",
   "Consultations are you planning? These drop off in frequency over time and are usually every 3 months to start.",
    "Blood Tests are you planning? Typically these are once a month to start and less frequent over time."
 ]


 function getAnswersRoundThree() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.MtFPlanObject.numberLaserAppointments,
            ganttChartJSON.MtFPlanObject.counselingNumberSessions,
            ganttChartJSON.MtFPlanObject.speechTherapyNumberSessions,
            ganttChartJSON.MtFPlanObject.consultationNumberAppointments,
            ganttChartJSON.MtFPlanObject.bloodTestNumber,
       ];
    }
    else {
        return [
            16,
         80,
         12,
         10,
         22
         ]
    }
 }

//How frequently:

var questionsRoundFour = [
  "Counseling Sessions?",
  "Speech Therapy Sessions?"
]

function getAnswersRoundFour() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.MtFPlanObject.counselingDaysBetween,
            ganttChartJSON.MtFPlanObject.speechTherapyDaysBetween,
        ];
    }
    else {
        return [
            14,
            30
          ]
    }
}

