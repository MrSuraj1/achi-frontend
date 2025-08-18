import { Link } from "react-router-dom";



function Pagenot(){
     
    
     return (<>
    <img   className="flex justify-center flex-wrap h-44 md:ml-[550px]"  src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="/>

    <div className="flex flex-wrap justify-center items-center ">
     <h1 className=" font-semibold text-3xl text-blue-700">Page Not Found</h1>
  
     
     </div>
     <h2  className="text-xl text-gray-950 flex flex-wrap justify-center items-center "> May be you come wrong Page</h2>
     <Link to='/' className="ml-64 flex justify-center items-center text-2xl text-read-700 border-2 w-20 rounded-lg " >Home </Link>
     </>)
}

export default Pagenot;