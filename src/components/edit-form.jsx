import React,{useEffect} from 'react'
import Voca from './voca';

const EditForm = ({lists, updateVocas, deleteVocas}) => {

    return (
        <div>
            {lists.map((list, index)=>
                <Voca 
                    key={list.id} 
                    list={list}
                    index={index}
                    updateVocas={updateVocas}
                    deleteVocas={deleteVocas}
                />
            )}
        </div>
    )
}

export default EditForm;