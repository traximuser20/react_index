import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [terms, setTerms] = useState(false);
  const [formErrors, setFormErrors] = useState({ email: "", password: "", conPassword: "" });

  const [showPass, setShowPass] = useState(false);
  const [showConPass, setShowConPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    // Navigate back to the previous page
    navigate('/');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    } else {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add validation logic and form submission actions
    console.log("Form Submitted", formData);
  };

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
        {/* Close Icon */}
        <svg
          onClick={closeModal}
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>

        {/* Form Title */}
        <div className="my-8 text-center">
          <h4 className="text-3xl text-gray-800 font-extrabold">Register</h4>
          <p className="text-sm text-gray-500 mt-4">
            Create an account with us
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative flex items-center">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g
                clipPath="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  fill="none"
                  strokeMiterlimit="10"
                  strokeWidth="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>

          {/* Password Field */}
          <div className="relative flex items-center">
            <input
              type={`${showPass ? "text" : "password"}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
            />
            {showPass ? (
              <svg
                onClick={() => {
                  setShowPass(!showPass);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setShowPass(!showPass);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative flex items-center">
            <input
              type={`${showConPass ? "text" : "password"}`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
            />
            {showConPass ? (
              <svg
                onClick={() => {
                  setShowConPass(!showConPass);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                onClick={() => {
                  setShowConPass(!showConPass);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#bbb"
                className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="flex">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="w-4"
            />
            <label className="text-sm ml-4 text-gray-500">
              I have read and accept the{" "}
              <a
                href="javascript:void(0)"
                className="text-sm text-blue-600 hover:underline"
              >
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <div className="!mt-8 space-y-4">
            <button
              type="submit"
              className="px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg tracking-wide"
            >
              Create an account
            </button>

            {/* Google Sign-In Button */}
            <button
              type="button"
              className="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                fill="#fff"
                className="inline mr-4"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
              Continue with Google
            </button>
          </div>
        </form>

        {/* Login Link */}
        <hr className="my-8 border-gray-300" />
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/SignIn"
            state={{ background: location }}
            className="text-sm text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;
