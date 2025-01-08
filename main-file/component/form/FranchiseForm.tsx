import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

// Define validation schema using yup
const validationSchema = yup.object().shape({
  fullname: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
});

const FranchiseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/franchiseForm",
        data
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        reset(); // Reset form after successful submission
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      // console.error("Error sending message:", error.response || error.message);
      if (error.response?.status === 404) {
        toast.error("Endpoint not found. Check the API route.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div>
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" type="text" {...register("fullname")} />
        {errors.fullname && <p>{errors.fullname.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <textarea id="address" {...register("address")}></textarea>
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FranchiseForm;
