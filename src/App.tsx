import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { questions } from './data'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState(questions)


  const handleSubmitQuiz = () => {

  }

  const goToNextQuestion = () => {

  }

  const handleEnterAnswers = (e: any) => {
    setQuestionsAndAnswers([...questionsAndAnswers,{}])
  }

  return (
    <div className='bg-[#e5e4e449] w-screen h-screen'>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,700&family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,500;1,600&family=Kdam+Thmor+Pro&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap" rel="stylesheet" />
      <div className='w-full shadow-b-lg px-40 py-4 flex items-center justify-start'>
        <span className='text-5xl font-bold text-blue-700 font-cormorant'>Quizzer</span>
      </div>

      <div className='my-6 flex items-end justify-center font-roboto'>
        <h1 className='text-2xl font-semibold text-black font-roboto'>Welcome to The Programming Quiz</h1> &nbsp;&nbsp;&nbsp;<span className='mb-1 text-sm text-slate-400'>by Quizzer</span>
      </div>

      <div className="main my-6 h-1/2 mt-16 flex flex-col items-center overflow-y-hidden">
        {questions.map((question, index) => {
          return (
            <div className='w-2/4 flex flex-col items-start justify-start px-4 py-6 border-b border-b-slate-400'>
              <span className='my-3 font-roboto font-semibold text-xl'>{index + 1}. {question.questionText}</span>
              {
                question.type === 'allThatApplies' ?
                  <span className='font-roboto ml-8 my-3 text-sm text-slate-600'>Select all that applies</span>
                  :
                  <span className='font-roboto ml-8 my-3 text-sm text-slate-600'>Select one</span>
              }
              {question.answers.map((answer, index) => {
                return (
                  <div className='pl-8 py-2 my-2 flex items-center justify-start'>
                    <input onChange={handleEnterAnswers} className='mr-3' type={question.type === 'allThatApplies' ? 'checkbox' : 'radio'} name={question.name} id="" />
                    <span className='font-roboto text-lg'>{answer.answer}</span>
                  </div>
                )
              })}

              <div className='w-full items-center justify-end flex'>
                <button className={`rounded-lg text-white font-roboto mx-3 ${index === 0 ? 'cursor-not-allowed bg-blue-200 ' : 'bg-blue-600 cursor-pointer'} px-8 py-2 `}>BACK</button>
                <button onClick={(index + 1) - questions.length === 0 ? handleSubmitQuiz : goToNextQuestion} className={`rounded-lg text-white font-roboto mx-3 px-8 cursor-pointer bg-blue-600 py-2 `}>{(index + 1) - questions.length === 0 ? 'FINISH' : 'NEXT'}</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
