import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await api.post("/auth/register", form);

      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080808] px-5 pt-20">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111]/90 p-8 shadow-2xl sm:p-10">
        <p className="mb-4 text-xs font-bold tracking-[4px] text-[#d4a84f]">
          JOIN CINEBOOK
        </p>

        <h1 className="font-display text-5xl">Create Account</h1>

        <p className="mt-3 text-gray-500">Start your movie experience.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4a84f]"
          />

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4a84f]"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-[#d4a84f]"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#d4a84f] py-4 font-semibold text-black transition hover:bg-[#e4bb69]"
          >
            Create Account
          </button>
        </form>

        {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="ml-1 text-[#d4a84f]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
