import React, {  useState } from "react";

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
  const [formData, setFormData] = useState(initialState);
 // const [donors, setDonors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   donorService.getAll().then((initialDonors) => setDonors(initialDonors));
  // }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
 const newDonor = { ...formData };

    donorService
      .add(newDonor)
      .then(() => {
        setSuccessMessage("Donor added successfully!");

        // clear form data after adding donor
        setFormData(initialState);

        // hide message after few seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        setErrorMessage("Something went wrong. Try again");
        setTimeout(() => setErrorMessage(""), 3000);
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Register as a Blood Donor 🩸
        </h2>
        {/* SUCCESS TOAST */}
        {successMessage && (
          <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg animate-bounce z-50">
            {successMessage}
          </div>
        )}

        {/* ERROR TOAST */}
        {errorMessage && (
          <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg z-50">
            {errorMessage}
          </div>
        )}
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
              id="address"
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
                id="city"
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div>
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
                id="dob"
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

          {/* PHONE + EMAIL */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input
                id="phone"
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

          {/* LAST DONATION */}
          <div>
            <Input
              id="lastDonation"
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
              id="medicalCondition"
              label="Medical Condition (if any)"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full font-semibold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddDonor;
