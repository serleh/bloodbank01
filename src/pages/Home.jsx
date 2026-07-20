import React, { useState } from "react";

import DonorCard from "../components/designLibrary/DonorCard";
import hero from "../assets/bloodd.jpg";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import Select from "../components/designLibrary/Select";
import { bloodGroupOptions } from "../constants/bloodGroup";
import StatCard from "../components/designLibrary/StatCard";
import { howItWorks, stats } from "../data";
import HowItWorksCard from "../components/designLibrary/HowItWorksCard";
import useDonorSearch from "../hooks/useDonorSearch";
import { Link } from "react-router-dom";

const Home = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");

  const { results, loading, hasSearched, search, error } = useDonorSearch();

  const handleSearch = () => {
    search({ city, bloodGroup });
  };

  const isSearchDisabled = !city && !bloodGroup;

  return (
    <section className="bg-[#FBF8F6] font-sans">
      {/* HERO */}
      <div className="relative overflow-hidden">
        {/* pulse-line watermark */}
        <svg
          className="pointer-events-none absolute -right-24 top-10 w-[600px] h-40 text-[#C81E3A]/[0.06] hidden md:block"
          viewBox="0 0 600 160"
          fill="none"
        >
          <path
            d="M0 80h90l25-60 40 140 35-160 25 80h430"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#C81E3A] bg-[#FBE9EC] px-3 py-1 rounded-full">
              A donor near you could save a life today
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-display font-semibold text-[#1B1F23] leading-[1.08]">
              Every drop counts.
              <br />
              <span className="text-[#C81E3A]">Every life matters.</span>
            </h1>

            <p className="mt-5 text-[#5B6168] text-lg max-w-md">
              Search verified donors by blood group and city, or register in
              minutes to become someone's match.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#search">
                <Button>Find a Donor</Button>
              </a>

              <Link to="/register">
                <Button variant="secondary">Become a Donor</Button>
              </Link>
            </div>
          </div>

          <img
            src={hero}
            alt="blood donation"
            className="rounded-2xl shadow-lg w-full h-[340px] md:h-[420px] object-cover"
          />
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <div id="search" className="bg-white py-16 border-y border-[#E8E1DB]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-widest text-[#2F6F62] uppercase">
            Search
          </span>
          <h2 className="text-3xl font-display font-semibold text-[#1B1F23] mt-2">
            Find a Blood Donor
          </h2>
          <p className="text-[#5B6168] mt-2">
            Filter by blood group and city to see who's available.
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:items-end max-w-2xl mx-auto">
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
              className="shrink-0"
            >
              {loading ? "Searching..." : "Search"}
            </Button>
          </div>

          {error && <p className="text-[#C81E3A] mt-4 text-sm">{error}</p>}
        </div>
      </div>

      {/* DONOR RESULTS */}
      <div className="bg-[#FBF8F6] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-center text-[#1B1F23]">
            {hasSearched ? "Search Results" : "Find Donors Near You"}
          </h2>

          <p className="text-center text-[#5B6168] mt-2">
            {hasSearched
              ? "Matching donors based on your search"
              : "Search by blood group and city to see available donors"}
          </p>

          <div className="mt-10">
            {loading && (
              <div className="text-center text-[#5B6168]">
                Searching for donors...
              </div>
            )}

            {!loading && hasSearched && results.length === 0 && (
              <div className="text-center text-[#5B6168]">
                No donors found matching your criteria. Try a different city
                or blood group.
              </div>
            )}

            {!loading && results.length > 0 && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {results.map((donor) => (
                  <DonorCard key={donor.id} donor={donor} />
                ))}
              </div>
            )}

            {!hasSearched && !loading && (
              <div className="text-center text-[#9AA0A6] mt-6">
                Start by searching for donors above.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="bg-white py-16 border-y border-[#E8E1DB]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-widest text-[#2F6F62] uppercase">
            Process
          </span>
          <h2 className="text-3xl font-display font-semibold text-[#1B1F23] mt-2">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {howItWorks.map((item, i) => (
              <HowItWorksCard key={item.title} {...item} index={i + 1} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-[#C81E3A] text-white py-16 text-center overflow-hidden">
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 w-full h-10 text-white/10"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 20h500l15-15 20 30 15-30 15 15h635" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <h2 className="text-3xl md:text-4xl font-display font-semibold">
          Become a life saver
        </h2>
        <p className="mt-3 text-white/80 max-w-md mx-auto">
          Registration takes about two minutes. Your next donation could be
          someone's only chance.
        </p>

        <Link to="/register">
          <Button variant="secondary" className="mt-7 !bg-white !text-[#C81E3A] !border-white hover:!bg-white/90">
            Register Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
