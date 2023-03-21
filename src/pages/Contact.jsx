import React, { useState } from "react";
import desertImage from "../assets/IdanHamidbar.jpg";
import Hero2 from '../components/Hero2';



const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const validateInput = (name, value) => {
    switch (name) {
      case "fullName":
        if (!/^[a-zA-Z ]{1,20}$/.test(value)) {
          return "Full name must contain only letters and have maximum 20 characters";
        }
        break;
      case "email":
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "phoneNumber":
        if (!/^\d+$/.test(value)) {
          return "Phone number must contain only digits";
        }
        break;
      case "message":
        if (!/^[a-zA-Z0-9 ]*$/.test(value)) {
          return "Message can only contain letters and digits";
        }
        break;
      default:
        break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any errors exist in the form data
    for (const key in formData) {
      const error = validateInput(key, formData[key]);
      if (error) {
        setErrors({ ...errors, [key]: error });
        return;
      }
    }
    // Send form data to server or do other actions here
    console.log(formData);
    // Clear form data after successful submission
    setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
  };

  return (
    <div>
    <Hero2
      image={desertImage}
      title="Contact Desert's Prana"
      subtitle="Oasis in the middle of the desert"
    />
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="full-name"
          >
            Full Name
          </label>
          <input
            className={
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
              (errors.fullName ? " border-red-500" : "")
            }
            type="text"
            placeholder="John Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs italic">{errors.fullName}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
              (errors.email ? " border-red-500" : "")
            }
            type="email"
            placeholder="johndoe@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mb-6">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className={
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
            (errors.message ? " border-red-500" : "")
          }
          placeholder="Enter your message here"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-xs italic">{errors.message}</p>
        )}
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="phone-number"
          >
            Phone Number
          </label>
          <input
            className={
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" +
              (errors.phoneNumber ? " border-red-500" : "")
            }
            type="text"
            placeholder="Enter your phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
      </div>
    </form>
    </div>
  );
};

export default Contact;
