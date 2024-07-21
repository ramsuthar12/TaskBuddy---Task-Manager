import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";

const InputData = ({inputDiv, setinputDiv, updatedData, setupdatedData}) => {
    const [Data, setData] = useState({ title: "", description: "" });
    const change = (e)=> {
        const {name, value} = e.target;
        setData({...Data, [name]: value});
    }

    useEffect(()=> {
        setData({title: updatedData.title, description: updatedData.description})
    }, [updatedData])

    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`
    };

    const submitData = async()=> {
        if (Data.title === "" || Data.description === ""){
            alert("All fields are required!");
        } else{
            await axios.post("http://localhost:1000/api/v2/create-task", Data, {headers});
            setData({ title: "", description: "" });
            setinputDiv("hidden");
        }
    }

    const updateTask = async()=> {
        if (Data.title === "" || Data.description === ""){
            alert("All fields are required!");
        } else{
            await axios.put(`http://localhost:1000/api/v2/update-task/${updatedData.id}`, Data, {headers});
            setupdatedData({
                id: "",
                title: "",
                description: ""
            });
            setData({ title: "", description: "" });
            setinputDiv("hidden");
        }
    }

    return (
        <>
            <div className= {`${inputDiv} top-0 left-0 bg-slate-500 opacity-70 h-screen w-full`}></div>
            <div className= {`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
                <div className='w-2/6 bg-gray-800 p-4 rounded'>
                    <div className='flex justify-start text-xl'>
                        <button onClick={()=>{
                            setinputDiv("hidden");
                            setData({
                                title: "",
                                description: ""
                            });
                            setupdatedData({
                                id: "",
                                title: "",
                                description: ""
                            });
                        }}>
                        <MdClose />
                        </button>
                    </div>
                    <input 
                        type="text"
                        placeholder='Title'
                        name='title'
                        className='px-3 py-2 rounded w-full bg-gray-600 my-3'
                        value={Data.title}
                        onChange={change}
                    />
                    <textarea 
                        name="description" 
                        cols="30"
                        rows="10"
                        placeholder='Description...'
                        className='px-3 py-2 rounded w-full bg-gray-600 my-3'
                        value={Data.description}
                        onChange={change}
                    ></textarea>
                    {updatedData.id === "" ? (<button type="button" className="btn btn-outline-success" onClick={submitData}>Submit</button>) : (<button type="button" className="btn btn-outline-success" onClick={updateTask}>Update</button>)}
                    
                </div>
            </div>
        </>
    )
}

export default InputData
