function FtMPlanObject(    
    hormoneStartDate, hormoneStatus,
    comeOutDate, comeOutStatus,
    socialTransitionStartDate, socialTransitionStatus,
    topSurgeryStartDate, topStatus,
    bottomSurgeryStartDate, bottomStatus,
    nameChangeDate, nameChangeStatus,
    counselingStartDate,
    counselingDaysBetween,
    counselingNumberSessions, counselingStatus,
    consultationStartDate,
    consultationNumberAppointments, consultationStatus,
    bloodTestStartDate, bloodTestNumber, bloodTestStatus,
    ) {
        this.hormoneStartDate=  hormoneStartDate ; 
        this.hormoneStatus=   hormoneStatus;
    
        this.comeOutDate=  comeOutDate ; 
        this.comeOutStatus=  comeOutStatus ;
        this.socialTransitionStartDate=  socialTransitionStartDate ; 
        this.socialTransitionStatus=  socialTransitionStatus ;
        this.topSurgeryStartDate=  topSurgeryStartDate ; 
        this.topStatus=  topStatus ;
        this.bottomSurgeryStartDate=  bottomSurgeryStartDate ; 
        this.bottomStatus= bottomStatus  ;
        this.nameChangeDate= nameChangeDate  ; 
        this.nameChangeStatus= nameChangeStatus  ;
        this.counselingStartDate=  counselingStartDate ;
        this.counselingDaysBetween= counselingDaysBetween  ;
        this.counselingNumberSessions=  counselingNumberSessions ; 
        this.counselingStatus=  counselingStatus ;
        this.consultationStartDate=  consultationStartDate ;
        this.consultationNumberAppointments= consultationNumberAppointments  ;
        this.consultationStatus=  consultationStatus ;
        this.bloodTestStartDate= bloodTestStartDate  ; 
        this.bloodTestNumber= bloodTestNumber  ; 
        this.bloodTestStatus= bloodTestStatus;
    }

    //Define some manual table elements to collect
//Are you planning to:
var questionsRoundOneFtM = 
[ 
  "Take Masculine hormones (Testosterone)?",
  "Come out publicly as male?",
  "Socially transition to male?",
  "Seek Top (aka Breast) Surgery?",
  "Seek Bottom (aka Phalloplasty) Surgery?",
  "Legally Change Your Name?",
  "Get Mental Health Counseling? (My biased opinion) you really should.",
  "Consult with a physician?",
  "Get regular blood tests?",
 ]

 function getAnswersRoundOneFtM() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.FtMPlanObject.hormoneStatus,
            ganttChartJSON.FtMPlanObject.comeOutStatus,
            ganttChartJSON.FtMPlanObject.socialTransitionStatus,
            ganttChartJSON.FtMPlanObject.topStatus,
            ganttChartJSON.FtMPlanObject.bottomStatus,
            ganttChartJSON.FtMPlanObject.nameChangeStatus,
            ganttChartJSON.FtMPlanObject.counselingStatus,
            ganttChartJSON.FtMPlanObject.consultationStatus,
            ganttChartJSON.FtMPlanObject.bloodTestStatus,
        ]
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
 ];
}

 //When will you:
 var questionsRoundTwoFtM = [
   "Start HRT?",
   "Come out publicly?",
   "Start Social Transition?",
   "Schedule Top Surgery?",
   "Schedule Bottom Surgery?  Typically this requires a year or two of social transition + counseling.",
   "Start the Legal Name Change?",
   "Start Counseling?",
   "Start Physician Consultations?",
   "Start Blood Tests?",
 ]


 function getAnswersRoundTwoFtM() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.FtMPlanObject.hormoneStartDate,
            ganttChartJSON.FtMPlanObject.comeOutDate,
            ganttChartJSON.FtMPlanObject.socialTransitionStartDate,
            ganttChartJSON.FtMPlanObject.topSurgeryStartDate,
            ganttChartJSON.FtMPlanObject.bottomSurgeryStartDate,
            ganttChartJSON.FtMPlanObject.nameChangeDate,
            ganttChartJSON.FtMPlanObject.counselingStartDate,
            ganttChartJSON.FtMPlanObject.consultationStartDate,
            ganttChartJSON.FtMPlanObject.bloodTestStartDate,
            
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
        new Date(today.getTime()+(700 * msInDay)),
        new Date(today.getTime()+(500 * msInDay)),
        new Date(today.getTime()+(1 * msInDay)),
        new Date(today.getTime()+(1 * msInDay)),
        new Date(today.getTime()+(1 * msInDay)),
        ]
    }
}
 //How many:

 var questionsRoundThreeFtM = [
  "Counseling Sessions are you planning? If you don't know just leave this at 80.",
    "Consultations are you planning? These drop off in frequency over time and are usually every 3 months to start.",
    "Blood Tests are you planning? Typically these are once a month to start and less frequent over time."
 ]


 function getAnswersRoundThreeFtM() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.FtMPlanObject.counselingNumberSessions,
            ganttChartJSON.FtMPlanObject.consultationNumberAppointments,
            ganttChartJSON.FtMPlanObject.bloodTestNumber,
       ];
    }
    else {
        return [
            80,
          10,
         22
         ]
    }
 }

//How frequently:

var questionsRoundFourFtM = [
  "Counseling Sessions?"
]

function getAnswersRoundFourFtM() {
    if (ganttChartJSON != null) {
        return [
            ganttChartJSON.FtMPlanObject.counselingDaysBetween,
        ];
    }
    else {
        return [
            14,
            30
          ]
    }
}

