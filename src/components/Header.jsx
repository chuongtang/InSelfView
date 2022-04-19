import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

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
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
          <span className="ml-3 text-2xl text-yellow-500">InSelfView</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button className="inline-flex items-center p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300">Learn More... 
            <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 7.5L12 11L15.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.5 13.5L12 17L15.5 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </button>
        </nav>
        <button className="inline-flex items-center p-2 pl-5 pr-5 bg-gray-500 text-gray-100 text-lg rounded-lg focus:border-4 border-gray-300 ml-4">Sign Up
          <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.62964 15.5H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.62964 8.5H21.3704" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z" stroke="currentColor" />
          </svg>

        </button>
      </div>
    </header>
  );
}

export default Header;