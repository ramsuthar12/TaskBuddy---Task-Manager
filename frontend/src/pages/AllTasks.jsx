import React, { useState, useEffect } from 'react'
import Cards from '../components/Home/Cards'
import InputData from '../components/Home/InputData'
import axios from 'axios'

const All_tasks = () => {
    const [Data, setData] = useState();
    const headers = {
        id: localStorage.getItem("id"),
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
    useEffect(()=> {
        const fetch = async()=>{
            const response = await axios.get("http://localhost:1000/api/v2/get-all-tasks", {headers});
            setData(response.data.data);
        };
        if (localStorage.getItem("id") && localStorage.getItem("token")){
            fetch();
        }
    });
    const [inputDiv, setinputDiv] = useState("hidden");

    const [updatedData, setupdatedData] = useState({
        id: "",
        title: "",
        description: ""
    });
    return (
        <>
            <div>
                {Data && <Cards home={true} setinputDiv = {setinputDiv} data = {Data.tasks} setupdatedData = {setupdatedData}/>}
            </div>
            <InputData inputDiv = {inputDiv} setinputDiv = {setinputDiv} updatedData = {updatedData} setupdatedData = {setupdatedData}/>
        </>
    )
}

export default All_tasks
