// pages/login.jsx
"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("Email Login:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login initiated");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      {/* Container */}
      <div className="w-full max-w-4xl p-6 bg-gray-800/10 backdrop-blur-sm border border-green-400/70 rounded-2xl shadow-xl">
        {/* Header */}
        <h1 className="text-4xl text-center mb-6">
          Welcome Back to <span className="text-green-400 font-bold">Arc!</span>
        </h1>
        <p className="text-gray-300 text-center mb-8">
          Login to your account and continue your learning journey!
        </p>

        {/* Form Container */}
        <div className="flex flex-col gap-4">
          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-green-600/80 hover:bg-green-800/80 transition ease-in-out rounded-lg p-3 font-semibold shadow-md"
          >
            <img
              src="../google.svg"
              className="w-6 bg-white rounded-full text-green-600 h-6 mr-2"
            ></img>
            Log-in with Google
          </button>

          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Email/Password Login Form */}
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
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
              className="p-3 bg-gray-700/40 rounded-lg border-2 border-transparent focus:outline-none focus:bg-slate-600  focus:border-green-500 transition text-white placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full bg-green-600/80 hover:bg-green-700 transition rounded-lg p-3 font-bold shadow-md"
            >
              Login
            </button>
          </form>
        </div>

        {/* Additional Links */}
        <div className="flex justify-between mt-6 text-gray-400 text-sm">
          <a
            href="#"
            className="hover:text-green-500 underline hover:underline-offset-2 ease-in-out transition"
          >
            Forgot Password?
          </a>
          <a
            href="/pages/register"
            className="hover:text-green-500 ease-in-out transition"
          >
            + Create an Account
          </a>
        </div>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400 text-xs">
          By logging in, you agree to Arc's{" "}
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
