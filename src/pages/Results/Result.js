import React from 'react'

import { isCorrectResponse } from './utils.js'

const Result = ({question, response}) => {
  const correctResponseMarker = isCorrectResponse(question, response) ? '+' : '-'
  const resultText = `${correctResponseMarker} ${question.question}`
  return (
    <li dangerouslySetInnerHTML={{__html: resultText} } />
  )
}


export default Result
