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
  {
    question: "Which architect designed the Capitol Complex at Chandigarh?",
    options: [
      "B. V. Doshi",
      "Le Corbusier",
      "Charles Correa",
      "Raj Rewal",
    ],
    correct: "B",
  },
  {
    question: "Who is known as the father of Modern Architecture?",
    options: [
      "Le Corbusier",
      "Walter Gropius",
      "Louis Sullivan",
      "Frank Lloyd Wright",
    ],
    correct: "C",
  },
  {
    question: "The Bauhaus School was founded in which country?",
    options: [
      "France",
      "Germany",
      "Italy",
      "England",
    ],
    correct: "B",
  },
  {
    question: "Who designed the Guggenheim Museum in New York?",
    options: [
      "Frank Lloyd Wright",
      "Le Corbusier",
      "Mies van der Rohe",
      "Louis Kahn",
    ],
    correct: "A",
  },
  {
    question: "Who designed Jawahar Kala Kendra, Jaipur?",
    options: [
      "Raj Rewal",
      "Charles Correa",
      "B. V. Doshi",
      "Achyut Kanvinde",
    ],
    correct: "B",
  },
  {
    question: "Which architect coined the phrase 'Less is More'?",
    options: [
      "Le Corbusier",
      "Mies van der Rohe",
      "Walter Gropius",
      "Louis Kahn",
    ],
    correct: "B",
  },
  {
    question: "Who designed the National Assembly Building, Dhaka?",
    options: [
      "Louis Kahn",
      "Le Corbusier",
      "B. V. Doshi",
      "Charles Correa",
    ],
    correct: "A",
  },
  {
    question: "Which architect designed the Lotus Temple, Delhi?",
    options: [
      "Raj Rewal",
      "Fariborz Sahba",
      "Charles Correa",
      "Joseph Allen Stein",
    ],
    correct: "B",
  },
  {
    question: "The Modulor system was developed by whom?",
    options: [
      "Walter Gropius",
      "Le Corbusier",
      "Louis Kahn",
      "Alvar Aalto",
    ],
    correct: "B",
  },
  {
    question: "Who designed Bharat Bhavan, Bhopal?",
    options: [
      "Charles Correa",
      "Raj Rewal",
      "B. V. Doshi",
      "Achyut Kanvinde",
    ],
    correct: "A",
  },
];