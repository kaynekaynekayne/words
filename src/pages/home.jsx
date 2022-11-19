import React,{useState, useEffect} from 'react'
import AddForm from '../components/add-form';
import EditForm from '../components/edit-form';

const Home = () => {
    const [lists,setLists]=useState([]);

    useEffect(()=>{
        if(localStorage.getItem("voca")){
            const exitedList=JSON.parse(localStorage.getItem("voca"));
            console.log(exitedList)
            setLists(exitedList);
        }
    },[]);

    const createVocas=(voca)=>{
        setLists([...lists, voca]);
        localStorage.setItem("voca",JSON.stringify([...lists, voca]));
    }

    const updateVocas=(word, meaning, index)=>{
        if(localStorage.getItem("voca")){
            const getData=JSON.parse(localStorage.getItem('voca'));
            console.log(word, meaning);
            getData[index].words=`${word}`;
            getData[index].meanings=`${meaning}`;
            
            localStorage.setItem("voca", JSON.stringify(getData));
        }
    }


    return (
        <div>
            <EditForm 
                lists={lists} 
                updateVocas={updateVocas}    
            />
            <AddForm createVocas={createVocas}/>
        </div>
    )
}

export default Home;