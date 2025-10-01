import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Contact from './pages/contact'
import Home from './pages/home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Myprofile from  './pages/myprofile'
import Login from './pages/login'
import Myappointment from './pages/myapoinmemnt'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const App =()=>{
  return (
    <div className='mx-4 sm:mx-[10%]'>
 <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/myprofile' element={<Myprofile/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Myappointment/>}/>
        <Route path='/appointment/:docid' element={<Appointment/>}/>

      </Routes>


    <Footer/>



    </div>
  )
}
export default App