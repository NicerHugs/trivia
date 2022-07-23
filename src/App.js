import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useGetQuestionsByCountQuery } from './services/quiz.js'
import IntroPage from './pages/Intro.js';
import QuizPage from './pages/Quiz/Quiz.js';
import ResultsPage from './pages/Results/Results.js';

function App() {
  const questions = useGetQuestionsByCountQuery(10);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="quiz" element={<QuizPage questions={questions}/>} />
        <Route path="results" element={<ResultsPage questions={questions} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
