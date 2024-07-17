import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded-lg bg-black flex flex-col justify-between '>
                <div className='text-xl font-semibold'>Login</div>
                <input 
                    type="username"
                    placeholder='username'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='username'
                />
                <input 
                    type="password"
                    placeholder='password'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='password'
                />
                <div className='w-full flex justify-between items-center'>
                    <button type="button" className="btn btn-primary my-2">Log In</button>
                    <Link to="/signup" className='text-sm hover:text-blue-500 ' >New to TaskBuddy? Then please Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
