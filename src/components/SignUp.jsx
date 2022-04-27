import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import api from '../appwrite/appwrite'
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import { register } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import SUimg from "../images/SUimg.jpg"


const SignUp = () => {
  // const SignUp = ({ location, history }) => {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  console.log('userRegister from selector', error)


  useEffect(() => {
    if (userInfo) {
      console.log("user info from useEffect***", userInfo)
    }
  }, [userInfo]);



  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Confirm passwords do not match");
      // set timer to clear message
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      dispatch(register(username, email, password));
    }

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
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={SUimg} alt="Keyboard image" />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-2xl text-green-500 text-shadow-xl font-semibold text-stroke-sm pt-2 mb-8 text-center">Thanks for joining us</div>
                {message && <AlertWarning message={message} />}
                {error && <AlertError message={error} />}
                {loading && <Loader />}
                <div className="mt-4 text-xl">
                  <form onSubmit={submitHandler}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                        <input id="name" type="text"
                          className="form-input w-full text-gray-800 p-4 rounded-lg" placeholder="Enter your name"
                          required
                          value={username}
                          onChange={(e) => setUserName(e.target.value)} />
                      </div>
                    </div>
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
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="confirmPassword">Confirm Password <span className="text-red-600">*</span></label>
                        <input id="confirmPassword" type="password"
                          className="form-input w-full text-gray-800 p-4 rounded-lg" placeholder="Confirm your password" required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button className="btn text-white bg-gray-600 hover:bg-yellow-500 w-full py-4 rounded-lg" type="submit">Sign up
                          <svg className="w-6 h-6 inline ml-2" viewBox="0 0 128 128">
                            <path
                              d="M40.162 23.768C24.121 25.189 10.496 36.065 5.473 51.443 4.028 55.874 3.53 59.05 3.53 64.026s.498 8.151 1.943 12.582c7.701 23.505 34.334 34.595 56.466 23.529L64 99.094l2.085 1.043c18.222 9.123 40.377 3.293 51.703-13.672 2.962-4.407 5.237-10.118 6.208-15.544.356-2.085.474-3.744.474-6.895 0-4.976-.497-8.152-1.943-12.583-7.701-23.505-34.334-34.594-56.442-23.529L64 28.957l-2.061-1.043a41.323 41.323 0 00-14.904-4.17c-3.152-.261-3.792-.261-6.873.024zm10.142 8.601c2.322.45 6.801 2.203 9.525 3.744 3.721 2.085 7.938 5.995 10.521 9.739 1.398 2.037 3.27 5.876 4.336 8.933 1.517 4.265 1.517 14.217 0 18.481-1.848 5.214-4.194 9.266-7.345 12.607-3.744 3.981-7.227 6.326-12.44 8.364-3.317 1.303-5.307 1.73-9.217 1.919-4.787.237-9.1-.331-12.488-1.682-.853-.356-1.73-.663-1.99-.711-.498-.118-4.763-2.488-6.208-3.46-1.54-1.042-5.331-4.762-6.801-6.682-.734-.971-1.35-1.824-1.35-1.895 0-.071-.545-1.067-1.209-2.204-1.161-2.014-1.943-3.649-1.753-3.649.047 0-.213-.758-.592-1.682-1.161-2.772-1.517-5.213-1.517-10.165 0-4.953.356-7.394 1.517-10.166.379-.924.639-1.682.592-1.682-.19 0 .592-1.635 1.753-3.649.664-1.137 1.209-2.132 1.209-2.204 0-.071.616-.924 1.35-1.895 1.47-1.92 5.261-5.64 6.801-6.682 1.422-.972 5.71-3.342 6.208-3.46.26-.047 1.256-.403 2.227-.782 2.156-.853 3.554-1.184 6.043-1.469 2.559-.284 8.577-.094 10.828.332z"
                              fill="#f02e65"
                            ></path>
                            <path
                              d="M44.973 49.737c-.048.119-.664 2.536-1.327 5.403-.688 2.867-1.777 7.393-2.393 10.07-1.185 4.905-1.896 8.128-1.896 8.554 0 .118.735.214 1.635.214h1.635l.734-3.271c.427-1.777 1.375-5.852 2.133-9.051.759-3.199 1.682-7.085 2.038-8.649.355-1.564.711-2.985.782-3.151.071-.213-.332-.284-1.564-.284-.924 0-1.73.071-1.777.165zM32.248 59.997l-2.18 2.37.64.758c.355.426 1.327 1.493 2.156 2.37l1.517 1.611H38.694l-2.038-2.204c-1.114-1.184-2.038-2.322-2.038-2.464 0-.166.853-1.232 1.896-2.369 1.042-1.161 1.895-2.157 1.895-2.275 0-.095-.9-.166-1.99-.166h-1.967l-2.204 2.369zM48.835 57.77c0 .071.403.521.9 1.019 1.849 1.848 3.152 3.412 3.081 3.72-.047.166-.948 1.279-2.038 2.44l-1.966 2.157h2.203l2.204-.024 2.013-2.203c1.115-1.232 2.015-2.323 2.015-2.465 0-.118-.948-1.232-2.133-2.487l-2.132-2.299H50.92c-1.161 0-2.085.071-2.085.142z"
                              fill="#f02e65"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-3">
                      By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
                    </div>
                  </form>
                  {/* <div className="flex items-center my-6">
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
                    </form> */}
                  <div className="text-gray-600 text-center mt-6">
                    Already using InSelfView? <Link to="/signin" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</Link>
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

export default SignUp;