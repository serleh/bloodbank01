import { Link } from "react-router-dom";

import hero from "../assets/bloodd.jpg";
import Button from "../components/designLibrary/Button";
import Input from "../components/designLibrary/Input";
import { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authService.login({
        username: username.toLowerCase().trim(),
        password,
      });

      localStorage.setItem("token", res.token);
      setUsername("");
      setPassword("");

      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "wrong username or password",
      );
      setTimeout(() => setErrorMessage(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FBF8F6] min-h-screen flex items-center font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — BRAND PANEL */}
        <div className="hidden md:block">
          <img
            src={hero}
            alt="blood donation"
            className="rounded-2xl shadow-lg w-full object-cover h-[420px]"
          />
          <h2 className="mt-6 text-3xl font-display font-semibold text-[#1B1F23] leading-snug">
            Welcome back,
            <br />
            <span className="text-[#C81E3A]">life saver.</span>
          </h2>
          <p className="mt-2 text-[#5B6168]">
            Sign in to find donors, manage your profile, and keep saving
            lives.
          </p>
        </div>

        {/* RIGHT — LOGIN CARD */}
        <div className="bg-white border border-[#E8E1DB] rounded-2xl shadow-sm p-8 md:p-10 w-full max-w-md mx-auto">
          <h1 className="text-2xl font-display font-semibold text-[#1B1F23]">
            Log in
          </h1>
          <p className="mt-1 text-[#5B6168] text-sm">
            Enter your details to access your account.
          </p>

          {errorMessage && (
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#C81E3A]/20 bg-[#FBE9EC] px-4 py-3 text-sm text-[#C81E3A]">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01M10.29 3.86l-7.42 12.9A1.5 1.5 0 004.15 19h15.7a1.5 1.5 0 001.28-2.24l-7.42-12.9a1.5 1.5 0 00-2.6 0z"
                />
              </svg>
              <div>
                <p className="font-medium">Login failed</p>
                <p className="text-xs opacity-80">
                  Wrong username or password. Please try again.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-8 flex flex-col gap-5">
            <Input
              id="username"
              type="text"
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-medium text-[#1B1F23]">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#C81E3A] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#5B6168]">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-[#C81E3A] font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
