import React from 'react'
import InvoiceTable from './Table'
import TotalDisc from './TotalDisc'
import AddTr from './AddTr'

const Main = () => {
  return (
     <div className='container-xxl'>
    <InvoiceTable/>
    <AddTr/>  
    <TotalDisc/>
    </div>
  )
}

export default Main