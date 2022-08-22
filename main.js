let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove the last string from the array
secretMessage.pop();

//add the words "to" and "Program" tothe end of the array
secretMessage.push('to','Program');

//change the word 'easily' to the word 'right'
secretMessage.splice(7,1,'right');

//Remove the first string from the array 
secretMessage.shift();

//add "Programming" to the beginning of the array
secretMessage.unshift('Programming');

//remove the strings 'get', 'right', 'the', 'first', 'time'
secretMessage.splice(6,10,'know');

// print out the secret message with console.log() and .join() with spaces 
console.log(secretMessage.join(" "));

