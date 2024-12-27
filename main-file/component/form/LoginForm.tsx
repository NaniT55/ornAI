"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLoginFormSubmit = async (data: any) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        data
      );
      if (response.status === 200) {
        localStorage.setItem("jwtToken", response.data.token);
        localStorage.setItem("loggedInUser", response.data.user.fullName);
        router.push("/");
        toast.success("Logged in successfully!", { position: "top-right" });
      }
    } catch (err) {
      console.error(err);
      toast.error("Invalid login credentials.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>email</label>
            <input
              type="text"
              {...register("email")}
              placeholder="Enter Email"
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
          <div className="tf__login_imput tf__login_check_area">
            <a href="#">Forget Password ?</a>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
