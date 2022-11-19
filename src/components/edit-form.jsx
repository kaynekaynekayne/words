import React,{useEffect} from 'react'
import Invisible from '../components/invisible';
import Voca from './voca';

const EditForm = ({lists, setList}) => {
    console.log(lists);

    return (
        <div>
            <Invisible />
            <div>
                {lists.map(list=>
                    <Voca 
                        key={list.id} 
                        list={list}
                        setList={setList}
                    />
                )}
            </div>
        </div>
    )
}

export default EditForm;