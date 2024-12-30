"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useRouter } from "next/navigation";
interface FormData {
  fullName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const registerSchema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const handleRegisterFormSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        data
      );
      if (response.status === 201) {
        localStorage.setItem("loggedInUser", response.data.fullName);
        router.push("/welcome");
        toast.success("Registration successful. Please log in.", {
          position: "top-right",
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterFormSubmit)}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>name</label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Enter your Full name"
              className={errors.fullName ? "input-error" : ""}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Create a password"
              className={errors.password ? "input-error" : ""}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>confirm password</label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Re-enter your Password"
              className={errors.confirmPassword ? "input-error" : ""}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn" disabled={loading}>
              {loading ? "Submitting..." : "Register"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
