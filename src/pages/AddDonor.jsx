import React, { useState } from "react";

const initialState = {
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
const AddDonor = () => {
  const [donors, setDonors] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonor = {
      ...formData,
    };
    setDonors([...donors, newDonor]);

    setFormData(initialState);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Register as a Blood Donor 🩸
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* ADDRESS */}
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* CITY + WEIGHT */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              />
            </div>
          </div>

          {/* GENDER */}
          <div>
            <label className="block text-sm font-medium mb-2">Gender</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </div>
          </div>

          {/* DOB + BLOOD GROUP */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Blood Group</label>
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>
                <option>AB-</option>
              </select>
            </div>
          </div>

          {/* PHONE + EMAIL */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-lg mt-1"
              />
            </div>
          </div>

          {/* LAST DONATION */}
          <div>
            <label className="block text-sm font-medium">
              Last Donation Date
            </label>
            <input
              type="date"
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* MEDICAL CONDITION */}
          <div>
            <label className="block text-sm font-medium">
              Medical Condition (if any)
            </label>
            <input
              type="text"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg mt-1"
            />
          </div>

          {/* BUTTON */}
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddDonor;
