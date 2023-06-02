import "./styles.css";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  return (
    <div className="card-container">
      <img
        className="bgimg"
        src="https://picsum.photos/2000/300?grayscale"
        alt="Cinque Terre"
      />
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
          alt="amazon_img"
          width="90"
          height="25"
        />
        <hr />
        <h1>Login</h1>
        <img
          src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.1.1397887193.1685728761&semt=sph"
          alt="Log_img"
          width="250"
          height="150"
        />
        <div className="form">
          <div className="input-box underline">
            <input type="text" placeholder="Email" required />
            <div className="underline"></div>
            <span class="error">
              <i class="bx bxs-minus-circle" style={{ color: "#ff3838" }}>
                The email field is required{" "}
              </i>
            </span>
          </div>
          <div className="input-box underline">
            <input type="text" placeholder="Password" required />
            <div className="underline"></div>
            <span class="error">
              <i class="bx bxs-minus-circle" style={{ color: "#ff3838" }}>
                The password field is required{" "}
              </i>
            </span>
          </div>

          <div className="input-box button">
            <input type="submit" name="" value="Sign In" />
          </div>

          <span className="option0">Forgot Password?</span>
          <span className="option1">New User? Sign Up</span>
          <div className="option2">or</div>
          <div className="google">
            <a href="#">
              <FaGoogle className="icon1" />
              CONTINUE WITH GOOGLE
            </a>
          </div>
          <div className="facebook">
            <a href="#">
              <FaFacebookF className="icon2" />
              CONTINUE WITH FACEBOOK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
