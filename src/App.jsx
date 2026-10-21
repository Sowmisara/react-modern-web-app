import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Course from './Course.jsx'
import Footer from './Footer.jsx'
import CourseList from './CourseList.jsx'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <Course img={Sowmi} heading="Sowmi" content="This is a Cute Girl" ratings={5} show={true}/>
      <Course img={Shampoo} heading="Shampoo" content="This is a Shampoo Course" ratings={3} show={true}/>
      <Course/> */}

      <CourseList/>
    </>
  )
}

export default App
