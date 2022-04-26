import React from 'react';

import Header from './Header';

function ResetPassword() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 st-header-title">
                <h2>Reset your password</h2>
                <span className="text-xl text-green-600">Enter the email address you used when you signed up for your account, and we’ll email you a link to reset your password.</span>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form className="text-base">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 font-medium mb-4" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800 py-4 rounded-lg" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full py-4 rounded-lg flex justify-center">Send reset link
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
                          <path d="M21 13V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V14C3 15.1046 3.89543 16 5 16H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.5 18.5L16.5 20.5L20.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 11.01L12.01 10.9989" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 11.01L16.01 10.9989" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 11.01L8.01 10.9989" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default ResetPassword;