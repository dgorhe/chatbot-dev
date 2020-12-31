topics = {
    "real-id": ["real", "id"],
    "registration": ["registration"],
    "driver-license": [
        ["driver", "license"], 
        ["drivers", "license"], 
        ["driver's", "license"]
    ],
}

/* 
Find the topic of that the initial message relates to.
This should only be used for initial topic or if bot prompts for rephrasing                        .

@param {string} text - The message that needs to be inspected for topic match.
@param {JSON object} topics - Question topics to search through

@return {string} subject - The topic of the user's chat message
*/
// Simple function to find the topic of conversation
let findTopic = function(text, topics) {
    text = text.trim().split(" ").map(word => word.toLowerCase());
    
    let subject;

    for (let [topic, variants] of Object.entries(topics)) {
        if (!Array.isArray(variants[0])) {
            if (text.includes(...variants)) {
                return subject = topic;
            }
        } 
        else {
            for (let variant of variants) {
                if (text.includes(...variant)) {
                    return subject = topic;
                }
            }

        return subject = "topic-not-found";
        }
    }

    return subject = "something went wrong";
}