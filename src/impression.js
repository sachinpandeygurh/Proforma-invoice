import React from 'react'
import Thumb from './components/thumb'
import Disc from './components/Disc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

const Impression = () => {
  return (
    <div className='d-flex justify-content-between    '>
      <div className='d-flex'>
        <Disc />
        <Thumb />
      </div>
      <div className='d-flex'>
        <div className='d-flex mx-md-5 mx-2'>
          <p><FontAwesomeIcon icon={faFileCirclePlus} className='text-brand px-1' /></p>
          <p className='px-2'>Insert an items below</p>
        </div>
        <FontAwesomeIcon icon={faArrowDown} className='text-brand px-1' />
      </div>
    </div>
  )
}

export default Impression
