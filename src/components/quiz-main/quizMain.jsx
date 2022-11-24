import React, { useEffect, useState } from 'react'
import styles from './quizMain.module.css';


const QuizMain = ({randomList, setQuizReady}) => {

    const [currIdx, setCurrIdx]=useState(0);
    const [score, setScore]=useState(0);
    const [showScore, setShowScore]=useState(false);
    const [answer, setAnswer]=useState("");
    const [clicked, setClicked]=useState(false);


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(answer===randomList[currIdx].meanings) {
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
        <div>
            {showScore ? 
                <div>
                    <h3>끝</h3>
                    <h4>당신의 점수는 {score}/{randomList.length}</h4>
                    <button onClick={()=>setQuizReady(true)}>돌아가기</button>
                </div>
            : (
                <>
                    <div>
                        <h3>{currIdx+1} of {randomList.length}</h3>
                    </div>
                    <div>
                        <h1>{randomList[currIdx] && randomList[currIdx].words}</h1>
                        <form onSubmit={handleSubmit}>
                            <input 
                                placeholder="정답"
                                onChange={(e)=>setAnswer(e.target.value)}
                                value={answer}
                            />
                            <button
                                disabled={clicked}
                                onClick={()=>handleSubmit}
                            >제출</button>
                            {clicked && <div className={styles.correct}>{randomList[currIdx].meanings}</div>}
                        </form>
                    </div>
                    <div>
                        <button
                            disabled={!clicked}
                            onClick={handleNext}
                        >NEXT</button>
                    </div>
                </>
            )
        }
        </div>
    )
}

export default QuizMain