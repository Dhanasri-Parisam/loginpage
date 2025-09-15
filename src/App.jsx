import React, { useState } from "react";

export default function Login() {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rollNumber || !password) {
      alert("Please enter both Roll Number and Password");
      return;
    }
    alert(`Welcome, ${rollNumber}! ✅`);
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://theacademicinsights.com/wp-content/uploads/2022/07/Aditya-Engineering-Colleges.jpg')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-8">
        <div className="text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUvshrMjoFG9xBTjGkHhIZewATHzr1JA3Og&s"
            alt="College Logo"
            className="w-24 h-24 rounded-full shadow-xl border-4 border-white mx-auto mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Student Login
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Access your academic resources securely
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Roll Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Roll Number
            </label>
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              placeholder="e.g. 23MH1A4215"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-700 text-sm mt-5">
          Forgot Password?{" "}
          <a href="#" className="text-indigo-600 font-semibold hover:underline">
            Reset here
          </a>
        </p>
      </div>
    </div>
  );
}
