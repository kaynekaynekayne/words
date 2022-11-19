import React,{useState, useEffect} from 'react'
import AddForm from '../components/add/add-form';
import EditForm from '../components/edit/edit-form';
import Invisible from '../components/invisible/invisible';

const Home = () => {
    const [lists,setLists]=useState([]);

    useEffect(()=>{
        if(localStorage.getItem("voca")){
            const exitedList=JSON.parse(localStorage.getItem("voca"));
            setLists(exitedList);
        }
        console.log(lists);
    },[]);

    const createVocas=(voca)=>{
        setLists([...lists, voca]);
        localStorage.setItem("voca",JSON.stringify([...lists, voca]));
    };

    const updateVocas=(word, meaning, index)=>{
        lists[index].words=`${word}`;
        lists[index].meanings=`${meaning}`;
        localStorage.setItem("voca", JSON.stringify(lists));
    };

    const deleteVocas=(id)=>{
        const deleted=lists.filter(list=>list.id!==id);
        setLists(deleted);
        localStorage.setItem("voca", JSON.stringify(deleted));
    };


    return (
        <div>
            <Invisible />
            <EditForm 
                lists={lists} 
                updateVocas={updateVocas}
                deleteVocas={deleteVocas}    
            />
            <AddForm createVocas={createVocas}/>
        </div>
    )
}

export default Home;