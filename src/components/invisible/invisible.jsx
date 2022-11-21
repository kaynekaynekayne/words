import React from 'react'
import { MEAN, WORD } from '../../utils/constants';
import Button from '../button/button';
import styles from './invisible.module.css';

const Invisible = ({setLock}) => {
    const handleLock=(title)=>{
        setLock(prev=>{
            return {
                ...prev, [title]:!prev[title]
            }
        })
    }
    return (
        <div className={styles.container}>
            <Button title="단어 숨김" onClick={()=>handleLock(WORD)}/>
            <Button title="뜻 숨김" onClick={()=>handleLock(MEAN)}/>
            {/* <button onClick={()=>toggleLock(WORD)}>단어 숨김</button>
            <button onClick={()=>toggleLock(MEAN)}>뜻 숨김</button> */}
        </div>
    )
}

export default Invisible;