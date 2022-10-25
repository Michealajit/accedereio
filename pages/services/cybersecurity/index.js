
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Head from "next/head";

export default function aicpasocreports() {
  return (
    <div>
    <Head>
            <title>Accedere - Cybersecurity</title>
            <meta name="description" content="IoT and Smart Infrastructure Security covering Smart Grid,Smart Cities, IoT Privacy using ISO 27701"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5">
                   <div style={{marginTop:100}} className="col">
                       <h2 className="text-white comon-head-main mt-4"> CyberSecurity  </h2>
                       <p className="text-white"> We offer assessments for other cloud security related compliances like IoT Security, SCADA, Blockchain and also help organizations with on-demand cyber security contractors for required time periods.</p>
                      
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/adata.svg"
                          alt="syber"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
                <h2 className="comon-head-main text-center"> CyberSecurity Services </h2>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                      <Link href="/services/cybersecurity/lotsecurity">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1067263.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> IoT Security </h5>
                               <p>Our IoT testing services reduce your security complexity and adapt to new platforms and techniques.
                               </p>
                               <span className="btn"> read more <BsArrowRightShort/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/scadaics">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1265775.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> SCADA | ICS </h5>
                               <p>We provide Industrial Cybersecurity services for NERC CIP Compliance and to improve the security posture of your ICS or OT systems from threats.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                      <Link href="/services/cybersecurity/blockchain">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1797588.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> Blockchain </h5>
                               <p> We conduct our assurance engagement against established standards used by auditors to assess the internal controls of a blockchain distributed ledger deployment.
                               </p> 
                               <span className="btn"> read more <BsArrowRightShort/> </span>
                          </div>
                      </Link>
                    </div>

                    <div className="col">
                       <Link href="/services/cybersecurity/hire-cybersecurity-contactor">
                           <div className="comon-services-part">
                              <figure>
                                 <Image src="/2273136.svg"
                                 layout="fill"
                                 />
                              </figure>
                              <h5> Hire Cyber Security Contractors  </h5>
                              <p> We validate the experience of the cybersecurity contractors before you can sign up for short- and long-term durations.
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
