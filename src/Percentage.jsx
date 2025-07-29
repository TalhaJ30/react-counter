import React, { useEffect, useState } from "react";
import Message from "./Message";



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
    setadditems(added => added + 1)
    const value1 = Number(obtainedvalue);
    const value2 = Number(totalvalue);
    const mainresult = Math.floor((value1 / value2 * 100));
    setresult(mainresult + '%');
    console.log(mainresult);
    setresultbox(true);
    handlenewitem(obtainedvalue || '?', totalvalue || '?', mainresult || '?');

    if (!obtainedvalue || !totalvalue || (totalvalue) === 0) {
      setresult('Invalid Output');
      return;
    }
  }

  const [mainitem, setmainitem] = useState([])

  const handlenewitem = (obtainedvalue, totalvalue, mainresult) => {
    console.log(`${obtainedvalue} , ${totalvalue} , ${mainresult} is successfully working`);
    const newlist = [
      ...mainitem,
      { total: totalvalue, obtained: obtainedvalue, result: mainresult }
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

  const carddeletebtn = (index) => {
    if (confirm(`Are you sure to delete card number ${index + 1}`)) {
      console.log(`'Card deleted' , ${index}`);
      setmainitem(mainitem.filter((_, i) => i !== index));

      setremoveitems(removed => removed + 1)
    }
    else {
      console.log(`'Card cancel' , ${index}`);
    }



  }

  const [details, setdetails] = useState(false);
  const [additems, setadditems] = useState(0);
  const [removeitems, setremoveitems] = useState(0);
  useEffect(() => {
    if (additems === removeitems) {

      setadditems(0);
      setremoveitems(0);
      // You can add any additional logic here, e.g., show a message or reset counters if needed
    }
    else {

    }
  })
  const detailbtn = () => {
    console.log('hello bhai i am working')


    if (details) {
      setdetails(false)
    }
    else {
      setdetails(true)
    }
  }


  return (
    <>
      <div>
        <h1 className="text-3xl md:text-5xl text-red-500 font-normal text-center mb-8 tracking-tight drop-shadow-lg select-none transition-colors duration-300 hover:text-red-600">
          React Percentage Counter App
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
              className="flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-red-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 focus:rounded-full"
            >
              Calculate
            </button>
            <button
              onClick={() => reset()}
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 focus:rounded-full hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Reset
            </button>


          </div>

          {resultbox &&
            <>
              <div className="w-full mt-1 flex justify-center">
                <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                  <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                    <span className="text-red-400">Result</span> <span className="text-blue-400">=</span> <span className="text-green-400">{result}</span>
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  <div className="grid justify-center items-center md:flex md:justify-between md:items-center mt-1.5 flex-wrap">
                    <h1 className="text-3xl text-pink-600 font-medium text-center">Stored calculation</h1>
                    <button className="border-2 border-orange-600 text-orange-600 font-medium px-4 py-1 rounded-lg shadow-sm transition-all  duration-200 hover:bg-orange-400 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 mt-2.5 mb-2.5 mr-4.5 ml-4.5 md:mr-1 md:ml-1" onClick={() => detailbtn()}>Details</button>
                  </div>
                  {details &&
                    <>
                      <div className=" grid justify-center items-center pt-3">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-gradient-to-r from-blue-50 via-white to-blue-100 rounded-xl shadow-md  border-blue-200 mb-2 transition-all duration-300 hover:scale-105 hover:translate-y-1 border-2 mt-3">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-500 text-xl font-bold shadow">
                              <span className="group relative inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2M12 12v6m-6-6V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5"
                                  />
                                </svg>
                              </span>
                            </span>
                            <span className="text-lg md:text-xl font-semibold text-blue-600">Added items</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg text-gray-500">Total:</span>
                            <span className="text-xl md:text-2xl font-bold text-blue-700 bg-white px-4 py-2 hover:rounded-lg border border-blue-200 shadow-inner min-w-[60px] text-center transition-all duration-200 hover:bg-blue-700 hover:scale-105 rounded-2xl hover:text-white">{additems}</span>

                          </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row items-center mt-3 justify-between gap-4 p-3 bg-gradient-to-r from-green-50 via-white to-green-100 rounded-xl shadow-md  border-green-200 mb-2 transition-all duration-300 hover:scale-105 hover:translate-y-1 border-2">
                          <div className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-500 text-xl font-bold shadow">
                              <span className="group relative inline-block">
                                {/* Delete (Trash) Icon */}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 text-green-500 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22M8 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
                                  />
                                </svg>

                              </span>
                            </span>
                            <span className="text-lg md:text-xl font-semibold text-green-600">Deleted item</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-base md:text-lg text-gray-500">Total:</span>
                            <span className="text-xl md:text-2xl font-bold text-green-700 bg-white px-4 py-2 hover:rounded-lg border border-green-200 shadow-inner min-w-[60px] text-center transition-all duration-200 hover:bg-green-700 hover:scale-105 rounded-2xl hover:text-white">{removeitems}</span>

                          </div>
                        </div>
                      </div>

                    </>
                  }





                </div>

                <div className="grid grid-cols-1 bg-red-50 rounded-2xl pl-2.5 pr-2.5   mt-4">
                  <div className="overflow-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-red-50 h-64" style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "transparent transparent",
                    borderRadius: "1rem",
                    backgroundColor: "transparent",
                  }}>
                    {mainitem.length === 0 && <Message></Message>}
                    {mainitem.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-end items-start relative">
                          <button
                            className="absolute top-2 right-2 border-2 border-red-300 bg-white rounded-full w-9 h-9 flex items-center justify-center text-red-500 font-bold text-2xl hover:bg-red-100 transition hover:rotate-90 duration-200 active:rotate-45"
                            onClick={() => carddeletebtn(index)}
                          >
                            ×
                          </button>
                        </div>
                        <div

                          className="bg-gradient-to-br from-pink-100 via-red-50 to-yellow-100 border-2 border-red-200 rounded-2xl shadow-lg pl-4 pr-4 pt-3.5 pb-3.5 flex flex-col items-center justify-center transition-all duration-300  mb-4 hover:scale-105 hover:shadow-lg mr-5 mt-4 ml-5"
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
                      </div>

                    ))}
                  </div>

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