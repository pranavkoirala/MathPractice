const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const selectedOperations = urlParams.get("operations").split(",");

const equationElement = document.getElementById("equation");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let score = 0;

function generateQuestion() {
  const operation =
    selectedOperations[Math.floor(Math.random() * selectedOperations.length)];

  let number1, number2;
  switch (operation) {
    case "addition":
      number1 = Math.floor(Math.random() * 20) + 1;
      number2 = Math.floor(Math.random() * 20) + 1;
      break;
    case "subtraction":
      number1 = Math.floor(Math.random() * 20) + 1;
      number2 = Math.floor(Math.random() * number1) + 1;
      break;
    case "multiplication":
      number1 = Math.floor(Math.random() * 20) + 1;
      number2 = Math.floor(Math.random() * 20) + 1;
      break;
    case "division":
      number2 = Math.floor(Math.random() * 20) + 1;
      number1 = number2 * (Math.floor(Math.random() * 20) + 1);
      break;
    default:
      break;
  }

  let equation;
  let answer;
  switch (operation) {
    case "addition":
      equation = `${number1} + ${number2} = `;
      answer = number1 + number2;
      break;
    case "subtraction":
      equation = `${number1} - ${number2} = `;
      answer = number1 - number2;
      break;
    case "multiplication":
      equation = `${number1} × ${number2} = `;
      answer = number1 * number2;
      break;
    case "division":
      equation = `${number1} ÷ ${number2} = `;
      answer = number1 / number2;
      break;
    default:
      break;
  }

  equationElement.textContent = equation;

  return answer;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const userAnswer = parseInt(answerElement.value);

  if (userAnswer === correctAnswer) {
    score++;
    scoreElement.textContent = `Score: ${score}`;

    feedbackElement.textContent = "Correct!";
    answerElement.value = "";

    correctAnswer = generateQuestion();
  } else {
    feedbackElement.textContent = "Incorrect. Try again.";
  }
}

submitButton.addEventListener("click", handleFormSubmit);

let correctAnswer = generateQuestion();

function back() {
  window.location.href = `../index.html`;
}
