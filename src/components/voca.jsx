import React, { useState } from 'react'

const Voca = ({list, index, updateVocas}) => {

    const [newWords, setNewWords]=useState(list.words);
    const [newMeanings, setNewMeanings]=useState(list.meanings);
    
    const [isEdited, setIsEdited]=useState(false);

    const handleUpdate=(e)=>{
        e.preventDefault();
        setIsEdited(prev=>!prev);
    };

    const handleConfirm=(e)=>{
        e.preventDefault();
        console.log(index);
        updateVocas(newWords, newMeanings, index);
    }

    return (
        <div>
            {isEdited ?  
                <form>
                    <input 
                        value={newWords}
                        onChange={(e)=>setNewWords(e.target.value)}
                    />
                    <input 
                        value={newMeanings}
                        onChange={(e)=>setNewMeanings(e.target.value)}
                    />
                    <button
                        onClick={handleConfirm}
                    >확인</button>
                    <button>취소</button>
                </form>
            :
                <form>
                    <input 
                        value={list.words}
                        type="text"
                        readOnly
                    />
                    <input 
                        value={list.meanings}
                        type="text"
                        readOnly
                    />
                    <button onClick={handleUpdate}>수정</button>
                    <button>삭제</button>
                </form>
            }
        </div>
    )
}

export default Voca;