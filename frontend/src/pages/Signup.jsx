import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded-lg bg-black h-[47%] flex flex-col justify-between'>
                <div className='text-xl font-semibold'>Signup</div>
                <input 
                    type="username"
                    placeholder='username'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='username'
                />
                <input 
                    type="email"
                    placeholder='email'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='xyz@gmail.com'
                    required    
                />
                <input 
                    type="password"
                    placeholder='password'
                    className='bg-slate-700 px-3 py-2 my-3 w-full rounded'
                    name='password'
                />
                <div className='w-full flex justify-between items-center'>
                    <button type="button" className="btn btn-primary my-2">Sign Up</button>
                    <Link to="/login" className='text-sm hover:text-blue-500 '>Already a User? Then please Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
