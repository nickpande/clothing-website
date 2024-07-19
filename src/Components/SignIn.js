import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialGoogle,
} from "react-icons/sl";

const SignIn = () => {
  const [formData, setFormData] = useState({
    
    UserName: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="bg-green-950 text-white flex flex-col justify-center items-center w-5/12 md:w-1/2 p-8 -rotate-45 -top-60 -left-44 relative rounded-r-full rounded-b-full"></div>
      <h1 className="text-white text-8xl font-bold mb-4 absolute left-6 top-20 max-h-screen">
        Pipal Tree
      </h1>
      <p className="text-2xl mb-8 absolute bottom-10 left-20">
        Start testing in minutes!
      </p>
      <div className="flex space-x-4 absolute bottom-6 left-32 text-2xl">
        <a href="#">
          <SlSocialInstagram />
        </a>
        <a href="#">
          <SlSocialTwitter />
        </a>
        <a href="#">
          <SlSocialGoogle />
        </a>
        <a href="/">
        <FaHome />
        </a>
      </div>
      <div className="flex justify-center items-center w-full md:w-1/2 ">
        <form
          className="bg-white p-8 rounded-none w-4/5 ax-w-2xl"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl mb-6 font-bold text-center text-green-950">
            Sign In
          </h2>

          <div className="mb-3">
            <label
              className="relative text-gray-700 text-sm font-bold mb-2 bg-white top-2.5 left-3"
              htmlFor="employeeId"
            >
             UserName
            </label>
            <input
              type="name"
              name="UserName"
              id=""
              value={formData.UserName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-147 h-12"
              required
            />
          </div>

          <div className="mb-3">
            <label
              className="relative text-gray-700 text-sm font-bold mb-2 bg-white top-2.5 left-3"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-12"
              required
            />
          </div>

          <div className="mb-3">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="form-checkbox text-green-600"
                required
              />
              <span className="ml-2 text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-green-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600">
                  Privacy Notice
                </a>
              </span>
            </label>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </div>
          <div className="text-center">
            <p className="text-gray-700">
              Don't Have an Account?{" "}
              <a href="/" className="text-green-600">
                SignUp
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;