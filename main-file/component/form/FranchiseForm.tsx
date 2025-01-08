import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const FranchiseForm = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // const [occupation, setOccupation] = useState("");

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      const response = await axios.post(
        "http://localhost:8080/franchise/franchiseForm"
      );
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setAddress("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error.response || error.message);
      if (error.response?.status === 404) {
        toast.error("Endpoint not found. Check the API route.");
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="fullName"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {/* {errors.fullName && <p>{errors.fullName.message}</p>} */}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* {errors.email && <p>{errors.email.message}</p>} */}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            placeholder="fullName"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {/* {errors.phone && <p>{errors.phone.message}</p>} */}
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            placeholder="fullName"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        {/* {errors.address && <p>{errors.address.message}</p>} */}

        {/* <div>
          <label htmlFor="occupation">Occupation</label>
          <input
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required
          />
        </div> */}
        {/* {errors.occupation && <p>{errors.occupation.message}</p>} */}
        {/* </div><div>
        <label htmlFor="businessExperience">Business Experience</label>
        <textarea
          id="businessExperience"
          {...register("businessExperience")}
        ></textarea>
        {errors.businessExperience && (
          <p>{errors.businessExperience.message}</p>
        )}
      </div><div>
        <label htmlFor="investmentCapacity">Investment Capacity</label>
        <select id="investmentCapacity" {...register("investmentCapacity")}>
          <option value="">Select...</option>
          <option value="<5 Lakhs">Less than ₹5 Lakhs</option>
          <option value="5-10 Lakhs">₹5-10 Lakhs</option>
          <option value=">10 Lakhs">More than ₹10 Lakhs</option>
        </select>
        {errors.investmentCapacity && (
          <p>{errors.investmentCapacity.message}</p>
        )}
      </div><div>
        <label htmlFor="operationMode">
          Preferred Mode of Franchise Operation
        </label>
        <select id="operationMode" {...register("operationMode")}>
          <option value="">Select...</option>
          <option value="Physical Location">Physical Location</option>
          <option value="Online">Online</option>
          <option value="Both">Both</option>
        </select>
        {errors.operationMode && <p>{errors.operationMode.message}</p>}
      </div><div>
        <label htmlFor="location">Preferred Franchise Location</label>
        <input id="location" {...register("location")} />
        {errors.location && <p>{errors.location.message}</p>}
      </div><div>
        <label htmlFor="marketingExperience">Marketing Experience</label>
        <textarea
          id="marketingExperience"
          {...register("marketingExperience")}
        ></textarea>
        {errors.marketingExperience && (
          <p>{errors.marketingExperience.message}</p>
        )}
      </div><div> */}
        {/* <label htmlFor="additionalInfo">Additional Queries (Optional)</label>
        <textarea
          id="additionalInfo"
          {...register("additionalInfo")}
        ></textarea> */}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FranchiseForm;

// import React from "react";

// const FranchiseForm = () => {
//   return <div>FranchiseForm</div>;
// };

// export default FranchiseForm;
