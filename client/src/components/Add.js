import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// import Navbar from "./Navigation";
import { postFeedback } from "../services/feedback-service";

const Add = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    phone: "",
    aadharNo: "",
    vendorName: "",
    content: "",
    email: "",
  });

  const {
    name,
    address,
    pincode,
    phone,
    aadharNo,
    vendorName,
    content,
    email,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await postFeedback(formData).then((res) => {
      if (res.status === 200) {
        window.location.href = "/view";
      }
    });
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div
        className="container mt-5 bg-light d-flex flex-column align-items-center"
        style={{
          border: "0px solid blue",
          color: "blue",
          marginTop: "25px",
          boxShadow: "10px 10px 10px 10px #B6B4C2",
        }}
      >
        <div
          className="p-3 mb-3 mt-5 bg-light"
          style={{ border: "1px solid blue", color: "blue" }}
        >
          <h2>Feedback</h2>
        </div>
        <Form className="w-50 bg-light pb-3 mb-3" onSubmit={(e) => onSubmit(e)}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
              id="name"
              placeholder="Name"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => onChange(e)}
              placeholder="Address"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pincode">Pin Code</Label>
            <Input
              type="text"
              name="pincode"
              id="pincode"
              value={pincode}
              onChange={(e) => onChange(e)}
              placeholder="Pin Code"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="vendorName">Vendor Name</Label>
            <Input
              type="text"
              name="vendorName"
              id="vendorName"
              value={vendorName}
              onChange={(e) => onChange(e)}
              placeholder="Vendor Name"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="content">Fill your complaint</Label>
            <Input
              type="textarea"
              name="content"
              id="content"
              value={content}
              onChange={(e) => onChange(e)}
              placeholder="Fill your complaint"
              required={true}
          
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="aadharNo">Aadhar Number</Label>
            <Input
              type="text"
              name="aadharNo"
              id="aadharNo"
              value={aadharNo}
              onChange={(e) => onChange(e)}
              placeholder="Aadhar Number"
              required={true}
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Contact No.</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => onChange(e)}
              placeholder="Contact No."
              maxLength="10"
              minLength="10"
              required={true}
              pattern="\d+"
            />
          </FormGroup>

          <Button color="primary" type="submit" value="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Add;
