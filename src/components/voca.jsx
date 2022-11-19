import React, { useState } from 'react'

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
            <button onClick={handleUpdate}>변경</button>
            <button onClick={handleDelete}>삭제</button>
        </form>
    )
}

export default Voca;