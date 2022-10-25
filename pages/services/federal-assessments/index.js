
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";

export default function federalassessments() {
  return (
    <div>
    
    <Head>
            <title>Accedere - US Federal Assessments</title>
            <meta name="description" content="Learn more about how Accedere &amp;amp; Company&amp;s team of experts can help you with your f assessderalement needs."/>
      </Head>
    <Navbar/>
    <div className='sub-page-body fedarel-part1 float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       US Federal Assessments  </h2>
                       <h5 className="text-white">We offer US Government related assessments based on different frameworks like FedRAMP, CMMC, FISMA and NIST to various Cloud Service Providers (CSPs), Government contractors and other related parties across the globe.
                       </h5>
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img ">
                          <Image src="/pexels-cottonbro-5473302.svg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

        
            </div>
            <div className="comon-inside-services py-5">
            <div className="container">
               
                <h2 className="comon-head-main text-center"> US Federal Assessments </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                    <Link href="/services/federal-assessments/fedramp-compliance-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5> FedRAMP
                               </h5>
                               <p>FedRAMP is a program that enables cloud services providers (CSPs) to meet the security requirements embedded with FISMA and the NIST publications.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                    <Link href="/services/federal-assessments/cmmc-compliance-attestation-services">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>CMMC
                               </h5>
                               <p>The Cybersecurity Maturity Model Certification (CMMC) is a new framework with the objective of securing FCI and CUI.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
        
                    <div className="col">
                    <Link href="/services/federal-assessments/fisma-nist-attestation-services"> 
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>FISMA / NIST
                               </h5>
                               <p>We can provide both independent attestations and gap assessments against the NIST 800-53 standards which are the detailed requirements behind FISMA.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
        
        
                    </div>
         </div>

        
            </div>
   

   
        
    <Footer/>
    </div>
  )
}
{/* 

*/}