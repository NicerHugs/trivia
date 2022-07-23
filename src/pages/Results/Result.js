import React from 'react'

import './Result.css';
import { isCorrectResponse } from './utils.js'

const Result = ({question, response}) => {
  const correctResponseMarker = isCorrectResponse(question, response) ? '+' : '-'
  const resultText = `${correctResponseMarker} ${question.question}`
  return (
    <li className="result-item" dangerouslySetInnerHTML={{__html: resultText} } />
  )
}


export default Result
