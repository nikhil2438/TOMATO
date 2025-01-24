import React, { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between Login and Sign Up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Add logic to handle login/signup logic (e.g., API calls)
    if (isSignUp) {
      console.log("Signing up with:", { name, email, password });
    } else {
      console.log("Logging in with:", { email, password });
    }

    // Close the popup after form submission (optional)
    setShowLogin(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Create New Account" : "Login"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              {/* Name Field for Sign Up */}
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div>
            {/* Email Field */}
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          {isSignUp ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setIsSignUp(false)}
                className="text-blue-500 hover:underline"
              >
                Login here
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                onClick={() => setIsSignUp(true)}
                className="text-blue-500 hover:underline"
              >
                Create one
              </button>
            </p>
          )}
        </div>
        <button
          className="mt-4 text-blue-500 hover:underline text-sm"
          onClick={() => setShowLogin(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
