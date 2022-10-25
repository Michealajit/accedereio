
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";


function Iso27017(){
    return(
        <>
          <Head>
             <title>Accedere -  ISO-27017-Certification</title>
             <meta name="description" content="Learn more about how Accedere &amp; Company&apos;s team of experts can help you with your FedRAMP assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              ISO/IEC 27017 </h2>
                              <p className="text-white mt-4"> ISO/IEC 27017 gives guidelines for organizations for their information security controls. This code of practice provides a guide to 37 specific controls for cloud services, these controls are based on the 27002 standards. It is a code of practice for Information Security Controls based on ISO/IEC 27002 for Cloud Services Standard. Its implementation gives the organization guidelines for information security controls applicable to the provision and use of Cloud services. This is also useful for organizations evaluating security position of protentional Cloud service providers.
                              </p>
                              <p className="text-white mt-4"> ISO/IEC 27017 is the international code of practice and guideline published by the International Organization for Standardization (ISO), an independent, non-governmental international organization with a membership of 165 national standards bodies. This standard was last reviewed in 2021 and the latest version remains the same as ISO/IEC 27017:2015.
                              </p>
                              <p className="text-white mt-4"> This standard can be implemented by any organization, large or small, irrespective of its industry and field of activity. The standard is widely used by cloud service providers and cloud service customers to showcase their information security controls. </p>
                           </div>
                           <div className="col">
                               <figure style={{height:540}} className="mn-big-div need1">
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
                                    <figure style={{height:450}} className="comon-sub-main2">
                                        <Image src="/pexels-christina-morillo-1181216.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 style={{marginBottom:20}} className="comon-head-main "> 
                                 
                                benefits of ISO/IEC 27017 Certification: </h2>

                                <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Clarity over shared roles & responsibilities of cloud service providers and cloud service customers.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Secures your information & assets and protects against disruptions.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Documents critical procedures pertaining to operations.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Allows cloud service customers to monitor activities within the cloud.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Aligns security management of virtual as well as physical networks.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Traceable documentation which improves consistency and reduces errors.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Satisfied customers lead to customer retention & word of mouth marketing.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Increased work efficiencies by streamlined processes.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Increased revenue.
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
export default Iso27017;