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
        setresultbox(true);
        handlenewitem(obtainedvalue, totalvalue ,mainresult);

        if (!obtainedvalue || !totalvalue || (totalvalue) === 0) {
            setresult('Invalid Output');
            return;
        }
    }

   const [mainitem , setmainitem] = useState([])

    const handlenewitem = (obtainedvalue, totalvalue , mainresult) => {
        console.log(`${obtainedvalue} , ${totalvalue} , ${mainresult} is successfully working`);
          const  newlist = [
            ...mainitem,
            {total:totalvalue , obtained:obtainedvalue , result : mainresult}
          ];
          setmainitem(newlist)
    }

    const reset = () => {

        if (confirm('Are you sure to reset your data')) {
            setresult('');
            settotalvalue('');
            setobtainedvalue('');
            setresultbox(false);
            console.log('successfully reset');
            setmainitem([]);

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
                        className="w-full px-4 py-3 border border-red-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 focus:rounded-xl hover:transition-all placeholder:text-red-300"
                        placeholder="Enter the obtained"
                    />

                    <input
                        value={totalvalue}
                        type="number"
                        onChange={(event) => inptwo(event)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300 focus:rounded-xl hover:transition-all"
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
                        <>
                            <div className="w-full mt-1 flex justify-center">
                                <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                                    <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                                        Result = {result}
                                    </p>
                                </div>
                            </div>
                            <div>
                              <div className="grid grid-cols-1   mt-4">
                                {mainitem.map((item, index) => (
                                  <div
                                    key={index}
                                    className="bg-gradient-to-br from-pink-100 via-red-50 to-yellow-100 border-2 border-red-200 rounded-2xl shadow-lg pl-4 pr-4 pt-3.5 pb-3.5 flex flex-col items-center justify-center transition-all duration-300  mb-4 hover:scale-105 hover:shadow-2xl"
                                  >
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-l md:text-xl bg-red-400 text-white px-2 py-0.5 rounded-full shadow-sm font-bold tracking-widest">
                                        #{index + 1}
                                      </span>
                                    </div>
                                    <div className="flex flex-col items-center w-full">
                                      <div className="flex items-center flex-wrap w-full justify-between border-2 border-red-300 pl-1.5 rounded-xl pr-1.5 transition-all duration-200 hover:bg-pink-100 hover:border-pink-200 hover:scale-105 hover:shadow-md mt-1">
                                        <span className="text-xl font-semibold text-pink-600 pl-1 pt-1 pb-1">
                                          Obtained:
                                        </span>
                                        <span className="text-xl font-bold text-pink-500 break-words max-w-full pr-1 pt-1 pb-1">
                                          {item.obtained}
                                        </span>
                                      </div>
                                      <div className="flex items-center flex-wrap w-full justify-between mt-2 border-2 border-red-300 rounded-xl pl-1.5 pr-1.5 transition-all duration-200 hover:bg-orange-100 hover:border-orange-200 hover:scale-105 hover:shadow-md">
                                        <span className="text-xl font-semibold text-orange-500 pl-1 pt-1 pb-1">
                                          Total:
                                        </span>
                                        <span className="text-xl font-bold text-orange-500 break-words max-w-full pr-1 pt-1 pb-1">
                                          {item.total}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="w-full border-1 rounded-full border-red-200 my-3"></div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-base font-medium text-gray-500">
                                        Percentage:
                                      </span>
                                      <span className="text-2xl font-extrabold text-green-500 drop-shadow-lg">
                                        {item.result}%
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                        </>

                    }



                </div>
            </div>
        </>
    )
}

export default Percentage;