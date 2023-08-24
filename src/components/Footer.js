import { faLink, faLinkSlash, faNoteSticky, faNotesMedical, faPaperclip, faPhone, faRectangleList, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <div className='row container mb-3'>
      <div className='col-md-1' />
      <div className='row col-md-8 container-xxl'>
        <div className=' col-md-4 my-2'>
          <div className='boder-dott rounded d-flex p-1 align-items-center justify-content-center'> <FontAwesomeIcon icon={faSquarePlus} className='text-brand ' /> <p className=' p-0 m-0 px-3'>Add Terms & Conditions</p></div>
        </div>
        <div className=' col-md-4 my-2'>
          <div className='boder-dott rounded d-flex p-1 align-items-center justify-content-center'> <FontAwesomeIcon icon={faRectangleList} className='text-brand ' /> <p className=' p-0 m-0 px-3'>Add Notes</p></div>
        </div>
        <div className=' col-md-4 my-2'>
          <div className='boder-dott rounded d-flex p-1 align-items-center justify-content-center'> <FontAwesomeIcon icon={faPaperclip} className='text-brand ' /> <p className=' p-0 m-0 px-3'>Add Attachments</p></div>
        </div>
        <div className=' col-md-4 my-2'>
          <div className='boder-dott rounded d-flex p-1 align-items-center justify-content-center'> <FontAwesomeIcon icon={faRectangleList} className='text-brand ' /> <p className=' p-0 m-0 px-3'>Add Additional info</p></div>
        </div>
        <div className=' col-md-4 my-2'>
          <div className='boder-dott rounded d-flex p-1 align-items-center justify-content-center'> <FontAwesomeIcon icon={faPhone} className='text-brand ' /> <p className=' p-0 m-0 px-3'>Add Contact Details</p></div>
        </div>
        <div className=' col-md-4 my-2 '>
        </div>
      </div>
      <div className='col-md-3 my-3' />
    </div>
  )
}

export default Footer