import Image from "next/image";
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
                              Application Security </h2>
                              <p className="text-white mt-4"> With the growth in number of cyber-attacks and hacking, firms today are adopting VAPT which stands for Vulnerability Assessment & Penetration Testing.  
                              </p>
                              <p className="text-white mt-4">
                              VAPT is the security testing of IT systems, applications, servers, computers, mobiles, networks, software and other such related operating applications and systems in order to identify vulnerabilities which are known and unknown.  
                              </p>

                           </div>
                           <div className="col">
                               <figure className="mn-big-div need1">
                                    <Image src="/designtools.svg" alt="about"
                                    layout="fill"
                                    />
                               </figure>
                           </div>
                        </div>


                       

                        
                        
                    </div>
                </div>


                

                <div className="para-grap-div">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-1 g-lg-5 flex-column-reverse flex-lg-row">
                            
                           
                            <div className="col">
            
                                <p className="mt-0">
                                A vulnerability assessment is a process which helps to scan and identify vulnerabilities in your applications like your computers, desktops, systems etc. and then help to correct those weaknesses in the information security process of those applications. 
                                </p>


                                <p> A pen test is conducted in a way where an authorized attack is made on the application like computer, desktop, system etc. to evaluate how secure the system is and what can be done to make the application resistant to such actual attacks. Such tests are performed with consent of the owners so that actual attacks from hackers and attackers can be prevented.</p>

                                <p> Web application VAPT is a process which helps to evaluate the security of any website and find vulnerabilities of the website or web application. Such tests are performed to identify weaknesses of the website before it can be exploited by malicious hackers.  </p>

                                 <p> Mobile application VAPT is a process which helps to evaluate the security of any mobile application and find vulnerabilities if any. Such tests are performed to ensure that the mobile application is not leaking any critical or confidential data and information of 3rd parties. Such tests include Android pen test, iOS pen test and tests for Progressive Web Applications </p> 

                                  <p> With the above-mentioned privacy mandates and other new expected mandates and stringent 
                                  compliance requirements, organizations are feeling more challenging times ahead. The sheer number 
                                  of privacy & GDPR fines being levied has created enough scare amongst 
                                  the Board of Directors of large organizations.</p>

                                 
                                  <p className="mb-5"> Accedere can undertake the VAPT for Applications remotely from its base in India and can give competitively priced services. </p>

                                
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