import React from 'react'
import InvoiceTable from './Table'
import AddTr from './AddTr'
import Impression from '../impression'
import TotalDisc from './TotalDisc'

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