
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort,  BsDash } from "react-icons/bs";
import Head from "next/head";

export default function indiacta() {
  return (
    <div>
    <Head>
            <title>Accedere - India Cert<BsDash/>In Assessments</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       India Cert<BsDash/>In Assessments  </h2>
                       <h5 className="text-white">We are CERT-In empaneled auditors and can help you with compliances for Aadhar audits, Safe-to-Host Applications audit, RBI / Data localization audits and SEBI directive audits.
                       </h5>
   
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/istockphoto-1206983388-612x612.svg"
                          alt="syber1"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> India Cert<BsDash/>In Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-lg-5 g-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/aadhar-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Aadhar Audit <BsDash/> UIDAI AUA & KUA </h5>
                               <p> 
                                Since we are CERT-In empaneled auditors we can conduct your Aadhar Audits for AUA and KUA compliance.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/safe-to-host">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  alt="cloud5"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Safe<BsDash/>to<BsDash/>Host Applications Audit </h5>
                               <p> As CERT-In empaneled auditors we can perform security tests and audit for Safe-to-Host applications & websites.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>

                    
                    <div className="col">
                      <Link href="/services/india-cert-assetsments/rbi-audit">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/2830155.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> RBI / Data Localization Audit </h5>
                               <p> 
                               Being CERT-In empaneled auditors we can conduct audit of your Banks IT Infrastructure as per RBI guidelines.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/india-cert-assetsments/sebi">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SEBI Directive Audit </h5>
                               <p> 
                               Being CERT-In empaneled auditors we can conduct security audit of stock exchanges as per SEBI directives.
                             
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
