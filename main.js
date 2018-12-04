// Set responses as constants, since they will not change

const answer0 = 'It is certain.';
const answer1 = 'It is decidedly so.';
const answer2 = 'Sources say "No".';
const answer3 = "Don't count on it.";
const answer4 = "Can't tell right now";
const answer5 = 'Solar Flares! Try asking again.';

const responseArray = [answer0, answer1, answer2, answer3, answer4, answer5];


function getResponse() {
  const answer = responseArray[Math.floor(Math.random() * responseArray.length)];
  document.getElementById('answer').style.visibility = 'visible';
  document.getElementById('answerText').innerHTML = answer;
}

// Calls the response function when the button is clicked
document.getElementById('askButton').onclick = function clickAsk() {
  getResponse();
};
