
function Signin(props){
    const handleClick = (e) => {
        if(document.getElementById("phone1").value.length<10||document.getElementById("phone1").value.length>11){
            document.getElementById("phone1").style.backgroundColor="#b77373";
        }
        else{
            props.setName(document.getElementById("phone1").value);
            document.getElementsByClassName("overlay")[0].style.display="flex";
        }
        setTimeout(function(){
            document.getElementById("phone1").style.backgroundColor="#ffffff";
        },1000)
    };

    return(
        <div className="Input-modal">
            <span className="head">Sign in</span>
            <div className="inputBox">
                <input type="number" autoComplete="new-password" className="input" id="phone1" placeholder="Phone Number"></input>
                <button className="otpButton" onClick={handleClick}>Get OTP</button>
            </div>
        </div>
    );
}

export default Signin;