import React,{useEffect} from 'react'
import Voca from '../voca/voca';
import styles from './edit-form.module.css';


const EditForm = ({lists, updateVocas, deleteVocas,lock}) => {

    return (
        <div>
            {lists.map((list, index)=>
                <Voca 
                    key={list.id} 
                    list={list}
                    index={index}
                    updateVocas={updateVocas}
                    deleteVocas={deleteVocas}
                    lock={lock}
                />
            )}
        </div>
    )
}

export default EditForm;