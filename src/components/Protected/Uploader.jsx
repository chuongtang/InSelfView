import React, { useState } from 'react'

const Uploader = () => {

  const [showUpload, setShowUpload] = useState(false);

  return (
    <div>
      <div className="flex items-center my-6">
        <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
        <div className="text-gray-600 italic">Or</div>
        <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
      </div>
      <aside className="p-12 bg-gray-100 sm:p-16 lg:p-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-md font-medium text-gray-500">
            Ready to get some constructive feedback ?
          </p>

          <p className="mt-2 text-xl font-bold sm:text-3xl">
            Upload and share your recoding for comments
          </p>

          <div className="mt-8 sm:items-center sm:justify-center sm:flex">
            <button className="flex px-5 py-3 font-medium text-white bg-blue-500 rounded-lg shadow-xl hover:bg-blue-600" onClick={() => setShowUpload(true)}>
              Continue
            </button>

          </div>
        </div>
      </aside>
      {/* Modal for uploader */}
      {
        showUpload &&
        (<div className="modal fade fixed top-20 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto z-60">
          <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none mx-2">
            <div
              className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current py-8">
              <div
                className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 className="text-xl font-medium leading-normal text-yellow-500 mx-auto" id="videoModalFullscreenLabel">
                  showUpload your recording
                </h5>
              </div>
              <div className="modal-body relative p-2">
                <div class="flex justify-center">
                  <div class="mb-3 w-96">
                    <label for="formFileLg" class="form-label inline-block mb-2 text-gray-700">Large file input example</label>
                    <input className="form-control block w-full px-2 py-1.5 text-xl font-normal    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFileLg" type="file" />
                  </div>
                </div>
              </div>
              <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                <button className="flex bg-transparent border border-red-400 text-sm md:text-lg text-red-400 hover:bg-red-400 hover:text-white text-center p-2 my-4 rounded-lg mr-4" onClick={() => setShowUpload(false)}>
                  Cancel
                </button>
                <button
                  className="flex bg-transparent border border-green-500 text-sm md:text-lg text-green-500 hover:bg-green-500 hover:text-white text-center p-2 my-4 rounded-lg"

                >
                 <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Click to upload
                </button>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default Uploader