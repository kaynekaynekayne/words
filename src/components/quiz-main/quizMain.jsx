import React, { useState } from 'react'
import Button from '../button/button';
import styles from './quizMain.module.css';


const QuizMain = ({randomList, setQuizReady, showWord}) => {

    const [currIdx, setCurrIdx]=useState(0);
    const [score, setScore]=useState(0);
    const [showScore, setShowScore]=useState(false);
    const [answer, setAnswer]=useState("");
    const [clicked, setClicked]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if((showWord && answer===randomList[currIdx].meanings) || (!showWord && answer===randomList[currIdx].words)) {
            setScore(score+1);
        }
        setClicked(true);
    };
    
    const handleNext=()=>{
        setClicked(false);
        if(currIdx < randomList.length-1){
            setCurrIdx(currIdx+1);
            setAnswer("");
        } else{
            setShowScore(true);
        }
    }

    return (
        <div className={styles.quizMain}>
            {showScore ? 
                <div className={styles.box}>
                    <div className={styles.info}>
                        <h2>끝!</h2>
                        <h3>당신의 점수는 {score}/{randomList.length}</h3>
                    </div>
                    <Button title="돌아가기" onClick={()=>setQuizReady(true)}/>
                </div>
            : (
                <div>
                    <h3>{currIdx+1} of {randomList.length}</h3>
                    <div className={styles.box}>
                        <div className={styles.qbox}>
                            <h1 className={styles.question}>{(randomList[currIdx] && showWord) ? randomList[currIdx].words : randomList[currIdx] && randomList[currIdx].meanings}</h1>
                            <div className={styles.correctBox}>
                                {clicked && <span className={styles.correct}>{showWord && randomList[currIdx] ? randomList[currIdx].meanings : randomList[currIdx].words}</span>}
                            </div>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                className={styles.input}
                                placeholder="정답"
                                onChange={(e)=>setAnswer(e.target.value)}
                                value={answer}
                            />
                            <button
                                className={`${clicked ? styles.submitted : ""} ${styles.btn}`}
                                disabled={clicked}
                                onClick={()=>handleSubmit}
                            >제출</button>
                        </form>
                        <button
                            className={`${!clicked ? styles.submitted : ""} ${styles.btn}`}
                            disabled={!clicked}
                            onClick={handleNext}
                        >NEXT</button>
                    </div>
                </div>
            )
        }
        </div>
    )
}

export default QuizMain