import React from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
        {
            title: "All Tasks",
            icon: <CgNotes />,
            link: "/"
        },
        {
            title: "Important Tasks",
            icon: <MdLabelImportant />,
            link: "/importanttasks"
        },
        {
            title: "Completed Tasks",
            icon: <FaClipboardCheck />,
            link: "/completedtasks"
        },
        {
            title: "Incompleted Tasks",
            icon: <TbNotebookOff />,
            link: "/incompletetasks"
        },
    ]

    return (
        <>
            <div>
                <h2 className='text-xl font-semibold'>Ross Cruk</h2>
                <h3 className='text-gray-500 mb-2'>cruk@gmail.com</h3>
                <hr />
            </div>
            <div>
                {data.map((items, i)=> (
                    <Link to={items.link} className='my-3 flex items-center hover:bg-gray-500 p-2 rounded transition-all duration:300'>
                        {items.icon}
                        &nbsp;
                        &nbsp;
                        {items.title}
                    </Link>
                ))}
            </div>
            <div>
                <button type="button" className="btn btn-outline-primary w-full">Log Out</button>
            </div>
        </>
    )
}

export default Sidebar
