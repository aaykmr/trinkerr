function OTPModal(props, verify) {
  const handleClick = (e) => {
    e.target.select();
  };

  const handleCancel = (e) => {
    let forms = document.getElementsByClassName("form-control");
    for (let i = 0; i < 4; i++) {
      forms[i].style.backgroundColor = "#ffffff";
    }
    document.getElementsByClassName("checkmark")[0].style.display = "none";
    document.getElementById("ist").value =
      document.getElementById("sec").value =
      document.getElementById("third").value =
      document.getElementById("fourth").value =
        "";
    document.getElementsByClassName("overlay")[0].style.display = "none";
  };

  function clickEvent(first, last) {
    let forms = document.getElementsByClassName("form-control");
    for (let i = 0; i < 4; i++) {
      forms[i].style.backgroundColor = "#ffffff";
    }
    document.getElementsByClassName("checkmark")[0].style.display = "none";

    if (first.value.length) {
      document.getElementById(last).focus();
    }
  }
  function checkOTP() {
    document.getElementsByClassName("checkmark")[0].style.display = "none";
    let inp =
      document.getElementById("ist").value +
      document.getElementById("sec").value +
      document.getElementById("third").value +
      document.getElementById("fourth").value;
    let forms = document.getElementsByClassName("form-control");
    if (inp === "0000") {
      console.log("verified");
      for (let i = 0; i < 4; i++) {
        forms[i].style.backgroundColor = "#488449";
      }
      props.verify(true);
    } else {
      for (let i = 0; i < 4; i++) {
        forms[i].style.backgroundColor = "#b77373";
      }
    }
  }
  return (
    <div className="overlay">
      <div id="enterotp">Enter OTP</div>
      <div className="otp">
        <input
          type="text"
          autoComplete="new-password"
          className="form-control"
          onClick={handleClick}
          maxLength="1"
          id="ist"
          onChange={(e) => clickEvent(e.currentTarget, "sec")}
        ></input>
        <input
          type="text"
          autoComplete="new-password"
          className="form-control"
          onClick={handleClick}
          maxLength="1"
          id="sec"
          onChange={(e) => clickEvent(e.currentTarget, "third")}
        ></input>
        <input
          type="text"
          autoComplete="new-password"
          className="form-control"
          onClick={handleClick}
          maxLength="1"
          id="third"
          onChange={(e) => clickEvent(e.currentTarget, "fourth")}
        ></input>
        <input
          type="text"
          autoComplete="new-password"
          className="form-control"
          onClick={handleClick}
          maxLength="1"
          id="fourth"
          onChange={(e) => checkOTP()}
        ></input>
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>
      <button className="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
export default OTPModal;
