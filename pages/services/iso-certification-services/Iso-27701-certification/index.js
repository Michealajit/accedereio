
import Image from "next/image";
import {BsDash } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";

import Head from "next/head";


function ISso1st(){
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
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               
                             	ISO/IEC 27701 <BsDash/> PIMS </h2>
                                 <p className="text-white mt-4"> Accedere is an IAS Accredited Certification Body for ISO 
                                 27000/ISO 27701 Certifications.
                                 </p>
   
                                 <p className="text-white"> Our ISO 27000, ISO 27701, ISO 27701 Certifications, Data Security & Privacy certification services cover Security and Privacy that enable our customers to have SOC 2 and ISO 27001:2013 or ISO 27701:2019 (PIMS) or other 
                                 27001 audits under one roof, thus saving considerable costs and efforts.</p>
   
                                 <p className="text-white"> As the SOC 2 broadly covers many of the ISO 27001 certification requirements, it makes sense for organizations to combine the audits by us under one brand. The AICPA SOC 2 Type 2 engagements require continuous monitoring for evaluating the operative effectiveness of the controls, in parallel we are also able to evaluate most of the ISO
                                  27000 controls pertaining to our customer&apos;s environment.</p>
   
                                   <p className="text-white"> Thus, this is a win-win situation for our customers as they can get the ISO 27000 and ISO 27701 certifications along with the SOC 2 Type 2 Compliance reports under one roof (brand) and perhaps conducted together to save considerable time and effort. The new ISO 27002:2022 has recently been 
                                   announced and will define the upcoming ISO 27001 standard.</p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1 ison-sp1">
                                    <Image src="/5-tips-to-prepare-for-group-discussion-rounds.svg" alt="about"
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
                        
                        <div  className="col">
                                <figure style={{height:"50vh"}} className="comon-sub-main2 ison-sp1">
                                    <Image src="/package.svg" alt="about"
                                    layout="fill"
                                    />
                            </figure>
                        </div>
                        <div  className="col">
                            <h2 className="comon-head-main "> 
                             
                            ISO 27701:2019-Privacy Information Management System (PIMS)  </h2>
                            <p className="mt-4"> In August 2019, the ISO announced a new certification ISO 27701:2019 also known as the Privacy Information Management System or PIMS. Earlier the ISO 27701 was known as ISO 27552.</p>
                            <p className="mt-4"> It is an extention certification on top of the ISO 27001.</p>
                        </div>
                        
                        
                    </div>

                    <h2 className="comon-head-main mt-5"> Why PIMS ?</h2>
                    <ul className="list-unstyled blue-arrow why-divbn mt-4">
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Assures that the data subjects of customers are managed responsibly.
                        </span>
                          </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Integrates with ISO 27001 based on your Information Security Management System (ISMS).
                        </span>
                        </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Provide clear visibility of data management approaches with partners.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        It can help to identify, prioritize, and manage risks throughout the data lifecycle.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Helps achieve compliance with data protection regulations such as GDPR, CCPA and others.
                        </span>
                        </li>

                        <li style={{marginBottom:50}}> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Indicates assurance that PII can be managed without infringing data subject&apos;s privacy.
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
export default ISso1st;