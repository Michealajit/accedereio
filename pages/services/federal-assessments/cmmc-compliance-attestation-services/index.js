
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";

function cmmccom(){
    return(
        <>
        <Head>
        <title>Accedere - CMMC Assessment</title>
        <meta name="twitter:title" content="CJIS Compliance Attestation Services | Accedere &amp; Company"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              
                                CMMC Assessment </h2>
                              <p className="text-white mt-4"> CMMC (Cybersecurity Maturity Model Certification) is a relatively new framework for safeguarding the FCI (Federal Contract Information) and CUI (Controlled Unclassified Information) which is established by Department of Defense (DoD) and applies to the entire Defense Industrial Base (DIB) suppliers or contractors.
                              </p>
                              <p className="text-white mt-4">DoD contractors hold sensitive information for developing and delivering their products / services which pertains to the government. This certification indicates that the DoD contractors are handling and protecting sensitive information according to the CMMC framework and guidelines. Hence, effective implementation and certification of CMMC framework ensures that they would secure such sensitive information just like any other government body or military would.</p>
                           </div>
                           <div className="col">
                               <figure style={{height:400}} className="mn-big-div need1">
                                    <Image src="/standout.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div style={{marginBottom:50}} className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 align-items-center">
                            
                            <div className="col">
                                    <figure style={{height:450}} className="comon-sub-main2">
                                        <Image src="/workingoutwithpieces.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main "> 
                                 
                                 benefits of CMMC:</h2>
                                 <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps ensure DoD that their FCI and CUI is protected.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps win DoD tenders & contracts by fulfilling their requirements.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps with increased revenues and market share.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps to create a USP against competitors.
                                       </span>
                                     </li>
                             </ul>
                                <p className="mt-4">
                                Accedere has an experienced team of auditors who will thoroughly evaluate your security policies and processes against the CMMC framework and guidelines. Our gap assessment would give you a fair idea of your current cyber security readiness and help you ensure that you can achieve your CMMC Certification by effective implementation of its controls.
                                  </p>

                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

             
            
          </div>
          <Footer/>
        </>
    );
}
export default cmmccom;