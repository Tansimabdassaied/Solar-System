const quizData = [
    {
      question: "Which planet is closest to the Sun?",
      answers: { a: "Venus", b: "Mercury", c: "Earth", d: "Mars" },
      correct: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: { a: "Jupiter", b: "Saturn", c: "Neptune", d: "Uranus" },
      correct: "a",
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      answers: { a: "Venus", b: "Mars", c: "Saturn", d: "Earth" },
      correct: "b",
    },
    {
      question: "What is the name of the galaxy that contains our solar system?",
      answers: { a: "Andromeda", b: "Milky Way", c: "Whirlpool", d: "Triangulum" },
      correct: "b",
    },
    {
      question: "How many moons does Earth have?",
      answers: { a: "1", b: "2", c: "3", d: "4" },
      correct: "a",
    },
    {
      question: "What is the smallest planet in our solar system?",
      answers: { a: "Mars", b: "Mercury", c: "Pluto", d: "Venus" },
      correct: "b",
    },
    {
      question: "Which planet has the most extensive ring system?",
      answers: { a: "Jupiter", b: "Uranus", c: "Neptune", d: "Saturn" },
      correct: "d",
    },
    {
      question: "What is the main component of the Sun?",
      answers: { a: "Hydrogen", b: "Oxygen", c: "Carbon", d: "Helium" },
      correct: "a",
    },
    {
      question: "Which planet is often called Earth's twin because of its similar size?",
      answers: { a: "Mars", b: "Venus", c: "Neptune", d: "Mercury" },
      correct: "b",
    },
    {
      question: "What dwarf planet lies within the asteroid belt?",
      answers: { a: "Pluto", b: "Eris", c: "Ceres", d: "Haumea" },
      correct: "c",
    },
  ];
  
  function buildQuiz() {
    const quizContainer = document.getElementById("quiz");
    const output = [];
  
    quizData.forEach((currentQuestion, questionIndex) => {
      const answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionIndex}" value="${letter}">
            ${letter}: ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join("")}</div>`
      );
    });
  
    quizContainer.innerHTML = output.join("");
  }
  
  function showResults() {
    const quizContainer = document.getElementById("quiz");
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let score = 0;
  
    quizData.forEach((currentQuestion, questionIndex) => {
      const answerContainer = answerContainers[questionIndex];
      const selectedAnswer = (
        answerContainer.querySelector(`input[name=question${questionIndex}]:checked`) || {}
      ).value;
  
      // Highlight correct answer
      answerContainer.querySelectorAll("label").forEach((label) => {
        const input = label.querySelector("input");
        if (input.value === currentQuestion.correct) {
          label.style.color = "green"; // Highlight correct answer
        } else if (input.checked && input.value !== currentQuestion.correct) {
          label.style.color = "red"; // Highlight incorrect answer if selected
        }
      });
  
      // Increment score if the selected answer is correct
      if (selectedAnswer === currentQuestion.correct) {
        score++;
      }
    });
  
    document.getElementById("results").innerText = `You scored ${score} out of ${quizData.length}!`;
  }
  
  document.getElementById("submit").addEventListener("click", showResults);
  
  buildQuiz();
  function goToPage(url) {
    window.location.href = url;
}