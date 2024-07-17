import React from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import IncompleteTasks from './pages/IncompleteTasks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen p-2 relative'>
      <Router>
        <Routes>
          <Route axact path='/' element={<Home />}>
            <Route index element={<AllTasks />}/>
            <Route path='/importanttasks' element={<ImportantTasks />}/>
            <Route path='/completedtasks' element={<CompletedTasks />}/>
            <Route path='/incompletetasks' element={<IncompleteTasks />}/>
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
