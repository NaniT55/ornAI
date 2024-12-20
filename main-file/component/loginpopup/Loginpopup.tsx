// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// interface AuthPopupProps {
//   closePopup: () => void;
// }

// const AuthPopup: React.FC<AuthPopupProps> = ({ closePopup }) => {
//   const [isLogin, setIsLogin] = useState(true);

//   const router = useRouter();

//   // Yup validation schema for login and register
//   const loginSchema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const registerSchema = yup.object().shape({
//     fullName: yup.string().required("Full name is required"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(isLogin ? loginSchema : registerSchema),
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleLoginSubmit = async (data: any) => {
//     // alert("Login submitted: " + JSON.stringify(data));
//     try {
//       // const payload = JSON.stringify();
//       // console.log(payload);
//       const response = await axios.post("http://localhost:8080/auth/login", {
//         email: data.email,
//         password: data.password,
//       });
//       // console.log(response);
//       if (response.status === 200) {
//         localStorage.setItem("jwtToken", response.data.token);import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import * as yup from "yup";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// interface AuthPopupProps {
//   closePopup: () => void;
// }

// const AuthPopup: React.FC<AuthPopupProps> = ({ closePopup }) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   // Yup validation schema for login and register
//   const loginSchema = yup.object().shape({
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const registerSchema = yup.object().shape({
//     fullName: yup.string().required("Full name is required"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: yup
//       .string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(isLogin ? loginSchema : registerSchema),
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleLoginSubmit = async (data: any) => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8080/auth/login", {
//         email: data.email,
//         password: data.password,
//       });
//       if (response.status === 200) {
//         localStorage.setItem("jwtToken", response.data.token);
//         router.push("/home-2");
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Invalid login Credentials.", {
//         position: "top-right",
//       });
//     } finally {
//       setLoading(false);
//     }
//     closePopup();
//   };

//   const handleRegisterSubmit = async (data: any) => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8080/auth/signup", {
//         fullName: data.fullName,
//         email: data.email,
//         password: data.password,
//       });
//       if (response.status === 201) {
//         toast.success("form Submitted successfully.", {
//           position: "top-right",
//         });
//         setIsLogin(true); // Switch to login form after successful registration
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("An error occurred during registration. Please try again.", {
//         position: "top-right",
//       });
//     } finally {
//       setLoading(false);
//     }
//     closePopup();
//   };

//   return (
//     <div className="auth-popup">
//       <div className="popup-overlay" onClick={closePopup}></div>
//       <div className="popup-content">
//         <button className="close-popup-btn" onClick={closePopup}>
//           ✖
//         </button>
//         <h2>
//           {isLogin
//             ? "Log in to continue your learning journey"
//             : "Register and start learning"}
//         </h2>

//         {/* Login Form */}
//         {isLogin ? (
//           <form onSubmit={handleSubmit(handleLoginSubmit)}>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 placeholder="Enter your email"
//                 className={errors.email ? "input-error" : ""}
//               />
//               {errors.email && (
//                 <p className="error-message">{errors.email.message}</p>
//               )}
//             </
//         router.push("/home-2");
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Invalid login Credentials.", {
//         position: "top-right",
//       });
//     }
//     closePopup();
//   };

//   const handleRegisterSubmit = async (data: any) => {
//     try {
//       // Make an API call to the registration endpoint
//       const response = await axios.post("http://localhost:8080/auth/signup", {
//         fullName: data.fullName,
//         email: data.email,
//         password: data.password,
//       });

//       // Check the response status and handle accordingly
//       if (response.status === 201) {
//         toast.success("form Submitted successfully.", {
//           position: "top-right",
//         });
//         setIsLogin(true); // Switch to login form after successful registration
//       }
//     } catch (err) {
//       console.log(err);
//       // alert("An error occurred during registration. Please try again.");
//       toast.error("An error occurred during registration. Please try again.", {
//         position: "top-right",
//       });
//     }
//     closePopup();
//   };

//   return (
//     <div className="auth-popup">
//       <div className="popup-overlay" onClick={closePopup}></div>
//       <div className="popup-content">
//         <button className="close-popup-btn" onClick={closePopup}>
//           ✖
//         </button>
//         <h2>
//           {isLogin
//             ? "Log in to continue your learning journey"
//             : "Register and start learning"}
//         </h2>

//         {/* Login Form */}
//         {isLogin ? (
//           <form onSubmit={handleSubmit(handleLoginSubmit)}>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 placeholder="Enter your email"
//                 className={errors.email ? "input-error" : ""}
//               />
//               {errors.email && (
//                 <p className="error-message">{errors.email.message}</p>
//               )}
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 {...register("password")}
//                 placeholder="Enter your password"
//                 className={errors.password ? "input-error" : ""}
//               />
//               {errors.password && (
//                 <p className="error-message">{errors.password.message}</p>
//               )}
//             </div>
//             <button type="submit" className="submit-btn">
//               Login
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleSubmit(handleRegisterSubmit)}>
//             <div className="form-group">
//               <label>Full Name:</label>
//               <input
//                 type="text"
//                 {...register("fullName")}
//                 placeholder="Enter your full name"
//                 className={errors.fullName ? "input-error" : ""}
//               />
//               {errors.fullName && (
//                 <p className="error-message">{errors.fullName.message}</p>
//               )}
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <input
//                 type="email"
//                 {...register("email")}
//                 placeholder="Enter your email"
//                 className={errors.email ? "input-error" : ""}
//               />
//               {errors.email && (
//                 <p className="error-message">{errors.email.message}</p>
//               )}
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <input
//                 type="password"
//                 {...register("password")}
//                 placeholder="Create a password"
//                 className={errors.password ? "input-error" : ""}
//               />
//               {errors.password && (
//                 <p className="error-message">{errors.password.message}</p>
//               )}
//             </div>
//             <button type="submit" className="submit-btn">
//               Register
//             </button>
//           </form>
//         )}

//         <p className="toggle-text">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span onClick={toggleForm} className="toggle-link">
//             {isLogin ? "Register" : "Login"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPopup;






import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface AuthPopupProps {
  closePopup: () => void;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Validation schemas
  const loginSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const registerSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLoginSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/login", data);
      if (response.status === 200) {
        localStorage.setItem("jwtToken", response.data.token);
        router.push("/home-2");
        toast.success("Logged in successfully!", { position: "top-right" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Invalid login credentials.", { position: "top-right" });
    } finally {
      setLoading(false);
      closePopup();
    }
  };

  const handleRegisterSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", data);
      if (response.status === 201) {
        toast.success("Registration successful. Please log in.", { position: "top-right" });
        setIsLogin(true);
      }
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.", { position: "top-right" });
    } finally {
      setLoading(false);
      closePopup();
    }
  };

  return (
    <div className="auth-popup">
      <div className="popup-overlay" onClick={closePopup}></div>
      <div className="popup-content">
        <button className="close-popup-btn" onClick={closePopup}>
          ✖
        </button>
        <h2>
          {isLogin ? "Log in to continue your learning journey" : "Register and start learning"}
        </h2>

        <form onSubmit={handleSubmit(isLogin ? handleLoginSubmit : handleRegisterSubmit)}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                {...register("fullName")}
                placeholder="Enter your full name"
                className={errors.fullName ? "input-error" : ""}
              />
              {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
            </div>
          )}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              {...register("password")}
              placeholder={isLogin ? "Enter your password" : "Create a password"}
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Submitting..." : isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;
