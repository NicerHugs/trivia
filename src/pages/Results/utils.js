import Result from './Result.js'

export const calculateCountOfCorrect = (responses, questions) => {
  return responses.reduce((count, response, i) => {
    if (response.toString() === questions[i].correct_answer.toLowerCase()) count++
    return count;
  }, 0);
}

export const buildResultsList = (responses, questions) => {
  return questions.map((question, i) => {
    return <Result question={question} response={responses[i]} key={i}/>
  })
}

export const isCorrectResponse= ({ correct_answer }, response) => {
  return correct_answer.toLowerCase() === response.toString()
}
