import React from 'react'
import { MEAN, WORD } from '../../utils/constants';
import styles from './invisible.module.css';

const Invisible = ({toggleLock}) => {
    
    return (
        <>
            <button onClick={()=>toggleLock(WORD)}>단어 숨김</button>
            <button onClick={()=>toggleLock(MEAN)}>뜻 숨김</button>
        </>
    )
}

export default Invisible;