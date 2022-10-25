import Navbar from "../../componets/Navbar";
import SpecialFooter from "./SpecialFooter";
import Head from "next/head";
import { useState } from "react";
import fetch from 'isomorphic-unfetch'


function contact(){
    const [inputs,setinputs] =useState({});
    const handleChange = (e)=>{
      setinputs(prev=>{
        return(
            {...prev,[e.target.name]:e.target.value}
        )
      })
     console.log(inputs);
    }
    const handleClick = async (e)=>{
        e.preventDefault();
        try {
           // const data = {inputs};
            const res = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputs)
            })
            console.log(res.data);

            router.push("/");
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <>
        <div>
        <Head>
            <title>Accedere - Conatct</title>
            <meta name="description" content="Contact Us, Accedere"/>
            <meta name="keywords" content="SOC 2 Type 2, SOC 1 Type 2, SSAE 18, Cloud CCSK, CCM 4, CCAK, ISO 27001"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1  float-start w-100'>
              <div className="special-divn"></div> 
              <div className="top-contact-div contact-new">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                            <div className="col">
                                <h2 className="comon-head-main">Contact Us </h2>
                                <p > Our team is ready to assist you with any of your compliance, cybersecurity and privacy needs. 
                                  </p>
                                
                                <div className="map-div-1 mt-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12270.24222272763!2d-104.991369!3d39.749521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78da287122a9%3A0x1f7a76af26546f63!2sDenver%20Place%2C%20999%2018th%20St%20%233000%2C%20Denver%2C%20CO%2080202%2C%20USA!5e0!3m2!1sen!2sin!4v1582114898445!5m2!1sen!2sin"
                width="100%" height="100%" frameBorder="0" layout="fill" style={{border:0}} ></iframe>
                                </div>
                            </div>
                            <div className="col">
                                <h4> Kindly Share Your Details And Our Team Will Reach You Soon. </h4>
                                <form method="get" action="an">
                                    <div className="row mt-4">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input onChange={handleChange} name="fullname" type="text" className="form-control" placeholder="Full Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input onChange={handleChange} name="email" type="text" className="form-control" placeholder="Your Email" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input onChange={handleChange} name="company" type="text" className="form-control" placeholder="Company Name" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input onChange={handleChange} name="phonenumber" type="number" className="form-control" placeholder="Phone Number" required/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea onChange={handleChange} name="query" type="text" className="form-control" placeholder="Your Query" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                             {/* <button onClick={handleClick}  className="btn sub-mit-bn" >
                                                    SUMBIT
                                                    </button> */}
                                                    <input type="submit" onClick={handleClick} className="btn sub-mit-bn" value="Submit"/>
                                        </div>

                                        

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                              
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>   
              </div> 
              

          </div>
          <SpecialFooter/>
          </div>
        </>
    );
}
export default contact;