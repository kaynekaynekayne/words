import React, { useState } from 'react'
import Button from '../button/button';
import styles from './vocaAdd.module.css';

const VocaAdd = ({createVocas}) => {

    const [words, setWords]=useState("");
    const [meanings, setMeanings]=useState("");

    const handleAdd=(e)=>{
        e.preventDefault();
        const voca={
            id:new Date().getTime(),
            words,
            meanings
        };
        createVocas(voca);
        setWords("");
        setMeanings("");
    }
    return (
        <form className={styles.form} onSubmit={handleAdd}>
            <input 
                className={styles.input}
                type="text"
                placeholder="단어"
                value={words}
                onChange={(e)=>setWords(e.target.value)}
                required
            />
            <input 
                className={styles.input}
                type="text"
                placeholder="뜻"
                value={meanings}
                onChange={(e)=>setMeanings(e.target.value)}
                required
            />
            <Button title="단어장 추가"/>
        </form>
    )
}

export default VocaAdd;