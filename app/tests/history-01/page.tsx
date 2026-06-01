"use client";

import { useState } from "react";

export default function HistoryTestPage() {
  const questions = [
    {
      question: "Who designed the city of Chandigarh?",
      options: [
        "Le Corbusier",
        "Frank Lloyd Wright",
        "Louis Kahn",
        "Walter Gropius",
      ],
      correct: "A",
    },
    {
      question: "Who designed IIM Ahmedabad?",
      options: [
        "Le Corbusier",
        "Louis Kahn",
        "B. V. Doshi",
        "Charles Correa",
      ],
      correct: "B",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const letters = ["A", "B", "C", "D"];

  const submitAnswer = () => {
    if (selectedAnswer === "") {
      setResult("⚠️ Please select an answer.");
      return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
      setResult("✅ Correct!");
      setScore(score + 1);
    } else {
      const correctIndex = letters.indexOf(
        questions[currentQuestion].correct
      );

      setResult(
        `❌ Wrong! Correct Answer: ${questions[currentQuestion].correct}. ${questions[currentQuestion].options[correctIndex]}`
      );
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setResult("");
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <main className="p-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Test Completed
        </h1>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl">
            Final Score: {score} / {questions.length}
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        History Test 01
      </h1>

      <div className="border rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h2>

        <p className="mb-6">
          {questions[currentQuestion].question}
        </p>

        <div className="space-y-3">

          {questions[currentQuestion].options.map(
            (option, index) => (
              <button
                key={index}
                onClick={() =>
                  setSelectedAnswer(letters[index])
                }
                className={`w-full text-left border p-3 rounded-lg ${
                  selectedAnswer === letters[index]
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                {letters[index]}. {option}
              </button>
            )
          )}

        </div>

        {!result && (
          <div className="mt-6">
            <button
              onClick={submitAnswer}
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Submit Answer
            </button>
          </div>
        )}

        {selectedAnswer && (
          <p className="mt-4">
            Selected Answer: {selectedAnswer}
          </p>
        )}

        {result && (
          <div className="mt-4 p-4 border rounded-lg">

            <p>{result}</p>

            <button
              onClick={nextQuestion}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              {currentQuestion === questions.length - 1
                ? "Finish Test"
                : "Next Question"}
            </button>

          </div>
        )}

      </div>
    </main>
  );
}