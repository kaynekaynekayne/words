import React, { useState } from 'react'
import styles from './vocaEdit.module.css';
import {RiDeleteBinLine} from 'react-icons/ri';
import {BsPencilSquare} from 'react-icons/bs';

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
        <form className={styles.form}>
            <input 
                className={`${styles.input} ${lock.word ? styles.lock : ""}`}
                value={newWords}
                onChange={(e)=>setNewWords(e.target.value)}
                required
            />
            <input 
                className={`${styles.input} ${lock.mean ? styles.lock : ""}`}
                value={newMeanings}
                onChange={(e)=>setNewMeanings(e.target.value)}
                required
            />
            <button
                className={`${styles.check} ${styles.btn}`}
                onClick={handleUpdate}
            >
                <BsPencilSquare />
            </button>
            <button 
                className={`${styles.del} ${styles.btn}`}
                onClick={handleDelete}
            >
                <RiDeleteBinLine />
            </button>
        </form>
    )
}

export default VocaEdit;