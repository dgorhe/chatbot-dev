var flow = {
  
  /* Main Menu */
  "start": {
    says: ["Hello I'm Miles the California DMV's Virtual Assistant", 
           "I'm here to answer your DMV related questions.", 
           "For faster service, please select one of the options below. You may also type a question to get started."],
    reply: [
      {
        question: "Online Services",
        answer: "online-services"
      },
      {
        question: "Real ID",
        answer: "real-id"
      },
      {
        question: "Driver License/Identification (ID) Card",
        answer: "dl-id-card"
      }
    ]
  },


  /* REAL ID */
  "real-id-start": {
    says: ["Please select one of the options below or type a REAL ID related question to get started."],
    reply: [
      {
        question: "What is REAL ID",
        answer: "real-id-explanation"
      },
      {
        question: "Do I need a Real ID",
        answer: "real-id-requirements"
      },
      {
        question: "Get a Real ID",
        answer: "get-real-id"
      },
      {
        question: "Back",
        answer: "start"
      }
    ]
  },


  /* REAL ID vs. Federal Non-Compliant */
  "real-id-explanation": {
    says: ["REAL ID is a driver's license or identification card that is also a federally accepted form of identification.", 
          "Beginning October 1, 2021, it can be used to board flights within the U.S. and enter secure federal facilities."],
    reply: [
      {
        question: "Real ID vs. Federal Non-Compliant",
        answer: "real-id-vs-federal"
      },
      {
        question: "Why is it called \"REAL ID\"",
        answer: "why-real-id"
      },
      {
        question: "Accepted flight identification",
        answer: "accepted-flight-identification"
      },
      {
        question: "Back",
        answer: "real-id-start"
      }
    ]
  },


  /* Do the cards look different */
  "real-id-vs-federal": {
    says: ["The difference between a REAL ID and Federal Non-Compliant card is the following", 
           "starting October 1, 2021, a REAL ID allows you to board a domestic flight within the United States, and enter secure federal facilities or military bases."],
    reply: [
      {
        question: "Do the cards look different",
        answer: "do-cards-look-different"
      },
      {
        question: "Is a REAL ID one card",
        answer: "real-id-one-card"
      },
      {
        question: "Do I need a REAL ID",
        answer: "need-real-id"
      },
      {
        question: "Back",
        answer: "real-id-explanation"
      }
    ]
  },


  /* Do the cards look different */
  "do-cards-look-different": {
    says: ["A REAL ID is a federally compliant driver license or identification card that has a symbol of a bear and a star in the top right corner.", 
           "A Federal Non-Compliant card will have \"Federal Limits Apply\" in the top right corner."],
    reply: [
      {
        question: "\"Federal Limits Apply\"",
        answer: "federal-limits-apply"
      },
      {
        question: "Back",
        answer: "real-id-vs-federal"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Accepted flight identification */
  "federal-limits-apply": {
    says: ["It means that your driver license or identification card cannot be used as a form of identification for official federal purposes.", 
           "Additional identification may be required."],
    reply: [
      {
        question: "Accepted flight identification",
        answer: "accepted-flight-identification"
      },
      {
        question: "Back",
        answer: "do-cards-look-different"
      },
    ]
  }

  /* Template
  "": {
    says: [],
    reply: [
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      },
      {
        question: "",
        answer: ""
      },
    ]
  }
  */

} // end of conversation object