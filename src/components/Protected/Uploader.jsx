import React, { useState } from 'react'

const Uploader = () => {

  const [showUpload, setShowUpload] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Uplaoder clicked")
  }

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
      { showUpload &&
          ( <div className="modal fade fixed top-0 left-0 w-full h-full outline-none  overflow-y-auto bg-gray-500 bg-opacity-40 z-60 ">
{/*             
            <div className="modal-dialog modal-fullscreen relative w-auto pointer-events-none mx-4 bg-green-500 shadow-xl "> */}
              <div className="mx-auto mt-18 border-none shadow-lg relative flex flex-col w-3/5 pointer-events-auto bg-gradient-to-t from-gray-300 to-gray-100 rounded-2xl outline-none text-current py-8">
                <div
                  className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5 className="text-xl font-medium leading-normal text-yellow-500 mx-auto" id="videoModalFullscreenLabel">
                    Select file and Title
                  </h5>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="modal-body relative p-2">
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-green-500 font-bold">Title of this Video</label>
                      <input type="text" name="title" id="title" className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300 focus:ring-2 focus:ring-sky-300 focus:outline-none invalid:ring-2 invalid:ring-red-400" />
                    </div>
                    <div className="flex justify-center">
                      <div className="extraOutline p-2 m-auto rounded-lg">
                        <div className="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg w-full">
                          <svg className="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                          <div className="input_field flex flex-col w-max mx-auto text-center">
                            <label>
                              <input className="text-sm cursor-pointer w-full hidden" type="file"
                                // required={true}
                                accept="video/*"
                              />
                              <div className="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                            </label>

                            <div className="title text-indigo-500 uppercase">or drop files here</div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md">
                    <button className="flex bg-transparent border border-red-400 text-sm md:text-lg text-red-400 hover:bg-red-400 hover:text-white text-center p-2 my-4 rounded-lg mr-4" onClick={() => setShowUpload(false)}>
                      <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                        <path d="M7 10.625H14.2C14.2 10.625 14.2 10.625 14.2 10.625C14.2 10.625 17 10.625 17 13.625C17 17 14.2 17 14.2 17H13.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 14L7 10.625L10.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                      Cancel
                    </button>
                    <button
                      className="flex bg-transparent border border-green-500 text-sm md:text-lg text-green-500 hover:bg-green-500 hover:text-white text-center p-2 my-4 rounded-lg"
                      onClick={() => onSubmit()}
                    >
                      <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
                        <path d="M12 22V13M12 13L15.5 16.5M12 13L8.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 17.6073C21.4937 17.0221 23 15.6889 23 13C23 9 19.6667 8 18 8C18 6 18 2 12 2C6 2 6 6 6 8C4.33333 8 1 9 1 13C1 15.6889 2.50628 17.0221 4 17.6073" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Upload
                    </button>
                  </div>
                </form>
              </div>
            {/* </div> */}
          </div>)
      }
    </div>
  )
}

export default Uploader