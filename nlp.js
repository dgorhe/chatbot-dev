// topics = {
//     "real-id-start": ["real", "id"],
//     "registration": ["registration"],
//     "dl-identification-card": [
//         ["driver", "license"], 
//         ["drivers", "license"], 
//         ["driver's", "license"]
//     ],
// }

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