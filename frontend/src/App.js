import React, { useEffect } from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import IncompleteTasks from './pages/IncompleteTasks'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(()=> {
    if (isLoggedIn === false){
      navigate("/signup ");
    }
  }, [isLoggedIn, navigate]);
  // 
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route index element={<AllTasks />}/>
            <Route path='/importanttasks' element={<ImportantTasks />}/>
            <Route path='/completedtasks' element={<CompletedTasks />}/>
            <Route path='/incompletetasks' element={<IncompleteTasks />}/>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App
