import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Update() {
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const navigate=useNavigate()

    useEffect(() => {
        setId(localStorage.getItem("id",id))
        setName(localStorage.getItem("name",name))
        setEmail(localStorage.getItem("email",email))
    }, [])
    
    const HandleUpdate=(e)=>{
        e.preventDefault()
        axios.put(`https://63b7ae784d97e82aa3c2e093.mockapi.io/crud-practice/${id}`,{
            name:name,
            email:email
        }).then(()=>{

            navigate("/read")
        })
        
 
       }



  return (
    <>

<form className='flex justify-center'>
    <div className="grid gap-6 mb-6 md:grid-cols-1 w-3/12">
    <div lass="mb-6">
<h1 className="text-3xl font-bold ">Update Operation </h1>
</div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="email" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
    </div> 
    
    <button type="submit" 
    onClick={HandleUpdate} 
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </div>
</form>
    
    </>
  )
}

export default Update