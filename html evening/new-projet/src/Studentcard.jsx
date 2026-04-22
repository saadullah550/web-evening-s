 function Studentcard({img, Name , Course, Rollno}){
    return(
        <div className="   ">
           <div className="bg-gray-400 w-[250px] h-[490px] m-20  p-2  rounded-md border-t-2 border-indigo-600 ">
             <img className=" w-[180px] " src={img}  alt="" />
            <h2 className="font-bold text-3xl p-2 m-2" > {Name} </h2>
            <p className="font-bold"> {Course} </p>
            <p> {Rollno} </p>
           </div>
        </div>
    )
 }
 export default Studentcard