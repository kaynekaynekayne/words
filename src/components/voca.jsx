import React, { useState } from 'react'

const Voca = ({list, index, updateVocas}) => {

    const [newWords, setNewWords]=useState(list.words);
    const [newMeanings, setNewMeanings]=useState(list.meanings);

    const handleConfirm=(e)=>{
        e.preventDefault();
        console.log(index);
        updateVocas(newWords, newMeanings, index);
    }

    return (
        <div>
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
                <button
                    onClick={handleConfirm}
                >변경</button>
                <button>삭제</button>
            </form>
        </div>
    )
}

export default Voca;