
import Image from "next/image";
import {  FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";


function soccloudsecurity(){
    return(
        <>
        <Head>
        <title>Accedere - Cloud Container Security And Kubernetes</title>
          <meta name="description" content="Accedere Cloud Security Audit Services includes Security in Cloud Computing, Kubernetes Security. Docker Security, Cloud Penetration Testing, Zero Trust Security, Container Security, Application Security and more."/>
          <meta name="keywords" content="Cloud Security, Security in Cloud Computing, Kubernetes Security,. Docker Security, Cloud Penetration Testing, Zero Trust Security, Container Security, Application Security, Cloud security,Cloud Security Alliance, Cloud Compliance auditor, VAPT Playbook,cloud application audits in usa,ISACA cloud audit tool,Cloud Vulnerability,Top Cloud Risks,Cloud Data Audit,Cloud Auditors in USA,Azure Pentest,cloud penetration testing,cloud security arcihtecture,CASB security,cloud app security,cloud computing security,cloud database security,Cloud SaaS Audit,Cloud PaaS Audit,Cloud Vulnerability Assessment,Cloud Penetration Testing,Cloud misconfigured Servers, Kunernetes for Cloud Security, Cloud CCSK, CCM 4, CCAK, SaaS Vulnerability Assessment, SaaS Penetration Testing, ISO19944 vs 27017, Cloud Pentest, PaaS Audit, SaaS VAPT, PaaS VAPT, IaaS VAPT, SecaaS audit, Cloud Security Alliance Auditor"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> Cloud Container Security / Kubernetes </h2>
                              <h5 className="text-white mt-3"> When we discuss cloud supply chain, containerization is the thing which is been
                               looked at for micro-services.</h5>
                              <p className="text-white mt-4"> A containerization is a form of virtualization where all the components of the application are packed into a single container image, later which can run in the same or shared operating system as an isolated user. The isolated container image is encapsulated with all the requirements
                               which are necessary to run an application.
                              </p>

                              <p className="text-white">  Docker is an open-source suite for developing, shipping, and running applications that helps to reduce the delay between writing code and running it in a production environment. It helps to separate applications from the
                               infrastructure to boost the software delivery process.</p>

                               <p className="text-white"> Kubernetes is an open-source orchestration platform for managing all the automation and scaling. Kubernetes groups containers that make up an application into logical units for easy management and discovery.
                               </p>
     
                           </div>
                           <div className="col">
                               <figure className="cmr-small-pic">
                                    <Image src="/privacbn.svg" alt="about"
                                  
                                    layout='fill'
                                    />
                               </figure>
                           </div>
                        </div>

                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2  g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="cmr-small-pic">
                                        <Image src="/newspaper.svg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                 <p className="mt-0"> Container security is equally important as traditional 
                                 infrastructure security, A security compromise puts customer data at risk and potentially exposes a business to millions of dollars in fines, lost productivity,
                                  reduced sales, and potential dissolution. </p>

                                     
                            <ul className="list-unstyled blue-arrow mt-3">
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	Everything is stored/contained in a single package. </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Applications are isolated on the operating systems. </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	User-friendly and runs anywhere: electronic devices, data centers, or on the cloud. </span>
                            
                            </li>
                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Uses fewer resources than a virtual machine.</span>
                            
                            </li>

                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span> Evaluate that all the stages of the supply chain are performed by an 
                                authenticated trusted party such that
                                 it can be verified cryptographically and/or automated where possible.</span>
                            
                            </li>

                            <li>
                                        <span>
                                        <FaAngleRight/>
                                    </span>
                                <span>	Container image will run the same way every time, whenever it is run. </span>
                            
                            </li>

                           
                      </ul>

         
                                
                            </div>
                        </div>
                       
                        <p className="mb-5"> 
                        Docker & Kubernetes are open-source, and we don&apos;t want to trust anyone with an open-source application just because it is provided by any big companies having its 
                        back or origin. Everything is shared in a single package in an image, it has its own 
                        limitation and security challenges. Traditionally, we had the firewall IDS, and IPS 
                        which are not the same for containerization security and open-source system because
                         they are inside the system in a trusted zone itself. They are within the firewall and 
                         application perimeter so we are trusting them that is why we cannot run it over IDS/IPS like we use to do in traditional security. We need to have a different approach to container security.
                        </p>
                        
                    </div>
                </div>

                


          </div>
          <Footer/>
        </>
    );
}
export default soccloudsecurity;