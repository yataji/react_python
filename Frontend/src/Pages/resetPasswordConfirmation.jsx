import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo.svg";
import { resetConfirmationPassword } from "../Api/axiosConfig";

const ResetPasswordConfirmation = ({ match }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const Navigate = useNavigate();
  const { uid, token } = useParams();
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setPasswordConfirm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uid, token);
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    const user = {
      uid,
      token,
      new_password: password,
      re_new_password: passwordConfirm,
    };
    resetConfirmationPassword(user)
      .then((res) => {
        console.log(res);
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="sm:w-56 mt-5" src={logo} alt="logo" />
        </Link>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Change Password
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            action="#"
          >
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                onChange={handleChangePassword}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                onChange={handleChangeConfirmPassword}
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-black font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordConfirmation;
