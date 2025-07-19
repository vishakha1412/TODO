import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
 

const User = () => {
    const[Todo,addTodo]=useState([' ']);
    const navigate=useNavigate();
    const url='http://localhost:3000/users'
    useEffect(()=>{
        Data();
    },[])
    const Data=async() =>{
        const response=await fetch(url);
        const data=await response.json();
        addTodo(data);
        

        

    }
    const handleDelete=async(id)=>{
        const url= 'http://localhost:3000/users';
    const response=await fetch(url +'/'+id,{
        method:'delete',
       
    })
   response= await response.json();
   navigate('/tasks')


    }
    const handleUpdate=(id)=>{
        
        console.log(id);
       navigate(`/update/${id}`);
    }
  return (
    <>
    <div className='min-h-screen bg-linear-to-r from-cyan-500 to-blue-500 p-10'  >
        <button  onClick ={()=> navigate('/add')}className='bg-green-400   py-3 px-6 hover:bg-green-500 transition duration-300 rounded-3xl   mt-10 ml-10 text-white
        font-extrabold' > Create +</button>
        
      
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 pt-20 mt-5">
    {Todo.map((item) => (
      <div  className="bg-white/20 bg-opacity-40 backdrop-blur-lg border border-white border-opacity-30 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 object-fill">

        <h3 className="text-xl font-semibold text-white overflow-clip">{item.title}</h3>
        <p className="text-white mt-2">{item.date}</p>
        <p className="text-white mt-1">{item.time}</p>
         <div className="mt-4 flex gap-4">
    <button
      onClick={() => handleDelete(item.id)}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
    >
      Delete
    </button>
    <button
      onClick={() => handleUpdate(item.id)}
      className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-medium transition"
    >
      Update
    </button>
  </div>


      </div>
    ))}



  </div>  
     </div>
    </>
  )
}
export default User
