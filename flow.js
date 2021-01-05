/* 
Notes

- Find way to add hyperlinks to buttons 
- I only started adding <add hyperlinks> to corresponding questions
  - find and fix older ones
- create function to check if every object has at least 1 reference somewhere
- Contextual back button mechanism, specifically for "Accepted flight identification"
*/



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

  /* "Federal Limits Apply" */
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
  },

  /* Firearms and ammunition */
  "firearms-and-ammunition": {
    says: ["If you plan to purchase firearms or ammunition with a Federal Non-Compliant driver license/ID card, you may need to show satisfactory proof of legal presence.", 
           "Contact the firearms dealer you plan to visit to verify their identification requirements."],
    reply: [
      {
        question: "REAL ID",
        answer: "real-id-start"
      },
      {
        question: "Driver License/Identification (ID) Card",
        answer: "dl-identification-card"
      },
      {
        question: "Vehicle Registration",
        answer: "vehicle-registration"
      },
    ]
  },

  /* Driver License/Identification Card */
  "dl-identification-card": {
    says: ["Please select one of the options below or type a driver license/ID card related question to get started."],
    reply: [
      {
        question: "Driver License Extension FAQs",
        answer: "dl-extension-faqs"
      },
      {
        question: "Driver License/ID Card Renewal",
        answer: "dl-renewal"
      },
      {
        question: "Lost/Stolen Driver License/ID Card",
        answer: "lost-stolen-dl"
      },
      {
        question: "Prepare for Your Office Visit",
        answer: "prepare-office-visit"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },  

  /* Apply for a REAL ID */
  "apply-for-real-id": {
    says: ["Are you ready to apply for a REAL ID driver license or identification card? I can help you navigate the process."],
    reply: [
      {
        question: "REAL ID Step by Step Video",
        answer: "real-id-video"
      },
      {
        question: "Documents",
        answer: "real-id-documents"
      },
      {
        question: "Fees",
        answer: "real-id-fees"
      },
      {
        question: "Prepare for Your Office Visit",
        answer: "prepare-office-visit"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },

  /* Why is it called "REAL ID" */
  "why-real-id": {
    says: ["The term \"REAL ID\" came from federal regulations.", 
           "If you do not have a REAL ID driver license or identification card, it does not mean your card is fake."],
    reply: [
      {
        question: "REAL ID vs. Federal Non-Compliant",
        answer: "real-id-vs-federal"
      },
      {
        question: "Accepted flight identification",
        answer: "accepted-flight-identification"
      },
      {
        question: "Back",
        answer: "apply-for-real-id"
      },
    ]
  },

  /* Is a REAL ID one card */
  "real-id-one-card": {
    says: ["A REAL ID is either a driver license or identification card.", 
           "The REAL ID is not a separate or different card from your driver license or identification card."],
    reply: [
      {
        question: "Back",
        answer: "why-real-id"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* What is a domestic flight */
  "domestic-flight": {
    says: ["A domestic flight departs and arrives within the United States, including to and from Alaska, Hawaii, and U.S. Territories.", 
           "After October 1, 2021, you must use a REAL ID or other acceptable flight identification for domestic flights."],
    reply: [
      {
        question: "Accepted flight identification",
        answer: "accepted-flight-identification"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },

  /* Change of Address */
  "change-of-address": {
    says: ["You can change your address online or by mail."],
    reply: [
      {
        question: "Change Address Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Change Address by Mail",
        answer: "<add hyperlink>"
      },
      {
        question: "Will I get a new card",
        answer: "new-card"
      },
      {
        question: "Change of Address Status",
        answer: "change-of-address-status"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Vehicle Registration */
  "vehicle-registration": {
    says: ["Please select one of the options below or type a vehicle registration related question to get started."],
    reply: [
      {
        question: "Vehicle Registration FAQs",
        answer: "<add hyperlink>"
      },
      {
        question: "Vehicle Registration Renewal",
        answer: "vehicle-registration-renewal"
      },
      {
        question: "Replacement Registration Items",
        answer: "replacement-registration-items"
      },
      {
        question: "Prepare for Your Office Visit",
        answer: "prepare-office-visit"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },

  /* Driver License/ID Card Renewal */
  "dl-renewal": {
    says: ["Renewal notices are sent by mail to the current address on record 120 days prior to the expiration date on your driver license/ID card.", 
           "Your renewal notice will state if you're eligible to renew online, by mail, or if you must visit an office."],
    reply: [
      {
        question: "Driver License Extension FAQs",
        answer: "<add hyperlink>"
      },
      {
        question: "Renew Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Renewal by Mail Eligibility",
        answer: "<add hyperlink>"
      },
      {
        question: "Apply for REAL ID",
        answer: "apply-for-real-id"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },

  /* Accepted flight identification */
  "accepted-flight-identification": {
    says: ["Examples of accepted flight identification include a driver license or identification card (must be a REAL ID starting October 1, 2021), a U.S. passport book or card, Department of Homeland Security trusted traveler card, or permanent resident card."],
    reply: [
      {
        question: "Visit TSA.gov for more options",
        answer: "<add hyperlink>"
      },
      {
        // Add contextual back
        question: "Back",
        answer: "start"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Do I need a REAL ID */
  "Do I need a REAL ID": {
    says: ["A REAL ID card can be used for domestic flights within the U.S., and to enter secure federal facilities or military bases beginning October 1, 2021."],
    reply: [
      {
        question: "Do I need a REAL ID Quiz",
        answer: "<add hyperlink>"
      },
      {
        question: "What is a domestic flight",
        answer: "domestic-flight"
      },
      {
        question: "Secure federal facilities",
        answer: "secure-federal-facilities"
      },
      {
        question: "Back",
        answer: "Start"
      },
    ]
  },

  /* Secure federal facilities */
  "secure-federal-facilities": {
    says: ["Secure federal facilities include military bases and federal courthouses. Contact the federal facility you plan to visit to verify their identification requirements."],
    reply: [
      {
        question: "Back",
        answer: "start"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Request Records */
  "request-records": {
    says: ["You can request a driver or vehicle record online or by mail."],
    reply: [
      {
        question: "Request Driver Record Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Request Vehicle Record Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Request Records by Mail",
        answer: "<add hyperlink>"
      },
      {
        question: "REAL ID",
        answer: "real-id-start"
      },
      {
        question: "Driver License/Identification (ID) Card",
        answer: "dl-identification-card"
      },
      {
        question: "Vehicle Registration",
        answer: "vehicle-registration"
      },
    ]
  },

  /* Will I get a new card */
  "new-card": {
    says: ["You won't receive a new card when you change your address."],
    reply: [
      {
        // add contextual back
        question: "Back",
        answer: "start"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Lost/Stolen Driver License/ID Card */
  "lost-stolen-card": {
    says: ["You can replace a lost, stolen, or damaged driver license online. ID cards require an office visit. You don't need to report it lost or stolen to DMV.", 
           "If you lost your card while outside of California, please call the Issuance Unit at 1-916-657-7790."],
    reply: [
      {
        question: "Request Duplicate Driver License",
        answer: "<add hyperlink>"
      },
      {
        question: "How to Request a Duplicate ID Card",
        answer: "<add hyperlink>"
      },
      {
        question: "Lost/Damaged Permit",
        answer: "lost-damaged-permit"
      },
      {
        question: "Back",
        answer: "start"
      },
    ]
  },

  /* Documents */
  "real-id-documents": {
    says: ["To apply for a REAL ID driver license or identification card, federal regulations require you to present 1 identity document, 2 residency documents, and 1 Social Security document."],
    reply: [
      {
        question: "Identity",
        answer: "real-id-identity"
      },
      {
        question: "Residency",
        answer: "real-id-residency"
      },
      {
        question: "Social Security",
        answer: "real-id-social-security"
      },
      {
        question: "Back",
        answer: "real-id-start"
      },
    ]
  },

  /* Identity */
  "real-id-identity": {
    says: ["You must bring 1 identity document to apply for a REAL ID.", 
           "It must be an original or certified copy. Examples include an unexpired U.S. passport or passport card.", 
           "View the REAL ID Document List below for more documents."],
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
      {
        question: "",
        answer: ""
      },
    ]
  },

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
  },
  */

} // end of conversation object