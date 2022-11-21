import React, { useState } from 'react'
import Button from '../button/button';
import styles from './vocaEdit.module.css';

const VocaEdit = ({list, index, updateVocas, deleteVocas,lock}) => {

    const [newWords, setNewWords]=useState(list.words);
    const [newMeanings, setNewMeanings]=useState(list.meanings);

    const handleUpdate=(e)=>{
        e.preventDefault();
        updateVocas(newWords, newMeanings, index);
    };

    const handleDelete=(e)=>{
        e.preventDefault();
        deleteVocas(list.id);
    };

    return (
        <form>
            <input 
                className={lock.word ? styles.lock : ""}
                value={newWords}
                onChange={(e)=>setNewWords(e.target.value)}
                required
            />
            <input 
                className={lock.mean ? styles.lock : ""}
                value={newMeanings}
                onChange={(e)=>setNewMeanings(e.target.value)}
                required
            />
            <Button title="변경" onClick={handleUpdate}/>
            <Button title="삭제" onClick={handleDelete}/>
        </form>
    )
}

export default VocaEdit;