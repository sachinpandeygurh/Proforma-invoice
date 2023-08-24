import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Thumb = () => {
  return (
    <div className='d-flex mx-4'>
      <FontAwesomeIcon icon={faImage}  className='text-brand '/> <p className='px-2'>Impression</p>
    </div>
  )
}

export default Thumb
