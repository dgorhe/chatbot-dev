topics = {
    "real-id-start": ["real", "id"],
    "registration": ["registration"],
    "do-cards-look-different": [
        ["cards", "look", "same"],
        ["look", "same"]
    ],
    "federal-limits-apply": [
        ["federal", "id"],
        ["federal", "identification"]
    ],
    "firearms-and-ammunition": [
        ["firearms"],
        ["guns"],
        ["ammo"],
        ["ammunition"]
    ],
    "dl-identification-card": [
        ["driver", "license"], 
        ["drivers", "license"], 
        ["driver's", "license"]
    ],
    "apply-for-real-id": [
        ["apply", "for", "real", "id"],
        ["real", "id", "application"]
        ["real", "id", "app"]
    ],
    "why-real-id": [
        ["why", "is", "it", "called", "a", "real", "id"],
        ["why", "is", "it", "called", "real", "id"]
    ],
    "real-id-one-card": [
        []
    ],
    "domestic-flight": [
        ["what", "counts", "as", "domestic"],
        ["domestic", "flight"],
    ],
    "change-of-address": [
        ["change", "address"],
        ["change", "my", "address"],
        ["address", "change"]
    ],
    "vehicle-registration": [
        ["car", "registration"],
        ["reregister"],
        ["renew", "registration"],
        ["registration", "renewal"]
    ],
    "dl-renewal": [
        ["license", "renewal"],
        ["renew", "license"],
    ],
    "accepted-flight-identification": [
        ["use", "on", "flight"],
        ["work", "on", "flight"],
        ["work", "for", "flight"],
        ["flight", "id"]
    ],
    "do-i-need-a-real-id": [
        []
    ],
    "secure-federal-facilities": [
        ["secure", "federal", "facilities"],
    ],
    "request-records": [
        ["driver", "record"],
        ["driver", "records"]
        ["vehicle", "record"]
        ["vehicle", "records"]
    ],
    "new-card": [
        ["new", "card", "when", "my", "address", "changes"]
    ],
    "lost-stolen-card": [
        ["new", "license"],
        ["new", "driver", "license"],
        ["new", "drivers", "license"],
        ["new", "driver's", "license"],
        ["stolen", "license"],
        ["stolen", "id"]
        ["stolen", "card"],
        ["damaged", "license"],
        ["damaged", "id"],
        ["damaged", "card"]
        ["broken"]
    ],
    "name-changes": [
        ["changing", "name"],
        ["changing", "names"],
        ["altering", "name"],
        ["name", "change"]
    ],
    "electronic-dl-application": [
        ["online", "id", "application"],
        ["electronic", "id", "application"],
        ["online", "license", "application"],
        ["electronic", "license", "application"],
    ],
    "change-of-address": [
        ["change", "of", "address", "status"],
        ["address", "status"]
    ],
    "prepare-for-office-visit":[
        ["office", "visit"]
    ],
    "fees":[
        ["fees"]
    ],
    "residency":[
        ["documents", "for", "real", "id"],
        ["docs", "for", "real", "id"]
    ],
    "reissue-fee":[
        ["reissue", "fee"]
    ],
    "minors":[
        ["requirements", "for", "minors"]
    ],
    "minor-drive-test-appointments":[
        ["drive", "test"],
        ["driving", "test"]
    ],
    "vehicle-registration-renewal":[
        ["registration", "renewal"],
        ["renewing", "registration"],
        ["registration"]
    ],
    "lost-damaged-permit":[
        ["lost", "permit"],
        ["lost", "my", "permit"],
        ["lost", "a", "permit"],
        ["damaged", "permit"],
        ["damaged", "my", "permit"],
        ["damaged", "a", "permit"],
    ],
    "social-security":[
        ["ssn"],
        ["social", "security"],
    ],
    "dl-status":[
    "dl-status":[
    "dl-status":[
    "dl-status":[
    "dl-status":[
    "dl-status":[
        ["driver", "license", "status"],
        ["driver's", "license", "status"],
        ["drivers", "license", "status"],
        ["status", "of", "driver", "license"],
        ["status", "of", "driver's", "license"],
        ["status", "of", "drivers", "license"],
        ["status", "of", "my", "driver", "license"],
        ["status", "of", "my", "driver's", "license"],
        ["status", "of", "my", "drivers", "license"],
    ],

}

if (Array.prototype.equals) {
    console.warn("You're overriding the existing Array.prototype.equals");
}

Array.prototype.equals = function(array) {
    // Comparison item is not an array
    if (!array) {
        return false;
    }

    // Array lengths don't match
    if (this.length != array.length) {
        return false;
    }

    for (var i = 0; i < this.length; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recursive search for nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            return false;
        }
    }

    return true;
}

/** Find the topic of that the initial message relates to. 
 * This should only be used for initial topic or if bot prompts for rephrasing
 * @param {string} text - The message that needs to be inspected for topic match.
 * @param {JSON object} topics - Question topics to search through 
 * 
 * @return {string} subject - The topic of the user's chat message
 */
// Simple function to find the topic of conversation
let findNestedTopic = function(text, topics) {
    text = text.trim().split(" ").map(word => word.toLowerCase());


    for (let [topic, variants] of Object.entries(topics)) {
        if (!Array.isArray(variants[0])) {
            if (text.includes(...variants)) {
                return topic;
            }
        } 
        else {
            for (let variant of variants) {
                if (text.includes(...variant)) {
                    return topic;
                }
            }

        return "topic-not-found";
        }
    }
    
    return "something-went-wrong";
}

// Simple function to find the topic of conversation
let findShallowTopic = function(text, topics) {
    text = text.trim().split(" ").map(word => word.toLowerCase());

    for (let [key, value] of Object.entries(topics)) {
        if (text.equals(value)) {
            return key;
        }        
    }

    console.log(topics);
    console.log(text);
    return "something-went-wrong";
}