import React, { useState } from "react"
import Inputcounter from "./Inputcounter.jsx"
import Percentage from "./Percentage.jsx";

function App() {

  const [button1 , setbutton1] = useState(true);
  const [button2 , setbutton2] = useState(false);


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
     
    

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border mt-4 mb-4 border-red-200 transition-transform duration-300 hover:scale-[1.02]">
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
          {button1 && <div><Inputcounter></Inputcounter></div> }
          {button2 &&   <div><Percentage></Percentage></div> }
        
        </div>

      </div>

    </div>
  )
}

export default App;
