import React, { useState, useEffect ,useRef} from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { useReactToPrint} from 'react-to-print';
import {Link} from 'react-router-dom'


function ItemDetailsManagement() {
  const [itemdetails, setitemdetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const componentPDF = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/item/`)
      .then((itemdetails) => {
        setitemdetails(itemdetails.data);
        console.log(itemdetails.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  function deleteMovie(id) {
    axios
      .delete(`http://localhost:3000/item/delete/${id}`)
      .then(() => {
        alert("Deleted Successfully");
      })
      .catch((err) => {
        alert("error : " + err);
      });
    window.location.reload();
  }

  
  const filteredItemDetails = itemdetails.filter(item => item.productID.toLowerCase().includes(searchQuery.toLowerCase()));

  const generatePDF = useReactToPrint({
    content: () =>componentPDF.current,
    documentTitle:"Data of Inventory",
    onAfterPrint:()=>alert("Data saved in PDF") });

  return (
    
    <div className="container container-dark-blue" style={{ backgroundColor: '#F0F8FF'}}>
        <div className="display-table">
          <div className="GeneratePDF"
          title="Item Details"></div>
          <div className="row display-table-row mt-10">
            <div
              className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
              id="navigation"
            ></div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row mb-4">
                <header>
                  <div className="col-md-7">
                    <nav className="navbar-default pull-left">
                      <div className="navbar-header">
                        <div className="header"></div>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-5">
                    <div className="header-rightside"></div>
                  </div>
                </header>
              </div>

              <div className="container-table5">
                <header class="bg-secondary py-50">
                  <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                      <h1 class="display-3" style={{}}>Manage Items</h1>
                      <p class="lead fw-normal text-white-50 mb-0">
                        Item Details
                      </p>
                    </div>
                  </div>
                </header>
                <br></br>
                <br></br>
                <input type="text" placeholder="Search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a
                    href="/add"
                    class="btn btn-primary btn-lg active"
                    role="button"
                    aria-pressed="true"
                  >
                    Add New Item
                  </a>
                </div>
                <br></br>
                <br></br>

                <div class="row">
                  <div class="col-md-15">
                    <div class="table-wrap">
                    <div ref={componentPDF} style={{width:'100%'}}>
                      <table class="table" border="1" width="20px">
                        <thead class="thead-light">
                          <tr>
                            <th scope="col">Product ID</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Item Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Vendor Name</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Added Date</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredItemDetails.map((val, key) => {
                            return (
                              <tr>
                                <td style={{ width: "100px" }}>{val.productID}</td>
                                <td style={{ width: "100px" }}>{val.itemName}</td>
                                <td style={{ width: "100px" }}>{val.itemDescription}</td>
                                <td style={{ width: "100px" }}>{val.quantity}</td>
                                <td style={{ width: "100px" }}>{val.vendorName}</td>
                                <td style={{ width: "100px" }}>{val.expiryDate}</td>
                                <td style={{ width: "100px" }}>{val.addedDate}</td>
                                <td style={{ width: "  " }}>
                                  {" "}
                                  <a
                                    href={`/update/` + val._id}
                                    className="btn btn-warning btn-sm mr-10">
                                    Update
                                  </a>
                                  <Popup
                                    trigger={
                                      <button className="btn btn-danger btn-sm mr-10">
                                        {" "}
                                        Delete{" "}
                                      </button>
                                    }
                                    modal
                                    nested
                                  >
                                    {(close) => (
                                      <div
                                        className="container-fluid"
                                        style={{ padding: 5 }}
                                      >
                                        <div className="h-100 p-5 bg-light border rounded-3">
                                          <h1 className="card-title">
                                            Delete This Field ?
                                          </h1>
                                          <div className>
                                            <br></br>
                                            <button
                                              className="btn btn-success"
                                              onClick={() => {
                                                console.log("modal closed ");
                                                close();
                                              }}
                                            >
                                              Cancel
                                            </button>{" "}
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            <button
                                              className="btn btn-danger"
                                              onClick={() =>
                                                deleteMovie(val._id)
                                              }
                                            >
                                              Delete
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </Popup>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      </div>
                      <div>
                    {/*<button className="btn btn-success" onClick={generatePDF}>PDF</button>*/} 
                    <Link 
                    to={`/GeneratePDF`} 
                    className='btn btn-success btn-sm mr-10' 
                    
                    style={{marginBottom: "60px", border: 'none', padding: '10px 40px', borderRadius: '8px', fontSize: '1.2em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center'}}onChange={generatePDF}>PDF
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
  );
}

export default ItemDetailsManagement;
