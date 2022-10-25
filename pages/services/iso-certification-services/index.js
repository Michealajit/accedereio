
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort,  BsDash } from "react-icons/bs";
import Head from "next/head";

export default function isocertificationservices() {
  return (
    <div>
    <Head>
            <title>Accedere - Iso certification services</title>
            <meta name="description" content="Accedere is an IAS Accredited Certification Body for ISO 27001, ISO 27701 Certification at an affordable ISO 27001 and ISO 27701 Certification Cost. Get in touch to get your ISO 27001 or ISO 27701 Certification today."/>
<meta name="keywords" content="ISO 27001, ISO 27701, ISO 27001 Certification Cost, ISO 27002, ISO 20000, ISO 22301 Accedere"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100 iso-main-page'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 gy-5 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0">
                       ISO/IEC Certifications </h2>
                       <p className="text-white">Implementing Data Security and Privacy standards and getting such certifications is one way to ensure that your organization follow a process for its information systems, data, and privacy to provide an assurance to its vendors and third parties that the systems and data are appropriately protected. We offer management system certifications being an IAS Accredited Certification Body.</p>
                       
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/isoHomePage.svg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

      

         <div className="para-grap-div py-5">
            <div className="container">
         
               <h2 className="comon-head-main text-center"> ISO Certification Suite of Services </h2>
               

               <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-27001-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  
                                ISO/IEC 27001 <BsDash/> ISMS 
                               </h5>
                               <p>
                               
                               This is one way to ensure that your organization follow a process for its information systems and data are appropriately protected.
                                                            
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/Iso-27701-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               ISO/IEC 27701 <BsDash/> PIMS 
                              </h5>
                               <p> 
                               This is an extension certification on top of the ISO 27001 for privacy information management system.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-27017-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  
                               ISO/IEC 27017
                               </h5>
                               <p>
                               
                               This is a code of practice for Information Security Controls based on ISO/IEC 27002 for Cloud Services Standard.
                                                            
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-27018-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>  
                               ISO/IEC 27018 
                               </h5>
                               <p>
                               
                               This provides a code of practice for protection of personally identifiable information (PII).
                                                            
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-9001-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               ISO 9001
                              </h5>
                               <p>This standard is majorly known for Quality management system (QMS) across the globe.

                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-22301-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7818296.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>
                               ISO 22301
                              </h5>
                               <p>
                               This standard helps organizations identify and prioritize threats.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-20001-certification">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                                ISO/IEC 20000-1
                             
                               </h5>
                               <p> 
                               This standard is the international ITSM (IT service management) standard.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-31000">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                                ISO 31000
                             
                               </h5>
                               <p> 
                               This is for Risk management, provides principles, a framework, and a process for managing risk.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-certification-process">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                               Our ISO Certification Process & Policies
                             
                               </h5>
                               <p> 
                               Based on the scope & objectives of clients Accedere quotes an offer & enters into a detailed contract.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/iso-certification-services/iso-csa">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4248625.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                                ISO for CSA / C5
                             
                               </h5>
                               <p> 
                               Being a ISO/IEC Certification Body, we can provide you ISO/IEC Certification + CCM from CSA to achieve the STAR Level 1/2 compliance.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    
                </div> 
            </div>
         </div>




    </div>
        
    <Footer/>
    </div>
  )
}
