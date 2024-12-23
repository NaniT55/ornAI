import React, { useState } from "react";

interface PopupFormProps {
  onClose: () => void;
}

const UserDetailsForm: React.FC<PopupFormProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, details }); // Handle the form submission
    onClose(); // Close the popup after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-heading">Welcome!</h2>
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
            <label htmlFor="details">Details</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
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
