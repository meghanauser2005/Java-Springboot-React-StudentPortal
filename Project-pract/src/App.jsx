import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Signin from './Frontend/Signin'
import Finalpage from './Frontend/Finalpage'
import Connect from './Frontend/Connect'


const App = () => {
  
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Finalpage/>}  />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/records' element={<Connect/>}/>
      </Routes>
    </div>
  )
}

export default App
