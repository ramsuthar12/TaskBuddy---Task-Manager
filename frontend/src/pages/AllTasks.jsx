import React, { useState } from 'react'
import Cards from '../components/Home/Cards'
import InputData from '../components/Home/InputData'

const All_tasks = () => {
    const [inputDiv, setinputDiv] = useState("hidden");
    return (
        <>
            <div>
                <Cards home={true} setinputDiv = {setinputDiv}/>
            </div>
            <InputData inputDiv = {inputDiv} setinputDiv = {setinputDiv}/>
        </>
    )
}

export default All_tasks
