import Studentcard from "./Studentcard"
import Navbar from "./Navbar"

function App() {
  const courses =[
    {img: './1p.png' , Name :'Saadullah', Course: 'Webdevelpnment', Rollno:'2219'},
    {img: './2p.png' , Name :'Waleed', Course: 'SEO and Digital Marketing', Rollno:'2213'},
    {img: './3p.png' , Name :'Bilal', Course: 'Cyber Scurity', Rollno:'2217'},

  ]


  return (
    <>
    <Navbar/>
      <div className="flex justify-around items-center bg-sky-200 " >
         {courses.map((course) => (
       <Studentcard
          img={course.img}
          Name={course.Name}
          Course={course.Course}
          Rollno={course.Rollno} 
          />
           )) }

      </div>
       
       

       
    </>
  )
}

export default App
