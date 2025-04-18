import React from "react";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <h3>School Route Optimizer</h3>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a
                  href="#"
                  title="Twitter"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M23.953 4.569a10.057 10.057 0 01-2.825.775 4.925 4.925 0 002.163-2.724 10.017 10.017 0 01-3.127 1.184A4.925 4.925 0 0016.615 3c-2.72 0-4.926 2.207-4.926 4.917 0 .386.044.761.127 1.124A13.988 13.988 0 011.671 3.149a4.906 4.906 0 001.523 6.573 4.89 4.89 0 01-2.224-.616v.062c0 2.295 1.632 4.202 3.8 4.637a4.937 4.937 0 01-2.215.084 4.935 4.935 0 004.604 3.417A9.872 9.872 0 010 19.54a13.908 13.908 0 007.548 2.211c9.056 0 14.004-7.493 14.004-13.98 0-.21-.004-.419-.014-.629A10.073 10.073 0 0024 4.59a10.034 10.034 0 01-2.847.775 5.012 5.012 0 002.164-2.724z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Facebook"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="LinkedIn"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.086 3H4.914C3.86 3 3 3.86 3 4.914v14.172C3 20.14 3.86 21 4.914 21h14.172C20.14 21 21 20.14 21 19.086V4.914C21 3.86 20.14 3 19.086 3zM8.49 17H6.5v-8h1.99v8zM7.495 8.58a1.497 1.497 0 11.004-2.996 1.497 1.497 0 01-.004 2.996zM18 17h-1.99v-4.39c0-1.049-.018-2.4-1.464-2.4-1.466 0-1.688 1.148-1.688 2.32V17H12V9h1.99v1.158c.265-.4.731-.978 1.768-.978 1.935 0 2.267 1.244 2.267 2.863V17z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Instagram"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.9 17.25c0 .637-.547 1.125-1.183 1.125H6.283c-.636 0-1.183-.488-1.183-1.125V6.75c0-.637.547-1.125 1.183-1.125h11.434c.636 0 1.183.488 1.183 1.125v10.5zm-4.2-5.25c0 2.003-1.646 3.75-3.75 3.75s-3.75-1.647-3.75-3.75 1.646-3.75 3.75-3.75 3.75 1.647 3.75 3.75zm-6.75 0a3 3 0 106 0 3 3 0 10-6 0zm10.5-3.75c0 .371-.299.75-.75.75s-.75-.379-.75-.75.299-.75.75-.75.75.379.75.75z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="GitHub"
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.793-.261.793-.578 0-.288-.01-1.25-.016-2.28-3.338.725-4.043-1.609-4.043-1.609-.546-1.384-1.334-1.754-1.334-1.754-1.09-.743.083-.728.083-.728 1.204.085 1.835 1.237 1.835 1.237 1.07 1.831 2.8 1.301 3.48.995.107-.774.418-1.301.76-1.601-2.665-.303-5.467-1.331-5.467-5.918 0-1.309.467-2.376 1.236-3.215-.124-.303-.536-1.527.117-3.176 0 0 1.008-.323 3.302 1.228.957-.267 1.98-.404 3.007-.404 1.021.005 2.051.138 3.01.404 2.292-1.55 3.297-1.228 3.297-1.228.655 1.649.241 2.873.118 3.176.77.839 1.236 1.906 1.236 3.215 0 4.604-2.807 5.61-5.475 5.909.429.37.81 1.098.81 2.22 0 1.601-.014 2.892-.014 3.287 0 .318.188.693.798.578C20.564 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              About
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Support
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Driver Assistance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Subscribe to Updates
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 mt-2 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © 2024 School Route Optimizer, All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
