import React, { useState } from "react";
import donorService from "../services/donors";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import Select from "../components/designLibrary/Select";
import { bloodGroupOptions } from "../constants/bloodGroup";

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

  // Add donor while submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonor = {
      ...formData,
    };

    donorService.create(newDonor).then((returnedDonor) => {
      setDonors(returnedDonor);
      setFormData(initialState);
    });
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
            <Input
              id="name"
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* ADDRESS */}
          <div>
            <Input
              id="name"
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* CITY + WEIGHT */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                id="name"
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Input
                id="name"
                label="Weight (Kg)"
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* GENDER */}
          <div>
            <label className="block text-sm font-medium mb-2">Gender</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                  className="w-auto"
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <Input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                  className="w-auto"
                />
                Female
              </label>
            </div>
          </div>

          {/* DOB + BLOOD GROUP */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                id="name"
                label="Date of Birth"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Select
                id="name"
                label="Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
                options={bloodGroupOptions}
              />
            </div>
          </div>

          {/* PHONE + EMAIL */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                id="name"
                label="Phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Input
                id="name"
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* LAST DONATION */}
          <div>
            <Input
              id="name"
              label="Last Donation Date"
              type="date"
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
            />
          </div>

          {/* MEDICAL CONDITION */}
          <div>
            <Input
              id="name"
              label="Medical Condition (if any)"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <Button className="w-full font-semibold">Submit</Button>
        </form>
      </div>
    </section>
  );
};

export default AddDonor;
