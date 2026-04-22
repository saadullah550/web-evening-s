import Navbar from './components/Navbar'
import Card from './components/Card'
import { useState } from 'react'
import './App.css'

const courses = [
{img : './1p.png' , title: 'Web Develpnment', decs: 'Learn with us and build modren websites, Turn your ideas into reality'},
{img : './2p.png' , title: 'Cyber Security', decs: 'Learn with us and build modren websites, Turn your ideas into reality '},
{img : './3p.png' , title: 'Graphic Designing', decs: 'Learn with us and build modren websites, Turn your ideas into reality'}
]
function App () {
const [count, setCount]= useState(0)
const [isVisible, setVisible]=useState(false)
  return (
    <>
     <Navbar/>
     <button className="border-2 border-blue-200 px-2 py-1  rounded-lg" onClick={() => setCount(count + 1)}>Count: {count} </button>
     <button className="border-2 border-red-200 px-2 py-1 rounded-md " onClick={() => setVisible (!isVisible)}> {  isVisible ? "Hide" : "Show" } </button>
     {
      //  <div className='card-container'>
        /* < Card img=",/p1.png"  title="Web Develpment " decs="Learn with us and build modren website,Turn your ideas into reality" > */
        /* < Ca/rd img= "./p2.png"  title= "Cyber Security " decs= "Learn with us and protect the digital world , Become a cyber defender "> */

      /* </div> */}  
    {isVisible && (
       <div className='card-container '>
      {courses.map((course) =>(
        <Card  
        img ={course.img}
        emoji ={course.emoji}
        title ={course.title}
         decs ={course.decs}
        />
      ))}
     </div>       
    )}
    </>
  )
}

export default App
