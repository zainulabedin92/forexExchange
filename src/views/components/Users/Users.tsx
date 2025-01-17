import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "../style.css";
import { createNewUSer, getrAllUsers } from "../../../Api/DataRequests";
import GridData from "../GridData/GridData";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface FormDataRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string,
  confirmPassword:string,
  country: string;
  city: string;
  streetAddress: string;
  verify: boolean;
  phoneNumber: string;
  dateOfBirth: string;
  profileImage: File | null; // Allow null or File
  userType: string;
}


const Users = () => {
    let subtitle = useRef<HTMLHeadingElement | null>(null) ;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [AllUsers, setAllUsers] = useState([]);

  
useEffect(() => {
  allUsers();
}, []);

async function allUsers() {
  const res = await getrAllUsers();
  if (res && res.data) {
   setAllUsers(res.data);
  }
}
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    
    try
    {
      const response = await createNewUSer(formData);
      if(response.success){
        console.log("User Created Successfully", response.data);
      }else{
        console.error("Error Createing New User:", response.message);
      }
    }
    catch(error) {
      console.error("unexpected Error: ", error);
    }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    streetAddress: "",
    verify: false,
    phoneNumber: "",
    dateOfBirth: "",
    profileImage: File,
    userType: "",
  });

    return (
        <>
         <main id="main" className="main">
        <div className="pagetitle">
          <h1>Users</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Users</li>
            </ol>
          </nav>
        </div>
        <div className="row mb-3">
          <div className="col-md-7">
          </div>
          <div className="col-md-5">
            <button className="btn btn-primary float-end" onClick={openModal}>Create User</button>     
          </div>
        </div>
        <div className="row">
          <div className="col-12">
           <GridData dataList={AllUsers}/>
          </div>
        </div>
       </main>
       <div>
      
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <div className="container mt-4">
      <h2 className="mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="city" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="streetAddress" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <div className="text-danger"></div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="streetAddress" className="form-label">
              Street Address
            </label>
            <input
              type="text"
              className="form-control"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
            />
          </div>
        </div>        

        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="col-sm-6 mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="row">
        {/* <div className="col-sm-6 mb-3">
          <label htmlFor="profileImage" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            name="profileImage"
            //onChange={handleFileChange}
          />
        </div> */}

        <div className="col-sm-6 mb-3">
          <label htmlFor="userType" className="form-label">
            User Type
          </label>
          <select
            className="form-select"
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="">Select User Type</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        </div>
        

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="verify"
            name="verify"
            checked={formData.verify}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="verify">
            Verify Account
          </label>
        </div>

      <div className="row">
        <div className="col-sm-8 offset-sm-4 text-end">          
          <button className="btn btn-light me-2 border-1 border-black" onClick={closeModal}>
            Close
          </button>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
        
        </form>
        </div>
      </Modal>
    </div>
        </>
    )
}
export default Users;