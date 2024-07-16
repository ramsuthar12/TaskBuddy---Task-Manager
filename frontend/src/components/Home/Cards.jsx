import React from 'react';
import { FaExclamationCircle } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const Cards = ({home, setinputDiv}) => {
    const data = [
        {
            title: "Do Coding",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique exercitationem dolore, corporis iusto soluta adipisci? Id cumque optio labore.",
            status: "Incomplete"
        },
        {
            title: "Do Exercise",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore similique exercitationem dolore, corporis iusto so Id cumque optio labore.",
            status: "Incomplete"
        },
        {
            title: "Playing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
            status: "Complete"
        },
        {
            title: "Work",
            description: "Lor consectetur adipisicing elit. Tempore similique exercitationem dolore, corporis iusto soluta adipisci? Id cumque optio labore.",
            status: "Incomplete"
        },
        {
            title: "Travel",
            description: "Lor consectetur adipisicing elit. Tempore similique exercitationem dolore, corporis iusto soluta adipisci? Id cumque optio labore.Id cumque optio labore adipisicing elit.",
            status: "Incomplete"
        }
    ]
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
                        <button className={`${items.status === "Incomplete" ? "bg-red-500" : "bg-green-400"} px-2 py-1 rounded`}>
                            {items.status}
                        </button>
                        <div className='w-3/6 px-1 text-2xl flex justify-around'>
                            <button><FaExclamationCircle /></button>
                            <button><MdEditNote /></button>
                            <button><MdOutlineDeleteSweep /></button>
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
