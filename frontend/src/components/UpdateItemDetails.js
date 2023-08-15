import { useNavigate, useParams } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";

export const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();

  return <WrappedComponent {...props} params={params} navigate={navigate} />;
};

class EditItemDetails extends Component {
  constructor(props) {
    super(props);

    this.onChangeproductID = this.onChangeproductID.bind(this);
    this.onChangeitemName = this.onChangeitemName.bind(this);
    this.onChangeitemDescription = this.onChangeitemDescription.bind(this);
    this.onChangequantity = this.onChangequantity.bind(this);
    this.onChangevendorName = this.onChangevendorName.bind(this);
    this.onChangeexpiryDate = this.onChangeexpiryDate.bind(this);
    this.onChangeaddedDate = this.onChangeaddedDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      productID: "",
      itemName: "",
      itemDescription: "",
      quantity: "",
      vendorName: "",
      expiryDate: "",
      addedDate: "",
      records: [],
    };
    this.props.navigate("/ManageItems")
  }

  componentDidMount() {
    axios
      .put("http://localhost:3000/item/get/" + this.props.params.id)
      .then((response) => {
        console.log(response);
        this.setState({
          productID: response.data.productID,
          itemName: response.data.itemName,
          itemDescription: response.data.itemDescription,
          quantity: response.data.quantity,
          vendorName: response.data.vendorName,
          expiryDate: response.data.expiryDate,
          addedDate: response.data.addedDate,
          
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onChangeproductID(e) {
    this.setState({
      productID: e.target.value,
    });
  }
  onChangeitemName(e) {
    this.setState({
      itemName: e.target.value,
    });
  }
  onChangeitemDescription(e) {
    this.setState({
      itemDescription: e.target.value,
    });
  }
  onChangequantity(e) {
    this.setState({
      quantity: e.target.value,
    });
  }
  onChangevendorName(e) {
    this.setState({
      vendorName: e.target.value,
    });
  }
  onChangeexpiryDate(e) {
    this.setState({
      expiryDate: e.target.value,
    });
  }

  onChangeaddedDate(e) {
    this.setState({
      addedDate: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const newEditedProduct = {
      productID: this.state.productID,
      itemName: this.state.itemName,
      itemDescription: this.state.itemDescription,
      quantity: this.state.quantity,
      vendorName: this.state.vendorName,
      expiryDate: this.state.expiryDate,
      addedDate: this.state.addedDate,
    };
    console.log(newEditedProduct);
    this.props.navigate("/ManageItems")

    axios
      .put(
        "http://localhost:3000/item/update/" + this.props.params.id,
        newEditedProduct
      )
      
      .then((res) => console.log(res.data));
  }
  render() {
    return (
      <div>
        <div className="display-table mt-100 d-flex w-100 vh-80 justify-content-center align-items-center">
          <div className="row display-table-row mt-5">
            <div
              className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
              id="navigation"
            >
              <div className="logo"></div>
            </div>

            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row mb-4">
                <header></header>
              </div>

              <div>
                <header class="bg-dark py-5">
                  <div>
                    <div class="text-center text-white">
                      <h1 class="display-4 fw-bolder">Update Item Details</h1>
                      <p class="lead fw-normal text-white-50 mb-0">
                        Item Details
                      </p>
                    </div>
                  </div>
                </header>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <a
                    href="/ManageItems"
                    class="btn btn-primary btn-lg active"
                    role="button"
                    aria-pressed="true"
                  >
                    {" "}
                    Go Back
                  </a>
                </div>
                <div className="container">
                  <div className="row align-items-md-stretch">
                    <div className="col-md-6">
                      <div className="h-100 p-5 bg-light border rounded-3">
                        <form onSubmit={this.onSubmit}>
                          <div class="form-row">
                            <div class="form-group">
                              <div class="form-group col-md-10">
                                <label for="productID">Product ID</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="productID"
                                  value={this.state.productID}
                                  onChange={this.onChangeproductID}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div class="form-group col-md-10">
                                <label for="text" class="col-form-label">
                                  Item Name{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.itemName}
                                  onChange={this.onChangeitemName}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-10">
                                <label for="inputEmail3" class="col-form-label">
                                  Item Description{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.itemDescription}
                                  onChange={this.onChangeitemDescription}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-10">
                                <label for="Text" class="col-form-label">
                                  Quantity{" "}
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.quantity}
                                  onChange={this.onChangequantity}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-10">
                                <label for="Text" class="col-form-label">
                                Vendor Name{" "}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.vendorName}
                                  onChange={this.onChangevendorName}
                                />
                              </div>
                            </div>

                            <div className="form-group row">
                              <div class="form-group col-md-11">
                                <label for="date" class="col-form-label">
                                  Expiry Date{" "}
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.expiryDate}
                                  onChange={this.onChangeexpiryDate}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <div class="form-group col-md-11">
                                <label for="date" class="col-form-label">
                                  Added Date
                                </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  id="inputEmail4"
                                  value={this.state.description}
                                  onChange={this.onChangedescription}
                                />
                              </div>
                            </div>
                            <style></style>
                            <div className="form-group row d-flex justify-content-center align-items-end mb-0 text-center"><a href="/ManageItems"/>
                              <input
                                type="submit"
                                value="Update Record"
                                className="btn btn-primary btn-sm mt-5 mt-md-auto"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* our code */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditItemDetails);
