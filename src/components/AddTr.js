import React from 'react'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AddTr = () => {
  return (
    <Link to="/add" className='d-flex text-decoration-none justify-content-center boder-dott' >
<button  className=' border-0 btn px-5 d-flex justify-content-evenly align-items-center'>
<FontAwesomeIcon icon={faSquarePlus}  className='text-brand fa-2x'/> 
  
<p className='mx-3 m-0 p-0'>Add new line</p>
</button>
    </Link>
  )
}

export default AddTr