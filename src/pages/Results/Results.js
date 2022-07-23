import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
  RESULTS_HEADLINE_TEXT,
  RESULTS_CTA_TEXT,
} from '../../constants/static-text.js'
import { clear } from './resultsSlice.js'
import {
  calculateCountOfCorrect,
  buildResultsList,
} from './utils.js'

const Results = ({questions}) => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results);

  const restart = () => {
    dispatch(clear())
    questions.refetch()
  }

  if (!results.value.length) return <Navigate to="/"/>

  const countOfCorrect = calculateCountOfCorrect(results.value, questions.data.results)
  const headerText = `${RESULTS_HEADLINE_TEXT} ${countOfCorrect}/10`;

  return (
    <>
      <header>
        <h1>{headerText}</h1>
      </header>
      <ul>
        {buildResultsList(results.value, questions.data.results)}
      </ul>
      <button onClick={restart}>{RESULTS_CTA_TEXT}</button>
    </>
  )
}

export default Results
