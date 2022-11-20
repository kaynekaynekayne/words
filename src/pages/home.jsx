import React,{useState, useEffect} from 'react'
import AddForm from '../components/add/add-form';
import EditForm from '../components/edit/edit-form';
import Invisible from '../components/invisible/invisible';

const Home = () => {
    const [lists,setLists]=useState([]);
    const [lock, setLock]=useState({
        word:false,
        mean:false
    });

    useEffect(()=>{
        if(localStorage.getItem("voca")){
            const exitedList=JSON.parse(localStorage.getItem("voca"));
            setLists(exitedList);
        }
    },[]);

    const toggleLock=(named)=>{
        setLock(prev=>{
            return {
                ...prev, [named]:!prev[named]
            }
        })
    };

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

    const clearAllVocas=()=>{
        setLists([]);
        localStorage.removeItem("voca");
    }

    return (
        <div>
            <Invisible toggleLock={toggleLock} />
            <EditForm 
                lists={lists} 
                updateVocas={updateVocas}
                deleteVocas={deleteVocas}
                lock={lock}
            />
            <AddForm createVocas={createVocas}/>
            <button onClick={clearAllVocas}>전체삭제</button>
        </div>
    )
}

export default Home;