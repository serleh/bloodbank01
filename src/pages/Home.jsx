import React from "react";
import hero from "../assets/bloodd.jpg";
import team from "../assets/team.png";
import location from "../assets/location.png";
import clock from "../assets/clock.png";

const Home = () => {
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
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Find Donor
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white transition">
              Become Donor
            </button>
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
          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src={team} alt="team members" className="w-12 mx-auto mb-3" />
            <p className="text-xl font-semibold text-gray-800">10,000+</p>
            <p className="text-gray-500 text-sm">
              Registered donors across country
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src={location} alt="location" className="w-12 mx-auto mb-3" />
            <p className="text-xl font-semibold text-gray-800">50+ Cities</p>
            <p className="text-gray-500 text-sm">
              Coverage across major cities
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <img src={clock} alt="24/7" className="w-12 mx-auto mb-3" />
            <p className="text-xl font-semibold text-gray-800">
              24/7 Available
            </p>
            <p className="text-gray-500 text-sm">
              Round-the-clock emergency support
            </p>
          </div>
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
            <select className="border p-3 rounded-lg w-full md:w-1/3">
              <option>Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
            </select>

            <input
              type="text"
              placeholder="Enter city"
              className="border p-3 rounded-lg w-full md:w-1/3"
            />

            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Search
            </button>
          </div>
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
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full font-bold">
                    A+
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-500">Abuja</p>
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
            <div>
              <div className="text-3xl">🔍</div>
              <h3 className="font-semibold mt-3">Search Donor</h3>
              <p className="text-gray-500 text-sm mt-1">
                Find donors by blood group and location
              </p>
            </div>

            <div>
              <div className="text-3xl">📞</div>
              <h3 className="font-semibold mt-3">Contact</h3>
              <p className="text-gray-500 text-sm mt-1">
                Reach out instantly to donors
              </p>
            </div>

            <div>
              <div className="text-3xl">🩸</div>
              <h3 className="font-semibold mt-3">Save Life</h3>
              <p className="text-gray-500 text-sm mt-1">
                Get help when it matters most
              </p>
            </div>
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

        <button className="mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Home;
