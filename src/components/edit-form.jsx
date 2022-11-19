import React,{useEffect} from 'react'
import Invisible from '../components/invisible';
import Voca from './voca';

const EditForm = ({lists, updateVocas, deleteVocas}) => {

    return (
        <div>
            <Invisible />
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
        </div>
    )
}

export default EditForm;