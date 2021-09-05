
function Signup(props){
    const handleClick = (e) => {
        if(document.getElementById("name").value.length<=0){
            document.getElementById("name").style.backgroundColor="#b77373";
            
        }
        else if(document.getElementById("phone2").value.length<10||document.getElementById("phone1").value.length>11){
            document.getElementById("phone2").style.backgroundColor="#b77373";
        }
        else{
            props.setName(document.getElementById("name").value);
            document.getElementsByClassName("overlay")[0].style.display="flex";
        }
        setTimeout(function(){
            document.getElementById("name").style.backgroundColor="#ffffff";
            document.getElementById("phone2").style.backgroundColor="#ffffff";
        },1000)
    };
    return(
        <div className="Input-modal">
             <span className="head">Sign up</span>
             <div className="inputBox">
                <input type="text" autoComplete="none" id="name" className="input" placeholder="Name"></input>
                <input type="number" autoComplete="none" id="phone2" className="input"  placeholder="Phone Number"></input>
                <button className="otpButton" onClick={handleClick}>Get OTP</button>
             </div>
        </div>
    );
}

export default Signup;