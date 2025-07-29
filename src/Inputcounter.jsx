import React, { useEffect, useState} from "react";
import Message from "./Message";
const Inputcounter = () => {

    // Fix: Initialize all state variables with empty strings to prevent controlled/uncontrolled input issues
    const [number, setnumber] = useState('');
    const [anothernumber, setanothernumber] = useState('');
    const [symboll, setsymboll] = useState('');
    const [result, setresult] = useState('');
    const [show, setshow] = useState(false);
    
    const input_1 = (event) => {
        setnumber(event.target.value)
    }
    const input_2 = (event) => {
        setanothernumber(event.target.value);
    }

    const symbollinput = (event) => {
        setsymboll(event.target.value);
    }

    const resetbtn = () => {
        if (confirm('Are You Sure to Reset Your Data')) {
            console.log('Reset Confirmed');
            setnumber('');
            setanothernumber('');
            setsymboll('');
            setresult('');
            setshow(false);
            setmainitem([]);
            setInitValue(0);
            setdeletevalue(0);

        }
        else {
            console.log('Cancel Confirmed')
        }
    }

    const btn = () => {
        const num1 = Number(number);
        const num2 = Number(anothernumber);
        setshow(true);
        let result;

        if (symboll === "+") {
            result = num1 + num2;
        } else if (symboll === "-") {
            result = num1 - num2;
        } else if (symboll === "*") {
            result = num1 * num2;
        } else if (symboll === "/") {
            result = num1 / num2
        } else if (symboll === "**") {
            result = num1 ** num2
        }
        else {
            result = "Invalid Output";
        };

        setresult(`${result}`);
       
        handlenewitem(number || '?', anothernumber || '?', symboll || '?', result || '?');

      
        if (!number  || !anothernumber || !symboll  === 0) {
        
            setresult('hello bhai');
            return;
            
          }
        setInitValue(Infinite => Infinite + 1);
    }

    const [mainitem, setmainitem] = useState([]);

    const handlenewitem = (number, anothernumber, symboll, result) => {
        console.log(`${number},${symboll},${anothernumber},${result}`);
        const listitem = [
            ...mainitem,
            { num1: number, symboll: symboll, num2: anothernumber, result: result }
        ];
        setmainitem(listitem);
    }

    const btnone = () => {
        setsymboll('+');
    }
    const btntwo = () => {
        setsymboll('-');
    }
    const btnthree = () => {
        setsymboll('/');
    }
    const btnfour = () => {
        setsymboll('*');
    }
    const btnfive = () => {
        setsymboll('**');
    }
    const DELbtn = (index) => {

        if (confirm(`Are you sure to delete item number ${index + 1}`)) {
           
            setmainitem(mainitem.filter((_, i) => i !== index));
            setdeletevalue(deletevalue => deletevalue + 1);
        }
        else {
            console.log(`You have cancel the item number ${index} `)
        }
    }

    const [initValue, setInitValue] = useState(0);
    const [deletevalue , setdeletevalue] = useState(0);
    const [details, setdetails] = useState(false); 
    
    useEffect(() => {
        if (initValue === deletevalue) {
           setInitValue(0);
           setdeletevalue(0);
        }
        else{
       
        }
    })

    const init = () => {
        if (details) {
            setdetails(false);
        } else {
            setdetails(true);
        }
    };

    return (
        <>

            <h1 className="text-3xl md:text-5xl text-red-500 font-normal text-center mb-8 tracking-tight drop-shadow-lg select-none transition-colors duration-300 hover:text-red-600">
                React Input Counter App
            </h1>
            <div className="flex flex-col gap-6 pl-0 pr-0">
                {/* 
                  Issue: The input type is "number", which means if the field is empty, its value will be an empty string (""), not 0. 
                  This can cause issues in validation logic if you check for num1 == 0, because an empty string is falsy but not equal to 0.
                  Also, using == 0 to check for "empty" is not robust for user input.
                  Solution: Consider checking for empty string or using Number(number) === 0 if you want to check for zero.
                */}
                <input
                    type="number"
                    value={number}
                    onChange={(event) => input_1(event)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300 focus:rounded-xl"
                    placeholder="Enter a number"
                />
                <input
                    type="text"
                    value={symboll}
                    onChange={(event) => symbollinput(event)}
                    className="w-full px-4 py-3 border border-gray-300
                     rounded-lg focus:outline-none focus:rounded-2xl focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                    placeholder="Symbols + - / * **" readOnly
                />
                <div className="flex gap-3 justify-center my-2 flex-wrap">
                    <button
                        className=" focus:rounded-xl bg-red-100 text-red-600 font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 text-2xl focus:ring-red-300"
                        onClick={() => btnone()}
                    >+</button>
                    <button
                        className="focus:rounded-xl bg-red-100 text-red-600 font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 text-2xl"
                        onClick={() => btntwo()}
                    >-</button>
                    <button
                        className="focus:rounded-xl bg-red-100 text-red-600 font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 text-2xl"
                        onClick={() => btnthree()}
                    >/</button>
                    <button
                        className="focus:rounded-xl bg-red-100 text-red-600 font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 text-2xl"
                        onClick={() => btnfour()}
                    >*</button>
                    <button
                        className="focus:rounded-xl bg-red-100 text-red-600 font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 text-2xl"
                        onClick={() => btnfive()}
                    >**</button>
                </div>
                <input
                    type="number"
                    value={anothernumber}
                    onChange={(event) => input_2(event)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300 focus:rounded-2xl"
                    placeholder="Enter another number"
                />
                <div className="flex gap-4 mt-2">
                    <button

                        className="flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-red-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 focus:rounded-full"
                        onClick={() => btn()}          >
                        Show Sum
                    </button>
                    <button
                        onClick={(event) => resetbtn(event)}
                        className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:rounded-full">
                        Reset
                    </button>


                </div>
                {show &&
                    <>
                        <div className="w-full mt-1 flex justify-center">
                            <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                                <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                                    Result = {result}
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="grid justify-center items-center md:flex md:justify-between md:items-center mt-1.5 flex-wrap">
                                <h1 className="text-3xl text-red-600 font-medium text-center">Stored calculation</h1>
                                <button className="border-2 border-red-600 text-red-600 font-medium px-4 py-1 rounded-lg shadow-sm transition-all  duration-200 hover:bg-red-400 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 mt-2.5 mb-2.5 mr-4.5 ml-4.5 md:mr-1 md:ml-1" onClick={init}>Details</button>
                            </div>
                            {details &&
                                <>
                                    <div className=" grid justify-center items-center pt-3">
                                        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 p-3 bg-gradient-to-r from-red-50 via-white to-red-100 rounded-xl shadow-md  border-red-200 mb-2 transition-all duration-300 hover:scale-105 hover:translate-y-1 border-2 mt-3">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 text-xl font-bold shadow">
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
                                                <span className="text-lg md:text-xl font-semibold text-red-600">Added items</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base md:text-lg text-gray-500">Total:</span>
                                                <span className="text-xl md:text-2xl font-bold text-red-700 bg-white px-4 py-2 hover:rounded-lg border border-red-200 shadow-inner min-w-[60px] text-center transition-all duration-200 hover:bg-red-700 hover:scale-105 rounded-2xl hover:text-white">{initValue}</span>
                                                
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col md:flex-row items-center mt-3 justify-between gap-4 p-3 bg-gradient-to-r from-red-50 via-white to-red-100 rounded-xl shadow-md  border-red-200 mb-2 transition-all duration-300 hover:scale-105 hover:translate-y-1 border-2">
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-500 text-xl font-bold shadow">
                                                    <span className="group relative inline-block">
                                                        {/* Delete (Trash) Icon */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5 text-red-500 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"
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
                                                <span className="text-lg md:text-xl font-semibold text-red-600">Deleted item</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-base md:text-lg text-gray-500">Total:</span>
                                                <span className="text-xl md:text-2xl font-bold text-red-700 bg-white px-4 py-2 hover:rounded-lg border border-red-200 shadow-inner min-w-[60px] text-center transition-all duration-200 hover:bg-red-700 hover:scale-105 rounded-2xl hover:text-white">{deletevalue}</span>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </>

                            }


                        </div>

                        <div className="mt-1 ">
                            <div className={`border-2 h-auto w-auto  border-red-300 rounded-xl pt-0.5 pb-0.5 pr-1 bg-red-50 `}>
                                <div className={`${mainitem.length <= 3 ? 'p-4' : 'p-4 h-96 overflow-auto scrollbar-thin scrollbar-thumb-red-200 scrollbar-track-red-50'}`}
                                    style={{
                                        scrollbarWidth: "thin",
                                        scrollbarColor: "#fecaca #fff1f2",
                                        borderRadius: "1rem",
                                        /* Custom scrollbar styles for border-radius 50% */
                                        scrollbarTrackColor: "#fff1f2",
                                    }}
                                >
                                    {mainitem.length === 0 && <Message></Message>}
                                
                                    {mainitem.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`border-b-2 border-red-200 last:border-b-0 py-2 px-3 flex items-center justify-between bg-white rounded-lg shadow-sm mb-3 transition-all duration-200 hover:bg-red-100 hover:scale-105 hover:shadow-md flex-wrap  `}
                                        >
                                            <h3 className="text-lg font-medium text-red-400 transition-colors duration-200 hover:text-red-400 text-center flex-wrap">
                                                <span className="text-red-400 border-2 border-red-200 rounded-full pl-1 pr-1">{index + 1}</span> <span className="text-blue-400">:</span> <span className="text-red-500">{item.num1}</span> <span className="font-medium text-blue-400">{item.symboll}</span> <span className="text-red-500">{item.num2}</span> <span className="text-blue-400">=</span> <span className="text-red-500">{item.result}</span>
                                            </h3>
                                            <div>
                                                <button
                                                    className="bg-red-200 text-red-600 font-medium px-4 py-1 rounded-lg shadow-sm transition-all duration-200 hover:bg-red-400 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 mt-2.5 mb-2.5 mr-1 ml-4.5" onClick={() => DELbtn(index)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        </div>
                    </>

                }



            </div>

        </>
    )
}

export default Inputcounter;