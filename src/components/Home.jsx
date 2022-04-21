import React, { useState } from 'react'
import Header from './Header'




const Home = () => {

  return (
    <div>
      <Header />
      <section className="st-header text-gray-600 body-font">
        <div className="header-overlay"></div>
        <div className="">
          <div className="row">
            <div className="col-md-12 text-center st-header-content">
              <div className="st-header-title">
                <h2>Welcome to <span>InSelfView</span></h2>
                <p className="text-xl st-header-p">An online platform to practice your virtual interview<br /> Connect to a community of suportive jobseekers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a href="#learnMore" className="mouse-icon hidden-xs">
        <div className="wheel"></div>
      </a>
      <section id="learnMore" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-4xl font-semibold title-font mb-4 mt-14 text-gray-900">Overcome the online interview challenges</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 font-medium">Let’s create a peer community  to experience firsthand how an online or one-way job interview feels.  </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"><path d="M20 11a8 8 0 1 0-16 0" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="M2 15.438v-1.876a2 2 0 0 1 1.515-1.94l1.74-.436a.6.6 0 0 1 .745.582v5.463a.6.6 0 0 1-.746.583l-1.74-.435A2 2 0 0 1 2 15.439zm20 0v-1.876a2 2 0 0 0-1.515-1.94l-1.74-.436a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.583l1.74-.435A2 2 0 0 0 22 15.439zM20 18v.5a2 2 0 0 1-2 2h-3.5" stroke="currentColor" /><path d="M13.5 22h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3z" stroke="currentColor" /></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Interview Rehearsals</h2>
                <p className="leading-relaxed text-base">Choose from our expanding library of today's top interview questions. Practice, Record, & Post for Review</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-200 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Promote Skills</h2>
                <p className="leading-relaxed text-base">By selecting the relevant questions,  you can showcase your skills, experience to peers and potential employers.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-200 text-indigo-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"><path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1" stroke="currentColor" strokeLinecap="round" /><path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5" stroke="currentColor" strokeLinecap="round" /><path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Community</h2>
                <p className="leading-relaxed text-base">Join and meet a community of other jobseekers, interviewees and HR professional.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-indigo-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"><path d="M14.272 10.445 18 2m-8.684 8.632L5 2m7.761 8.048L8.835 2m5.525 0-1.04 2.5M6 16a6 6 0 1 0 12 0 6 6 0 0 0-12 0z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path d="m10.5 15 2-1.5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Your Portfolio</h2>
                <p className="leading-relaxed text-base">By sharing, reviewing and practicing, you can build a portfolio of empowerment to show the very best of you!</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-200 text-indigo-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"><path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z" stroke="currentColor" /><path d="M6 13v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" stroke="currentColor" /><path d="m17.04 9.22-3.067 2.3a.6.6 0 0 0 0 .96l3.067 2.3a.6.6 0 0 0 .96-.48V9.7a.6.6 0 0 0-.96-.48z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"  /></svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Watch and Learn</h2>
                <p className="leading-relaxed text-base">A safe environment to learn from others who have mastered their presentations.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-300 text-indigo-500 mb-4">
                  <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 22C10.5376 22 13 19.5376 13 16.5C13 13.4624 10.5376 11 7.5 11C4.46243 11 2 13.4624 2 16.5C2 17.5018 2.26783 18.441 2.7358 19.25L2.275 21.725L4.75 21.2642C5.55898 21.7322 6.49821 22 7.5 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.2824 17.8978C16.2587 17.7405 17.1758 17.4065 18 16.9297L21.6 17.6L20.9297 14C21.6104 12.8233 22 11.4571 22 10C22 5.58172 18.4183 2 14 2C9.97262 2 6.64032 4.97598 6.08221 8.84884" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Genuine Feedback</h2>
                <p className="leading-relaxed text-base">Boost your confidence by getting reviews and advice from peers and professionals</p>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Get Started</button>
        </div>
      </section>
      <footer className="text-center text-white bg-gray-400 py-9">
        <div className="flex justify-center">
          © 2022 Copyright: InSelfView
          {/* mail to */}
          <a href="mailto:email@chuongtang.com?subject=Hello%20Chuong" className="mx-9 text-gray-800">
            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 9L12 12.5L17 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
          {/* Twitter */}
          <a href="https://twitter.com/ChuongTang3" className="mr-9 text-gray-800">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="twitter"
              className="svg-inline--fa fa-twitter w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              ></path>
            </svg>
          </a>
          {/* Discord */}
          <a href="https://discord.gg/Z76uAC3u7x" className="mr-9 text-gray-800">
            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.5 17.5L16.5 19.5C16.5 19.5 20.6713 18.1717 22 16C22 15 22.5301 7.85339 19 5.5C17.5 4.5 15 4 15 4L14 6H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.52832 17.5L7.52832 19.5C7.52832 19.5 3.35699 18.1717 2.02832 16C2.02832 15 1.49823 7.85339 5.02832 5.5C6.52832 4.5 9.02832 4 9.02832 4L10.0283 6H12.0283" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8.5 14C7.67157 14 7 13.1046 7 12C7 10.8954 7.67157 10 8.5 10C9.32843 10 10 10.8954 10 12C10 13.1046 9.32843 14 8.5 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15.5 14C14.6716 14 14 13.1046 14 12C14 10.8954 14.6716 10 15.5 10C16.3284 10 17 10.8954 17 12C17 13.1046 16.3284 14 15.5 14Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          {/* LinkedIN */}
          <a href="https://www.linkedin.com/in/chuong-tang" className="mr-9 text-gray-800">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="linkedin-in"
              className="svg-inline--fa fa-linkedin-in w-3.5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          {/* Github */}
          <a href="https://github.com/chuongtang" className="text-gray-800">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              className="svg-inline--fa fa-github w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
          </a>

        </div>
      </footer>
    </div>
  )
}

export default Home