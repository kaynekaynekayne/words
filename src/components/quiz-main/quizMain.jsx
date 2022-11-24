import React, { useEffect, useState } from 'react'

const QuizMain = ({score, setScore, setQuizReady}) => {

    const [randomList, setRandomList]=useState([]);
    const [currIdx, setCurrIdx]=useState(0);
    const [clicked, setClicked]=useState(false);
    const [showScore, setShowScore]=useState(false);

    const [randomAns, setRandomAns]=useState([]);
    console.log(randomAns);

    const handleAnswer=(answer)=>{
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
        } else{
            setShowScore(true);
        }
    }
    console.log(randomList) //[...] 문제 돌기
    console.log(randomAns)

    useEffect(()=>{
        const xx=async()=>{
            const existedList=await JSON.parse(localStorage.getItem("voca"));
            //sort() 로직 이해
            setRandomList(existedList.sort(() => Math.random() - 0.5));
            setRandomAns(existedList.sort(()=>Math.random()-0.5).slice(0,4));
        }
        xx();
    },[]);

    return (
        <div>
            {randomList && randomAns ? (
                <>
                    <h1>{randomList[currIdx] && randomList[currIdx].words}</h1>
                    <div>
                        {randomAns.map(list=>(
                            <div key={list.id}>
                                <button 
                                    disabled={clicked}
                                    onClick={()=>handleAnswer(list.meanings)}
                                    >{list.meanings}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button
                            // disabled={!clicked}
                            onClick={handleNext}
                        >NEXT</button>
                    </div>
                </>
            ):<div>리스트가 없습니다</div>
            //length가 4개 이상이어야 실행되게 설정
        }
        </div>
    )
}

export default QuizMain