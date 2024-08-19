// import React, { useState } from 'react';
// import './LoginSign.css';
// import email from './email.png';
// import passsword from './password.png';
// import person from './person.png';
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const LoginSignup = () => {

//   const [values, setValue] = useState({
//     username: "",
//     email: "",
//     pass: "",
//   });

//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const [action, setAction] = useState("Sign Up");

//   const submitSignData=()=>{
//     axios.post("http://localhost:4200/signup",{name:values['username'],email:values['email'],pass:values['pass']}).then(response=>{
//       var d=response.data;
//       if(d.msg===0){
//         alert("user already exists");
//         window.location.reload();
//       }
//       else{
//         alert("Welcome aboard!!");
//         navigate("/");
//         document.title=d.msg2;
//       }
//     })
//   }
//   const submitLoginData=()=>{
//     axios.post("http://localhost:4200/login",{email:values['email'],pass:values['pass']}).then(response=>{
//       var d=response.data;
//       if(d.ok===0){
//         alert(d.msg);
//         // window.location.reload();
//       }
//       else{
//         alert(d.msg);
//         navigate('/');
//         document.title=d.msg2;
//       }
//     })
//   }

//   const handleSubmission = () => {
//     if (!values.email || !values.pass || !values.email.includes("@") || !values.email.includes(".") && values.pass.length < 5) {
//       setlog(true);
//       setsign(true);
//       // setError("Fill all Fields Correctly");
//       return;
//     } else {
//       setError("");
//     }
//   }
//   const [log, setlog] = useState(true);
//   const tologin = () => {
//     setAction("Login");
//     setlog(false);
//     setsign(true);
//   }

//   const [sign, setsign] = useState(true);
//   const tosign = () => {
//     setAction("Sign Up");
//     setsign(false);
//     setlog(true);
//   }

//   const callSignSub=()=>{
//     handleSubmission();
//     submitSignData();
//   }
//   const callLoginSub=()=>{
//     handleSubmission();
//     submitLoginData();
//   }

//   return (
//     <div className='co'>
//       <div className="h">
//         <div className="text">{action}</div>
//         <div className="Underline"></div>
//       </div>
//       <div className='inputs'>
//         {action === "Login" ? <div></div> : <div className='input'>
//           <img src={person} alt='' />
//           <input type='text' placeholder='Name' onChange={(event) =>
//             setValue((prev) => ({ ...prev, username: event.target.value }))
//           }
//             required />
//         </div>}

//         <div className='input'>
//           <img src={email} alt='' />
//           <input type='email' placeholder='Email' onChange={(event) =>
//             setValue((prev) => ({ ...prev, email: event.target.value }))
//           }
//             required />
//         </div>
//         <div className='input'>
//           <img src={passsword} alt='' />
//           <input type='password' placeholder='Password' onChange={(event) =>
//             setValue((prev) => ({ ...prev, pass: event.target.value }))
//           }
//             required />
//         </div>
//         <div>{error}</div>
//       </div>
//       {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
//       <div className='submit-container'>
//         {/* <button className={action==="Login"?"submit gray":"submit"}  onClick={handleSubmission}>Sign Up</button> */}
//         {/* <button className={action==="Sign Up"?"submit gray":"submit"}onClick={tologin}>Login</button> */}
//         {
//           !sign && (<button className={action === "Login" ? "submit gray" : "submit"} onClick={callSignSub}>Sign Up</button>)
//         }
//         {
//           sign && (<button className={action === "Login" ? "submit gray" : "submit"} onClick={tosign}>Sign Up</button>)
//         }
//         {
//           !log && (<button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={callLoginSub}>Login</button>)
//         }
//         {
//           log && (<button className={action === "Sign Up" ? "submit gray" : "submit"} onClick={tologin}>Login</button>)
//         }


//       </div>
//     </div>
//   );
// };

// export default LoginSignup;
// // onClick={()=>setAction("Sign Up")}
import React, { useState, useEffect } from 'react';
import './LoginSign.css';
import email from './email.png';
import password from './password.png';
import person from './person.png';
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
  const [values, setValue] = useState({
    username: "",
    email: "",
    pass: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [action, setAction] = useState("Sign Up");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);  // Control for Sign Up/Login
  const [isLogin, setIsLogin] = useState(false);   // Control for Login

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
    else{
      document.title = '';
    }
  }, []);

  const submitSignData = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === values.email);
  
    if (userExists) {
      alert("User already exists");
      window.location.reload();
    } else {
      users.push(values);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Welcome aboard!!");
      // Switch to login form after signup
      navigate('/Home');
      setIsSignUp(false);
      setIsLogin(true);
      setValue({ username: "", email: "", pass: "" }); // Reset form values
    }
  };
  
  
  
  const submitLoginData = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === values.email && user.pass === values.pass);

    if (user) {
      alert("Login successful");
      navigate('/');
      document.title = user.username;
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      alert("Invalid credentials");
    }
  };

  const handleSubmission = () => {
    if (!values.email || !values.pass || !values.email.includes("@") || !values.email.includes(".") || values.pass.length < 5) {
      setError("Fill all fields correctly");
      return;
    } else {
      setError("");
    }
  };

  const callSignSub = () => {
    handleSubmission();
    if (!error) {
      submitSignData();
      setValue({ username: "", email: "", pass: "" }); // Reset form values
    }
  };
  
  const callLoginSub = () => {
    handleSubmission();
    if (!error) {
      submitLoginData();
      setValue({ username: "", email: "", pass: "" }); // Reset form values
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    document.title = '';
    navigate("/login");
  };

  const toggleToSignUp = () => {
    setAction("Sign Up");
    setIsSignUp(true);
    setIsLogin(false);
    setValue({ username: "", email: "", pass: "" }); 
    setError(""); 
  };

  const toggleToLogin = () => {
    setAction("Login");
    setIsSignUp(false);
    setIsLogin(true);
    setValue({ username: "", email: "", pass: "" }); 
    setError(""); 
  };
  

  return (
    <div className='co'>
      <div className="h">
        <div className="text">{action}</div>
        <div className="Underline"></div>
      </div>
      <div className='inputs'>
        {isLogin ? null : (
          <div className='input'>
            <img src={person} alt='' />
            <input type='text' placeholder='Name' onChange={(event) =>
              setValue((prev) => ({ ...prev, username: event.target.value }))
            }
              required />
          </div>
        )}

        <div className='input'>
          <img src={email} alt='' />
          <input type='email' placeholder='Email' onChange={(event) =>
            setValue((prev) => ({ ...prev, email: event.target.value }))
          }
            required />
        </div>
        <div className='input'>
          <img src={password} alt='' />
          <input type='password' placeholder='Password' onChange={(event) =>
            setValue((prev) => ({ ...prev, pass: event.target.value }))
          }
            required />
        </div>
        <div className='error-red'>{error}</div>
      </div>
      {isSignUp ? null : <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
      <div className='submit-container'>
        {
          isSignUp && (<button className="submit" onClick={callSignSub}>Sign Up</button>)
        }
        {
          isLogin && (<button className="submit" onClick={callLoginSub}>Login</button>)
        }
        {
          isSignUp && (<button className="submit gray" onClick={toggleToLogin}>Login</button>)
        }
        {
          isLogin && (<button className="submit gray" onClick={toggleToSignUp}>Sign Up</button>)
        }
      </div>
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default LoginSignup;
