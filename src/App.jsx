import React, { useState } from "react"
import Inputcounter from "./Inputcounter.jsx"
import Percentage from "./Percentage.jsx";

function App() {

  const [button1 , setbutton1] = useState(false);
  const [button2 , setbutton2] = useState(true);

  const symbollinput = (event) => {
    setsymboll(event.target.value);
  }

  const reactC = () => {
    console.log('react counter button clicked');
    setbutton1(true);
    setbutton2(false);
  }
  const perbtn = () => {
    console.log('percentage button clicked');
    setbutton1(false);
    setbutton2(true);
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 grid items-center justify-center p-4">
     
    
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
    } else {
      result = "Invalid Output";

    };

    setresult(`Result: ${result}`);
    console.log(`${number} ${symboll} ${anothernumber} = ${result}`);

    if (num1 == 0) {
      setshow(false);
      console.log('num1 is empty');
       alert('1:First Input is Empty');
      setanothernumber('');
      setsymboll('');
     } 
    else{
      console.log('num1 no');
      
    }
     if (symboll == 0) {
       setshow(false);
      console.log('symboll input is empty');
      alert('2:Symboll Input is Empty');
      setanothernumber('');
      setnumber('');
    }
    else{
      console.log('symboll no')
     
    }
    if (num2 == 0) {
      setshow(false);
      console.log('num2 input is empty');
      alert('3:Third Input is Empty');
      setnumber('');
      setsymboll('');
    
    }
    else{
      console.log('num2 no');
      
    }

  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-red-200 transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex justify-center gap-4 mb-5 flex-wrap">
          <button
          onClick={() => reactC()}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 border-2 focus:outline-none shadow-sm text-sm sm:text-base bg-white text-red-500 border-red-200 hover:bg-red-500 hover:text-white hover:scale-105"
          >   
            Counter
          </button>
          <button
             onClick={() => perbtn()}
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 border-2 focus:outline-none shadow-sm text-sm sm:text-base bg-white text-red-500 border-red-200 hover:bg-red-500 hover:text-white hover:scale-105"
          >
            Percentage
          </button>
        </div>
        <div>
          {button1 &&  <Inputcounter></Inputcounter>}
          {button2 &&    <Percentage></Percentage>}
        
              className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg shadow-md transition-all duration-200 hover:bg-gray-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Reset
            </button> */}
          </div>
          {show &&
            <div className="w-full mt-1 flex justify-center">
              <div className="w-full max-w-xs bg-red-50 border border-red-200 rounded-xl shadow-md p-4 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                <p className="text-xl md:text-2xl font-medium text-red-600 text-center break-words">
                  {result}
                </p>
              </div>
            </div>
          }

          {/* {showSum && (
            <div className="mt-6 text-center animate-fade-in">
              <span className="text-2xl font-bold text-red-500 drop-shadow-md">Sum: {value1 + value2}</span>
            </div>
          )} */}
        </div>
      </div>
      {/* <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease;
        }
      `}</style> */}
    </div>
  )
}
        <div>
          {button1 &&  <Inputcounter></Inputcounter>}
          {button2 &&    <Percentage></Percentage>}
        
        </div>
