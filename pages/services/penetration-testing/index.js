
import Navbar from "../../../componets/Navbar";
import Footer from "../../../componets/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";

export default function penetrationtesting() {
  return (
    <div>
    <Head>
            <title>Accedere - VAPT</title>
            <meta name="twitter:title" content="Penetration Testing Services | Accedere &amp; Company"/>
            
    </Head>
    <Navbar/>
    <div className='sub-page-body float-start w-100'>
           
         <div className="comon-top-space">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-lg-5 align-items-center">
                   <div className="col">
                       <h2 className="text-white comon-head-main mt-0"> 
                       VAPT  </h2>
                       <h5 className="text-white">Our process of Vulnerability Assessment and Penetration Testing involves an active analysis of the application and network for any weaknesses, technical flaws, or vulnerabilities. Any security issues that are found are presented to the system owner together with an assessment of their impact and often with a proposal for mitigation or a technical solution.
                       </h5>
     
                   </div>
                   <div className="col">
                       <figure className="comon-banner-img">
                          <Image src="/shield.svg"
                          layout="fill"/>
                       </figure>
                   </div>
                </div>
                
            </div>
         </div>

         <div className="comon-inside-services py-5">
            <div className="container">
               
                <h2 className="comon-head-main text-center"> Vulnerability Assessment and Pen Test  </h2>
               
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 gy-lg-5 mt-0 justify-content-center">
                    <div className="col">
                    <Link href="/services/penetration-testing/application-security">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>Application Security
                               </h5>
                               <p>We can conduct your web application security audits by conducting vulnerability and penetration testing.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
                    <div className="col">
                    <Link href="/services/penetration-testing/network-infrastructure"> 
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>Network and Infrastructure Security
                               </h5>
                               <p>We can conduct your network infrastructure security audits by conducting vulnerability and penetration testing.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
                          </div>
                      </Link>
                    </div>
        
                    <div className="col">
                    <Link href="/services/cloudsecurity/cloud-peneteration-testing">
                          <div className="comon-services-part">
                               <figure>
                                  <Image src="/1321938.svg"
                                  layout="fill"
                                  />
                               </figure>
                               <h5>Cloud Security
                               </h5>
                               <p>Cloud penetration testing requires unique and specific expertise that is different from standard penetration testing.
                               </p>
                               <span className="btn"> read more <FaAngleRight/> </span> 
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
{/* </Link>
 
</Link> */}