import React from 'react'
import styles from './quizMenu.module.css';


const QuizMenu = ({list, setQuizReady, setShowWord}) => {
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
            <div>
                <button 
                    onClick={()=>setShowWord(true)}
                    className={`${styles.preBtn} ${styles.box}`}
                >뜻 보기</button>
                <button 
                    onClick={()=>setShowWord(false)}
                    className={`${styles.preBtn} ${styles.box}`}
                >단어 보기</button>

                <input 
                    type="number"
                    className={`${styles.input} ${styles.box}`}
                    placeholder='문제 수'
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