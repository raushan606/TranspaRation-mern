import React, { Component } from "react";
import Navbar from "./Navigation";
import { getFeedback } from "../services/feedback-service";

class View extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: [],
      currentPage: 1,
      maxItemsPerPage: 5,
      i: 1,
    };
  }

  componentDidMount() {
    getFeedback().then((res) => {
      const result = res.data;
      this.setState({ details: result });
      console.log(this.state.details);
    });
  }



  renderUniData = () => {
    let start =
      this.state.currentPage * this.state.maxItemsPerPage -
      this.state.maxItemsPerPage;
    return this.state.details
      .slice(start, this.state.currentPage * this.state.maxItemsPerPage)
      .map((detail, index) => {
        const {
          _id,
          name,
          address,
          pincode,
          phone,
          aadharNo,
          vendorName,
          content,
          email,
        } = detail;

        return (
          <tr key={_id}>
            <th scope="row">{start + index + 1}</th>
            <td className="text-center">{name}</td>
            <td className="text-center">
              {address}
            </td>
            <td className="text-center">
              {pincode}
            </td>
            <td className="text-center">{phone}</td>
            <td className="text-center">{vendorName}</td>
            <td className="text-center">{email}</td>
            <td className="text-center">{aadharNo}</td>
            <td className="text-center">{content}</td>

           
          </tr>
        );
      });
  };

  simplePaging = () => {
    return (
      <div>
        {this.state.currentPage > 1 ? (
          <button onClick={() => this.changePage("back")}>Prev</button>
        ) : null}
        {this.state.details.length - 1 >=
        this.state.currentPage * this.state.maxItemsPerPage ? (
          <button onClick={() => this.changePage("next")}>Next</button>
        ) : null}
      </div>
    );
  };

  changePage = (direction) => {
    if (direction === "back") {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
      console.log(this.state.currentPage);
    } else if (direction === "next") {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        {this.state.details.length !== 0 ? (
          <div
            className="container-fluid  bg-light d-flex flex-column align-items-center"
            style={{
              border: "0px solid blue",
              color: "blue",
              marginTop: "25px",
              // boxShadow: "10px 10px 10px 10px #B6B4C2",
            }}
          >
            <div
              className="p-3 mb-3 mt-5 bg-light"
              style={{ border: "1px solid blue", color: "blue" }}
            >
              <h2>View Feedback Detail</h2>
            </div>
            <div className="table-responsive-lg">
              <table
                className="table"
                style={{ boxShadow: "10px 10px 10px 10px #B6B4C2" }}
              >
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center" scope="col">
                      #
                    </th>
                    <th className="text-center" scope="col">
                      Name
                    </th>
                    <th className="text-center" scope="col">
                      Address
                    </th>
                    <th className="text-center" scope="col">
                      PinCode
                    </th>
                    <th className="text-center" scope="col">
                      Contact No.
                    </th>
                    <th className="text-center" scope="col">
                      Vendor Name
                    </th>
                    <th className="text-center" scope="col">
                      Email
                    </th>
                    <th className="text-center" scope="col">
                      Aadhar
                    </th>
                    <th className="text-center" scope="col">
                      Content
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderUniData()}</tbody>
              </table>

              {this.simplePaging()}
            </div>
          </div>
        ) : (
          <p>
            Waiting <br />
            Maybe you have no data in db.
          </p>
        )}
      </div>
    );
  }
}

export default View;
