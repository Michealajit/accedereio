
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";

function fedaassients(){
    return(
        <>
          <Head>
             <title>Accedere - FedRAMP Assessment</title>
             <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your FedRAMP assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              FedRAMP Assessment </h2>
                              <p className="text-white mt-4"> FedRAMP (Federal Risk and Authorization Management Program) is basically a program started by the US Government which provides standardized framework for security assessment, authorization, and monitoring for Cloud Service Providers (CSP).
                              </p>
                              <p className="text-white mt-4"> FedRAMP is for CSP's cloud related products and services used by federal agencies for storing and transmitting federal information stored in the cloud. It helps CSP's to meet their security requirements. It is imperative for CSP's to implement the necessary FedRAMP controls in an effective manner and follow its guidelines if they want to work with federal agencies. After the initial audit and assessment, CSP's need to ensure continuous monitoring of the FedRAMP cybersecurity guidelines.
                              </p>
                           </div>
                           <div className="col">
                               <figure style={{height:370}} className="mn-big-div need1">
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
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                            
                            <div className="col">
                                    <figure style={{height:400}} className="comon-sub-main2">
                                        <Image src="/powerful.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 style={{marginBottom:20}} className="comon-head-main "> 
                                 
                                 benefits of FedRAMP: </h2>

                                <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps CSP's to do business with US federal agencies.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps gain confidence that you meet all federal requirements for your cloud products and services.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Fulfills several federal requirements by our thorough FedRAMP audit.
                                       </span>
                                     </li>
                             </ul>
<p>FedRAMP compliance can also be done in conjunction with technical guidelines like NIST (National Institute for Standardization in Technology) and other compliances like FISMA.</p>
<p>Accedere has an experienced team of auditors who can prepare and guide you for FedRAMP assessments and our audits will help you eliminate risks related to non-compliance with FedRAMP requirements.</p>
                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

               
            
          </div>
          <Footer/>
        </>
    );
}
export default fedaassients;