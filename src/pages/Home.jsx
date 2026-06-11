import React, { useState } from "react";

import hero from "../assets/bloodd.jpg";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import Select from "../components/designLibrary/Select";
import { bloodGroupOptions } from "../constants/bloodGroup";
import StatCard from "../components/designLibrary/StatCard";
import { donors, howItWorks, stats } from "../data";
import HowItWorksCard from "../components/designLibrary/HowItWorksCard";

const Home = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!bloodGroup || !city) {
      return;
    }

    setHasSearched(true);
    const filtered = donors.filter((donor) => {
      const matchBloodGroup = bloodGroup
        ? donor.bloodGroup === bloodGroup
        : true;

      const matchCity = city
        ? donor.city.toLowerCase().includes(city.toLowerCase())
        : true;

      return matchBloodGroup && matchCity;
    });

    setResults(filtered);
  };
  return (
    <section className="bg-gray-50">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Every Drop Counts <br />
            <span className="text-red-600">Every Life Matters</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Connect blood donors with those in need. Find blood donors in your
            city instantly or register to become a life-saving donor today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex gap-4">
            <Button>Find Donor</Button>
            <Button variant="secondary">Become Donor</Button>
          </div>
        </div>

        <div>
          <img
            src={hero}
            alt="someone donating blood"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-10 md:pb-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              alt={stat.alt}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>

      {/* search section */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Find a Blood Donor Near You
          </h2>

          <p className="text-gray-500 mt-2">
            Search by blood group and location
          </p>

          {/* SEARCH FORM */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <Select
              id="bloodGroup"
              options={bloodGroupOptions}
              className="md:w-1/3"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />

            <Input
              placeholder="Enter city"
              className="border p-3 rounded-lg w-full md:w-1/3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
        {/* RESULTS */}
        <div className="mt-6">
          {!hasSearched ? (
            ""
          ) : results.length > 0 ? (
            results.map((donor, index) => (
              <div key={index}>
                {donor.name} - {donor.bloodGroup} - {donor.city}
              </div>
            ))
          ) : (
            <p>No donor found</p>
          )}
        </div>
      </div>

      {/* Featured donors */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Available Donors
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* CARD */}
            {donors.map((donor) => (
              <div
                key={donor.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full font-bold">
                    {donor.bloodGroup}
                  </div>
                  <div>
                    <p className="font-semibold">{donor.name}</p>
                    <p className="text-sm text-gray-500">{donor.city}</p>
                  </div>
                </div>

                <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">
                  Contact
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* How it works */}

      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {howItWorks.map((item) => (
              <HowItWorksCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
      {/* final cta */}
      <div className="bg-red-600 text-white py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Become a Life Saver Today ❤️
        </h2>

        <p className="mt-2 text-gray-100">
          Join thousands of donors and make a difference
        </p>

        <Button variant="secondary" className=" mt-6 px-6 py-3 font-semibold ">
          Register Now
        </Button>
      </div>
    </section>
  );
};

export default Home;
