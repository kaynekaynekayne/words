import React, { useState, useEffect } from 'react'
import QuizMain from '../../components/quiz-main/quizMain';
import QuizMenu from '../../components/quiz-menu/quizMenu';
import styles from './quiz.module.css';


const Quiz = () => {
    const [quizReady, setQuizReady]=useState(true);
    const [randomList, setRandomList]=useState([]);
    const [showWord, setShowWord]=useState(true);
    
    useEffect(()=>{
        const existedList=JSON.parse(localStorage.getItem("voca"));
        existedList && setRandomList(existedList.sort(() => Math.random() - 0.5));
    },[]);

    return (
        <div className={styles.quiz}>
            {quizReady ? 
                <QuizMenu 
                    setQuizReady={setQuizReady}
                    list={randomList}
                    setShowWord={setShowWord}
                />
            :
                <QuizMain 
                    randomList={randomList.length > 30 ? randomList.slice(0,30) : randomList} 
                    setQuizReady={setQuizReady}
                />
            }
        </div>
    )
}

export default Quiz;