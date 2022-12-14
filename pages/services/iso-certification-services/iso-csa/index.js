import Head from "next/head";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";

function soc2cloud(){
    return(
        <>
        <Head>
        <title>ISO 27001 Certification, Application Security in Cloud Computing, SOC 2 Compliance</title>
    <meta name="description" content="Accedere is pioneer offering services related to the ISO 27001 Certification, Application Security in Cloud Computing, SOC 2 Compliance in an across the North America and Globally."/>
    <meta name="keywords" content="ISO 27001 Certification, Application Security in Cloud Computing, SOC 2 Compliance, Accedere"/>
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div style={{marginBottom:50}} className="row row-cols-1 row-cols-lg-2 g-lg-5">
                           <div style={{marginTop:100}} className="col">
                              <h2 className="comon-head-main text-white"> ISO  For CSA STAR </h2>
                              <h2 className="text-white mt-5"> Growing Cloud Adoption  </h2>
                              <h5 className="text-white mt-3"> The worldwide public cloud services market is forecast to grow to 1 
                              Trillion USD by 2024.</h5>
                              <p className="text-white mt-4"> According to some estimates, there are more than 20,000 SaaS providers globally. SaaS Software as a service (SaaS) will remain the largest market segment, 
                              which is forecast to grow to $141 billion by 2022.
                              </p>
     
                           </div>
                           <div className="col">
                               <figure  style={{height:430,marginTop:-20}}  className="why-imgs2">
                                    <Image  src="/starLevel2png.png" alt="about"
                                  
                                    layout='fill'
                                    />
                               </figure>
                           </div>
                        </div>

                        <h2  className="comon-head-main text-center text-white mt-5"> 
                         Cloud Security Challenges </h2>

                         <p className="text-white text-center"> Cloud Security Alliance has presented some of 
                         the following major cloud challenges. </p>

                         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-5 g-lg-4 mt-0">
                            <div className="col">
                                <div className="comon-soc1">
                                   <h5 className="text-center"> Misconfiguration
                                   and Inadequate Change Control. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Lack Of  Cloud Security Architecture and Strategy. </h5>
                                </div>
                            </div>

                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Insufficient Identity, Credential, Access
                                  and Key Management. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Insider Threat. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Insider Threat. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Abuse and Nefarious Use Of Cloud Services. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Insecure Interfaces and APIs. </h5>
                                </div>
                            </div>
                            <div className="col">
                                <div className="comon-soc1">
                                  <h5 className="text-center"> Account Hijacking. </h5>
                                </div>
                            </div>
                         </div>


                        

                        
                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2  g-lg-5 mt-0">
                            <div className="col">
                                 <figure className="cmr-small-pic my-5 my-lg-0">
                                        <Image src="/what-is-cloud-security01.svg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            <div className="col">
                                <h2 className="comon-head-main"> Cloud Vendors as Third-Party Risks </h2>
                                 <p className="mt-4"> Managing third-party risk is an important aspect of the overall risk management process and Zero Trust Security. Cloud providers are third parties that store or process valuable information. From a cybersecurity perspective, third party risks frequently involve a set of threats that may exceed the scope of the organization&apos;s risk management activities. Some organizations focus too narrowly on risks. For example, when hosting data in the cloud, most organizations ask the 
                                 vendor for attestations or some evidence of cybersecurity capability. </p>
         
                            </div>
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0 flex-column-reverse flex-lg-row">
                            <div className="col">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> IoT and Cloud </h2>
                                <p className="mt-4"> Connected devices and cyber-physical systems are becoming more prevalent in enterprise environments. As the cloud environment expands to encompass these technologies, the connected world depends on devices to manage, orchestrate, and provision data. By 2023, the number of connected devices is forecast to reach 20 billion. This increase in volume is a growing challenge for service providers tasked with trying to keep their networks secure and for enterprises and critical
                                 infrastructure entities deploying and managing devices. </p>

                                <p> Insecure data flow from the edge to the cloud is a concern for data processing specially in the age of Microservices & Contianerization involving Dockers,
                                 Kubernetes etc. This calls for increasing use of DevSecOps. </p>

                                 <p> Distributed denial-of-service (DDoS) botnet attack is another top IoT risk.
                                 The Mirai botnet exploited a vulnerability in IoT devices to launch a DDoS attack against a
                                  critical Domain Name System (DNS) server that disrupted a number of 
                                 the Internet&apos;s biggest websites, including PayPal, Spotify, and Twitter. </p>

                                <p> According to the Open Web Application Security Project (OWASP), both aspects of security in this convergence are facing challenges from each other. Cloud web interface is listed as one of the attack surfaces of IoT, while some top security risk factors include service and data
                                 integration, which is linked to the security of IoT devices. </p>

                            </div>
                            <div className="col">
                                 <figure style={{height:550}} className="cmr-small-pic lot-img">
                                        <Image src="/cloud-img2.svg" alt="about"
                                        layout='fill'
                                        />
                                </figure>
                            </div>
                            
                        </div>
                       

                        
                    </div>
                </div>


                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row">
                            
                            <div className="col-lg-5">
                                    <figure className="cmr-small-pic ison-sp1">
                                        <Image src="/adata.svg" alt="about"
                                        layout='fill'
                                        />
                                    </figure>
                            </div>
                            <div className="col-lg-7 ps-lg-5">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Security Responsibilities in the Cloud </h2>
                                <p className="mt-4"> At a high level, security responsibility maps to the degree of control any given 
                                actor has over the cloud architecture stack consists of:</p>

             

                                 <p className="my-4"> SOC 2 compliance reports now have many flavors </p>

                                 <ul className="list-unstyled blue-arrow">
                                     <li>
                                       <p> <FaAngleRight/> </p>
                                       <p>
                                       Software as a Service (SaaS)???The CSP is responsible for nearly all security because the cloud user can only access and manage their use of the application and cannot alter how the application works. For example, a SaaS provider is responsible for perimeter security, logging/monitoring/auditing, and application security, while
                                        the consumer may only be able to manage authorization and entitlements.
                                       </p>
                                     </li>
                                     <li>
                                       <p> <FaAngleRight/> </p>
                                       <p>
                                       Platform as a Service (PaaS)???The CSP is responsible for the security of the platform, while the consumer is responsible for everything they implement on the platform, including how they configure any offered security features. The responsibilities are, thus, more evenly split. For example, when using a Database as a Service, the provider manages fundamental security, patching, and core configuration, while the cloud user is responsible for everything else, including which security features of the 
                                       database to use to manage accounts or even authentication methods.
                                       </p>
                                     </li>
                                     <li>
                                        <p> <FaAngleRight/> </p>
                                       <p>
                                       Infrastructure as a Service (IaaS)???Just like PaaS, the provider is responsible for foundational security, while the cloud user is responsible for everything they build on the infrastructure. Unlike PaaS, this places far more responsibility on the client. For example, the IaaS provider will likely monitor their perimeter for attacks, but the consumer is fully responsible for how they define and implement their virtual 
                                       network security, based on the tools available on the service.
                                       </p>
                                     </li>
                                    
                                  </ul>

                            </div>
                            
                            
                        </div>
                       

                        
                    </div>
                </div>

                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row flex-column-reverse flex-lg-row">
                            
                            
                            <div className="col-lg-7 pe-lg-5">
                                <h2 className="comon-head-main mt-5 mt-lg-0"> Shared Responsibility Model </h2>
                                 
                                <p> Some SaaS providers believe that if they are hosting their application on platforms such as Amazon Web Services (AWS), Microsoft Azure, or Google Cloud and they are automatically compliant just because these platforms may be. This may be applicable to other IaaS or PaaS providers. SaaS CSPs may also need to review the exact controls in the SOC reports and examine whether the relevant controls and criteria are covered in those SOC reports. The availability of a SOC report should 
                                not be just a checkbox for third-party (vendor) risk compliance.</p>
                                <p> This customer/platform shared responsibility model also extends to IT controls. Just as the responsibility to operate the IT environment is shared between AWS and its customers, so is the management, operation, and verification of IT controls. Cloud platforms can help relieve the customer burden of operating controls by managing those controls associated with the physical infrastructure deployed in their environment that may previously have been managed by the customer. As every SaaS is deployed differently in the cloud, SaaS providers can take advantage of shifting management of certain IT controls to the platforms, 
                                which results in a (new) distributed control environment.</p>


                            </div>

                            <div className="col-lg-5">
                                    <figure className="comon-img-pic">
                                        <Image src="/pexels-christina-morillo-1181216.svg" alt="about"
                                        width={900}
                                        height={800}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            
                            
                        </div>

                        <div className="row mt-5">
                            
                            <div className="col-lg-5">
                                    
                                <figure className="cmr-small-pic">
                                    <Image src="/data2.svg" alt="about"
                                    layout='fill'
                                    />
                                </figure>
                                
                            </div>
                            
                            <div className="col-lg-7 ps-lg-5">
                                <h2 className="comon-head-main  mt-5 mt-lg-0"> Data Governance in the Cloud </h2>
                                 
                                <p> Governance issues also relate to regulatory compliance, security, privacy, and similar concerns impacting today&apos;s organizations. Today&apos;s data management and storage landscape, where data entropy and data sprawl 
                                are rampant, has far-reaching consequences for data security.</p>

                                <p> Many organizations are storing a significant amount of data in distributed and hybrid cloud and even unmanaged environments, increasing challenges for regulatory compliance. A data inventory and data flow are often recommended. With increasing IoT devices and data lakes in the cloud, visibility and control are invariably lost, resulting in data sovereignty challenges. Disruptive technologies such as Blockchain (distributed ledger) have emerged as candidates for financial institutions to reform their businesses. The speed and cost of doing business using distributed ledger technology are expected to improve by simplifying back-office operations and lowering the need for human intervention. However,
                                 a number of security concerns around this new technology remain.</p>


                            </div>

                            
                            
                            
                        </div>
                       

                        
                    </div>
                </div>

                <div className="bg-grapy para-grap-div py-5">
                    <div className="container">
                                
                        <h2 style={{fontSize:30}} className="comon-head-main mt-5 mt-lg-0"> Data Encryption or Anonymization </h2>
                                    
                        <p> Privacy mandates such as the EU General Data Protection Regulation (GDPR) recommend data anonymization, which can be another form of encryption. Without a proper data governance program, organizations may face challenges in meeting these privacy compliance mandates. Data encryption is also mandated for the US Health Insurance Portability and Accountability Act (HIPAA) 
                        and the Payment Card Industry Data Security Standard (PCI DSS).</p>

                        <p style={{marginBottom:50}}> Data security and privacy are increasingly challenging in today&apos;s cloud-based environments. Providing independent third-party assurance such as a System and Organization Controls (SOC) 2 report helps address these concerns and helps cloud service providers (CSPs) stay ahead of the competition. This assurance also helps 
                        organizations mitigate data security and privacy risk.</p>


                        <h2 style={{fontSize:30}} className="comon-head-main "> Cloud Assurance for CSPs </h2>
                                    
                        <p style={{marginBottom:50}}> There are several approaches for CSPs to provide assurance to their customers that 
                        would provide them with confidence in using the CSP&apos;s services.</p>

                        <h2 style={{fontSize:30}} className="comon-head-main ">CSA STAR Certification Roadmap</h2>
                        <p style={{marginBottom:50}}> The Cloud Security Alliance (CSA), in collaboration with the American Institute of CPAs (AICPA), developed a third-party assessment program of CSPs called the CSA Security Trust Assurance and Risk (STAR) Attestation. The STAR is the industry&apos;s most powerful program for security assurance in the cloud. STAR encompasses key principles of transparency, rigorous auditing, and harmonization of standards. The STAR program provides multiple benefits, including indications of best practices 
                        and validation of the security posture of cloud offerings.</p>

                        <h2 style={{fontSize:30}} className="comon-head-main ">Cloud CSA STAR Level 2 Attestation/ Certification</h2>
                        <p style={{marginBottom:50}}> The SOC 2+ Framework allows a SOC 2 to report on any additional controls over and above the trust services criteria controls for security, availability, confidentiality, processing integrity, and privacy. Taking advantage of this framework, STAR Attestation provides a framework for Certified Public Accountants performing independent assessments of CSPs using SOC 2 engagements with the Cloud Security Alliance&apos;s Cloud Controls Matrix (CCM). Alterntively being a Certification Body Accedere can also provide the ISO/IEC 27001
                         Certification + CCM from CSA to achieve the STAR Level 2 compliance.</p>

                        <h2 style={{fontSize:30}} className="comon-head-main "> Cloud Controls Matrix (CCM) </h2>
                        <p style={{marginBottom:50}}> The CCM now CCM 4, is the only meta-framework of cloud-specific security controls, mapped to leading standards, best practices, and regulations. CCM provides organizations with the needed structure, detail, and clarity relating to information security tailored to cloud computing. CCM is currently considered a de-facto standard for cloud security assurance 
                        and compliance. CCM also covers some Privacy controls that are mapped to GDPR. </p>


                        <h2 style={{fontSize:30}} className="comon-head-main "> Level 2 CSA STAR Compliance </h2>
                        <p style={{marginBottom:50}}> The STAR Attestation is positioned as STAR Certification at Level 2 of the Open Certification Framework and STAR Certification is a rigorous third-party independent assessment of the security of a cloud service provider STAR Attestation is based on type I or SOC 2 compliance attestations supplemented by the 
                        criteria in the CCM. Accedere is listed with Cloud Security Alliance as Auditors. </p>


                        <h2 style={{fontSize:30}} className="comon-head-main "> C5 Cloud Controls </h2>
                        <p> In February 2016, the Bundesamt fur Sicherheit Institute (BSI) or the German Federal Office for Information Security, established the Cloud Computing Compliance Controls Catalog (C5) certification after it noted the rise in cloud computing in Germany. With the C5, the BSI redefined the bar that CSPs should meet when dealing with German data. The establishment of the C5 elevated the demands on CSPs by combining the existing security standards including ISO 27001 Certification and requiring 
                        increased transparency in the data processing. C5 controls can be applied globally. </p>

                        <p> C5 is intended primarily for professional CSPs, their auditors, and customers of the CSPs. The catalog is divided into 17 thematic sections (e.g. organization of information security, physical security). C5 makes use of recognized security standards, such as ISO 27001 Certification, the Cloud Controls Matrix of the Cloud 
                        Security Alliance and, BSI publications, and it uses these requirements wherever appropriate. </p>

                        <p style={{marginBottom:50}}> A SOC 2 compliance report proves that a CSP complies with the requirements of the catalogue and that the statements made on transparency are correct. This report is based on the internationally recognized attestation system of the International Standard for Assurance Engagements (ISAE) 3000, which is used by public auditors. When auditing the annual financial statements, the auditors are already on site, and 
                        auditing according to C5 can be performed without much additional effort. </p>

                         


                    </div>
                </div>


                <div className="para-grap-div">
                    <div className="container">
                        
                        <div className="row">
                            
                            
                            <div className="col-lg-7 pe-lg-5">
                                <h2 className="comon-head-main "> CSA STAR for Cloud-Benefits: </h2>
                                 
                                <ul className="list-unstyled blue-arrow mt-4">
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/> 
                                      </span>
                                      <span>
                                      Based on an ISO 27001 Certification or SOC 2 Compliance and Attestation along with CCM.
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      It is a Third-Party audit with CSA logo and ISO/IEC or SOC 2 (AICPA) logo that provides assurance to your customers.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                        Most recognized assurance for Cloud Security.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Covers a CSA Maturity model.
                                      </span>
                                    </li>
                                    <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Comprehensive Framework for AICPA, Security in Cloud Computing, Application Security and C5.
                                      </span>
                                    </li>
                                    
                                    <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      A SOC 2 Type 2 with CSA STAR can only be provided by a CPA Firm or a Certification Body (for ISO/IEC 27001) and listed with Security in Cloud Computing, Application Security Alliance.
                                       Accedere is listed as both Security in Cloud Computing, Application Security.
                                      </span>
                                    </li>
                                </ul>

                                

                            </div>

                            <div className="col-lg-5">
                                    <figure className="cmr-small-pic">
                                      <Image src="/observation.svg" alt="about"
                                      layout='fill'
                                      />
                                  </figure>
                            </div>
                            
                            
                        </div>

                    </div>
                </div>


               



          </div>
          <Footer/>
        </>
    );
}
export default soc2cloud;