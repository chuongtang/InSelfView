import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { AlertWarning, AlertError } from './Alerts';
import Loader from './Loader';
import SUimg from "../images/SUimg.jpg"
import Logo from '../images/Logo.jpg'


const SignUp = () => {

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
    <div className="flex flex-col min-h-screen ">
      <section className="relative py-16 before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

          <div className="m-auto space-y-8 md:w-8/12 lg:w-full">

            <img src={Logo} loading="lazy" className="w-48 ml-4" alt="inselfView logo" />
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="lg:grid lg:grid-cols-2">
                <div className="rounded-lg lg:block" hidden>
                  <img src={SUimg} className="rounded-l-xl object-cover" loading="lazy" height="" width="" alt="Key board" />
                </div>
                <div className="p-6 sm:p-16">

                  <h2 className="flex mb-8 text-2xl text-cyan-900 font-bold">Thanks for joining us</h2>
                  {message && <AlertWarning message={message} />}
                  {error && <AlertError message={error} />}
                  {loading && <Loader />}
                  <form onSubmit={submitHandler} className="space-y-8">

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700">User Name</label>
                      <input type="text" id="name"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        placeholder="Enter user name"
                        required
                        value={username}
                        onChange={(e) => setUserName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">Email</label>
                      <input type="email" name="email" id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
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
                      <div className="flex items-center justify-between">
                        <label htmlFor="pwd" className="text-gray-700">Password</label>
                      </div>
                      <input type="password" name="pwd" id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                        focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        value={password}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 6 or more characters"
                        autoComplete="new password"
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</label>
                      </div>
                      <input type="password" name="confirmpwd" id="confirmpwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                        focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400"
                        value={confirmPassword}
                        autoComplete="retype password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <button type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600 focus:bg-sky-700 active:bg-sky-500"
                     >
                      
                      <span className="text-white">Continue</span>
                    </button>

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

export default SignUp;