
const questions = [
  {
    text: "How do you usually plan a date?",
    options: {
      J: "I plan every detail ahead.",
      P: "I go with the flow and improvise."
    }
  },
  {
    text: "What's your go-to way to show affection?",
    options: {
      F: "Through emotional support or heartfelt gestures.",
      T: "Through practical help or solving problems."
    }
  },
  {
    text: "In a group date setting, you are more likely to...",
    options: {
      E: "Lead the conversation and bring the energy.",
      I: "Stick with one or two people you know well."
    }
  },
  {
    text: "What excites you most about love?",
    options: {
      N: "The deeper emotional or intellectual connection.",
      S: "The shared experiences and real-time fun."
    }
  }
];

let currentQuestion = 0;
let scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("question-container");
  container.innerHTML = "";

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  const qElem = document.createElement("p");
  qElem.textContent = q.text;
  container.appendChild(qElem);

  for (const [key, value] of Object.entries(q.options)) {
    const btn = document.createElement("button");
    btn.textContent = value;
    btn.onclick = () => {
      scores[key]++;
      currentQuestion++;
      showQuestion();
    };
    container.appendChild(btn);
  }
}

function showResult() {
  document.getElementById("quiz-page").style.display = "none";
  document.getElementById("result-page").style.display = "block";

  const result = 
    (scores.E > scores.I ? "E" : "I") +
    (scores.N > scores.S ? "N" : "S") +
    (scores.F > scores.T ? "F" : "T") +
    (scores.P > scores.J ? "P" : "J");

  const resultData = {
    ENFP: "✨ The Spark\n⭐ Strength: Spontaneity\n✨ Wish: To be deeply understood\n🌀 Challenge: Follow-through\n📝 Reminder: You are more than your energy output.",
    INFP: "🌙 The Dreamer\n⭐ Strength: Empathy\n✨ Wish: Safe emotional space\n🌀 Challenge: Overidealizing\n📝 Reminder: Boundaries are care, too.",
    INFJ: "🔮 The Oracle\n⭐ Strength: Insight\n✨ Wish: Soul-deep connection\n🌀 Challenge: Isolation\n📝 Reminder: Share your inner world.",
    INTJ: "♟️ The Strategist\n⭐ Strength: Vision\n✨ Wish: A partner who understands ambition\n🌀 Challenge: Emotional distance\n📝 Reminder: Let your heart be seen."
  };

  const summary = resultData[result] || "A unique personality! This result isn't in the test data yet.";

  document.getElementById("result").textContent = summary;
}

function restartQuiz() {
  currentQuestion = 0;
  scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
  document.getElementById("result-page").style.display = "none";
  document.getElementById("start-page").style.display = "block";
}
