import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import axios from "axios"
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth'
import { useSelector } from 'react-redux';

const Login = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    if (isLoggedIn === true){
        navigate("/");
    }
    const [Data, setData] = useState({ username: "", password: "" });
    const history = useNavigate();
    const dispatch = useDispatch();
    const change = (e)=> {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    };
    const submit = async()=> {
        try {
            if (Data.username === "" || Data.email === "" || Data.password === ""){
                alert("All fields are mandotory.");
            } else{
                const response = await axios.post("http://localhost:1000/api/v1/log-in", Data);
                setData({ username: "", password: "" });
                localStorage.setItem("id", response.data.id);
                localStorage.setItem("token", response.data.token);
                dispatch(authActions.login());
                history('/');
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded-lg bg-black flex flex-col justify-between '>
                <div className='text-xl font-semibold'>Login</div>
                <input 
                    type="username"
                    placeholder='username'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='username'
                    value={Data.username}
                    onChange={change}
                />
                <input 
                    type="password"
                    placeholder='password'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='password'
                    value={Data.password}
                    onChange={change}
                />
                <div className='w-full flex justify-between items-center'>
                    <button type="button" className="btn btn-primary my-2" onClick={submit}>Log In</button>
                    <Link to="/signup" className='text-sm hover:text-blue-500 ' >New to TaskBuddy? Then please Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
