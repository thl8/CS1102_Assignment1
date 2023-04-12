//track the number of attempts for each question, maximumly three attempts
let attempts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//the correct answer in order
const correctAnswer = ["a", "b", "a", "b", "c", "a", "a", "b", "c", "-7.45", "0100000000001111001100110011001100110011001100110011001100110011", "4.03", "10111111011000111101011100001010"];

//to check mini quiz answer
function checkAnswer(questionType, questionNumber) {
  let feedback = document.getElementById(questionNumber);
  let userAnswer;

  //get user answer base on question type
  //question type 1 = short answer question, type 2 = mc
  if (questionType === 1) {
    userAnswer = document.querySelector(`[name=${CSS.escape(questionNumber)}`).value.toString();
    console.log(userAnswer);
    if (userAnswer === "") {
      feedback.innerText = "Please input your answer!";
      feedback.style.color = "red";
      event.preventDefault();
    }

  } else if (questionType === 2) {
    userAnswer = document.querySelector(`input[name=${CSS.escape(questionNumber)}]:checked`).value;
  } else {
    feedback.innerHTML = "Please select one answer!";
  }

  if (userAnswer === correctAnswer[questionNumber - 1] && userAnswer !== "") {
    feedback.innerHTML = "Correct!";
    feedback.style.color = "green";
    event.preventDefault();
  } else if (userAnswer !== ""){
    attempts[questionNumber - 1]++;
    if (attempts[questionNumber - 1] < 3) {
      feedback.innerText = `Incorrect. You have ${3 - attempts[questionNumber - 1]
        } attempt(s) remaining.`;
      feedback.style.color = "red";
      event.preventDefault();
    }
    //if all attempts fail, the buttons will become unusable 
    else if (userAnswer !== "") {
      feedback.innerHTML = `Incorrect. The correct answer is ` + correctAnswer[questionNumber - 1];
      feedback.style.color = "red";
      document.getElementsByName(questionNumber).disabled = true;
      document.getElementsByName(questionNumber).forEach(
        (radio) => (radio.disabled = true)
      );
      event.preventDefault();
    }
  }
}

