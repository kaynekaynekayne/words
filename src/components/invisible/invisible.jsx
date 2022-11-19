import React,{useState} from 'react'

const Invisible = () => {

    //전체적으로 에바
    
    const [lockWord, setLockWord]=useState(false);
    const [lockMeaning, setLockMeaning]=useState(false);

    console.log("단어숨김",lockWord);
    console.log("뜻숨김",lockMeaning);

    const handleWord=()=>{
        setLockWord(prev=>!prev);
    };
    
    const handleMean=()=>{
        setLockMeaning(prev=>!prev);
    }

    return (
        <>
            <button onClick={handleWord}>단어 숨김</button>
            <button onClick={handleMean}>뜻 숨김</button>
        </>

    )
}

export default Invisible;