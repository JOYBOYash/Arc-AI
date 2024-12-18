// pages/register.jsx
"use client";

import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", { name, email, password });
  };

  const handleGoogleRegister = () => {
    console.log("Google Registration initiated");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      {/* Container */}
      <div className="w-full max-w-4xl p-6 bg-gray-800/10 backdrop-blur-sm border border-green-400/70 rounded-2xl shadow-xl">
        {/* Header */}
        <h1 className="text-4xl text-center mb-6">
          Join <span className="text-green-400 font-bold">Arc!</span>
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Create your account and start your learning journey today!
        </p>

        {/* Form Container */}
        <div className="flex flex-col gap-4">
          {/* Google Register */}
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center bg-green-600/80 hover:bg-green-800/80 transition ease-in-out rounded-lg p-3 font-semibold shadow-md"
          >
            <img
              src="../google.svg"
              className="w-6 bg-white rounded-full text-green-600 h-6 mr-2"
            ></img>
            Sign Up with Google
          </button>

          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="p-3 bg-gray-700/40 rounded-lg border-2 border-transparent focus:outline-none focus:bg-slate-600 focus:border-green-500 transition text-white placeholder-gray-400"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 bg-gray-700/40 rounded-lg border-2 border-transparent focus:outline-none focus:bg-slate-600 focus:border-green-500 transition text-white placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 bg-gray-700/40 rounded-lg border-2 border-transparent focus:outline-none focus:bg-slate-600 focus:border-green-500 transition text-white placeholder-gray-400"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="p-3 bg-gray-700/40 rounded-lg border-2 border-transparent focus:outline-none focus:bg-slate-600 focus:border-green-500 transition text-white placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full bg-green-600/80 hover:bg-green-700 transition rounded-lg p-3 font-bold shadow-md"
            >
              Register
            </button>
          </form>
        </div>

        {/* Additional Links */}
        <div className="flex justify-between mt-6 text-gray-400 text-sm">
          <a
            href="/pages/login"
            className="hover:text-green-500 underline hover:underline-offset-2 ease-in-out transition"
          >
            Already have an account? Log in
          </a>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400 text-xs">
          By signing up, you agree to Arc's{" "}
          <a href="#" className="text-green-400 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-green-400 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
