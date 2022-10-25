
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";


function Iso27018(){
    return(
        <>
          <Head>
             <title>Accedere - ISO-27018-Certification</title>
             <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your FedRAMP assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              ISO/IEC 27018 </h2>
                              <p className="text-white mt-4"> ISO/IEC 27018 is a code of practice for security of PII (personally identifiable information). It provides a code of practice for protection of personally identifiable information (PII) in public clouds acting as PII processors in line with the privacy principles in ISO/IEC 29100 for the public Cloud computing environment.
                              </p>
                              <p className="text-white mt-4">ISO/IEC 27018 is the international code of practice and guideline published by the International Organization for Standardization (ISO), an independent, non-governmental international organization with a membership of 165 national standards bodies. This guideline was last reviewed and updated in 2019 and hence, the latest version of it is ISO/IEC 27018:2019.
                              </p>
                              <p className="text-white mt-4">This standard can be implemented by any organization, large or small, irrespective of its industry and field of activity. The standard is widely used by organizations which provide information processing services as PII processors via cloud computing under contract to other organizations. The guideline is also applicable and used by organizations acting as PII controllers, however, PII controllers are subject to additional PII regulations which do not apply to PII processors.</p>
                           </div>
                           <div className="col">
                               <figure style={{height:400}} className="mn-big-div need1">
                                    <Image src="/exams.svg" alt="about"
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
                                    <figure style={{height:500,marginTop:15}} className="comon-sub-main2">
                                        <Image src="/sharingknowledge.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 style={{marginBottom:20}} className="comon-head-main "> 
                                 
                               benefits of ISO/IEC 27018 Certification: </h2>

                                <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Safeguards access, storage, transmission, and processing of data for CSP.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Defines data retrieval and recovery strategies for CSP.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Improved global operations and legal protection.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps meet regulatory compliance which ensures avoidance of penalties and fines.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Fulfills several federal requirements by our thorough FedRAMP audit.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Competitive advantage.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Increased revenue by adhering to global cyber security compliances.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Satisfied customers and increased trust in all stakeholders.
                                       </span>
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
export default Iso27018;