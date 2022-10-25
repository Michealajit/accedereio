
import Image from "next/image";
import {  BsDash,  } from "react-icons/bs";
import {  FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";


function iso1st(){
    return(
        <>
          <Head>
             <title>Accedere -ISO 27701 Certification</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              ISO/IEC 27001 <BsDash/> ISMS </h2>
                              <p className="text-white mt-4"> Accedere is an IAS Accredited Certification Body for ISO 
                              27000 / ISO 27701 Certifications.
                              </p>

                              <p className="text-white"> Our ISO 27000, ISO 27701, ISO 27701 Certifications, Data Security & Privacy certification services cover Security and Privacy that enable our customers to have SOC 2 and ISO 27001:2013 or ISO 27701:2019 (PIMS) or other 
                              27001 audits under one roof, thus saving considerable costs and efforts.</p>

                              <p className="text-white"> As the SOC 2 broadly covers many of the ISO 27001 certification requirements, it makes sense for organizations to combine the audits by us under one brand. The AICPA SOC 2 Type 2 engagements require continuous monitoring for evaluating the operative effectiveness of the controls, in parallel we are also able to evaluate most of the ISO
                               27000 controls pertaining to our customer&apos;s environment.</p>

                                <p className="text-white"> Thus, this is a win-win situation for our customers as they can get the ISO 27000 and ISO 27701 certifications along with the SOC 2 Type 2 Compliance reports under one roof (brand) and perhaps conducted together to save considerable time and effort. The new ISO 27002:2022 has recently been 
                                announced and will define the upcoming ISO 27001 standard.</p>

                           </div>
                           <div className="col">
                               <figure style={{height:450}} className="mn-big-div need1 ison-sp1">
                                    <Image src="/gd-group-discussion-tips.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure style={{height:350}} className="comon-sub-main2 ison-sp1">
                                        <Image src="/330-5e884967d541df34f8613e92.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div style={{marginTop:33}} className="col">
                                <h2 className="comon-head-main "> 
                                 
                                ISO 27001, ISO 27011, ISO 27017, ISO 27018, ISO 27019- Information Security Management System (ISMS)  </h2>

                                <p className="mt-4"> Increasing data breaches are a concern for most organizations. 
                                Technologies are constantly changing and thus we need to keep pace with the environment
                                 and adapt a process of change to enable the use of these new technologies in a safe manner. 
                                 Implementing an ISMS for certification under ISO 27001:2013 is one way to ensure that your 
                                 organization follow a process for its information systems to provide an assurance to its 
                                 vendors and third-parties
                                 that the systems and data are appropriately protected. </p>


                                 <p className="mt-4"> The ISO/IEC 27001 certificate provides evidence of an audit of 
                                 Confidentiality, Integrity, and Availability (CIA) of an organization that follows an 
                                 internationally recognized process to manage their customer&apos;s information or data. The 
                                 ISO 27017 demonstrates Cloud Service Providers (CSP&apos;s) controls overs its cloud services. 
                                 The ISO/IEC 27018 is used for Personal Data (PII) data in the cloud. ISO 27001 combined with 
                                 Cloud CSA CCM4 can enable an 
                                 organization to achieve the CSA STAR Level 2 Compliance. </p>

                             

                            </div>
                            
                            
                        </div>


                        <h2 className="comon-head-main mt-4">Why ISO/IEC 27001</h2>
                        <ul className="list-unstyled blue-arrow why-divbn mt-4">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Assures your customers about your organization&apos;s standards in managing the information or data.
                            </span>
                              </li>
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The organization follows an established ISO/IEC process that could reduce
                             the likelihood of a potential security breach.
                            </span>
                            </li>
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Third-Parties or Vendors accept ISO 27001,
                             ISO 20000, ISO 22301 and other Certificates for vendor due diligence.
                            </span>
                            </li>

                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The ISO/IEC 27001 extentions like ISO 27017 or ISO 27018 provides assurance 
                            for CSP&apos;s and the ISO 27701 provides for Privacy Assurance.
                            </span>
                            </li>

                            <li style={{marginBottom:50}}> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The CSA CCM4 with ISO 27001 provides assurance for CSP&apos;s
                             and achieve the CSA STAR Level 2 Certifcation.
                            </span>
                            </li>


                           

                        </ul>

                     


                         
                       
                        

                        
                    </div>
                </div>


            
          </div>
          <Footer/>
        </>
    );
}
export default iso1st;