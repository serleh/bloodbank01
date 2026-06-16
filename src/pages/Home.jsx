import React, { useState } from "react";

import DonorCard from "../components/designLibrary/DonorCard";
import hero from "../assets/bloodd.jpg";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import Select from "../components/designLibrary/Select";
import { bloodGroupOptions } from "../constants/bloodGroup";
import StatCard from "../components/designLibrary/StatCard";
import {  howItWorks, stats } from "../data";
import HowItWorksCard from "../components/designLibrary/HowItWorksCard";
import useDonorSearch from "../hooks/useDonorSearch";

const Home = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const { results, loading, hasSearched, search, error } = useDonorSearch();

  const handleSearch = () => {
    search({ city, bloodGroup });
  };

  const isSearchDisabled = !city && !bloodGroup;

  return (
    <section className="bg-gray-50">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Every Drop Counts <br />
            <span className="text-red-600">Every Life Matters</span>
          </h1>

          <p className="mt-4 text-gray-600">
            Connect blood donors with those in need.
          </p>

          <div className="mt-6 flex gap-4">
            <Button>Find Donor</Button>
            <Button variant="secondary">Become Donor</Button>
          </div>
        </div>

        <img src={hero} alt="blood donation" className="rounded-xl shadow" />
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 pb-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold">Find a Blood Donor</h2>

          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            <Select
              options={bloodGroupOptions}
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />

            <Input
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <Button
              onClick={handleSearch}
              disabled={isSearchDisabled || loading}
            >
              {loading ? "Searching..." : "Search"}
            </Button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>

       
      </div>

      
      {/* DONOR RESULTS */}
<div className="bg-gray-50 py-12">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
      {hasSearched ? "Search Results" : "Find Donors Near You"}
    </h2>

    <p className="text-center text-gray-500 mt-2">
      {hasSearched
        ? "Matching donors based on your search"
        : "Search by blood group and city to see available donors"}
    </p>

    {/* STATES */}
    <div className="mt-10">
      {/* LOADING */}
      {loading && (
        <div className="text-center text-gray-500">
          Searching for donors...
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && hasSearched && results.length === 0 && (
        <div className="text-center text-gray-500">
          No donors found matching your criteria 😔
        </div>
      )}

      {/* RESULTS GRID */}
      {!loading && results.length > 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      )}

      {/* DEFAULT STATE (before search) */}
      {!hasSearched && !loading && (
        <div className="text-center text-gray-500 mt-10">
          Start by searching for donors above 👆
        </div>
      )}
    </div>
  </div>
</div>
      {/* HOW IT WORKS */}
      <div className="bg-white py-12 text-center">
        <h2 className="text-2xl font-bold">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {howItWorks.map((item) => (
            <HowItWorksCard key={item.title} {...item} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-red-600 text-white py-12 text-center">
        <h2 className="text-2xl font-bold">Become a Life Saver ❤️</h2>

        <Button variant="secondary" className="mt-6">
          Register Now
        </Button>
      </div>
    </section>
  );
};

export default Home;