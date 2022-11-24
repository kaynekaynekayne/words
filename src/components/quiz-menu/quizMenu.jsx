import React from 'react'

const QuizMenu = ({setQuizReady}) => {
    return (
        <div>
            <button onClick={()=>setQuizReady(false)}>START</button>
        </div>
    )
}

export default QuizMenu