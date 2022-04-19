import React, { useState } from 'react'
import Header from './Header'
import HeroBG from '../images/HeroBG.jpg'



const Home = () => {

  const [displaySUform, setDisplaySUform] = useState(false);

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
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Overcome the online interview challenges</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Let’s create a peer community  to experience firsthand how an online or one-way job interview feels.  </p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none"><path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6z" stroke="currentColor" /><path d="M6 13v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" stroke="currentColor" /><path d="m17.04 9.22-3.067 2.3a.6.6 0 0 0 0 .96l3.067 2.3a.6.6 0 0 0 .96-.48V9.7a.6.6 0 0 0-.96-.48z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
            <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
              <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home