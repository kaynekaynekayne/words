import React, { useState } from 'react'

const AddForm = ({createVocas}) => {

    const [words, setWords]=useState("");
    const [meanings, setMeanings]=useState("");

    const handleSubmit=(e)=>{
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
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="단어"
                value={words}
                onChange={(e)=>setWords(e.target.value)}
                required
            />
            <input 
                type="text"
                placeholder="뜻"
                value={meanings}
                onChange={(e)=>setMeanings(e.target.value)}
                required
            />
            <button>+</button>
        </form>
    )
}

export default AddForm;