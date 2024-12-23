import React, { useState } from "react";

interface PopupFormProps {
  onClose: () => void;
}

const UserDetailsForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, phone }); // Handle the form submission
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-heading">Welcome to ORN-AI</h2>
        <p className="popup-text">Please provide your details to continue</p>
        <form className="popup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default UserDetailsForm;

