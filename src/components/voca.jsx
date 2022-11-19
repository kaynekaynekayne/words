import React, { useState } from 'react'
import Button from './button';

const Voca = ({list, index, updateVocas, deleteVocas}) => {

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
                value={newWords}
                onChange={(e)=>setNewWords(e.target.value)}
                required
            />
            <input 
                value={newMeanings}
                onChange={(e)=>setNewMeanings(e.target.value)}
                required
            />
            <Button title="변경" onClick={handleUpdate}/>
            <Button title="삭제" onClick={handleDelete}/>
        </form>
    )
}

export default Voca;