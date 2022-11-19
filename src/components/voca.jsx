import React, { useState } from 'react'

const Voca = ({list, setList}) => {

    const [isEdited, setIsEdited]=useState(false);
    console.log(isEdited)
    return (
        <div>
            {isEdited ?  
                <form>
                    <input />
                    <input />
                    <button>확인</button>
                    <button>취소</button>
                </form>
            :
                <form>
                    <input 
                        value={list.words}
                        type="text"
                        // onChange={}
                    />
                    <input 
                        value={list.meanings}
                        type="text"
                        // onChange={}
                    />
                    <button onClick={()=>setIsEdited(prev=>!prev)}>수정</button>
                    <button>삭제</button>
                </form>
            }
        </div>
    )
}

export default Voca;