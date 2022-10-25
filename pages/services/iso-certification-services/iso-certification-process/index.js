
import Image from "next/image";
import {  FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";


function isoprocess(){
    return(
        <>
          <Head>
             <title>Accedere - Our ISO Certification Process & Policies</title>
             <meta name="twitter:title" content="ISO 27701 Certification &amp; Assessments | Schellman &amp; Company"/>
          </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                               Our ISO Certification Process & Policies </h2>
                               <h5 className="text-white"> Audit Questions and Scoping: </h5>
                              <p className="text-white mt-4"> The ISO 27000 and ISO 27701 audit journey begins with the 
                              audit questionnaire, which helps Accedere in understanding the audit scope. It provides 
                              us basic information about the client&apos;s organization, its management system, size & types 
                              of operation. Audit questionnaire also helps the auditor & auditee in setting the assessment 
                              objectives regarding the scope, standards & specifications.
                              </p>

       

                              

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1 ">
                                    <Image src="/gd-group-discussion-tips.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div  className="para-grap-div">
                    <div className="container">


                       <h2 style={{fontWeight:"bold",marginTop:-20,marginBottom:20}}> Agreement: </h2>

                        <p> Based on the scope & objectives of clients Accedere quotes an offer & enters into a 
                        detailed contract specifying the terms, assessment criteria, all relevant 
                        deliverables, etc. each agreement is customized to individual client needs. </p>


                        <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Stage 1 Audit: </h2>

                        <p> Stage 1 Audit is a part of the registration process and not an optional activity. 
                        During Stage 1, it is established whether the requirements of the standard(s) are being met by the 
                        auditee organization. This can be done by review of the available evidence. The goal of the Stage 1 
                        audit is to 
                        determine if the client&apos;s ISMS is developed sufficiently to be certified. </p>


                        <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Stage 2 Audit: </h2>

                        <p> The auditor team applies the defined standard & evaluates the effectiveness of the
                         Information Security Management System & processes. Changes to the auditee organization&apos;s
                          documentation since the previous visit are reviewed and outstanding non-conformance(s) are 
                          followed up. The auditee organization&apos;s ISMS is assessed according to the schedule and audit 
                          trails. Documents reviewed, personnel interviewed and other pertinent data are recorded. 
                          Non-conformances are raised after the proper investigation against activities found non-compliant. 
                        The Observations are issued identifying areas of improvement only. </p>


                        <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Certifcation Decision: </h2>

                        <p> After all the audit processes are completed and all major non-conformities of Stage 2 are 
                        closed, the Certification Body evaluates all the processes & its results to take the certification 
                        decision. The decision of the Certification Body is independent & not influenced by any auditor or 
                        audit team member involved in the audit of the particular client. The audit results will be 
                        provided to the client in the form of an audit report. The
                         certificate is issued to the client only when all requirements are fulfilled. </p>


                         <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Surveillance Audit: </h2>

                        <p> A surveillance audit shall be conducted at least once per year. SA is intended to verify the 
                        continued effective maintenance of the auditee organization&apos;s quality management system, 
                        satisfy the needs of the auditee
                         organization and maintain the integrity of the registration process as a whole. </p>


                         <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Re-Audit: </h2>

                         <p> At the end of each 3 years cycle, a recertification audit is carried out. 
                         The purpose of the recertification audit is to confirm the continued and effective 
                         management system as a whole is followed and the continued relevance and applicability of the 
                         scope of certification, commitment to enhance and maintain overall effectiveness and improvement 
                         of the management system, and whether the operations of a certified client contributes to the 
                         achievement of the client&apos;s policy and objective.
                          If all requirements are fulfilled a new certificate is issued. </p>

                          <h2 style={{fontWeight:"bold",marginTop:50,marginBottom:20}}> Extensions/Reduction/Change to Scope: </h2>

                          <p className="mb-5"> Audits for the change or extension in scope will be carried out in the same way as the 
                          initial audit. An Audit Report will be completed in the normal way and submitted to the 
                          Certification Committee for approval. If successful, a new certificate will be issued by Accedere. 
                          A special visit may be
                           carried out at the request of the client for additional accreditation.</p>

                        
                    </div>
                </div>
              
                    <div style={{marginBottom:80}} className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5">
                          
                           <div className="col">
                               <figure style={{marginTop:70,height:900}} className="mn-big-div">
                                    <Image src="/takingnotes.svg" alt="about"
                                    width={700}
                                    height={800}
                                    layout="responsive"
                                    />
                               </figure>
                           </div>
                           <div style={{marginTop:100}} className="col">
                              <h2 style={{fontWeight:"bold"}}>Our ISO/IEC Audit Related Policies  </h2>
                              <h3 style={{marginBottom:-20}} className=" mt-4"> Withdrawal/Suspension: 
                              </h3>
                              <p className="mt-4">Accedere shall initiate withdrawal/suspension procedures, if the auditee organization fails to effectively respond to a corrective action request or if the corrective action is not satisfactory. The following reasons are considered grounds for suspension or cancellation:</p>
                              <ul  className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span >
                                       Major non-conformance(s) or effective corrective action not implemented within a specified time.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Improper use of the certificate, symbol, or logo not remedied to the satisfaction of Accedere.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       The client ceases to supply products or services of the certified quality system for an extended period.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       The client’s certified management system has persistently failed to meet any of the requirements for certification including requirements for the effectiveness of the management system.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Client fails to meet financial obligations to Accedere.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       The client makes a formal request to withdraw certification.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Infringement by the client of any contractual conditions between the client and Accedere.
                                       </span>
                                     </li>
                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       Existence of a serious complaint, or a large number of second- or third-party complaints, which indicates that the quality management system is not being maintained.
                                       </span>
                                     </li>

                                     <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       The client is unable or unwilling to ensure conformance to revisions of standards.
                                       </span>
                                     </li>

                                      <li>
                                       <span> <FaAngleRight/> </span>
                                       <span>
                                       The client does not allow routine surveillance to be conducted at the required frequency.
                                       </span>
                                     </li>
                                     </ul>
                           </div>             
                    </div>
                </div>
                    
 
                    <div style={{marginTop:-150}} className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 ">
                           <div className="col">
                              <h2 style={{fontWeight:"bold"}}> 
                              Certification (Accedere Shield) and Certification Mark/Logo:</h2>
                              <p style={{marginBottom:2}} className=" mt-4">Accedere issues mark corresponding to the relevant standard for which approval has been given, by way of a current Certificate of Registration. The certification mark (Accedere Shield) used must correspond to the standard against which the company has been audited and achieved registration (i.e. ISO 27001). NOTE: Any misuse of marks may result in the withdrawal of certificates.
                              </p>
                            <p className="">To ensure that the correct markings are used the following rules shall be observed by all companies who receive certification through Accedere:</p>
                            <ul style={{marginBottom:-150}} className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The marks shall be displayed only in the appropriate form, size, and color detailed in this section.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The organization’s certificate number is printed under the mark.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            When the mark is printed on an unfolded portion of A4 size stationery, it shall be displayed in a size no larger than 30 mm high. On larger portions of unfolded stationery, the size may be proportionately increased.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification marks shall normally have a minimum height (excluding the certificate number) of 20 mm. Any enlargement or reduction shall retain the same proportions as those of the masters. The Certification Mark and the certificate number shall be considered as a single entity for purposes of enlargement or reduction.
                            </span>
                              </li>
                              </ul>
                              <ul style={{width:1130,marginTop:-40}} className="list-unstyled blue-arrow why-divbn mb-5">
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            In exceptional circumstances, which are usually dictated because of space limitation or cost, the marks may be reproduced at a reduced height, provided that irrespective of the height of reproduction, the mark must be legible, with no infilling.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Embossed, relief, or die-stamped versions may be used. The marks may be reproduced as watermarks.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Electronic reproduction of the marks is permitted (including Internet websites) provided that the requirements are met and  the organization’s certificate number is printed under the mark  is reproduced so that infilling does not occur  degradation and/or distortion of the mark graphic is avoided. computer files of the marks shall be prepared from mark masters. Redrawn approximations may not be used.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification Marks/logos shall not be used in any way that might mislead the reader about the status of a certified organization, activities outside the scope and imply that product, process, or service is certified. Holders of Certificate shall not make, use or permit any misleading statement and certification document.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Holders of certificates issued by Accedere may use the appropriate mark in the manner prescribed, on stationery and publicity material or other items relevant to their certificate. The Certification Mark shall always be used in conjunction with the Accedere Shield. Holders of certificates may use the Accedere Shield without Certification Marks if they wish.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Holders of certificates should not use their certification in such a manner that would bring the certification body and/or system into disrepute and lose public trust.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The term ‘publicity material’ shall not include notices, labels, documents, or written announcements affixed to or otherwise appearing on goods or products, unless the goods or products have been manufactured under any product conformity scheme. This restriction shall also apply to primary (e.g. blister packs) packaging, promotional products, and test certificates/certificates of analysis.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Upon suspension or withdrawal of its certification, the use of mark or logo shall be discontinued from all advertising matter, stationery, etc that contains a reference to certification. The use of the logo on all stationery/advertising material shall be amended if the scope of certification is reduced.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Upon reduction in scope, advertising matter shall be amended.
                            </span>
                              </li>

                              </ul>

                              

                           </div>
                           <div className="col">
                               <figure style={{marginLeft:20,height:580}} className="mn-big-div need1 ison-sp1">
                                    <Image src="/ideas.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                      


                       

                        
                        
                    </div>
                </div>
                
                <div  className="container">
                        
                           <div className="col">
                              <h2 style={{fontWeight:"bold"}}> 
                              Other Restrictions on the Use of the Marks:</h2>
                              <ul  className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The certification marks shall not be displayed on vehicles, except in publicity material containing a certification mark as part of a larger advertisement, provided the mark is used in the publicity material following the conditions detailed elsewhere in this information sheet.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            The certification marks shall not be displayed on buildings and flags.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification marks may be displayed on internal walls and doors, and on exhibition stands.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification marks shall not be used in such a way as to suggest that Accedere has certified, or approved, any product or any service supplied by a licensee of a mark, or in any other misleading manner.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification marks shall not be used in such a way as to imply that Accedere accepts responsibility for activities carried out under the scope of certification.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            All quotations for relevant audit may contain a certification mark for which Accedere holds Intellectual Property.
                            </span>
                              </li>

                                <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>Use of Accedere’s Certification Marks for Testing and Calibration is not allowed.
                           
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Any use of a certification mark that might contravene the conditions laid down in this publication shall be referred to the relevant body.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Certification Bodies shall ensure that they audit the use of national Certification Marks by their certificate holders. Conditions for the use of the marks by such certificate holders are given in these rules.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Reproduction of the marks shall be based on master versions supplied at the time of certification, to which certificate holders must add their certificate number.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Do not use its certification in such a manner that would bring the certification into disrepute and lose public trust.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere’s logo shall not be used on visiting cards.
                            </span>
                              </li>

                              </ul>
                              <p style={{marginTop:-40}}>Accedere will take action and deal with incorrect references to certification status or misleading use of certification documents, marks, or audit reports. The action may include requests for correction and corrective action, suspension, withdrawal of certification, publication of the transgression, and if necessary legal action.</p>
                            </div>
                          
                            </div>
<div style={{marginTop:50}} className="container">
<h2 style={{fontWeight:"bold"}}> 
Handling of Client Complaint and Observations:</h2>
                              <p>In case of a complaint/observation against Accedere. The Quality manager analyses the issue to determine if there is a system error or personal error. The root cause and correction, corrective actions are determined. The correction is effected immediately to satisfy the complainant. This may include training/counseling the person involved. In case of a complaint/observation against a certified client, the Quality Manager studies the complaint and discusses it with the auditor (last audit). If the complaint is found genuine and valid i.e, indicates a system failure, the complaint is sent to the client for a response. No confidential reports or information will be sent to complainants without written permission from the client. Adequate time is given to the client for a response. The quality manager shall communicate with the complainant at the end of the process detailing the findings and formally close the complaint. A copy of the correspondence is kept in the client file for records and the same is passed to the auditor during the next audit.</p>
</div>
<div style={{marginTop:50}} className="container">
<h2 style={{fontWeight:"bold"}}> 
Handling of Appeals:</h2>
                              <p>Any company or organization that fails to satisfy an audit or surveillance may appeal against the decision. Where an appeal is received the following procedure will be followed. The MD will appoint the members of the appeals committee under the leadership of the MD who will hear the appeal and determine the outcome. In case, MD is part of the audit/certification team, MD shall decide the investigating officer for the appeals process. In such a scenario MD shall approach Impartiality Committee and/or Accedere team to provide a decision on the appeal. The decision on the appeal shall be taken based on the decision by the Accedere committee and the Impartiality Committee. Results of the appeal will be reported to the board of directors. In case of an appeal made by a client against a decision made by an auditor, Lead auditor, or certification committee, the appeal shall be recorded by Quality Manager and forwarded to Appeal Subcommittee. The appeal subcommittee shall review the appeal, investigate. The appeal subcommittee may also direct any other lead auditor to visit the site and determine the validity of the appeal. The decision taken by the Appeal subcommittee shall be communicated to the client and Quality Manager for necessary action. The case is also discussed during the next MRM and Impartiality Committee meeting. In special cases, the case may be discussed with Impartiality Committee members on a one-to-one basis .</p>
</div>
<div style={{marginTop:50}} className="container">
<h2 style={{fontWeight:"bold"}}> 
Policy on Impartiality:</h2>
                              <p>Accedere’s certification practices focus on providing clients with Cyber Security, Cloud Data Security, Privacy, and Security audits. Accedere wants to be the premier Certification Body (CB) for Process and People providing measurable competitive advantage delivering services with skill and integrity. Accedere is the CB with access to the knowledge and expertise of Accedere’s worldwide network. Our professionals have years of experience in a wide variety of industries. Through this, they have developed an in-depth knowledge of the best practices within your industry and the business processes to be assessed. Accedere has formulated an Impartiality committee for ensuring strict adherence to impartiality norms and for reviewing the norms on a time-to-time basis. Accedere shall strive for complying with its Impartiality norms.Impartiality Reviews shall be carried out once every 12 months. Agenda shall at least cover a review of the norms for impartiality, adherence to policy norms by Accedere, market feedback, and all incident reviews, trends, and disciplinary actions. Review actions shall be absorbed and informed to the concerned.</p>
</div>
<div style={{marginTop:50}} className="container">
<h2 style={{fontWeight:"bold"}}> 
Accedere Impartiality Norms:</h2>
<ul  className="list-unstyled blue-arrow why-divbn mt-4 mb-5">
                            <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            No outsourcing of Audits to Consultancy Organization.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            No Referral Fees to be paid to Consultancy Organization.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Facts-based communication to Clients/ Consultancy organizations.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Adherence to all Accreditation and other Accedere Policies.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not carry out any other conflicting services other than its core business of Audits/Certification.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not employ any professional conflicting with its ethical policies.
                            </span>
                              </li>
                              
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any of its auditors to market the services and conduct the audits for the same client.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any of its auditors to carry out financial transactions with clients/Contractors.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not carry out business with any Contractor inducing pressures to compromise impartiality.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            All employees of Accedere shall disclose any situation impairing the business ethics.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any of the auditors to carry out audits for the client at least for 2 years from the date of relinquishment from their services.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any auditor to compromise on the audit timing as required as per the accreditation/ Accedere norms.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any auditor to conduct the audit for the client for which it has not been approved.
                            </span>
                              </li>
                              
                                <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall maintain transparency about all information.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            No auditor shall divulge any confidential information of the client to any third party without written consent from the client.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            No auditor shall carry any client information with them after the usage period. All client information shall be returned after usage.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            No auditor shall carry any client information with them after the usage period. All client information shall be returned after usage.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Any unethical practice observed should be notified to the management at the earliest.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any of its auditors to accept any gifts from clients/Contractors of value greater than INR 500.
                            </span>
                              </li>
                              <li> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Accedere shall not allow any auditor to conduct an audit for the organization where any of its family members / close relatives are involved in the decision-making position.
                            </span>
                              </li>
                              <li style={{marginBottom:30}}> 
                            <span className="conmo-icon">
                            <FaAngleRight/>
                            </span>
                            <span>
                            Disciplinary actions for non-adhering to impartiality policies shall be taken by the impartiality committee.
                            </span>
                              </li>
                              
                              </ul>

</div>





            
          </div>
          <Footer/>
        </>
    );
}
export default isoprocess;