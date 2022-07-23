import React from 'react'
import { useDispatch } from 'react-redux'

import { setUserResponse } from '../Results/resultsSlice.js'

const QuizCard = ({ index, question, incQuestion }) => {
  const dispatch = useDispatch();
  const setTrue = () => dispatch(setUserResponse({index, response: true}));
  const setFalse = () => dispatch(setUserResponse({index, response: false}));

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: question}}/>
      <button onClick={setTrue}>True</button>
      <button onClick={setFalse}>false</button>
    </div>
  );
}

export default QuizCard
