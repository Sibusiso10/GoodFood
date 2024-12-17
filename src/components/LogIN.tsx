import "../styles/LogIn.css";
import { Link } from "react-router-dom";

const LogIN = () => {
  return (
    <>
      <div className="centerLogIn">
        <div className="logIn">
          <div className="logInTittle">LOGIN</div>
          <div className="logInFields">
            <form action="">
              <div>
                <p>EMAIL</p>
                <input type="text" />
              </div>
              <div>
                <p>PASSWORD</p>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className="loginBtn">
            <button>LOGIN</button>
          </div>

          <div className="linkToSignIn">
            <p>If you don't have an account</p>
            <div className="btn">
              <Link to="/signin">
                <button>SIGN IN</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIN;
