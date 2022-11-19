import React from 'react'
import styles from './invisible.module.css';

const Invisible = ({toggleLock}) => {
    
    const WORD="word";
    const MEAN="mean";

    return (
        <>
            <button onClick={()=>toggleLock(WORD)}>단어 숨김</button>
            <button onClick={()=>toggleLock(MEAN)}>뜻 숨김</button>
        </>
    )
}

export default Invisible;