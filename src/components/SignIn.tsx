import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <>
      <div className="centerSingIn">
        <div className="singIn">
          <div className="signInTittle">SIGN IN</div>
          <div className="signInFields">
            <form action="">
              <div>
                <p>NAME</p>
                <input type="text" />
              </div>
              <div>
                <p>SURNAME</p>
                <input type="text" />
              </div>
              <div>
                <p>EMAIL</p>
                <input type="text" />
              </div>
              <div>
                <p>PASSWORD</p>
                <input type="text" />
              </div>
              <div>
                <p>CONFIRM PASSWORD</p>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="signInBtn">
            <button>SIGN IN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
