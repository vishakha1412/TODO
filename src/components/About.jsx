import React from 'react'

export const About = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-400 to-pink-100 p-6">
        <div className="w-full max-w-md bg-white/20 backdrop-blur-md rounded-xl shadow-xl p-8 ">
        <div className='text-4xl text-center'>❤️❤️</div>
        <h1 className='text-center font-extrabold text-4xl text-violet-600'> AURALIST</h1>
        <p className='text-2xl text-white font-bold'>
          This todo list is designed to bring clarity and calm to everyday tasks. With an intuitive interface and responsive design, it allows users to create, update, and manage tasks seamlessly—turning clutter into productivity. Whether you're organizing personal goals or managing daily responsibilities, the app adapts to your flow. It’s built with modular components, making it scalable and elder-friendly, and includes subtle visual cues to promote a stress-free experience. Ideal for users who value simplicity, focus, and emotional ease in their digital tools.
        </p>
        <ul  className='m-4 text-white font-bold text-lg
        bg-red/20 backdrop-blur-md rounded-xl shadow-xl p-4'>
          <li>❤️Click on Create to add your tasks</li>
          <li>❤️Click on Tasks to view your tasks</li>
          <li>❤️Click on About to view this page</li>
          <li>❤️Click on Update to update your tasks</li>
          <li>❤️Click on Delete to delete your tasks</li>
          <li>❤️Click on Mark done to mark your tasks as done</li>

          <li>❤️Once Mark done cannot be Undone,if you want to undone then you have to update your Tasks</li>
        </ul>
        
        
        </div>
      </div>
    
    </>
  )
}
