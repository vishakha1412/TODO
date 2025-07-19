 import React from 'react'
 import { useState} from 'react'
 import {useNavigate} from'react-router-dom';
 

 
const AddData = () => {

  const [showWarning, setShowWarning] = useState(false);
   const [isDisabled, setIsDisabled] = useState(false);

  


  const[title,setTitle]=useState('')
      const[date,setDate]=useState('')
       const[time,setTime]=useState('')
        const navigate=useNavigate();

const createUser=async()=>{
    const url= 'http://localhost:3000/users';
    const response=await fetch(url,{
        method:'Post',
        body:JSON.stringify({title,date,time})
    })
   response= await response.json();
   
}
const maxWords = 20;

  const handleChange = (e) => {
    const text = e.target.value;
    

   
      setTitle(text);
    };





   return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8">
         <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Add New Task</h2>

         
            Text:  <input type='text' 
            placeholder='Enter your ideas'  onChange={handleChange } 
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition
          "

               />
              
              Date: <input type='date'   onChange={(e)=>setDate(e.target.value)}
               className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
 
              Time:<input type='time'   onChange={(e)=>setTime(e.target.value)} className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />


              <button onClick={createUser} disabled={isDisabled} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
         > ➕ Add Task
</button>
            
        </div>
      </div>
   )
 }
 export default AddData
 
