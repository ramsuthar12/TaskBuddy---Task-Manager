import React, { useEffect } from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import IncompleteTasks from './pages/IncompleteTasks'
import { Routes, Route, useNavigate , useLocation  } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useDispatch, useSelector } from "react-redux";
import { authActions } from './store/auth'

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(()=> {
    if (localStorage.getItem("id") && localStorage.getItem("token")){
      dispatch(authActions.login());
    } else if (isLoggedIn === false && location.pathname !== '/login'){
      navigate("/signup ");
    }
  }, [isLoggedIn, navigate, location.pathname, dispatch]);
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
