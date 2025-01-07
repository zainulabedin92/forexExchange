import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    
    const [isCopyHovered, setIsCopyHovered] = useState("");   
    const [isEditHovered, setIsEditHovered] = useState("");
    const [copyMessage, setCopyMessage] = useState("");
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const handleCopy = (code:any) => {
        alert(code);
        navigator.clipboard
          .writeText(code)
          .then(() => {
            setCopyMessage(`Copied: ${code}`);
            setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      };

      function openModal() {
        setIsOpen(true);
      }
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value, type, checked } = e.target as HTMLInputElement;
          setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
          }));
        };
    
      function closeModal() {
        setIsOpen(false);
      }

     const [formData, setFormData] = useState({
        userId: "",
        balance: "",
        currencySign:"",
        isActive:""
      });

       const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Form Data Submitted: ", formData);
          
          try
          {
            /*const response = await createNewUSer(formData);
            if(response.success){
              console.log("User Created Successfully", response.data);
            }else{
              console.error("Error Createing New User:", response.message);
            }*/
          }
          catch(error) {
            //console.error("unexpected Error: ", error);
          }
        };

    return (
        <>
         <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>
       
        <section className="section">
            <div className="row align-items-top">           
            <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="outline-dashbaord">
                            <div className="row">
                                <div className="col-sm-9">
                                    <a href="http://forexexchange.cryptokira.com/account-Detail">
                                        <img src="/public/assets/images/circle-flags/flags/AED.png" className="img-fluid" width="55px"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 text-end">
                                    <div className="editCurrency float-end text-end"  onMouseEnter={() => setIsEditHovered('245555')} onMouseLeave={() => setIsEditHovered("")}>
                                        <input type="hidden" value="245555"/>
                                        <img width="25" className={`editicon ${isEditHovered == "245555" ? "d-none" : "d-block"}`} src="/public/assets/img/edit-icon.svg"/>
                                        <img width="25" className={`editiconhover ${isEditHovered == "245555" ? "d-block" : "d-none"}`} src="/public/assets/img/edit-icon-hover.svg" style={{display: "none"}}/>
                                    </div>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <b className="float-left" style={{fontSize:"15px",marginLeft:"8px"}}>245,555.00</b>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                    <span className="amount account-code">
                                    AED 999991
                                    </span>
                                </div>
                                <div className="col-sm-3 text-end">
                                <div
                                    className="copyCode float-end text-end"
                                    onMouseEnter={() => setIsCopyHovered("245555")}
                                    onMouseLeave={() => setIsCopyHovered("")}
                                    onClick={() => handleCopy('AED 999991')}
                                    >
                                    <input type="hidden" name="" id="currencyCode" value="AED 999991" />
                                    <img
                                        width="25"
                                        className={`copyicon ${isCopyHovered == "245555" ? "d-none" : "d-block"}`}
                                        src="/public/assets/img/copy-icon.svg"
                                        alt="Copy"
                                    />
                                    <img
                                        width="25"
                                        className={`copyiconhover ${isCopyHovered == "245555" ? "d-block" : "d-none"}`}
                                        src="/public/assets/img/copy-icon-hover.svg"
                                        alt="Copy Hover"
                                    />
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="outline-dashbaord">
                            <div className="row">
                                <div className="col-sm-9">
                                    <a href="http://forexexchange.cryptokira.com/account-Detail">
                                        <img src="/public/assets/images/circle-flags/flags/AED.png" className="img-fluid" width="55px"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 text-end">
                                    <div className="editCurrency float-end text-end"  onMouseEnter={() => setIsEditHovered("245556")} onMouseLeave={() => setIsEditHovered("")}>
                                        <input type="hidden" value="245556"/>
                                        <img width="25" className={`editicon ${isEditHovered == "245556" ? "d-none" : "d-block"}`} src="/public/assets/img/edit-icon.svg"/>
                                        <img width="25" className={`editiconhover ${isEditHovered == "245556" ? "d-block" : "d-none"}`} src="/public/assets/img/edit-icon-hover.svg" style={{display: "none"}}/>
                                    </div>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <b className="float-left" style={{fontSize:"15px",marginLeft:"8px"}}>245,555.00</b>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                    <span className="amount account-code">
                                    AED 999991
                                    </span>
                                </div>
                                <div className="col-sm-3 text-end">
                                <div
                                    className="copyCode float-end text-end"
                                    onMouseEnter={() => setIsCopyHovered("245556")}
                                    onMouseLeave={() => setIsCopyHovered("")}
                                    onClick={() => handleCopy('AED 999992')}
                                    >
                                    <input type="hidden" name="" id="currencyCode" value="AED 999991" />
                                    <img
                                        width="25"
                                        className={`copyicon ${isCopyHovered == "245556" ? "d-none" : "d-block"}`}
                                        src="/public/assets/img/copy-icon.svg"
                                        alt="Copy"
                                    />
                                    <img
                                        width="25"
                                        className={`copyiconhover ${isCopyHovered == "245556" ? "d-block" : "d-none"}`}
                                        src="/public/assets/img/copy-icon-hover.svg"
                                        alt="Copy Hover"
                                    />
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <div className="card-body">
                        <div className="outline-dashbaord">
                            <div className="row">
                                <div className="col-sm-9">
                                    <a href="http://forexexchange.cryptokira.com/account-Detail">
                                        <img src="/public/assets/images/circle-flags/flags/AED.png" className="img-fluid" width="55px"/>
                                    </a>
                                </div>
                                <div className="col-sm-3 text-end">
                                    <div className="editCurrency float-end text-end"  onMouseEnter={() => setIsEditHovered("245557")} onMouseLeave={() => setIsEditHovered("")}>
                                        <input type="hidden" value="245557"/>
                                        <img width="25" className={`editicon ${isEditHovered == "245557" ? "d-none" : "d-block"}`} src="/public/assets/img/edit-icon.svg"/>
                                        <img width="25" className={`editiconhover ${isEditHovered == "245557" ? "d-block" : "d-none"}`} src="/public/assets/img/edit-icon-hover.svg" style={{display: "none"}}/>
                                    </div>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-7">
                                    <b className="float-left" style={{fontSize:"15px",marginLeft:"8px"}}>245,555.00</b>
                                </div>                            
                            </div>
                            <div className="row">
                                <div className="col-sm-9">
                                    <span className="amount account-code">
                                    AED 999991
                                    </span>
                                </div>
                                <div className="col-sm-3 text-end">
                                <div
                                    className="copyCode float-end text-end"
                                    onMouseEnter={() => setIsCopyHovered("245557")}
                                    onMouseLeave={() => setIsCopyHovered("")}
                                    onClick={() => handleCopy('AED 999991')}
                                    >
                                    <input type="hidden" name="" id="currencyCode" value="AED 999991" />
                                    <img
                                        width="25"
                                        className={`copyicon ${isCopyHovered === "245557" ? "d-none" : "d-block"}`}
                                        src="/public/assets/img/copy-icon.svg"
                                        alt="Copy"
                                    />
                                    <img
                                        width="25"
                                        className={`copyiconhover ${isCopyHovered === "245557" ? "d-block" : "d-none"}`}
                                        src="/public/assets/img/copy-icon-hover.svg"
                                        alt="Copy Hover"
                                    />
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">                        
                        <div className="card-body">
                            <div className="align-center d-flex flex-column h-100 justify-content-center outline-dashbaord" onClick={openModal}>
                                <FontAwesomeIcon icon={faPlus} className="linkColor fs-3"></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </section>
        <section>
            <div className="row">
                <div className="secTitle">
                    <div className="row">
                        <div className="col-md-9">
                            <h2>
                            Transactions History
                        </h2>
                        </div>
                        <div className="col-md-3 text-end">
                            <a href="#" className="linkColor fsAll">See All</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <Modal
                isOpen={modalIsOpen}
                className="modalAddAccount"
                onRequestClose={closeModal}
                contentLabel="Modal Add Account"
              >
               <div className="container mt-4">
              <h4 className="mb-4">Add Account</h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                    <input type="hidden" name="userId" id="userId"></input>
                <div className="col-sm-6 mb-3">
                  <label htmlFor="userType" className="form-label">
                   Choose Currency
                  </label>
                    <select
                        className="form-select"
                        id="currencyType"
                        name="currencyType" value={formData.currencySign}>
                        <option value="">Select Currency</option>
                        <option value="aud">AUD</option>
                        <option value="dollar">USD</option>
                        <option value="yuan">Yuan</option>
                        <option value="gbp">GBP</option>
                        <option value="pkr">PKR</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Amount
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="amount"
                    name="amount"
                    value={formData.balance}
                    onChange={handleChange}
                    required
                  />
                </div>
                </div>
                <button className="btn-default">Submit</button>
                </form>
                </div>
              </Modal>
    </main>
        </>
    )
}
export default Dashboard;