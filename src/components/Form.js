import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function InvoiceForm() { 
  const [itemname, setItemname] = useState('');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => { 
    e.preventDefault();
  
    try {
      const result = await fetch(`http://localhost:5001/api/InvoiceData`, {
        method: 'post',
        body: JSON.stringify({ itemname, quantity, rate }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      const data = await result.json();
  
    //   console.log(data);
  
      if (!itemname || !quantity || !rate) {
        alert("All fields are mandatory to be filled");
      } else {
        navigate("/"); 
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  

  return (
    <Form className='container card my-5 w-50 py-2 px-2' onSubmit={handleSubmit}>
        <Link className='px-3' to="/">
        <Form.Label> <FontAwesomeIcon icon={faArrowLeft} /> Back To Home</Form.Label>
        </Link>
      <Form.Group className="mb-3">
        <Form.Label>Item</Form.Label>
        <Form.Control value={itemname} onChange={(e) => setItemname(e.target.value)} type="text" placeholder="Enter Item Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" placeholder="Enter Quantity" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Rate</Form.Label>
        <Form.Control value={rate} onChange={(e) => setRate(e.target.value)} type="number" placeholder="Enter Rate" />
      </Form.Group>

      <Button className='w-25 m-auto' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default InvoiceForm;
