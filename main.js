// Set responses as constants, since they will not change

const answer0 = 'It is certain.';
const answer1 = 'It is decidedly so.';
const answer2 = 'Solar Flares! Try asking again.';
const answer3 = 'Sources say "No".';
const answer4 = "Don't count on it.";
const answer5 = 'My reply is no.';
const answer6 = 'My reply is no.';

const responseArray = [answer0, answer1, answer2, answer3, answer4, answer5, answer6];

function getResponse() {
  return responseArray[Math.floor(Math.random() * responseArray.length)];
}


// Tests
console.log(getResponse());