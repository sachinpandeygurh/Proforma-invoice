import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = () => {
  const [itemname, setItemname] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [disc, setDisc] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [itemData, setItemData] = useState({
    itemname: '',
    quantity: '',
    rate: '',
    disc: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    getInvoice();
  }, [id]);

  const getInvoice = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/InvoiceData/${id}`);
      toast.success(response.data?.message)
      const invoiceData = response.data?.result
      setItemData(invoiceData); 
      // console.log(invoiceData)
     
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error(`An error occurred: ${error.message}`);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const result = await axios.put(`http://localhost:5001/api/InvoiceData/${id}`, {
        itemData,
        headers: { "Content-Type": "application/json" },
      });
  
      toast.success(result.data.message);
      // navigate("/");
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error(error.message);
    }
  };
  
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItemData({
      ...itemData,
      [name]: value,
    });
  };

  return (
    <Form className="container card my-5 w-50 py-2 px-2" onSubmit={handleSubmit}>
      <ToastContainer />
      <Link className="px-3" to="/">
        <Form.Label>
          <FontAwesomeIcon icon={faArrowLeft} /> Back To Home
        </Form.Label>
      </Link>
      <Form.Group className="mb-3">
        <Form.Label>Item</Form.Label>
        <Form.Control
          name="itemname"
          value={itemData.itemname} 
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Item Name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          name="quantity"
          value={itemData.quantity} 
          onChange={handleInputChange}
          type="number"
          placeholder="Enter Quantity"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          name="rate"
          value={itemData.rate} 
          onChange={handleInputChange}
          type="number"
          placeholder="Enter Rate"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Discription (Optional)</Form.Label>
        <Form.Control
          name="disc"
          value={itemData.disc?!itemData.disc:"No discription avilable"} 
          onChange={handleInputChange}
          type="text"
          placeholder="Enter Description"
        />
      </Form.Group>
      <Button className="w-25 m-auto" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UpdateForm;
