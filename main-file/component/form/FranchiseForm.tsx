import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormInputs {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  occupation: string;
  businessExperience: string;
  location: string;
  investmentCapacity: string;
  operationMode: string;
  marketingExperience: string;
  additionalInfo?: string;
}

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required").max(50, "Maximum 50 characters allowed"),
  email: yup.string().email("Invalid email address").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  occupation: yup.string().required("Occupation is required"),
  businessExperience: yup.string().required("Business experience is required"),
  location: yup.string().required("Location is required"),
  investmentCapacity: yup.string().required("Investment capacity is required"),
  operationMode: yup.string().required("Operation mode is required"),
  marketingExperience: yup.string().required("Marketing experience is required"),
  additionalInfo: yup.string().optional(),
});

const FranchiseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInputs) => {
    console.log("Form Submitted:", data);
    // Send data to the server or handle as needed
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="text" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <textarea id="address" {...register("address")}></textarea>
        {errors.address && <p>{errors.address.message}</p>}
      </div>

      <div>
        <label htmlFor="occupation">Occupation</label>
        <input id="occupation" {...register("occupation")} />
        {errors.occupation && <p>{errors.occupation.message}</p>}
      </div>

      <div>
        <label htmlFor="businessExperience">Business Experience</label>
        <textarea id="businessExperience" {...register("businessExperience")}></textarea>
        {errors.businessExperience && <p>{errors.businessExperience.message}</p>}
      </div>


      <div>
        <label htmlFor="investmentCapacity">Investment Capacity</label>
        <select id="investmentCapacity" {...register("investmentCapacity")}>
          <option value="">Select...</option>
          <option value="<5 Lakhs">Less than ₹5 Lakhs</option>
          <option value="5-10 Lakhs">₹5-10 Lakhs</option>
          <option value=">10 Lakhs">More than ₹10 Lakhs</option>
        </select>
        {errors.investmentCapacity && <p>{errors.investmentCapacity.message}</p>}
      </div>

      <div>
        <label htmlFor="operationMode">Preferred Mode of Franchise Operation</label>
        <select id="operationMode" {...register("operationMode")}>
          <option value="">Select...</option>
          <option value="Physical Location">Physical Location</option>
          <option value="Online">Online</option>
          <option value="Both">Both</option>
        </select>
        {errors.operationMode && <p>{errors.operationMode.message}</p>}
      </div>

      <div>
        <label htmlFor="location">Preferred Franchise Location</label>
        <input id="location" {...register("location")} />
        {errors.location && <p>{errors.location.message}</p>}
      </div>

      <div>
        <label htmlFor="marketingExperience">Marketing Experience</label>
        <textarea id="marketingExperience" {...register("marketingExperience")}></textarea>
        {errors.marketingExperience && <p>{errors.marketingExperience.message}</p>}
      </div>

      <div>
        <label htmlFor="additionalInfo">Additional Queries (Optional)</label>
        <textarea id="additionalInfo" {...register("additionalInfo")}></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FranchiseForm;
