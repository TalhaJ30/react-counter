import React, { useState } from "react";




const Percentage = () => {
    const [obtainedvalue, setobtainedvalue] = useState('');
    const [totalvalue, settotalvalue] = useState('');
    const [result, setresult] = useState('');   
    const [resultbox, setresultbox] = useState(false);

    const inpone = (event) => {
        console.log(event.target.value);
        setobtainedvalue(event.target.value);
    }
    const inptwo = (event) => {
        settotalvalue(event.target.value);
        console.log(event.target.value);
    }

    const btn = () => {

        const value1 = Number(obtainedvalue);
        const value2 = Number(totalvalue);
        const mainresult = Math.floor((value1 / value2 * 100));
        setresult(mainresult + '%');
        console.log(mainresult);
        setresultbox(true)
        if (!obtainedvalue || !totalvalue || (totalvalue) === 0) {
            setresult('Invalid input');
            return;
        }
    }
    const reset = () => {

        if (confirm('Are you sure to reset your data')) {
            setresult('');
            settotalvalue('');
            setobtainedvalue('');
            setresultbox(false);
            console.log('successfully reset');
        }
        else {
            console.log('Cancel reset')
        }




    }

    return (
        <>
            <div>
                <h1 className="text-3xl md:text-5xl text-red-500 font-normal text-center mb-8 tracking-tight drop-shadow-lg select-none transition-colors duration-300 hover:text-red-600">
                    React Percentage Counter
                </h1>
                <div className="flex flex-col gap-6">
                    <input
                        value={obtainedvalue}
                        type="number"
                        onChange={(event) => inpone(event)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                        placeholder="Enter the obtained"
                    />

                    <input
                        value={totalvalue}
                        type="number"
                        onChange={(event) => inptwo(event)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                        placeholder="Enter the total value"
                    />
                    <div className="flex gap-4 mt-2">
                        <button
                            onClick={() => btn()}
                            className="flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-red-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                            Calculate
                        </button>
                        <button
                            onClick={() => reset()}
                            className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Reset
                        </button>


                    </div>

                    {resultbox &&
                        <div className="w-full mt-1 flex justify-center">
                            <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                                <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                                    Result = {result}
                                </p>
                            </div>
                        </div>
                    }



                </div>
            </div>
        </>
    )
}

export default Percentage;