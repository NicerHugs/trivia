import React from 'react'

import './Result.css';
import { isCorrectResponse } from './utils.js'
import { ReactComponent as IconTrue } from '../../assets/check.svg';
import { ReactComponent as IconFalse } from '../../assets/cross.svg';

const Result = ({question, response}) => {
  const isTrue = question.correct_answer.toLowerCase() === "true"
  const correctResponseText = isCorrectResponse(question, response) ? 'correct' : 'incorrect'
  const correctAnswerText = question.correct_answer.toLowerCase()
  const ariaLabelText = `the statement is ${correctAnswerText} and your answer of ${response} is ${correctResponseText}`

  return (
    <li className={`${correctAnswerText} ${correctResponseText} result-item`}>
      {isTrue && <IconTrue aria-label={ariaLabelText}/>}
      {isTrue || <IconFalse aria-label={ariaLabelText}/>}
      <span className="result-item-question" dangerouslySetInnerHTML={{__html: question.question} }/>
    </li>
  )
}


export default Result
