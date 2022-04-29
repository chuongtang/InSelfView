import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
// import api from '../appwrite/appwrite'
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import { login } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import SIImg from "../images/SIImg.jpg"
import Logo from '../images/Logo.jpg'


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // const logInGH = () => {
  //   console.log("github login fired")
  //   dispatch(loginGithub());
  // };

  return (
    <div className="flex flex-col min-h-screen ">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <section className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

          <div className="m-auto space-y-8 md:w-8/12 lg:w-full">

            <img src={Logo} loading="lazy" className="w-48 ml-4" alt="inselfView logo" />
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="lg:grid lg:grid-cols-2">
                <div className="rounded-lg lg:block" hidden>
                  <img src={SIImg} className="rounded-l-xl object-cover" loading="lazy" height="" width="" alt="Key board" />
                </div>
                <div className="p-6 sm:p-16">

                  <h2 className="flex mb-8 text-2xl text-cyan-900 font-bold">Sign in to your account</h2>
                  {message && <AlertWarning message={message} />}
                  {error && <AlertError message={error} />}
                  {loading && <Loader />}
                  <form onSubmit={submitHandler} className="space-y-8">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">Email</label>
                      <input type="email" name="email" id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-1 invalid:ring-red-400"
                        placeholder="Enter your email address"
                        required
                        value={email}
                        onChange={(e) => {
                          !e.target.value.indexOf(".") <= 0
                            ? setEmail(e.target.value)
                            : setEmail("");
                        }} />
                    </div>

                    <div>
                      <label htmlFor="pwd" className="text-gray-700">Password</label>
                      <input type="password" name="pwd" id="password"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                            focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-1 invalid:ring-red-400"
                        value={password}
                        placeholder="Enter your password"
                        required
                        autoComplete="your current password"
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500">
                      <span className="text-white">Continue</span>
                    </button>

                    <p className="border-t pt-6 text-sm">
                      Don't have an account ?
                      <a href="/signup" className="text-sky-500 ml-4">Sign up</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="text-center space-x-4">
              <span>&copy; InSelfView</span>
              <a href="/" className="text-sm hover:text-blue-700">Home</a>
              <a href="/#learnMore" className="text-sm hover:text-blue-700">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;