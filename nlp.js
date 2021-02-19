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
        ["one", "card"]
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
        ["driver", "records"],
        ["vehicle", "record"],
        ["vehicle", "records"],
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
        ["damaged", "card"],
        ["broken"]
    ],
    "name-changes": [
        ["changing", "name"],
        ["changing", "names"],
        ["altering", "name"],
        ["name", "change"],
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


/** Find the topic of that the initial message relates to. 
 * This should only be used for initial topic or if bot prompts for rephrasing
 * @param {array} array - The array to compare to
 * 
 * @return {boolean} anonymous - whether or not the @code{array} input is equal to the array to which it is being compared
 */
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

function isIterable(obj) {
    if (obj == null) {
        return false;
    } 

    return typeof obj[Symbol.iterator] === 'function';
}


/** Find the topic of that the initial message relates to. 
 * This should only be used for initial topic or if bot prompts for rephrasing
 * @param {string} text - The message that needs to be inspected for topic match.
 * @param {JSON object} topics - Question topics to search through 
 * 
 * @return {string} subject - The topic of the user's chat message
 */
let findNestedTopic = (text, topics) => {
    let result = null; // may need to put in global scope
    $.get({
        'async': false,
        'url':"http://127.0.0.1:5000/segment/",
        'global': false,
        'data': {word: text},
        'type': "GET",
        'success': function(text) {
            text = text.trim().split(" ").map(word => word.toLowerCase());
            let potentialTopics = [];
        
            for (let [topic, variants] of Object.entries(topics)) {
                if (!Array.isArray(variants[0])) {
                    if (text.includes(...variants)) {
                        potentialTopics.push(topic);
                    }
                } 
                else {
                    try {
                        for (let variant of variants) {
                            if (isIterable(variant)) {
                                if (text.includes(...variant)) {
                                    potentialTopics.push(topic);
                                }
                            } else {
                                if (text.includes(variant)) {
                                    potentialTopics.push(topic);
                                }
                            }
                        }
                    } catch (err) {
                        console.log(err);
                    }
                    
                }
            }
            // finding number of words in each potential topic
            potentialTopics.map(topic => [topic, topic.length]);
            let len = 0; // holds largest length
            let idx = 0; // index at which largest length occurs
            
        
            // iterating through to find largest length at index idx
            for (let i=0; i<potentialTopics.length; i++ ) {
                if (potentialTopics[i][1] > len) {
                    len = potentialTopics[i][1];
                    idx = i;
                } 
            }
            result = (potentialTopics.length == 0) ? miss() : potentialTopics[idx];
        }
    });
    return result;
};

// Simple function to find the topic of conversation
let findShallowTopic = function(text, topics) {
    text = text.trim().split(" ").map(word => word.toLowerCase());

    for (let [key, value] of Object.entries(topics)) {
        if (text.equals(value)) {
            return key;
        }        
    }
    
    return "something-went-wrong";
}