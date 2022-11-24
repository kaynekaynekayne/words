import React, { useEffect, useState } from 'react'

const QuizMain = ({randomList, setQuizReady}) => {

    const [currIdx, setCurrIdx]=useState(0);
    const [clicked, setClicked]=useState(false);
    const [score, setScore]=useState(0);
    const [showScore, setShowScore]=useState(false);
    const [answer, setAnswer]=useState("");


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(answer===randomList[currIdx].meanings) {
            console.log("정답")
            setScore(score+1);
            setClicked(true);
        } else{
            console.log("틀림")
            setClicked(true);
        }
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
                            >제출</button>
                        </form>
                    </div>
                    <div>
                        <button
                            onClick={handleNext}
                            // disabled={!clicked}
                        >NEXT</button>
                    </div>
                </>
            )
        }
        </div>
    )
}

export default QuizMain