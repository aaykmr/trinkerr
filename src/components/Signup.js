
function Signup(){
    return(
        <div className="Input-modal">
             <span className="head">Sign up</span>
             <div className="inputBox">
                <input type="text" autoComplete="new-password" id="name" className="input" placeholder="Name"></input>
                <input type="number" autoComplete="new-password" id="phone2" className="input"  placeholder="Phone Number"></input>
                <button className="otpButton">Get OTP</button>
             </div>
        </div>
    );
}

export default Signup;