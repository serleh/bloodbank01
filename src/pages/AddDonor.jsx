import React, { useState } from "react";

import authService from "../services/authService";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import Select from "../components/designLibrary/Select";
import { bloodGroupOptions } from "../constants/bloodGroup";

const initialState = {
  username: "",
  password: "",
  name: "",
  address: "",
  city: "",
  gender: "",
  weight: "",
  dob: "",
  bloodGroup: "",
  phone: "",
  email: "",
  lastDonation: "",
  medicalCondition: "",
};

const SectionLabel = ({ children }) => (
  <p className="text-xs font-semibold tracking-widest text-[#2F6F62] uppercase mb-4">
    {children}
  </p>
);

const AddDonor = () => {
  const [formData, setFormData] = useState(initialState);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const { username, password, ...donorData } = formData;

    authService
      .register({
        username: username.toLowerCase().trim(),
        password,
        ...donorData,
      })
      .then(() => {
        setSuccessMessage("Donor added successfully!");
        setFormData(initialState);
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((err) => {
        setErrorMessage(
          err.response?.data?.error || "Something went wrong. Try again",
        );
        setTimeout(() => setErrorMessage(""), 3000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-[#FBF8F6] min-h-screen py-12 font-sans">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold tracking-widest text-[#C81E3A] uppercase">
            Join the network
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#1B1F23] mt-2">
            Register as a Blood Donor
          </h2>
          <p className="text-[#5B6168] mt-2">
            Takes about two minutes. Your details help match you to nearby
            requests.
          </p>
        </div>

        {/* SUCCESS TOAST */}
        {successMessage && (
          <div className="fixed top-5 right-5 flex items-center gap-2 bg-[#2F6F62] text-white px-4 py-3 rounded-xl shadow-lg z-50">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {successMessage}
          </div>
        )}

        {/* ERROR TOAST */}
        {errorMessage && (
          <div className="fixed top-5 right-5 flex items-center gap-2 bg-[#C81E3A] text-white px-4 py-3 rounded-xl shadow-lg z-50">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86l-7.42 12.9A1.5 1.5 0 004.15 19h15.7a1.5 1.5 0 001.28-2.24l-7.42-12.9a1.5 1.5 0 00-2.6 0z" />
            </svg>
            {errorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#E8E1DB] rounded-2xl p-6 md:p-10 space-y-8"
        >
          {/* ACCOUNT */}
          <div>
            <SectionLabel>Account</SectionLabel>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                id="username"
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* PERSONAL */}
          <div className="pt-6 border-t border-[#F1ECE8]">
            <SectionLabel>Personal details</SectionLabel>
            <div className="space-y-4">
              <Input
                id="name"
                label="Full Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Input
                id="address"
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="city"
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <Input
                  id="weight"
                  label="Weight (Kg)"
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* GENDER — pill selector */}
              <div>
                <label className="block mb-1.5 text-sm font-medium text-[#1B1F23]">
                  Gender
                </label>
                <div className="flex gap-3">
                  {["male", "female"].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 text-center capitalize cursor-pointer px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
                        formData.gender === option
                          ? "bg-[#FBE9EC] border-[#C81E3A] text-[#C81E3A]"
                          : "border-[#E8E1DB] text-[#5B6168] hover:border-[#C81E3A]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={formData.gender === option}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  id="dob"
                  label="Date of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                <Select
                  id="bloodGroup"
                  label="Blood Group"
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  required
                  options={bloodGroupOptions}
                />
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="pt-6 border-t border-[#F1ECE8]">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                id="phone"
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                id="email"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* MEDICAL */}
          <div className="pt-6 border-t border-[#F1ECE8]">
            <SectionLabel>Medical</SectionLabel>
            <div className="space-y-4">
              <Input
                id="lastDonation"
                label="Last Donation Date"
                type="date"
                name="lastDonation"
                value={formData.lastDonation}
                onChange={handleChange}
              />
              <Input
                id="medicalCondition"
                label="Medical Condition (if any)"
                name="medicalCondition"
                value={formData.medicalCondition}
                onChange={handleChange}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full font-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Complete Registration"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddDonor;
