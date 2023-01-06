import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
    <div className='py-4 space-x-3  flex justify-center'>
<Link to="/"><button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Create</button></Link>
<Link to="/read"><button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Read</button></Link>

    </div>
    </>
  )
}

export default Menu