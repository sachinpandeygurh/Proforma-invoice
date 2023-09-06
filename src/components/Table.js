import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faTimes,
  faSquarePlus,
  faImage,
  faFileAlt,
  faArrowDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function InvoiceTable({ items }) {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    getInvoice();
  }, [flag, data]);

  const getInvoice = async () => {
    try {
      const invoice = await axios.get(`http://localhost:5001/api/InvoiceData`);
      setData(invoice?.data);
      // console.warn(invoice?.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const onDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5001/api/InvoiceData`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      if (res.status === 200) {
        setFlag(!flag);
        // console.log("Document deleted successfully");
        toast.success("Document deleted successfully");
      } else {
        console.error("Error deleting document");
        toast.error("Error deleting document");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error("An error occurred: " + error.message);
    }
  };
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <Table striped bordered hover className="mt-3 container">
      <ToastContainer />
      <thead>
        <tr>
          <th className="bg-brand text-white px-2">S no.</th>
          <th className="bg-brand text-white">Item</th>
          <th className="bg-brand text-white">Quantity</th>
          <th className="bg-brand text-white">Rate</th>
          <th className="bg-brand text-white">Amount</th>
          <th className="bg-brand text-white">Date</th>
          <th className="bg-brand text-white px-4">Operation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={item._id}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.itemname}</td>
              <td>{item.quantity}</td>
              <td>{item.rate}</td>
              <td>&#8377;{` ${item.quantity * item.rate}`}</td>
              <td>{formatDate(item.updatedAt)}</td>
              <td>
                <FontAwesomeIcon
                  id={item._id}
                  onClick={() => onDelete(item._id)}
                  className="text-brand mx-md-5"
                  icon={faTimes}
                />
                <Link to={`update/${item._id}`}>
                  <FontAwesomeIcon
                    id={item._id}
                    className="text-brand mx-md-5"
                    icon={faPenToSquare}
                  />
                </Link>
              </td>
            </tr>
            <tr>
              <td colSpan="7">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">
                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      className="text-brand mr-2"
                    />
                    <span className="px-2"> {item.disc} </span>
                  </p>
                  <p className="m-0">
                    <FontAwesomeIcon
                      icon={faImage}
                      className="text-brand mr-2"
                    />
                    <span className="px-2"> Impression </span>
                  </p>
                  <p className="m-0">
                    <FontAwesomeIcon
                      icon={faFileAlt}
                      className="text-brand mr-2"
                    />
                    <span className="px-2"> Insert an item below </span>
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="text-brand ml-2"
                    />
                  </p>
                </div>
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  );
}

export default InvoiceTable;
