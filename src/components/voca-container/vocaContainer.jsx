import React from 'react'
import { DATA_PER_PAGE } from '../../utils/constants'
import VocaEdit from '../voca-edit/vocaEdit';
import VocaAdd from '../voca-add/vocaAdd';


const VocaContainer = ({lists, updateVocas, deleteVocas, lock, page, createVocas}) => {
    
    const startIndex=(page-1)*DATA_PER_PAGE;
    const showedData=lists.slice(startIndex, startIndex+DATA_PER_PAGE);

    return (
        <div>
            <VocaAdd createVocas={createVocas}/>
            {showedData.map((list, index)=>
                <VocaEdit 
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

export default VocaContainer;