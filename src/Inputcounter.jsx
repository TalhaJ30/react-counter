import React, { useState } from "react";

const Inputcounter = () => {

    const [number, setnumber] = useState();
    const [anothernumber, setanothernumber] = useState();
    const [symboll, setsymboll] = useState();
    const [result, setresult] = useState();
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
            setshow(false);

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
        console.log(`${number} ${symboll} ${anothernumber} = ${result}`);

        if (num1 == 0) {
            setshow(false);
            console.log('num1 is empty');
            alert('1:First Input is Empty');
            setanothernumber('');
            setsymboll('');
        }
        else {
            console.log('num1 no');

        }
        if (symboll == 0) {
            setshow(false);
            console.log('symboll input is empty');
            alert('2:Symboll Input is Empty');
            setanothernumber('');
            setnumber('');
        }
        else {
            console.log('symboll no')

        }
        if (num2 == 0) {
            setshow(false);
            console.log('num2 input is empty');
            alert('3:Third Input is Empty');
            setnumber('');
            setsymboll('');

        }
        else {
            console.log('num2 no');

        }

    }


    return (
        <>

            <h1 className="text-4xl md:text-5xl text-red-500 font-normal text-center mb-8 tracking-tight drop-shadow-lg select-none transition-colors duration-300 hover:text-red-600">
               React Input Counter 
            </h1>
            <div className="flex flex-col gap-6">
                <input
                    type="number"
                    value={number}
                    onChange={(event) => input_1(event)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                    placeholder="Enter a number"
                />
                <input
                    type="text"
                    value={symboll}
                    onChange={(event) => symbollinput(event)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                    placeholder="Select The Any Symbol For Calculation"
                />
                <input
                    type="number"
                    value={anothernumber}
                    onChange={(event) => input_2(event)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out hover:border-red-400 hover:shadow-lg text-lg bg-red-50 placeholder:text-red-300"
                    placeholder="Enter another number"
                />
                <div className="flex gap-4 mt-2">
                    <button

                        className="flex-1 bg-red-400 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-red-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300"
                        onClick={() => btn()}          >
                        Show Sum
                    </button>
                    <button
                        onClick={(event) => resetbtn(event)}
                        className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        Reset
                    </button>


                </div>
                {show &&
                    <div className="w-full mt-1 flex justify-center">
                        <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                            <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                                Result = {result}
                            </p>
                        </div>
                    </div>
                }


            </div>

        </>
    )
}

export default Inputcounter;