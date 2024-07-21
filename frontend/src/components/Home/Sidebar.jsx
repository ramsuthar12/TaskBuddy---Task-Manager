import React, { useEffect, useState } from 'react'
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';
import axios from 'axios';

const Sidebar = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
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
    ];
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

    const logout = ()=> {
        dispatch(authActions.logout());
        localStorage.clear("id");
        localStorage.clear("token");
        history('/signup');
    }

    return (
        <>
            {Data && (
                <div>
                <h2 className='text-xl font-semibold'>{Data.username}</h2>
                <h3 className='text-gray-500 mb-2'>{Data.email}</h3>
                <hr />
            </div>
            )}
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
                <button type="button" className="btn btn-outline-primary w-full" onClick={logout}>Log Out</button>
            </div>
        </>
    )
}

export default Sidebar
