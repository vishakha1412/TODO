import React from 'react'
 import { useState,useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
 const Update = () => {
    const {id} = useParams();
    const navigate=useNavigate();
    
      const[title,setTitle]=useState('')
          const[date,setDate]=useState('')
           const[time,setTime]=useState('')
   const url='http://localhost:3000/users/'+id;
    
    useEffect(() =>{
        getUserData()
    },[])
    const getUserData=async() =>{
       
        let response= await fetch(url);
        response=await response.json();
        console.log(response)
        setTitle(response.title)
        setDate(response.date)
        setTime(response.time)

    }    
            
     const Edit=async(id)=>{
        let response=await fetch(url,{
            method:'Put',
            body:JSON.stringify({title,date,time})
           

        })
        navigate('/tasks');
    }
        ;
  return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Update Task </h2>

            
              Text:  <input type='text' placeholder='Enter your ideas'  onChange={(e)=>setTitle(e.target.value)} value={title}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
/>
              Date: <input type='date'   onChange={(e)=>setDate(e.target.value)} value={date}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
 
              Time:<input type='time'   onChange={(e)=>setTime(e.target.value)}  value={time}className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />


              <button onClick={()=>Edit(id)}  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
         > ➕ Update Task
</button>
            
        </div>
      </div>
  )
}
export default Update
