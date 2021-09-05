
function Signin(){
    const handleClick = (e) => {
        document.getElementsByClassName("overlay")[0].style.display="flex";
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