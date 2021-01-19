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

  /* Online Services */
  // link
  "online-services": {
    says: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://stackoverflow.com/questions/18128504/adding-hyperlink-to-text-in-jquery>This is a test</a>"],
    reply: [
      {
        question: "Start",
        answer: "start"
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

  /* Driver License/Identification (ID) Card */
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
        answer: "prepare-for-office-visit"
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
        answer: "prepare-for-office-visit"
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
        answer: "prepare-for-office-visit"
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
  "do-i-need-a-real-id": {
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
        question: "REAL ID Document List (PDF)",
        answer: "<add hyperlink>"
      },
      {
        question: "Interactive Document Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Name changes",
        answer: "name-changes"
      },
      {
        question: "Back",
        answer: "real-id-documents"
      },
    ]
  },
  
  /* Name changes */
  "name-changes": {
    says: ["If the name on your identity document and proof of social security number is different than your current name, you must bring a document with the new name.", 
           "Multiple name change documents are needed if your name has changed multiple times."],
    reply: [
      {
        question: "REAL ID Document List (PDF)",
        answer: "<add hyperlink>"
      },
      {
        question: "Interactive Document Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "real-id-documents"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Electronic Driver License/ID Card Application */
  "electronic-dl-application": {
    says: ["You can complete the electronic driver license/ID card application online or in the office.", 
           "If you complete the form online, you must create an ID.me account."],
    reply: [
      {
        question: "Electronic Driver License/ID Card Application",
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

  /* Change of Address Status */
  "change-of-address-status": {
    says: ["If you changed your address online, you can view the status after 72 hours."],
    reply: [
      {
        question: "Change Address Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "change-of-status"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },
  
  /* Prepare for your Office Visit */
  "prepare-for-office-visit": {
    says: ["You can use DMV's checklists when preparing for your office visit."],
    reply: [
      {
        question: "Driver License/ID Card Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Vehicle Registration Checklists",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointments",
        answer: "appointments"
      },
      {
        question: "Fees",
        answer: "fees"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Fees */
  "fees": {
    says: ["Fees are available on the DMV Website.", 
           "Please select one of the options below to view DMV fees."],
    reply: [
      {
        question: "Driver License Fees",
        answer: "driver-license-fees"
      },
      {
        question: "Vehicle Registration Fees",
        answer: "vehicle-registration-fees"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Residency */
  "residency": {
    says: ["You must bring 2 residency documents to apply for a REAL ID.", 
           "There are many documents you can use as proof of residency, as long as they match the name and address used in your application.", 
           "View the REAL ID Document List below for more documents."],
    reply: [
      {
        question: "REAL ID Document Checklist (PDF)",
        answer: "<add hyperlink>"
      },
      {
        question: "Interactive Document Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "real-id-documents"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Reissue Fees */
  "reissue-fees": {
    says: ["Reissue fees to reinstate a suspended or revoked driving privilege cannot be paid online.", 
           "To pay this fee, please visit a DMV office or pay by mail."],
    reply: [
      {
        question: "Reissue fees",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointments",
        answer: "appointments"
      },
      {
        question: "Back",
        answer: "real-id-documents"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Minors */
  "minors": {
    says: ["Minors must be at least 15 1/2, but under 18 years to apply for a provisional instruction permit.", 
           "You can use the Minor Checklist to prepare for your DMV visit."],
    reply: [
      {
        question: "Minor Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Lost or Damaged Permit",
        answer: "lost-or-damaged-permits"
      },
      {
        question: "Minor Drive Test Appointments",
        answer: "minor-drive-test-appointments"
      },
      {
        question: "Minor Test Retake",
        answer: "minor-test-retake"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Minor Drive Test Appointments */
  "minor-drive-test-appointments": {
    says: ["Minors must have an instruction permit for at least 6 months to be eligible for a drive test.", 
           "The appointment system checks eligibility based on the office's first available appointment date."],
    reply: [
      {
        question: "Prepare for your Drive Test",
        answer: "<add hyperlink>"
      },
      {
        question: "Minor Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointment System",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "minors"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Vehicle Registration Renewal */
  "vehicle-registration-renewal": {
    says: ["Renewal notices are mailed to the current address on record 75 days prior to the expiration date.", 
           "Your renewal notice will state if you're eligible to renew online, by mail, or if you must visit an office."],
    reply: [
      {
        question: "Vehicle Registration FAQs",
        answer: "<add hyperlink>"
      },
      {
        question: "Renew Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Lost/Missing Renewal Notice",
        answer: "<add hyperlink>"
      },
      {
        question: "Vehicle Registration Status",
        answer: "vehicle-registration-status"
      },
      {
        question: "Vehicle Registration Fees",
        answer: "vehicle-registration-fees"
      },
      {
        question: "Back",
        answer: "vehicle-registration"
      },
    ]
  },

  /* Lost/Damaged Permit */
  "lost-damaged-permit": {
    says: ["You must visit a DMV office to obtain a replacement.", 
           "The expiration date will remain the same."],
    reply: [
      {
        question: "Minor Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointment System",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "lost-stolen-dl"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Social Security */
  "social-security": {
    says: ["You must bring 1 proof of Social Security Number to apply for a REAL ID.", 
           "It must have your full Social Security Number and cannot be a photocopy.", 
           "Examples include a social security card or W-2 form.", 
           "View the REAL ID Document List below for more documents."],
    reply: [
      {
        question: "REAL ID Document List (PDF)",
        answer: "<add hyperlink>"
      },
      {
        question: "Interactive Document Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Name changes",
        answer: "name-changes"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Driver License/ID Card Status */
  "dl-status": {
    says: ["If you haven't received your driver license or identification card, please see the current processing times."],
    reply: [
      {
        question: "Current Processing Times",
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

  /* Minor Test Retake */
  "minor-test-retake": {
    says: ["If a minor fails the knowledge test, they must wait 7 days, not including the day the test was failed, to retake the test.", 
           "If they fail the behind-the-wheel drive test, they must wait 14 days, not including the day they failed, to retake the test."],
    reply: [
      {
        question: "Minor Checklist",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "minors"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Replacement Registration Items */
  "replacement-registration-items": {
    says: ["Replacement stickers and registration cards are available online or by mail.", 
           "You can request a duplicate title in person or by mail."],
    reply: [
      {
        question: "Replacement Sticker/Registration Card Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Duplicate Title by Mail",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "vehicle-registration"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Appointments */
  "appointments": {
    says: ["DMV offices are open to assist customers with existing appointments and with transactions that require an in-person visit.", 
           "New appointments are currently unavailable."],
    reply: [
      {
        question: "Field Office Openings Information",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointment System",
        answer: "<add hyperlink>"
      },
      {
        question: "Office Locations",
        answer: "<add hyperlink>"
      },
      {
        question: "Minors",
        answer: "minors"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Driver License Fees */
  "dl-fees": {
    says: ["Driver license/ID card fees are available on the DMV Website.", 
           "When you apply for a REAL ID, it is the same price as a renewal, duplicate, or original driver license/ID card.", 
           "It does not cost extra to apply for a REAL ID."],
    reply: [
      {
        question: "Driver License/ID Card Fees",
        answer: "<add hyperlink>"
      },
      {
        question: "Back",
        answer: "dl-identification"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Tests */
  "tests": {
    says: ["Knowledge tests are required for various reasons, including first time applications, adding an endorsement, and upgrading your license class.", 
           "Practice tests are available online.", 
           "Behind-the-wheel drive tests require an appointment."],
    reply: [
      {
        question: "Practice Knowledge Tests",
        answer: "<add hyperlink>"
      },
      {
        question: "Prepare for your Drive Test",
        answer: "<add hyperlink>"
      },
      {
        question: "Appointments",
        answer: "appointments"
      },
      {
        question: "Minors",
        answer: "minors"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Vehicle Registration Status */
  "vehicle-registration-status": {
    says: ["If you have not received your license plates, sticker and/or registration card within 8 weeks of submitting an application, please call 1-800-777-0133 to verify issuance."],
    reply: [
      {
        question: "Vehicle Registration FAQs",
        answer: "<add hyperlink>"
      },
      {
        question: "Replacement Registration Items",
        answer: "replacement-registration-items"
      },
      {
        question: "Back",
        answer: "vehicle-registration"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Traffic School */
  "traffic-school": {
    says: ["DMV has an online service to help you find a traffic school. The list is only an informational tool.", 
           "You cannot register or attend traffic school on the DMV Website."],
    reply: [
      {
        question: "Find a Traffic School",
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
    ]
  },

  /* Vehicle Registration Fees */
  "vehicle-registration-fees": {
    says: ["Vehicle registration fees are available on the DMV Website."],
    reply: [
      {
        question: "Vehicle Registration Items",
        answer: "<add hyperlink>"
      },
      {
        question: "Replacement Registration Items",
        answer: "replacement-registration-items"
      },
      {
        question: "Back",
        answer: "fees"
      },
      {
        question: "Back to Start",
        answer: "start"
      },
    ]
  },

  /* Notice of Transfer and Release of Liability */
  "notice-of-transfer-and-release-of-liability": {
    says: ["If you sell or transfer your vehicle to another party, you must submit a Notice of Transfer and Release of Liability form within 5 calendar days from the date you sell or transfer the title to another owner.", 
           "Please keep a copy for your records."],
    reply: [
      {
        question: "Notice of Transfer and Release of Liability Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Notice of Transfer and Release of Liability by Mail",
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

  /* Disabled Person Placard/Plate */
  "disabled-person-placard-plate": {
    says: ["Information about Disabled Person (DP) Placards and License Plates can be found on the DMV Website.", 
           "A DP placard or license plate address change must be done by mail."],
    reply: [
      {
        question: "Disabled Person Parking Placards and License Plates Brochure",
        answer: "<add hyperlink>"
      },
      {
        question: "Change Address by Mail",
        answer: "change-address-by-mail"
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

  /* Personalized License Plates */
  "personalized-license-plates": {
    says: ["Special interest/personalized license plates are available for pick up 8-12 weeks after being ordered.", 
           "You will be notified by mail when they are ready for pick up."],
    reply: [
      {
        question: "Order Personalized Plates Online",
        answer: "<add hyperlink>"
      },
      {
        question: "Order Personalized Plates by Mail",
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


  /* Planned Non-Operation */
  "planned-non-operation": {
    says: ["A vehicle can be placed on Planned Non-Operation (PNO) during the renewal period (75 days before and 90 days after the registration expiration date)."],
    reply: [
      {
        question: "File PNO Online",
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

} // end of conversation object