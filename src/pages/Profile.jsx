import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";

const Profile = () => {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/me");
      setForm(res.data.donor);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage(null);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await api.put("/me", form);
      setMessage({ type: "success", text: "Profile updated successfully" });
    } catch (err) {
      setMessage({ type: "error", text: "Update failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  if (!form) {
    return (
      <div className="min-h-screen bg-[#FBF8F6] flex items-center justify-center">
        <p className="text-[#5B6168] font-sans">Loading profile...</p>
      </div>
    );
  }

  const initials =
    form?.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase() || "U";

  return (
    <section className="min-h-screen bg-[#FBF8F6] py-10 px-4 font-sans">
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Hero */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl px-7 py-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#FBE9EC] flex items-center justify-center text-[#C81E3A] font-display font-semibold text-lg shrink-0">
            {initials}
          </div>

          <div>
            <p className="text-lg font-display font-semibold text-[#1B1F23]">
              Edit Profile
            </p>
            <p className="text-sm text-[#9AA0A6] mt-0.5">
              Keep your donor details up to date
            </p>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl p-5 md:p-7">
          <p className="text-sm font-semibold text-[#1B1F23] mb-1">
            Personal information
          </p>
          <p className="text-xs text-[#9AA0A6] mb-5">
            This information is used to match you with nearby requests
          </p>

          {message && (
            <div
              className={`mb-5 flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border ${
                message.type === "success"
                  ? "bg-[#E7F0EE] text-[#2F6F62] border-[#2F6F62]/20"
                  : "bg-[#FBE9EC] text-[#C81E3A] border-[#C81E3A]/20"
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleUpdate} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                label="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />
              <Input
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                label="Weight (kg)"
                name="weight"
                value={form.weight}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>

              <Link
                to="/dashboard"
                className="text-sm text-[#9AA0A6] hover:text-[#5B6168]"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
