import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import QuizCard from './QuizCard.js'

const Quiz = ({questions}) => {
  let navigate = useNavigate();

  const results = useSelector((state) => state.results.value)
  const { data, isLoading, error } = questions

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const incQuestion = () => setCurrentQuestionIndex(currentQuestionIndex + 1)
  const navToResults = () => navigate("/results")
  const handleButtonClick = currentQuestionIndex === 9 ? navToResults : incQuestion;
  const currentQuestion = data && data.results[currentQuestionIndex]

  const nextDisabled = typeof results[currentQuestionIndex] !== 'boolean'

  return (
    <>
      <header>
        <h1>
          {error && "Something went wrong, please refresh to try again"}
          {isLoading && "Loading..."}
          {currentQuestion && currentQuestion.category}
        </h1>
      </header>
      {data && (
        <>
          <QuizCard index={currentQuestionIndex} question={currentQuestion.question}/>
          <button disabled={nextDisabled} onClick={handleButtonClick}>{currentQuestionIndex < 9 ? "Next" : "Results"}</button>
        </>
      )}
    </>
  )
}

export default Quiz
