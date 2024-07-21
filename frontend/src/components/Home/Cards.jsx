import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import axios from 'axios';

const Cards = ({home, setinputDiv, data, setupdatedData}) => {
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`
    };
    const handleTaskStatus = async(id)=> {
        try {
            await axios.put(
                `http://localhost:1000/api/v2/update-comp-task/${id}`, 
                {},
                { headers }
            );
        } catch (error) {
            console.log(error);
        }
    }

    const handleTaskImp = async(id)=> {
        try {
            await axios.put(
                `http://localhost:1000/api/v2/update-imp-task/${id}`, 
                {},
                { headers }
            );
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateTask = async(id, title, description)=> {
        setinputDiv("fixed");
        setupdatedData({id: id, title: title, description: description})
    }

    const handleDeleteTask = async(id)=> {
        try {
            await axios.delete(
                `http://localhost:1000/api/v2/delete-task/${id}`,
                { headers }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='grid grid-cols-4 gap-4 '>
            {data && data.map((items, i) => (
                <div className="card bg-blue-900 text-white mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Task</div>
                    <div className="card-body">
                        <h5 className="card-title">{items.title}</h5>
                        <p className="card-text">{items.description}</p>
                    </div>
                    <div className='m-2 flex items-center'>
                        <button className={`${items.complete === false ? "bg-red-500" : "bg-green-400"} px-2 py-1 rounded`} onClick={()=> handleTaskStatus(items._id)}>
                            {items.complete === false ? "Incomplete" : "Completed"}
                        </button>
                        <div className='w-3/6 px-1 text-2xl flex justify-around'>
                            <button onClick={()=> handleTaskImp(items._id)} className={`${items.important === true ? "text-green-400" : "text-white"}`}><FaExclamationCircle /></button>
                            {home !== false && (<button onClick={()=> handleUpdateTask(items._id, items.title, items.description)}><MdEditNote /></button>)}
                            <button onClick={()=> handleDeleteTask(items._id)}><MdOutlineDeleteSweep /></button>
                        </div>
                    </div>
                </div>
            ))}
        {home && 
            <div className=' h-[92%] flex items-center justify-center'>
                <button className='text-7xl text-green-600 hover:scale-110 hover:cursor-pointer transition-all duration-300' onClick={()=>setinputDiv("fixed")}>
                <IoMdAddCircle />
                </button>
            </div>
        }
        </div>
    )
}

export default Cards
