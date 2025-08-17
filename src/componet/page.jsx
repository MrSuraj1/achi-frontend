import { Link } from "react-router-dom";

function PageNotFound(){

return (<>

<div className="flex justify-center flex-wrap items-center m min-h-screen">
       
        <div className="items-center p-24 justify-center">
        <img src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="></img>
       <br></br>
              <h1 className="text-blue-900 border-dashed text-3xl mt-4 items-center">Page not found</h1>
         <p className="text-red-600 mt-4">May be you come wrong page</p>
         <Link to='/'>
         <button className="text-red-900 font-semibold mt-4 border-2 rounded-lg p-5 hover:bg-black hover:text-white">Home Page</button></Link>
        </div>
     
</div>
</>)


}

export default PageNotFound;