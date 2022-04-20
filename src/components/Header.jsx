import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

function Header() {

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* InSelfVIew SVG Logo ⬇ */}
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              height: 49,
              width: 49,
            }}
          >
            <defs>
              <radialGradient id="a">
                <stop offset="0%" stopColor="#4fd1c5" />
                <stop offset="100%" stopColor="#338cf5" />
              </radialGradient>
              <filter id="b" height="300%" width="300%" x="-100%" y="-100%">
                <feFlood floodColor="rgba(121, 19, 19, 1)" result="flood" />
                <feComposite
                  in="flood"
                  in2="SourceGraphic"
                  operator="out"
                  result="composite"
                />
                <feGaussianBlur in="composite" stdDeviation={15} result="blur" />
                <feOffset dx={15} result="offset" />
                <feComposite in2="SourceGraphic" in="offset" operator="atop" />
              </filter>
            </defs>
            <path
              d="M256 23c-22.5 0-41 18.46-41 41s18.5 41 41 41 41-18.46 41-41-18.5-41-41-41zm0 82H41v270h430V105H256zm0-64c12.8 0 23 10.19 23 23s-10.2 23-23 23-23-10.19-23-23 10.2-23 23-23zM64 128h384v224H322.9c-.3-37.8-3.8-100.3-47.9-114a44.51 50 0 0 0 25.6-45.2 44.51 50 0 0 0-44.5-50 44.51 50 0 0 0-44.5 50 44.51 50 0 0 0 25.6 45.2c-44.1 13.7-47.6 76.2-47.9 114H64V128zm133.9 263.5-12.4 62h138l-12.4-62H197.9zM160 471v18h192v-18H160z"
              fill="url(#a)"
              filter="url(#b)"
            />
            <g transform="matrix(.6 0 0 .6 321.8 328.8)">
              <circle cx={128} cy={128} r={128} fill="#9ae6b4" />
              <circle
                stroke="#00a99d"
                fill="#9ae6b4"
                strokeWidth={18}
                cx={128}
                cy={128}
                r={101}
              />
              <path
                fill="#00a99d"
                d="m64 94 64-38 64 38c0 32-48 108-64 108-16 .25-64-76-64-108z"
              />
            </g>
          </svg>
          <span className="ml-3 text-2xl text-yellow-500 text-stroke-sm text-shadow-xl">InSelfView</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {!userInfo ? (
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link to="/signin" className="font-medium text-gray-600 px-5  flex items-center transition duration-150 ease-in-out bg-white hover:bg-green-200 text-black text-center py-2 px-4 rounded">Sign in

                  <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M2 20V19C2 15.134 5.13401 12 9 12V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.8038 12.3135C16.4456 11.6088 17.5544 11.6088 18.1962 12.3135V12.3135C18.5206 12.6697 18.9868 12.8628 19.468 12.8403V12.8403C20.4201 12.7958 21.2042 13.5799 21.1597 14.532V14.532C21.1372 15.0132 21.3303 15.4794 21.6865 15.8038V15.8038C22.3912 16.4456 22.3912 17.5544 21.6865 18.1962V18.1962C21.3303 18.5206 21.1372 18.9868 21.1597 19.468V19.468C21.2042 20.4201 20.4201 21.2042 19.468 21.1597V21.1597C18.9868 21.1372 18.5206 21.3303 18.1962 21.6865V21.6865C17.5544 22.3912 16.4456 22.3912 15.8038 21.6865V21.6865C15.4794 21.3303 15.0132 21.1372 14.532 21.1597V21.1597C13.5799 21.2042 12.7958 20.4201 12.8403 19.468V19.468C12.8628 18.9868 12.6697 18.5206 12.3135 18.1962V18.1962C11.6088 17.5544 11.6088 16.4456 12.3135 15.8038V15.8038C12.6697 15.4794 12.8628 15.0132 12.8403 14.532V14.532C12.7958 13.5799 13.5799 12.7958 14.532 12.8403V12.8403C15.0132 12.8628 15.4794 12.6697 15.8038 12.3135V12.3135Z" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M15.3636 17L16.4546 18.0909L18.6364 15.9091" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="/signup" className="flex bg-yellow-500 hover:bg-yellow-700 text-white text-center py-2 px-4 rounded ml-3">
                  Sign up
                  <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.62964 15.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.62964 8.5H21.3704" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z" stroke="currentColor" />
                  </svg>

                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex flex-grow justify-end flex-wrap items-center">
              <p className="font-mono font-medium text-shadow-lg text-stroke-sm">Welcome {userInfo.name}</p>
              <button to="/signup" className="flex bg-blue-500 hover:bg-red-500 text-white text-center py-2 px-4 rounded ml-3" onClick={logoutHandler}>
                Log out
                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M12 12H19M19 12L16 15M19 12L16 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;