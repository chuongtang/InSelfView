import React from 'react'


const alertConfig = (variant) => {
  let color;

  switch (variant) {
    case "warning":
      color = "yellow";
      break;
    case "error":
      color = "red";
      break;
    case "success":
      color = "green";
      break;
    default:
      color = "blue";
  };
  const styling = `"flex bg-${color}-100 rounded-lg p-4 mb-4 text-sm text-${color}-700"`
  return (`<div className="flex bg-${color}-100 rounded-lg p-4 mb-4 text-sm text-${color}-700" role="alert">
    <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
    <div>
      <span className="font-medium">${variant}:   </span> childrend place here.
    </div>
  </div>`)
};

const Alert = ({ variant, children }) => {

  const dynamicClass = alertConfig(variant);

  console.log(dynamicClass)
  return (
    <div className="flex items-center justify-center px-4 lg:px-0 py-12">
                <div id="alert" className="transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded">
                    <div className="sm:flex sm:items-start lg:items-center ">
                        <div className="flex items-end">
                            <div className="mr-2 text-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
                                    <path className="heroicon-ui" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                </svg>
                            </div>
                            <p className="mr-2 text-base font-bold text-gray-800 dark:text-gray-100">Warning</p>
                        </div>
                        <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">Hurricane warning in this area. Please check local media and authorities-NWS</p>
                    </div>
                    {/* <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                        <button className="focus:outline-none mr-8 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs">View</button>
                        <div onClick={() => setFlag(false)} className="cursor-pointer text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                <line x1={18} y1={6} x2={6} y2={18} />
                                <line x1={6} y1={6} x2={18} y2={18} />
                            </svg>
                        </div>
                    </div> */}
                </div>
            </div>
  )
}

Alert.defaultProps = {
  variant: 'info',
}

export default Alert;