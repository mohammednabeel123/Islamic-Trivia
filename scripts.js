const questionsElement = document.getElementById("Questions");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("submit-btn");
const startbutton = document.getElementById("start-btn");

const QuizQuestions = [
  {
    question: "What do you say when you sneeze?",
    answers: ["Alhamdulillah", "Maasha Allah", "In sha Allah", "Astagfirullah"],
    correct: 0,
  },
  {
    question: "What is half of faith in Islam?",
    answers: ["Cleanliness", "Patience", "Kindness", "Slience"],
    correct: 0,
  },
  {
    question: "Which prophet is known for being swallowed by a large fish ?",
    answers: [
      "Prophet Nuh (as)",
      "Prophet Ibrahim (as)",
      "Prophet Musa (as)",
      "Prophet Yunus (as)",
    ],
    correct: 3,
  },
  {
    question: "Who built the Kaaba in Mecca?",
    answers: [
      "Prophet Musa (as)",
      "Prophet Muhammad (pbuh)",
      "Prophet Ibrahim (as) and Prophet Ismail (as)",
      "Prophet Adam (as)",
    ],
    correct: 2,
  },
  {
    question: "Laylatul Qadr is better than how many months?",
    answers: ["5000", "100", "10", "1000"],
    correct: 3,
  },
  {
    question:
      "What is the name of the angel who is responsible for recording the deeds of every?",
    answers: ["Jibril", "Mikail", "Israfil", "Az"],
    correct: 0,
  },
  {
    question: "In which city was Prophet Muhammad (pbuh) born?",
    answers: ["Taif", "Medina", "Mecca", "Yathrib"],
    correct: 2,
  },
  {
    question: "What is the name of the first caliph of Islam?",
    answers: ["Ali", "Umar", "Uthman", "Abu Bakr"],
    correct: 3,
  },
  {
    question: "Which Surah does not start with bismillah?",
    answers: [
      "Surah Al-Furqan",
      "Surah Al-Qiyamah",
      "Surah At-Tawbah",
      "Surah Ar-Rahman",
    ],
    correct: 2,
  },
  {
    question: "How many wives did Prophet Muhammad (pbuh) have?",
    answers: ["4", "5", "7", "11"],
    correct: 3,
  },
  {
    question: "Which of the following fruit is mentioned in the Qur’an?",
    answers: ["Grape", "Mango", "Apple", "Banana"],
    correct: 0,
  },
  {
    question: "How many rakats are there in the Fajr prayer?",
    answers: ["4", "2", "8", "12"],
    correct: 0,
  },
  {
    question: "Which Prophet is known as the “Father of Prophets”?",
    answers: ["Musa (as)", "Isa (as)", "Ibrahim (as)", "Adam (as)"],
    correct: 2,
  },
  {
    question: "Which major sin is often referred to as “interest” in English?",
    answers: ["stealing", "Gossiping", "Lying", "Riba"],
    correct: 3,
  },
  {
    question:
      "Which prophet is known for building the Ark to save believers and animals from a great flood?",
    answers: [
      "Prophet Nuh (as)",
      "Prophet Musa (as)",
      "Prophet Isa (as)",
      "Prophet Ibrahim (as)",
    ],
    correct: 0,
  },
  {
    question:
      "What is the term for the act of seeking blessings or healing through recitation or listening to the Quran?",
    answers: ["Istikhara", "Dua", "Ruqyah", "Sunnah"],
    correct: 2,
  },
  {
    question:
      "Who was the companion of Prophet Muhammad (pbuh) known for his strength and courage, and was given the title “Lion of Allah”?",
    answers: [
      "Hazrat Ali (ra)",
      "Khalid ibn al-Walid (ra)",
      "Umar ibn al-Khattab (ra)",
      "Abu Bakr",
    ],
    correct: 0,
  },
  {
    question:
      "Which attribute of Allah signifies His immense mercy and compassion towards His creation?",
    answers: ["Al-Aziz", "Al-Jabbar", "Al-Rahman", "Al-Mutakabbir"],
    correct: 2,
  },
  {
    question:
      "What is the name of the Islamic holiday that marks the end of the Hajj pilgrimage?",
    answers: [" Eid al-Fitr", " Ashura", "Eid al-Adha", "Muharram"],
    correct: 2,
  },
  {
    question: "Who was Prophet Mohammed’s wet nurse?",
    answers: ["Umm Ayman", "Umm Salama", "Safiyya bint Abd", "Shyma"],
    correct: 3,
  },
];

let Numberwrongclick = 0; // Track wrong clicks globally
let questionsAnswered = 0;
const maxQuestions = 5;

startbutton.addEventListener("click", function () {
  startbutton.style.display = "none";
  nextButton.style.display = "block";

  nextButton.addEventListener("click", function () {
    nextButton.disabled = true;
    Numberwrongclick = 0; // Reset wrong clicks for each new question

    // Randomly pick a question
    const randomIndex = Math.floor(Math.random() * QuizQuestions.length);
    const currentQuestion = QuizQuestions[randomIndex];

    // Display the question
    questionsElement.innerHTML = currentQuestion.question;

    // Clear the previous answers
    answersElement.innerHTML = "";

    // Loop through the answers and display them
    currentQuestion.answers.forEach((answerText, index) => {
      // Create a new div element for each answer
      const answerElement = document.createElement("div");
      answerElement.textContent = answerText;

      // Style the answer elements
      answerElement.style.backgroundColor = "#f0f0f0";
      answerElement.style.padding = "10px";
      answerElement.style.margin = "20px";
      answerElement.style.borderRadius = "5px";
      answerElement.style.fontSize = "16px";
      answerElement.style.display = "flex";
      answerElement.style.border = "1px solid black";
      answerElement.style.cursor = "pointer"; // Makes the answer clickable

      // Append the new answer element to the answers container
      answersElement.appendChild(answerElement);

      // Add click event listener to each answer element
      answerElement.addEventListener("click", function () {
        if (index === currentQuestion.correct) {
          // Correct answer selected
          answersElement.disable = true;
          answerElement.style.backgroundColor = "green";

          nextButton.disabled = false; // Enable the Next button
          questionsAnswered++;
          if (questionsAnswered === maxQuestions) {
            alert("You have answered all questions! Well done!");
          }
        } else {
          // Wrong answer selected

          answerElement.style.backgroundColor = "red";
          Numberwrongclick++;
          if (Numberwrongclick === 2) {
            // Reveal the correct answer after 2 wrong clicks
            answersElement.children[
              currentQuestion.correct
            ].style.backgroundColor = "green";
            nextButton.disabled = false; // Enable the Next button
          }
        }
      });
    });
  });
});
