import {
  faDollar,
  faSquarePlus,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TotalDisc = () => {
  const [includeGST, setIncludeGST] = useState(false);
  const [data, setData] = useState([]);

  const handleGSTToggle = () => {
    setIncludeGST(!includeGST);
  };
 
  const getAmount = () => {
    let amount = 0;
    for (let i = 0; i < data.length; i++)
      amount += data[i].rate * data[i].quantity;
    return amount;
  };
  useEffect(() => {
    getInvoice();
  }, [data]); //data
  const getInvoice = async () => {
    try {
      let invoice = await axios.get(`http://localhost:5001/api/InvoiceData`);
      setData(invoice?.data);
      // console.log(invoice.data);
    } catch (error) {}
  };
  return (
    <div className="row mt-3">
      <div className="col-md-8" />
      <div className="col-md-4">
        <div className="d-flex my-3 align-items-center">
          <FontAwesomeIcon className="text-brand p-0 m-0" icon={faTag} />
          <p className="m-0 p-0 px-2">Add Discount/Addition Charges</p>
        </div>
        <div className="d-flex my-3 align-items-center">
          <input type="checkbox" name="" id="" />
          <p className="m-0 p-0 px-2">Summarise Total Quantity</p>
        </div>
        <hr />
        <h5 className="d-flex justify-content-between">
          <span>Total(INR)</span> <span>&#x20b9; {getAmount()}</span>
        </h5>
        <hr />
        <div className="d-flex my-3 align-items-center">
          <h5 className="d-flex justify-content-between">
            <input
              type="checkbox"
              name="includeGST"
              id="includeGST"
              checked={includeGST}
              onChange={handleGSTToggle}
            />
            <span>Include 18% GST</span>
          </h5>
        </div>

        {includeGST && (
          <h2 className="d-flex justify-content-between border-top border-bottom py-4 px-2">
            <span>Total(INR)</span>{" "}
            <span>
              &#x20b9; {Math.round(getAmount() + (getAmount() * 18) / 100)}
            </span>
          </h2>
        )}
        <div className="d-flex my-3 align-items-center">
          <FontAwesomeIcon className="text-brand" icon={faDollar} />
          <p className="m-0 p-0 px-2">Show Total In Words</p>
        </div>
        <div className="d-flex my-3 align-items-center">
          <FontAwesomeIcon className="text-brand" icon={faSquarePlus} />
          <p className="m-0 p-0 px-2">Add More Fields</p>
        </div>

        {/*         
        <div className="d-flex my-3 align-items-center">
          <FontAwesomeIcon className='text-brand me-2' icon={faCalendar} /> 
           <input className='m-0 p-0 px-2' type='date' placeholder='Date of invoice' />
        </div>        */}
        {/* <div className="d-flex my-3 align-items-center">
        <FontAwesomeIcon className='text-brand pe-2' icon={faCodeBranch} /> 
          <input
            type="text"
            placeholder='Enter HSN Code'
            value={hsnCode}
            onChange={handleHSNChange}
            className='h-25 fs-5 w-50 border-0'
          />
        </div> */}
        {/* <div className="d-flex my-3 align-items-center">
          <h3 className='d-flex rounded justify-content-between border p-0 m-0'>
            <input type="text" placeholder='Enter Customer Name' className='h-25 fs-5 w-50 border-0' />
            <button className='border-0 text-brand w-50 fs-5 p-0 m-0' type='submit'>Add Customer Name</button>
          </h3>
        </div>
        <div className="d-flex my-3 align-items-center mt-5 justify-content-end">
          <div className='border-dotted rounded d-flex p-1 align-items-center justify-content-center px-3'> 
            <FontAwesomeIcon icon={faPenNib} className='text-brand' /> 
            <p className='p-0 m-0 px-3'>Add Signature</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TotalDisc;
