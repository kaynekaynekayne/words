import React from 'react'
import styles from './quizMenu.module.css';


const QuizMenu = ({list, setQuizReady, setShowWord, showWord, setNumQuiz}) => {

    const startQuiz=()=>{
        if(list.length===0){
            alert("단어장에 단어가 없습니다");
            return;
        } else{
            setQuizReady(false)
        }
    }
    return (
        <div className={styles.quizMenu}>
            <div>
                <button 
                    onClick={()=>setShowWord(true)}
                    className={`${styles.preBtn} ${styles.box} ${showWord ? styles.clicked : ""}`}
                >단어 보기</button>
                <button 
                    onClick={()=>setShowWord(false)}
                    className={`${styles.preBtn} ${styles.box} ${showWord ? "" : styles.clicked}`}
                >뜻 보기</button>

                <input 
                    type="number"
                    className={`${styles.input} ${styles.box}`}
                    placeholder='문제 수'
                    onChange={(e)=>setNumQuiz(e.target.value)}
                />
            </div>
            <button 
                className={`${styles.btn} ${styles.box}`} 
                onClick={startQuiz}
            >START</button>
        </div>
    )
}

export default QuizMenu