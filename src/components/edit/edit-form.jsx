import React,{useEffect} from 'react'
import { DATA_PER_PAGE } from '../../utils/constants';
import Voca from '../voca/voca';
import styles from './edit-form.module.css';


const EditForm = ({page, lists, updateVocas, deleteVocas,lock}) => {
    const startIndex=(page-1)*DATA_PER_PAGE
    const showedData=lists.slice(startIndex, startIndex+DATA_PER_PAGE);
    return (
        <div>
            {showedData.map((list, index)=>
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