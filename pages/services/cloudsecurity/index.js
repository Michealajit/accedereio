
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort} from "react-icons/bs";
import Head from "next/head";

export default function cloudsecurity() {
  return (
    <div>
    <Head>
            <title>Accedere - Cloud Security Assessments</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       Cloud Security Assessments </h2>
                       <h5 className="text-white">Our methodology used to develop and execute these reviews is an amalgam of techniques that features in best practices from cloud service providers and security standards from reputable sources (including hardening guides such as the NIST Benchmarks) and can help with cloud assessments for your firm.
                       </h5>
   
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img need1">
                          <Image src="/what-is-cloud-security01.svg"
                          alt="syber1"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> Cloud Security Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-lg-5 g-lg-5 mt-0 justify-content-center">
                   

                    <div className="col">
                      <Link href="/services/cloudsecurity/cloud-peneteration-testing">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Peneteration Testing </h5>
                               <p> 
                               Cloud penetration testing requires unique and specific expertise that is different from standard penetration testing.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/cloudsecurity/cloud-supply-chain-assessments">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/4673944.svg"
                                  alt="cloud5"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Supply Chain Assessments</h5>
                               <p> Cloud Supply Chain Security (CSCS) is part of Supply Chain Management which focuses on risk management.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>

                    
                    <div className="col">
                      <Link href="/services/cloudsecurity/soccloudsecurity">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Cloud Container Security / Kubernetes</h5>
                               <p> 
                               We can provide audits for being compliant with Cloud Container Security and Kubernetes.
                             
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link href="/services/socattestreports/soc2cloud">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/417669.svg"
                                  alt="cloud4"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> CSA / C5 Compliance </h5>
                               <p> 
                               We can provide you with ISO/IEC Certification or SOC 2 + CCM from CSA to achieve the STAR Level 1/2 compliance.
                             
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
