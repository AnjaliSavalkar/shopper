// import React from "react";
// import { useState } from "react";
// import "./CSS/LoginSignUp.css";
// const LoginSignUp = () => {
//   const [state, setState] = useState("Login");
//   const [formData,setFormData]=useState({
//     username:"",
//     password:"",
//     email:""
//   })
//   const changeHandler=(e)=>
//   {
// setFormData({...formData,[e.target.name]:e.target.value})
//   }
// const login=async()=>
// {

//   console.log("login function executed",formData)
// }
// const signup=async()=>
//   {
//     console.log("signup function executed",formData)
//   }
//   return (
//     <div className="loginsignup">
//       <div className="loginsighup-container">
//         <h1>{state}</h1>
//         <div className="loginsignup-fileds">
//           {state === "Sign Up" ? (
//             <input name="usename" type="text" placeholder="your name" value={formData.username}  onChange={changeHandler}/>
//           ) : (
//             <></>
//           )}
//           <input name="email" value={formData.email} onChange={changeHandler}  type="email" placeholder="email address" />
//           <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="your password" />
//           <div>
//             <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
//             {state === "Sign Up" ? (
//               <p className="loginsignup-login">
//                 already have an account{" "}
//                 <span onClick={() => setState("Login")}>Login here</span>
//               </p>
//             ) : (
//               <p className="loginsignup-login">
//                 create an account{" "}
//                 <span
//                   onClick={() => {
//                     setState("Sign Up");
//                   }}
//                 >
//                   Click here
//                 </span>
//               </p>
//             )}
//             <div className="loginsignup-agree">
//               <input type="checkbox" name="" id="" />
//               <p>
//                 by continueing , i aggree to use teh terms of use and policy.{" "}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignUp;

import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          Accept: "application/json", // ✅ fixed this
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Signup response:", responseData);

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");

        // maybe redirect or reset form
      } else {
        alert("Signup failed: " + responseData.errors);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup error. Please try again.");
    }
  };

  const signup = async () => {
    console.log("Signup function executed", formData);

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json", // ✅ fixed this
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Signup response:", responseData);

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        window.location.replace("/");

        // maybe redirect or reset form
      } else {
        alert("Signup failed: " + responseData.errors);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup error. Please try again.");
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsighup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fileds">
          {state === "Sign Up" && (
            <input
              name="username"
              type="text"
              placeholder="Your name"
              value={formData.username}
              onChange={changeHandler}
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Your password"
            value={formData.password}
            onChange={changeHandler}
          />

          <button onClick={() => (state === "Login" ? login() : signup())}>
            Continue
          </button>

          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span onClick={() => setState("Login")}>Login here</span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account{" "}
              <span onClick={() => setState("Sign Up")}>Click here</span>
            </p>
          )}

          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>
              By continuing, I agree to the Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
