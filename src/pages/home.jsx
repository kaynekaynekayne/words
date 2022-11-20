import React,{useState, useEffect} from 'react'
import AddForm from '../components/add/add-form';
import EditForm from '../components/edit/edit-form';
import Invisible from '../components/invisible/invisible';
import Pagination from '../components/pagination/pagination';
import { DATA_PER_PAGE } from '../utils/constants';

const Home = () => {
    const [lists,setLists]=useState([]);
    const [lock, setLock]=useState({
        word:false,
        mean:false
    });
    
    const [page, setPage]=useState(1);
    const [totalPages, setTotalPages]=useState(0);

    useEffect(()=>{
        if(localStorage.getItem("voca")){
            const exitedList=JSON.parse(localStorage.getItem("voca"));
            setLists(exitedList);
            setTotalPages(Math.ceil(exitedList.length/DATA_PER_PAGE));
        }
    },[]);

    const handlePage=(num)=>{
        setPage(num);
    };

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

    return (
        <div>
            <Invisible toggleLock={toggleLock} />
            <EditForm 
                lists={lists} 
                updateVocas={updateVocas}
                deleteVocas={deleteVocas}
                lock={lock}
                page={page}
            />
            <AddForm createVocas={createVocas}/>
            <Pagination 
                totalPages={totalPages}
                handlePage={handlePage}
            />
        </div>
    )
}

export default Home;