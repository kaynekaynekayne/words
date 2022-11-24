import React, { useState } from 'react'
import QuizMain from '../../components/quiz-main/quizMain';
import QuizMenu from '../../components/quiz-menu/quizMenu';

const Quiz = () => {
    const [quizReady, setQuizReady]=useState(false);
    const [score, setScore]=useState(0);

    return (
        <div>
            {quizReady ? 
                <QuizMenu setQuizReady={setQuizReady}/>
            :
                <QuizMain 
                    score={score} 
                    setScore={setScore}
                    setQuizReady={setQuizReady}
                />
            }
            
        </div>
    )
}

export default Quiz;