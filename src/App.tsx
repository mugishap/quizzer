import { useState } from 'react'
import './App.css'
import { questions } from './data'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(questions)
  const [showAnswers, setShowAnswers] = useState(false)

  const handleSubmitQuiz = () => {
    setShowAnswers(true)
  }

  const goToNextQuestion = () => {
    setActiveIndex(activeIndex + 1)
  }

  const goToPreviousQuestion = () => {
    setActiveIndex(activeIndex - 1)
  }
  const handleEnterAnswers = (e: any) => {
    const { value } = e.target
    e.target.checked = true;
    const newQuestions = [...questionsAndAnswers]
    newQuestions[activeIndex].selectedAnswer = value
    setQuestionsAndAnswers(newQuestions)
  }

  const handleRestartQuiz = () => {

  }

  return (
    <div className='bg-[#e5e4e449] w-screen h-screen'>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Kdam+Thmor+Pro&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />
      <div className='w-full shadow-lg px-40 py-4 flex items-center justify-between'>
        <span className='text-5xl font-bold text-blue-700 font-cormorant'>Quizzer</span>
        <div className='hidden md:flex items-center justify-center'>
          <button className='text-white px-8 py-2 bg-blue-600 font-roboto cursor-pointer rounded text-lg mx-3'>LOGIN</button>
          <button className='text-white px-8 py-2 bg-blue-600 font-roboto cursor-pointer rounded text-lg mx-3'>SIGNUP</button>
        </div>
      </div>

      <div className='my-6 flex items-end justify-center font-roboto'>
        <h1 className='text-2xl font-semibold text-black font-roboto'>Welcome to The Programming Quiz</h1> &nbsp;&nbsp;&nbsp;<span className='mb-1 text-sm text-slate-400'>by Quizzer</span>
      </div>
      {
        showAnswers ? (
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-semibold text-black font-roboto'>Your Score</h1>
            <div className='my-8 flex items-center justify-center'>
              <div className='flex flex-col items-center justify-center'>
                <span className='text-5xl font-bold text-blue-700 font-cormorant'>{questionsAndAnswers.filter((question) => question.selectedAnswer === question.validAnswer).length}</span>
                <span className='text-sm text-slate-400'>Correct Answers</span>
              </div>
              <div className='flex flex-col items-center justify-center mx-4'>
                <span className='text-5xl font-bold text-blue-700 font-cormorant'>{questionsAndAnswers.filter((question) => question.selectedAnswer !== question.validAnswer).length}</span>
                <span className='text-sm text-slate-400'>Wrong Answers</span>
              </div>
            </div>
            <button className='text-white px-8 py-2 bg-blue-600 font-roboto cursor-pointer rounded text-lg mx-3' onClick={handleRestartQuiz}>Restart</button>
          </div>
        )
          :
          <div className="main my-6 h-7/12 mt-16 flex flex-col items-center overflow-y-hidden">
            {/* {questions.map((question, index) => {
          return ( */}
            <div className='w-full md:w-3/4 xl:w-2/4 flex flex-col items-start justify-start px-4 py-6 border-b border-b-slate-400'>
              <span className='my-3 font-roboto font-semibold text-xl'>{activeIndex + 1}. {questionsAndAnswers[activeIndex].questionText}</span>

              {questionsAndAnswers[activeIndex].answers.map((answer) => {
                return (
                  <div className='pl-8 py-2 my-2 flex items-center justify-start'>
                    <input checked={answer.answerLetter===questionsAndAnswers[activeIndex].selectedAnswer} onChange={handleEnterAnswers} value={answer.answerLetter} className='mr-3' type={'radio'} name={questionsAndAnswers[activeIndex].name} id="" />
                    <span className='font-roboto text-lg'>{answer.answer}</span>
                  </div>
                )
              })}

              <div className='w-full items-center justify-end flex'>
                <button disabled={activeIndex === 0 ? true : false} className={`rounded-lg text-white font-roboto mx-3 ${activeIndex === 0 ? 'cursor-not-allowed bg-blue-200 ' : 'bg-blue-600 cursor-pointer'} px-8 py-2 `} onClick={goToPreviousQuestion}>BACK</button>
                <button disabled={questionsAndAnswers[activeIndex].selectedAnswer ? false : true} onClick={(activeIndex + 1) - questions.length === 0 ? handleSubmitQuiz : goToNextQuestion} className={`rounded-lg text-white font-roboto mx-3 px-8 cursor-pointer ${questionsAndAnswers[activeIndex].selectedAnswer ? 'bg-blue-600' : 'bg-blue-300'} py-2 `}>{(activeIndex + 1) - questions.length === 0 ? 'FINISH' : 'NEXT'}</button>
              </div>
            </div>
            {/* )
        })} */}
          </div>
      }
    </div >
  )
}

export default App
