import Lottie from "lottie-react";
import React from "react";
import loginAnimation from "../loginAmination.json";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto md:mt-24">


      <div className="md:flex mx-auto md:shadow-2xl shadow-blue-200 md:px-10 px-3 items-center rounded-lg">
        <div className="contact_img flex-1 w-full">
          <Lottie
            animationData={loginAnimation}
            className="md:w-[500px] w-[300px] mx-auto my-5"
            loop={true}
          />
        </div>
        <div className="w-full flex-1">
          <h2 className="text-3xl font-semibold text-center text-[#1447e6] mb-[20px]">
            Create Account
          </h2>

          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
            />
          </div>
          <div className="flex gap-2 w-full">
            <input
              type="number"
              placeholder="Roll Number"
              className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
          <input
            type="text"
            placeholder="Which Semester You Are?"
            className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
          />
          <input
            type="text"
            placeholder="Department Name?"
            className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
          />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-[12px_20px] rounded-[5px] border-[1px] border-[#ddd] mb-[15px] bg-[#f0f0f0] text-[16px] focus:outline-none"
          />

          <div className="flex gap-[15px] items-center mb-1">
            <input type="checkbox" />
            <p>
              I agree to the{" "}
              <a
                href="#"
                className="text-[#1447e6] no-underline hover:underline"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-[#1447e6] no-underline hover:underline"
              >
                Privacy Policy.
              </a>
            </p>
          </div>
          <p className="text-sm font-semibold text-gray-600 my-2">
            You already have a account?{" "}
            <Link to={"/login"} className="text-blue-700 text-base ">Login</Link>
          </p>
          <button className="w-full py-2 rounded-[6px] border border-[#1447e6] bg-[#1447e6] text-[17px] text-white cursor-pointer transition-all duration-300 font-[500] hover:border-[#1447e6] hover:bg-white hover:text-[#1447e6]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
