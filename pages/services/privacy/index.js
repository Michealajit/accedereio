
import Navbar from "./../../../componets/Navbar";
import Footer from "./../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Head from "next/head";

export default function privacy() {
  return (
    <div>
    
    <Head>
            <title>Accedere - Privacy Services</title>
            <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your Privacy Assessment needs."/>
    <meta name="generator" content="HubSpot"/>
          
   </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div style={{marginTop:100}} className="col">
                       <h2 className="text-white comon-head-main mt-0">  Privacy Assessment  </h2>
                       <p className="text-white"> Privacy has grabbed global attention and organizations look to comply with new privacy regulations and compliance mandates such as GDPR, CCPA-California Privacy Act, Colorado Privacy Act, New York Privacy Act, India Data Protection Bill, US Privacy laws as well as other Global Privacy mandates and others. We can help you with all privacy assessments and mandates. </p>
                   </div>
                   <div className="col">
                       <figure style={{height:300}} className="comon-banner-img">
                          <Image src="/world.svg"
                          alt="privacy"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center">  Privacy Assessment </h2>
                
                <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/privacy/privacy-assessment-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1962589.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> 
                              Privacy Assessment Services
                               </h5>
                               <p> 
                               We can help you with Privacy mandates like CCPA California Privacy, Colorado Privacy Act, New York Privacy Act, US Privacy laws etc.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                     <Link href="/services/socattestreports/soc2privacy">
                           <div className="comon-services-part">
                              <figure>
                                 <Image src="/7790150.svg"
                                 alt="pri"
                                 layout="fill"
                                 />
                              </figure>
                              <h5> SOC 2 for Privacy </h5>
                              <p> The SOC 2 compliance report provides an assurance to internal and external stakeholders for complying with privacy regulatory requirements.
                              </p> 
                              <span className="btn"> read more <BsArrowRightShort/> </span>
                           </div>
                     </Link>
                     </div>

                     <div className="col">
                      <Link href="/services/privacy/us-privacy-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7790150.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> US State Privacy Assessments </h5>
                               <p>Tools such as COBIT, ISO 27701, SOC 2 for Privacy can provide assurance to internal and external stakeholders.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link href="/services/privacy/gdpr-compliance-risk-assessment">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/5894572.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> GDPR Assessment </h5>
                               <p> 
                               We can help you with Privacy mandates and compliance for GDPR.
                             
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    
                    

                   

                    <div className="col">
                      <Link href="/services/privacy/soc2hipaa">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/7790150.svg"
                                  alt="pri"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> HIPPA Compliance</h5>
                               <p>We can help you with Privacy mandates and compliance for HIPPA.
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
