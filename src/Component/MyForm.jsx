import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyForm() {
  const [visiblePwd, setVisiblePwd] = useState(false);
  const [visiblePwdII, setVisiblePwdII] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [repwd, setRePwd] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn((e) => !e);
  };

  const togglePwd = () => {
    setVisiblePwd((pre) => !pre);
  };
  const togglePwdII = () => {
    setVisiblePwdII((pre) => !pre);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name == "") {
      toast.error("The Name field is required");
    } else if (email == "") {
      toast.error("The Email field is required");
    } else if (pwd == "") {
      toast.error("The Password field is required");
    } else if (repwd == "") {
      toast.error("The Confirm Password field is required");
    } else if (pwd != repwd) {
      toast.warn("Password mixmatch");
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("pwd", pwd);
      localStorage.setItem("auth", email);
      toast.success("User Created");
      setTimeout(() => {
        window.location.href = "dashboard";
      }, 2000);
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (email == "" || pwd == "") {
      toast.error("All Fields are required");
    } else {
      const local_email = localStorage.getItem("email");
      const local_pwd = localStorage.getItem("pwd");
      if (local_email !== email) {
        toast.error("User does not exist");
      } else if (local_pwd !== pwd) {
        toast.error("Invalid password or user does not exist");
      } else {
        localStorage.setItem("auth", email);
        location.href = "/dashboard";
      }
    }
  };
  return (
    <>
      <div className="myForm">
        <form>
          <h1>
            {isLoggedIn ? "Login Form with React" : "Register Form with React"}
          </h1>

          {!isLoggedIn && (
            <>
              {" "}
              <input
                type="text"
                name="user"
                id=""
                placeholder="Enter your Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
            </>
          )}
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your correct Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <div className="ic">
            <input
              type={visiblePwd ? "text" : "password"}
              name="pwd"
              id=""
              placeholder="Enter your password"
              onChange={(e) => setPwd(e.target.value)}
            />
            <div className="icc">
              {visiblePwd ? (
                <FaEyeSlash onClick={togglePwd} />
              ) : (
                <FaEye onClick={togglePwd} />
              )}
            </div>
          </div>
          <br />
          <br />
          {!isLoggedIn && (
            <>
              {" "}
              <div className="ic">
                <input
                  type={visiblePwdII ? "text" : "password"}
                  name="pwd"
                  id=""
                  onChange={(e) => setRePwd(e.target.value)}
                  // className="ic"
                  placeholder="Confirm your password"
                />
                <div className="icc">
                  {visiblePwdII ? (
                    <FaEyeSlash onClick={togglePwdII} />
                  ) : (
                    <FaEye onClick={togglePwdII} />
                  )}
                </div>
              </div>
            </>
          )}

          {isLoggedIn ? (
            <small>
              Dont have an account?{" "}
              <a href="#" onClick={toggleAuth}>
                Sign-up Here
              </a>
            </small>
          ) : (
            <small>
              Already have an account?{" "}
              <span>
                <a href="#" onClick={toggleAuth}>
                  Login Here
                </a>
              </span>
            </small>
          )}

          {isLoggedIn ? (
            <button className="btn" onClick={loginHandler}>
              Login
            </button>
          ) : (
            <button className="btn" onClick={submitHandler}>
              Sign Up
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default MyForm;
