import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface AuthPopupProps {
  closePopup: () => void;
}

const AuthPopup: React.FC<AuthPopupProps> = ({ closePopup }) => {
  const [isLogin, setIsLogin] = useState(true);

  // Yup validation schema for login and register
  const loginSchema = Yup.object().shape({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const registerSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(isLogin ? loginSchema : registerSchema),
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (data: any) => {
    alert("Login submitted: " + JSON.stringify(data));
    closePopup();
  };

  const handleRegisterSubmit = (data: any) => {
    alert("Register submitted: " + JSON.stringify(data));
    closePopup();
  };

  return (
    <div className="auth-popup">
      <div className="popup-overlay" onClick={closePopup}></div>
      <div className="popup-content">
        <button className="close-popup-btn" onClick={closePopup}>
          ✖
        </button>
        <h2>{isLogin ? "Log in to continue your learning journey" : "Register and start learning"}</h2>

        {/* Login Form */}
        {isLogin ? (
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
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
                placeholder="Enter your password"
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <button type="submit" className="submit-btn">
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(handleRegisterSubmit)}>
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
                placeholder="Create a password"
                className={errors.password ? "input-error" : ""}
              />
              {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        )}

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


