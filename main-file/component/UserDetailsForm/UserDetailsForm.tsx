// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import axios from "axios";
// import * as yup from "yup";
// import { toast } from "react-toastify";

// interface PopupFormProps {
//   onClose: () => void;
// }

// interface FormData {
//   fullName?: string;
//   email: string;
//   contact: Number;
// }

// const UserDetailsForm: React.FC<PopupFormProps> = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");

//   const enrollUserSchema = yup.object().shape({
//     name: yup.string().required("Name is required"),
//     email: yup
//       .string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     contact: yup
//       .string()
//       .matches(/^\d{10}$/, "Contact should be exactly 10 digits")
//       .required("Contact field is required"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(enrollUserSchema) });

//   const handleRegisterFormSubmit = async (data: any) => {
//     try {
//       // Construct the data payload
//       const data = { name, email, contact };

//       const response = await axios.post(
//         "http://localhost:8080/enrollForm/enrollForm",
//         data
//       );

//       if (response.status === 201) {
//         toast.success("Message sent successfully!");
//         setName(""); // Clear form fields
//         setEmail("");
//         setContact("");
//       } else {
//         toast.error("Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       // Handle any errors
//       console.error("Error sending message:", error);
//       toast.error("Already sent request with this email");
//     } finally {
//       onClose();
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-container">
//         <button className="popup-close" onClick={onClose}>
//           &times;
//         </button>
//         <h2 className="popup-heading">Welcome to ORN-AI</h2>
//         <p className="popup-text">Please provide your details to continue</p>
//         <form
//           className="popup-form"
//           onSubmit={handleSubmit(handleRegisterFormSubmit)}
//         >
//           <div>
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               {...register("name")}
//               placeholder="Enter your name"
//               className={errors.name ? "input-error" : ""}
//             />
//             {errors.name && (
//               <p className="error-message">{errors.name.message}</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               {...register("email")}
//               placeholder="Add a email"
//               className={errors.email ? "input-error" : ""}
//             />
//             {errors.email && (
//               <p className="error-message">{errors.email.message}</p>
//             )}
//           </div>
//           <div>
//             <label htmlFor="phone">Phone Number</label>
//             <input
//               type="number"
//               {...register("contact")}
//               placeholder="Add a contact"
//               className={errors.contact ? "input-error" : ""}
//             />
//             {errors.contact && (
//               <p className="error-message">{errors.contact.message}</p>
//             )}
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UserDetailsForm;




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { toast } from "react-toastify";

interface PopupFormProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  contact: string;
}

const UserDetailsForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enrollUserSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: yup
      .string()
      .matches(/^\d{10}$/, "Contact should be exactly 10 digits")
      .required("Contact field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(enrollUserSchema) });

  const handleRegisterFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/enrollForm/enrollForm",
        data
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false); // Re-enable the button
      onClose(); // Close the popup
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-heading">Welcome to ORN-AI</h2>
        <p className="popup-text">Please provide your details to continue</p>
        <form
          className="popup-form"
          onSubmit={handleSubmit(handleRegisterFormSubmit)}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name")}
              placeholder="Enter your name"
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Add a email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="contact">Phone Number</label>
            <input
              type="text"
              {...register("contact")}
              placeholder="Add a contact"
              className={errors.contact ? "input-error" : ""}
            />
            {errors.contact && (
              <p className="error-message">{errors.contact.message}</p>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsForm;
