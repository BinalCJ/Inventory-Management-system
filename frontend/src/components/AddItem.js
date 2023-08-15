import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const navigate = useNavigate();

  const [productID, setproductID] = useState("");
  const [itemName, setName] = useState("");
  const [itemDescription, setitemDescription] = useState("");
  const [quantity, setquantity] = useState("");
  const [vendorName, setvendorName] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [addedDate, setaddedDate] = useState("");

  function sendData(event) {
    event.preventDefault();

    const newItem = {
      productID,
      itemName,
      itemDescription,
      quantity,
      vendorName,
      expiryDate,
      addedDate,
    };
    axios
      .post("http://localhost:3000/item/add", newItem)
      .then(() => {
        alert("Student Added");
        navigate("/ManageItems");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
   
    <div className="d-flex w-100 vh-80 justify-content-center align-items-center" style={{height:900}}>
      <div className="w-50 border bg-secondary text-white p-5">
        <div className="container">
          <form action={"/ManageItems"} onSubmit={sendData}>
            <div class="form-group">
              <label for="productID">Product ID</label>
              <input
                type="text"
                class="form-control"
                id="productID"
                placeholder="Enter product ID"
                onChange={(event) => {
                  setproductID(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="itemName">Item Name</label>
              <input
                type="text"
                class="form-control"
                id="itemName"
                placeholder="Enter item name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="itemDescription">Item Description</label>
              <textarea
                class="form-control"
                id="itemDescription"
                rows="2"
                placeholder="Enter item description"
                onChange={(event) => {
                  setitemDescription(event.target.value);
                }}
              ></textarea>
            </div>

            <div class="form-group">
              <label for="quantity">Quantity</label>
              <input
                type="number"
                class="form-control"
                id="quantity"
                placeholder="Enter quantity"
                onChange={(event) => {
                  setquantity(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="vendorName">Vendor Name</label>
              <input
                type="text"
                class="form-control"
                id="vendorName"
                placeholder="Enter vendor name"
                onChange={(event) => {
                  setvendorName(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="expiryDate">Expiry Date</label>
              <input
                type="date"
                class="form-control"
                id="expiryDate"
                onChange={(event) => {
                  setexpiryDate(event.target.value);
                }}
              />
            </div>

            <div class="form-group">
              <label for="addedDate">Added Date</label>
              <input
                type="date"
                class="form-control"
                id="addedDate"
                onChange={(event) => {
                  setaddedDate(event.target.value);
                }}
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Enter
            </button>
            </form>
        </div>
      </div>
    </div>
    
  );
}
