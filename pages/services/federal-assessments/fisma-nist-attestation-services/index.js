
import Image from "next/image";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";
import { FaAngleRight } from "react-icons/fa";

function fisma(){
    return(
        <>
          <Head>
             <title>Accedere -  FISMA NIST 800-53</title>
             <meta name="description" content="Learn more about how Accedere &amp;amp; Company&apos;s team of experts can help you with your FISMA or NIST assessment needs."/>
          
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              
                                
                              FISMA NIST 800-53 </h2>
                              <p className="text-white mt-4">FISMA (Federal Information Security Management Act) is for the federal agencies and contractors to ensure security of information systems and assets. Following FISMA’s guidelines, agencies are required to develop and implement their information security program.
                              </p>
                              <p className="text-white mt-4">NIST (National Institute of Standards and Technology) developed the NIST 800-53 framework which is the underlying requirements to comply with information security requirements of FISMA.
                              </p>

                           </div>
                           <div className="col">
                               <figure style={{height:500}} className="mn-big-div need1">
                                    <Image src="/gravitas.svg" alt="about"
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
                                    <figure style={{height:450,marginTop:13}} className="comon-sub-main2">
                                        <Image src="/betterworld.svg" alt="about"
                                        layout="fill"
                                        />
                                </figure>
                            </div>
                            <div className="col">
                            <h2 className="comon-head-main "> 
                                 
                             benefits of FISMA / NIST: </h2>
                                 <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps to comply with the requirements & framework of federal government.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Protects vital information security information & assets.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Helps to show cybersecurity compliance.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Covers best practices across various cybersecurity frameworks.
                                       </span>
                                     </li>
                             </ul>
                                <p className="mt-4">
                                Non-compliance with FISMA or NIST frameworks means your organizations is vulnerable to potential data breach, loss of information or sensitive data, loss in ability to manage 3rd party data and could lead to heavy fines and penalties.
                                  </p>
                                  <p className="mt-4">
                                  Accedere has an experienced team of auditors who will thoroughly evaluate your information security environment. Our gap assessment will help you understand the critical gaps in effective management of the risks related to information security and assets. Our audit will ensure that you have implemented effective controls pertaining to information security that properly manages your risks and helps comply with FISMA and NIST frameworks.
                                  </p>
                             

                            </div>
                            
                            
                        </div>
                        

                        
                    </div>
                </div>

              

            
          </div>
          <Footer/>
        </>
    );
}
export default fisma;