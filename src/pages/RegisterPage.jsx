import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function RegisterPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  // const history = unstable_HistoryRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "profileName") setProfileName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, profileName, password };
    axios
      .post(`${apiUrl}/auth/register`, data)
      .then((res) => {
        console.log(res.data);
        alert("Registration successful. Please login to continue.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-sky-400">
              Register to your Account
            </h2>
          </div>
          <div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label
                    // htmlFor="email-address"
                    className="sr-only"
                  >
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    // autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-sky-400 focus:z-10 sm:text-sm mb-2"
                    placeholder="Email address"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    // htmlFor="email-address"
                    className="sr-only"
                  >
                    Profile Name
                  </label>
                  <input
                    id="profileName"
                    type="test"
                    // autoComplete="email"
                    // required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-sky-400 focus:z-10 sm:text-sm mb-2"
                    placeholder="Enter Profile Name"
                    name="profileName"
                    value={profileName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label
                    // htmlFor="password"
                    className="sr-only"
                  >
                    Password
                  </label>
                  <input
                    // id="password"
                    // name="password"
                    type="password"
                    // autoComplete="current-password"
                    // required
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-400 focus:border-sky-400 focus:z-10 sm:text-sm mb-2"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="text-sm">
                <Link to="/login">
                  <button className="font-medium text-blue-400 hover:text-blue-300">
                    Login
                  </button>
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-300 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
