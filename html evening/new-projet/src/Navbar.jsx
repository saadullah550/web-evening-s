 function Navbar( ) {
    return(
        <div className="bg-blue-300 flex h-[60px] p-1 rounded-md items-center justify-around">
            <h1  className="font-bold text-3xl mx-3" >ReactApp</h1>
            <div className="flex gap-12" >
                <a href="#" className="border-2 border-black-200 py-1 px-2 rounded-md bg-red-200 ">Home</a>
                <a href="#" className="border-2 border-black-200 py-1 px-2 rounded-md bg-red-200">About</a>
                <a href="#" className="border-2 border-black-200 py-1 px-2 rounded-md bg-red-200  " >Services</a>
            </div>
        </div>
    )
 }
 export default Navbar