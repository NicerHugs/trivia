import React from 'react'
import { useDispatch } from 'react-redux'

import './QuizCard.css';
import { setUserResponse } from '../Results/resultsSlice.js'
import {
  CARD_CTA_TEXT_TRUE,
  CARD_CTA_TEXT_FALSE
} from '../../constants/static-text.js'

const QuizCard = ({ index, question, incQuestion, userResponse }) => {
  const dispatch = useDispatch();
  const setTrue = () => dispatch(setUserResponse({index, response: true}));
  const setFalse = () => dispatch(setUserResponse({index, response: false}));

  return (
    <div className="quiz-card">
      <div dangerouslySetInnerHTML={{__html: question}}/>
      <fieldset className="quiz-card-ctas">
        <button className={`btn quiz-card-cta ${userResponse === true ? 'selected' : ''}`} onClick={setTrue}>
          {CARD_CTA_TEXT_TRUE}
        </button>
        <button className={`btn quiz-card-cta ${userResponse === false ? 'selected' : ''}`} onClick={setFalse}>
          {CARD_CTA_TEXT_FALSE}
        </button>
      </fieldset>
    </div>
  );
}

export default QuizCard
