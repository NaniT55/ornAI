// "use client";
// import axios from "axios";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFormSubmit = async (data: any) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/contact/contact",
//         data
//       );
//       if (response.status === 200) {
//         toast.success("Message sent successfully!");
//         setName("");
//         setEmail("");
//         setMessage("");
//       }
//     } catch (error) {
//       toast.error("Error sending message");
//     }
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <div className="row">
//         <div className="col-xl-6">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="col-xl-6">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="col-xl-12">
//           <textarea
//             rows={8}
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <button type="submit" className="common_btn_2">
//             SEND REQUEST
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;

"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    try {
      // Construct the data payload
      const data = { name, email, message };

      const response = await axios.post(
        "http://localhost:8080/contactForm/contact",
        data
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setName(""); // Clear form fields
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      // Handle any errors
      console.error("Error sending message:", error);
      toast.error("Already sent request with this email");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="common_btn_2">
            SEND REQUEST
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
