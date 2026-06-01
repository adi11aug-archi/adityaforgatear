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
      correct: 0,
    },
    {
      question: "Who designed IIM Ahmedabad?",
      options: [
        "Le Corbusier",
        "Louis Kahn",
        "B. V. Doshi",
        "Charles Correa",
      ],
      correct: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const submitAnswer = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer");
      return;
    }

    if (selectedAnswer === question.correct) {
      setScore(score + 1);
    }

    setSubmitted(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <main className="p-10">
        <h1 className="text-4xl font-bold mb-6">
          Test Completed
        </h1>

        <h2 className="text-2xl">
          Final Score: {score} / {questions.length}
        </h2>
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
          Question {currentQuestion + 1}
        </h2>

        <p className="mb-6">
          {question.question}
        </p>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !submitted && setSelectedAnswer(index)}
              className={`w-full text-left border p-3 rounded-lg ${
                selectedAnswer === index
                  ? "bg-blue-600 text-white"
                  : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {!submitted ? (
          <button
            onClick={submitAnswer}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Submit Answer
          </button>
        ) : (
          <div className="mt-6">

            <div className="mb-4 p-3 border rounded-lg">
              {selectedAnswer === question.correct ? (
                <p>✅ Correct Answer</p>
              ) : (
                <p>
                  ❌ Wrong Answer <br />
                  Correct Answer:{" "}
                  {question.options[question.correct]}
                </p>
              )}
            </div>

            <button
              onClick={nextQuestion}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
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