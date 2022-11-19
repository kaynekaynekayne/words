import React,{useState, useEffect} from 'react'
import AddForm from '../components/add-form';
import EditForm from '../components/edit-form';

const Home = () => {
    const [lists,setLists]=useState([]);

    useEffect(()=>{
        if(localStorage.getItem("voca")){
            const exitedList=JSON.parse(localStorage.getItem("voca"));
            setLists(exitedList);
        }
    },[]);

    const createVocas=(voca)=>{
        setLists([...lists, voca]);
        localStorage.setItem("voca",JSON.stringify([...lists, voca]));
    }


    return (
        <div>
            <EditForm lists={lists} setLists={setLists}/>
            <AddForm createVocas={createVocas}/>
        </div>
    )
}

export default Home;