import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Disc = () => {
  return (
    <div className='d-flex mx-4'>
      <FontAwesomeIcon icon={faSquarePlus}  className='text-brand '/> <p className='px-3'>Discriptions</p>
    </div>
  )
}

export default Disc
