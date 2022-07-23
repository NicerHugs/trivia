import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './Quiz.css';
import QuizCard from './QuizCard.js'

const Quiz = ({questions}) => {
  let navigate = useNavigate();

  const responses = useSelector((state) => state.results.value)
  const { data, isLoading, error } = questions

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const incQuestion = () => setCurrentQuestionIndex(currentQuestionIndex + 1)
  const navToResults = () => navigate("/results")
  const handleClick = currentQuestionIndex === 9 ? navToResults : incQuestion;
  const currentQuestion = data && data.results[currentQuestionIndex]

  const nextDisabled = typeof responses[currentQuestionIndex] !== 'boolean'

  return (
    <div className="quiz page">
      <header>
        <h1>
          {error && "Something went wrong, please refresh to try again"}
          {isLoading && "Loading..."}
          {currentQuestion && currentQuestion.category}
        </h1>
      </header>
      {data && (
        <>
          <QuizCard index={currentQuestionIndex} question={currentQuestion.question} userResponse={responses[currentQuestionIndex]}/>
          <button className="page-cta" disabled={nextDisabled} onClick={handleClick}>{currentQuestionIndex < 9 ? "Next" : "Results"}</button>
        </>
      )}
    </div>
  )
}

export default Quiz
