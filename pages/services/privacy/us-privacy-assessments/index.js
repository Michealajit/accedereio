
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import {  FaAngleRight } from "react-icons/fa";


function usprivacypage(){
    return(
        <>
          <Head>
          <title>Accedere - Privacy Services</title>
          <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your US State Privacy Assessments"/>
  
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              US State Privacy Assessments </h2>
                              <p className="text-white mt-4"> Privacy has grabbed the attention globally across various regions as organizations look to comply with new privacy regulations and compliance mandates such as GDPR, CCPA-California Privacy Act, Colorado Privacy Act, New York Privacy Act, and other US Privacy laws. 
                              </p>
                              <p className="text-white mt-4">Tools such as COBIT, ISO 27701, SOC 2 for Privacy can provide assurance to internal and external stakeholders as well as can help in the governance, risk management of the overall privacy program, and ensure compliance of GDPR, CCPA California Privacy, and other privacy mandates such as Colorado Privacy Act, New York Privacy Act, and other US Privacy & Global Privacy laws. </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/soc-2.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div style={{marginBottom:50}} className="container">
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 flex-column-reverse flex-lg-row">
                            
                           <div className="col">
                                    <figure className="mn-big-div2 risk-1">
                                        <Image src="/soc1-1.svg" alt="about"
                                        
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0">  
                                California Consumer Privacy Act (CCPA)
                                </h2>
                                <p className="mt-4"> On June 28, 2018, Governor Brown signed Assembly Bill 375, now known as the California Consumer Privacy Act of 2018 (CCPA), which grants consumers new rights with respect to the collection of their personal information. This regulation aims to establish procedures to facilitate consumer’s rights under the CCPA and provide guidance to businesses for how to comply. The CCPA is effective from January 1, 2020. </p>

                          

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>
                <div className="para-grap-div">
                    <div style={{marginBottom:80}} className="container">
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 flex-column-reverse flex-lg-row">
                            
                          
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0">  
                                Business compliance eligibility under CCPA 
                                </h2>
                                <p className="mt-4"> The CCPA controls the manner in which “businesses” treat the “personal information” of California residents. The CCPA defines “business” to mean any for-profit legal entity doing business in California that:  </p>
                                <ul className="list-unstyled blue-arrow">
                         
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Has annual gross revenues in excess of $25 million.  </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Alone, or in combination, buys, receives, sells or shares the personal information of 50,000 or more California residents, households or devices.  </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Derives 50% or more of its annual revenues from selling California residents’ personal information.  </span>
                         
                         </li>
                         </ul>
                          

                                
                            </div>
                            <div className="col">
                        <figure className="mn-big-div2 risk-1">
                            <Image src="/ind22.svg"
                            layout="fill"/>
                        </figure>
                    </div>
                           
                           
                        </div>
                       

                        
                    </div>
                </div>

               <div className="para-grap-div">
                    <div style={{marginBottom:80}} className="container">
                        <div className="row row-cols-1 row-cols-lg-2 align-items-center g-lg-5 flex-column-reverse flex-lg-row">
                            
                           <div className="col">
                                    <figure className="mn-big-div2 risk-1">
                                        <Image src="/istockphoto-1206983388-612x612.svg" alt="about"
                                        
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0">  
                                Data Subject Rights under CCPA  
                                </h2>
                                <ul className="list-unstyled blue-arrow">
                         
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span>  Right to Know About Personal Information Collected, Disclosed, or Sold (Notice).  </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span>  Right to Request Deletion of Personal Information.  </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Right to Opt-Out of the Sale of Personal Information.   </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights (Equality).   </span>
                         
                         </li>
                         <li>
                                  <span>
                                  <FaAngleRight/>
                               </span>
                            <span> Right to access what information is collected by business.   </span>
                         
                         </li>
                         </ul>

                          

                                
                            </div>
                           
                        </div>
                       

                        
                    </div>
                </div>

              

              

            
          </div>
          <Footer/>
        </>
    );
}
export default usprivacypage;