import React from 'react'
import styles from './quizMenu.module.css';


const QuizMenu = ({list, setQuizReady}) => {
    const startQuiz=()=>{
        if(list.length<3){
            alert("단어장의 단어가 최소 4개 이상이어야 시작할 수 있습니다");
            return;
        } else{
            setQuizReady(false)
        }
    }
    return (
        <div className={styles.quizMenu}>
            <button 
                className={styles.btn} 
                onClick={startQuiz}
            >START</button>
        </div>
    )
}

export default QuizMenu