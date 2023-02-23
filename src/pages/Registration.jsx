import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted!");
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
  // };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <form
          // onSubmit={handleSubmit}
          >
            <div className="max-w-xl mx-auto">
              <h1 className="text-2xl font-semibold text-gray-900">Register</h1>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Email</label>
                    <input
                      type="email"
                      name="email"
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-500 w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Password</label>
                    <input
                      type="password"
                      name="password"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your password"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-500 w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Profile Name</label>
                    <input
                      type="text"
                      name="profile"
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your Profile Name"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-500 w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                  >
                    Register
                  </button>
                </div>
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <Link to="/login">
                    <button
                      // type="submit"
                      className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
