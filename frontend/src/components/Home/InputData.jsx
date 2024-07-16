import React from 'react'
import { MdClose } from "react-icons/md";

const InputData = ({inputDiv, setinputDiv}) => {
    return (
        <>
            <div className= {`${inputDiv} top-0 left-0 bg-slate-500 opacity-70 h-screen w-full`}></div>
            <div className= {`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
                <div className='w-2/6 bg-gray-800 p-4 rounded'>
                    <div className='flex justify-start text-xl'>
                        <button onClick={()=>setinputDiv("hidden")}>
                        <MdClose />
                        </button>
                    </div>
                    <input 
                        type="text"
                        placeholder='Title'
                        name='tite'
                        className='px-3 py-2 rounded w-full bg-gray-600 my-3'
                    />
                    <textarea 
                        name="desc" 
                        cols="30"
                        rows="10"
                        placeholder='Description...'
                        className='px-3 py-2 rounded w-full bg-gray-600 my-3'
                    ></textarea>
                    <button type="button" class="btn btn-outline-success">Submit</button>
                </div>
            </div>
        </>
    )
}

export default InputData
