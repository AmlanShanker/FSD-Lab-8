import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", form);

      localStorage.setItem("token", response.data.token);

      localStorage.setItem("customer", JSON.stringify(response.data.customer));

      navigate("/movies");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-5 pt-20">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111]/90 p-8 shadow-2xl sm:p-10">
        <p className="mb-4 text-xs font-bold tracking-[4px] text-[#d4a84f]">
          WELCOME BACK
        </p>

        <h1 className="font-display text-5xl">Sign In</h1>

        <p className="mt-3 text-gray-500">Your next movie is waiting.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-4 text-white outline-none placeholder:text-gray-600 focus:border-[#d4a84f]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-4 text-white outline-none placeholder:text-gray-600 focus:border-[#d4a84f]"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#d4a84f] py-4 font-semibold text-black transition hover:bg-[#e4bb69]"
          >
            Login
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?
          <Link to="/register" className="ml-1 text-[#d4a84f]">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
