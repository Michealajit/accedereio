


const Download= () => {

    function downloadFile(filePath) {
      if(process.browser) {
  
        var link = document.createElement('a');
        link.href = filePath;
        link.target = "_blank"
        link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
        link.click();
      }
    }
    
    downloadFile("/Achieving CSA STAR Level 2.pdf");
  
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"whitesmoke"
      }}>
       <h1>Thank You For Downloading.....</h1>
        <div>
            <div className="comon-padf d-flex align-items-center">
              <figure className="m-0">
              <img src="/document.svg" width="90" height="90" border="0" align="absmiddle"/>
              </figure>
              <span style={{marginLeft:10}}> Achieving CSA STAR Level 2 </span>
           </div>
        </div>
       
      </div>
    );
  };
  
  export default Download;