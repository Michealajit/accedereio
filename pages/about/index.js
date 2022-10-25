import Navbar from "../../componets/Navbar";
import Banner from "../../componets/Banner";
import Footer from "../../componets/Footer";
import Clientlogo from "../../componets/Clientlogo";
import Image from "next/image";
import { BsXDiamondFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import Head from "next/head";


function about(){
    return(
        <>
        <div>
        <Head>
            <title>Accedere - About</title>
            <meta name="description" content="SOC 1,2,3 Compliance Auditor,SOC 2 Auditor,SOC Auditor,GDPR CCPA Privacy Auditor,ISO 27001 Auditor,ISO 27701 Auditor"/>
            <meta name="keywords" content="Privacy Auditors, SOC 2 for privacy Auditor, SOC Auditors, Service Auditors, SOX Auditors, SSAE 16 auditors, SSAE 18 Auditors, SOC 2 Auditors, SOC 1 Auditors, SAS 70 SOC Auditors, SSAE 16 Auditors, SOC 1 Type 2 Auditors, SOC 2 Type 2 Auditors, CCPA Auditors, Privacy auditors, cloud security alliance auditors, PCAOB Auditors, CPA Auditors, ISO-ISMS auditors, ISO 27001 Auditors, Cloud CCSK, CCM 4, CCAK, Colorado SOC Auditors"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                                <h2 style={{marginBottom:30}} className="comon-head-main text-white"> Company Overview </h2>
                                <p style={{marginBottom:20}} className="mt-4 text-white"> Accedere is Colorado CPA Firm with License no FRM.5000337 specializing in Cybersecurity Audits and Assessments with a major focus on AICPA SOC 1, 2,3 Compliance Reports, ISO/IEC Audits for Data Security & Privacy, Cloud Security. Accedere is registered with PCAOB, and Cloud Security Alliance as Auditors for their STAR program. Accedere India is a CERT-In listed entity.  </p>

                                <p   className="mt-2 text-white"> Ashwin Chaudhary is the CEO of Accedere. He is a CPA from Colorado, MBA, CITP, CISA, CISM, CGEIT, CRISC, CISSP, CDPSE, CCSK, PMP, ISO27001 LA, ITILv3 certified cybersecurity professional with over 20 years of cybersecurity/privacy and 40 years of industry experience. He has managed many cybersecurity projects covering SOC reporting, Privacy, IoT, SCADA and Industrial Control System (ICS), Governance Risk, and Compliance. He has been a speaker at several cybersecurity events and has many publications to his credit. </p>
 
                            
                                

                           </div>
                           <div className="col">
                                <figure style={{height:400}} className="ab-top1">
                                     <Image src="/soc-2.svg" alt="about"
                                     layout="fill"
                                     />
                                </figure>
                           </div>
                        </div>
                         
                    </div>
               </div>

               <div className="ourvaule-div mt-0">
                   <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2">
                         <div className="col">
                            <figure style={{marginLeft:-30,marginTop:40,height:800}} className="ab-top1 ">
                                <Image src="/pexels-photo-3183186.svg" alt="about"
                            
                                layout="fill"
                                />
                            </figure>
                         </div>
                         <div className="col">
                            <h2 style={{marginTop:30,marginLeft:0,marginBottom:20}} className="comon-head-main"> Why Choose Us: </h2>
                        
                            <p   className="mt-2 ">
                            Accedere is your one stop solution for all your Cyber Security, Cloud, and Privacy Audits/Assessments. We provide assurance services to our clients globally. Majority of Accedere’s customers are Cloud Service Providers whom we have been auditing for the past 10 plus years. 
                            </p>
                            <p   className="mt-2 ">
                            We’re one of the only few organizations to provide integrated audits for several compliance requirements such as SOC Reports and ISO/IEC Certifications that saves your time, money & efforts. We provide cloud supply chain security services covering vulnerability assessments, penetration testing, configuration reviews, Docker, Kubernetes and container security to cover most of the CI/CD security aspects.  
                            </p>
                            
                            

                          
                            <ul className="list-unstyled mt-4 blue-arrow">
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Colorado Licensed CPA Firm.</span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> PCAOB Registered Auditors. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> CSA STAR Empaneled Auditors. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> ISO/IEC Accredited Certification Body. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cert-In Empaneled Auditors. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> SOC 1, 2 and 3 Reports, SOC Report for Cloud Security & SOC Report for Privacy. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cloud Vulnerability Assessment and Penetration Testing (Cloud VAPT). </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Cloud Network Architecture Review & Cloud Configurations Architecture Review.</span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Data Localization / Cloud Data Security and Privacy. </span>
                               </li>
                               <li>
                                  <span className="list-unstyled">
                                      <FaAngleRight/>
                                  </span>
                                  <span> Dockers / Kubernetes and Cloud Supply Chain Securit. </span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
               </div>

               <div className="our-customer-div py-5">
                  <div className="container">
                      <div className="row row-cols-1 row-cols-lg-2 flex-lg-row flex-column-reverse">
                          
                          <div className="col">
                              <h2 className="comon-head-main text-white"> Our Mission </h2>
                              <p className="text-white"> Our mission is provide quality audit and assessment services to prevent data breaches and to improve our clients cyber maturity.
                              </p>
                          </div>

                          <div className="col">
                                <h2 className="comon-head-main text-white"> Our Vision </h2>
                                <p className="text-white"> 
                                Our vision is to see a better world free of cybercrime and free of nefarious use of data and systems.
                                </p>
                          </div>
                      </div>
                  </div>
               </div>

               <div style={{marginBottom:-50}} className="aboout-newa mt-5">
                  <div className="container">
              


                    <h2 className="comon-head-main"> Our Customers </h2>
                     <p> Accedere has worked with many large customers that are globally well known names as well as SMB customers. 
                    Our customers belong to the following verticals:</p>
                     <ul className="list-unstyled blue-arrow why-divbn mt-4">
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Cloud services such as IaaS, PaaS, SaaS, etc.
                        </span>
                          </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Banking and Financial Services.
                        </span>
                        </li>
                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Technology and Consulting services.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Construction and Infrastructure.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Energy.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Telecom.
                        </span>
                        </li>

                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Data Centre Services.
                        </span>
                        </li>


                        <li> 
                        <span className="conmo-icon">
                        <FaAngleRight/>
                        </span>
                        <span>
                        Healthcare and many more.
                        </span>
                        </li>

                        


                       

                    </ul>
                  </div>
               </div>

              <Clientlogo/>
               

         </div>
          <Footer/>
          </div>
        </>
    );
}
export default about;