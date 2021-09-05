
function OTPModal(){
    const handleClick = (e) => {
        e.target.select();
      };
    
      const handleCancel = (e) => {
        document.getElementsByClassName("checkmark")[0].style.display="none";
        document.getElementById('ist').value=document.getElementById('sec').value=document.getElementById('third').value=document.getElementById('fourth').value="";
        document.getElementsByClassName("overlay")[0].style.display="none";
      };
    
    function clickEvent(first,last){
        document.getElementsByClassName("checkmark")[0].style.display="none";
        
        if(first.value.length){
            document.getElementById(last).focus();
        }
    }
    function checkOTP(){
        document.getElementsByClassName("checkmark")[0].style.display="none";
        let inp = document.getElementById('ist').value + document.getElementById('sec').value + document.getElementById('third').value + document.getElementById('fourth').value;
        if(inp==="0000"){
            console.log("verified");
            document.getElementsByClassName("checkmark")[0].style.display="block";
        }
        else{
            document.getElementById('ist').style.backgroundColor=document.getElementById('sec').style.backgroundColor=document.getElementById('third').style.backgroundColor=document.getElementById('fourth').style.backgroundColor="#b77373";
        }
    }
    return(
        <div className="overlay">
            <h2>Enter OTP</h2>
            <div className="otp">
                <input type="text" autoComplete="new-password" className="form-control" onClick={handleClick} maxLength="1" id='ist' onChange={(e) => clickEvent(e.currentTarget,'sec')}></input>
                <input type="text" autoComplete="new-password" className="form-control" onClick={handleClick} maxLength="1" id="sec"  onChange={(e) => clickEvent(e.currentTarget,'third')}></input>
                <input type="text" autoComplete="new-password" className="form-control" onClick={handleClick} maxLength="1" id="third"  onChange={(e) => clickEvent(e.currentTarget,'fourth')}></input>
                <input type="text" autoComplete="new-password" className="form-control" onClick={handleClick} maxLength="1" id="fourth" onChange={(e) => checkOTP()}></input>
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
            </div>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
           
        </div>
    );

}
export default OTPModal;