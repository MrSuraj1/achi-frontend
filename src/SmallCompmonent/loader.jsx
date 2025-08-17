import { useState } from "react"

export default function Loader(){

 const [loader ,setLoading] = useState(true);   
     

 return (
        <>
         <div className="flex justify-center items-center mt-14">

          <div className="w-14 h-14 border-[4px] border-blue-500 border-dashed rounded-full animate-spin">

          </div>


         </div>
        
        
        </>
    )

}