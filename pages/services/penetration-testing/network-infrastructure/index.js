import Image from "next/image";
import {FaAngleRight } from "react-icons/fa";
import Navbar from "../../../../componets/Navbar";
import Footer from "../../../../componets/Footer";
import Head from "next/head";


function gdrpage(){
    return(
        <>
       
        <Head>
            <title>Accedere -  GDPR Assessments</title>
            <meta name="twitter:title" content="GDPR Compliance Risk Assessment | Accedere &amp; Company"/>
          
        </Head>
          <Navbar/>
          <div className='contact-page-1 sub-page-body float-start w-100'>
               
                <div className="top-seco-sec comon-top-space">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 g-lg-5 align-items-center">
                           <div className="col">
                              <h2 className="comon-head-main text-white"> 
                              Network and Infrastructure Security </h2>
                              <p style={{marginBottom:-15}} className="text-white mt-4"> Network VAPT is a process of conducting security audit by which the security of a network is evaluated. It is one of the most effective ways which ensures that the network is secure and cannot be hacked by malicious hackers or is prone to cyber-attacks. It helps to protect all the critical and confidential data and information which is stored and transferred over any network. 
                              </p>
                              <p  style={{marginBottom:-16}}  className="text-white mt-4">
                                Sometimes there are simulated attacks done on the networks to help test the networks security and detect potential cyber-attacks which can be done by hackers.   
                                </p>

                                  <p className="text-white mt-4">Accedere's team can perform onsite as well as offsite VAPT assessments with the best in class tools to provide you a visibility in to your environment.  </p>
                            

                           </div>
                           <div className="col">
                               <figure style={{height:430}} className="mn-big-div need1">
                                    <Image src="/img-one1.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div  className="para-grap-div">
                    <div style={{marginBottom:50}} className="container">
                        
                        <div  className="row row-cols-1 row-cols-lg-2 g-lg-5 mt-0">
                        <div  className="col">
                                 <figure style={{marginBottom:-400}} className="mn-big-div4">
                                        <Image src="/Network Security.svg" alt="about"
                                        width={680}
                                        height={650}
                                        layout="responsive"
                                        />
                                </figure>
                            </div>
                            <div   className="col">
                                <h2 className="comon-head-main "> Importance of Network Security in Open Internet   </h2>
                                <ul className="list-unstyled blue-arrow mt-4">
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      With the WFH or Hybrid work environment these days, the importance of Network security has not been reduced but rather increased due the loss of perimeter security. These days there is no LAN and entity’s Firewall based controls cannot be applied to majority of the workforce.  
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Network security is important because it keeps sensitive data safe from cyber-attacks and  keeps the systems in the network is available to the users.  
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Network VAPT involves the use of a variety of software and hardware tools that are run on a specific LAN or a network to find the exiting vulnerabilities and patch status of systems and also to discover new systems exiting in the network.  
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Network VAPT is critical because it can prevent hackers from gaining access to your systems  and the valuable data. Ransomware can be a typical example of compromise of Network security. 
                                      </span>
                                   </li>
                                   <li>
                                      <span className="me-3">
                                        <FaAngleRight/>
                                      </span>
                                      <span>
                                      Our Network VAPT covers these 9 areas of Network Security. 
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
export default gdrpage;