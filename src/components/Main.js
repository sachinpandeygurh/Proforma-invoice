import React from 'react'
import InvoiceTable from './Table'
import TotalDisc from './TotalDisc'

const Main = () => {
  return (
     <div className='container-xxl'>
    <InvoiceTable/>

  
    <TotalDisc/>
    </div>
  )
}

export default Main