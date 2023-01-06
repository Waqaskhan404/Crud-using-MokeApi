import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Read() {
    const [data,setData]=useState([]);
    const [inputText,setInputText]=useState("");
    
    const getData=()=>{
        axios.get("https://63b7ae784d97e82aa3c2e093.mockapi.io/crud-practice").then(res=>{
        setData(res.data)
      })
        
    }

    useEffect(() => {
      getData()
    }, [])

    const DeleteUser=(id)=>{
        axios.delete(`https://63b7ae784d97e82aa3c2e093.mockapi.io/crud-practice/${id}`).then(()=>{
            getData()
        }
        )
    }

    const setDataToLocal=(id,name,email)=>{
        localStorage.setItem("id",id)
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)

    }
    const handleInputText=(e)=>{
        setInputText(e.target.value.toLowerCase())
    }



    
  return (
    <>
    <div className='flex justify-center'>

<div className='w-56 pb-5 '>
<label class="relative block">
  <span class="sr-only">Search</span>
  <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input onChange={handleInputText} class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>
</div>
</div>

    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-4 py-3">
                    ID
                </th>
                <th scope="col" className="px-4 py-3">
                    Name
                </th>
                <th scope="col" className="px-4 py-3">
                    Email
                </th>
                <th scope="col" className="px-4 py-3">    
                </th>
                <th scope="col" className="px-4 py-3">
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.filter(el=>{
                    if(el===""){
                        return el
                    }
                    else{
                    return el.name.toLowerCase().includes(inputText) ||  el.email.toLowerCase().includes(inputText) || el.id.toLowerCase().includes(inputText) ;
                    }
                }).map(fetchData=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={fetchData.id}>
                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {fetchData.id}
                </th>
                <td className="px-4 py-4">
                    {fetchData.name}
                </td>
                <td className="px-4 py-4">
                    {fetchData.email}
                </td>
                <td className="px-4 py-4">
                    <Link to="/update">
                <button className='text-white bg-green-600 px-4 py-2' onClick={()=>setDataToLocal(fetchData.id,fetchData.name,fetchData.email)}>Edit</button>
                </Link>
                </td>
                <td className="px-4 py-4">
                    <button className=' text-white bg-red-600 px-4 py-2' onClick={()=>DeleteUser(fetchData.id)}>Delete</button>
                </td>
            </tr>

                    )
                })
            }


            
           
        </tbody>
    </table>
</div>

    
    </>
  )
}

export default Read