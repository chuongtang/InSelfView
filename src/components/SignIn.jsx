import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from '../appwrite/appwrite'
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import { login } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import SIImg from "../images/SIImg.jpg"


function SignIn() {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <section className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-14">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={SIImg} alt="Keyboard image" />
              </div>
              <div className="p-8 mx-auto">
                <div className="uppercase tracking-wide text-2xl text-yellow-500 text-shadow-xl font-semibold text-stroke-sm pt-2 mb-8 text-center">Welcome back</div>
                {message && <AlertWarning message={message} />}
                {error && <AlertError message={error} />}
                {loading && <Loader />}
                <div className="mt-4 text-xl">
                  <form onSubmit={submitHandler}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                        <input id="email" type="email"
                          className="form-input w-full text-gray-800 p-4 rounded-lg"
                          placeholder="Enter your email address"
                          required
                          value={email}
                          onChange={(e) => {
                            !e.target.value.indexOf(".") <= 0
                              ? setEmail(e.target.value)
                              : setEmail("");
                          }} />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                        <input id="password" type="password"
                          className="form-input w-full text-gray-800 p-4 rounded-lg" placeholder="Enter your password" required
                          value={password}
                          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                          onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button className="btn px-0 text-white bg-yellow-500 hover:bg-green-400 w-full relative flex items-center py-4 rounded-lg" type="submit">
                          <svg className="w-6 h-6 fill-current text-white flex-shrink-0 mx-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="flex-auto pl-16 pr-8 -ml-16">Sign in</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="flex items-center my-6">
                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                    <div className="text-gray-600 italic">Or</div>
                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                  </div>
                  <form>
                    <div className="flex flex-wrap -mx-3 mb-3">
                      <div className="w-full px-3">
                        <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center py-4 rounded-lg" type="submit">
                          <svg className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                          </svg>
                          <span className="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="text-gray-600 text-center mt-6">
                    Forgot password? <Link to="/reset-password" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Reset it</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;