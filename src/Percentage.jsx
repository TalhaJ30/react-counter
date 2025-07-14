import React from "react";

const Percentage = () => {

  const inpone = (event) => {
    console.log(event.target.value)
  }
  const inptwo = (event) => {
    console.log(event.target.value)
  }

    return (
        <>
            <div>
                <h1 className="text-4xl md:text-5xl text-red-500 font-normal text-center mb-8 tracking-tight drop-shadow-lg select-none transition-colors duration-300 hover:text-red-600">
                    React Percentage Counter
                </h1>
                <div className="flex flex-col gap-6">
                    <input
                        type="Obtained"
                        onChange={(event) => inpone(event)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                        placeholder="Enter the obtained"
                    />

                    <input
                        type="Total"
                        onChange={(event) => inptwo(event)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                        placeholder="Enter the total value"
                    />
                    <div className="flex gap-4 mt-2">
                        <button

                            className="flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-red-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                            Show Sum
                        </button>
                        <button

                            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Reset
                        </button>


                    </div>
                  


                </div>
            </div>
        </>
    )
}

export default Percentage;