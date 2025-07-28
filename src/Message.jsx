import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";


const Message = () => {
    
    return (
        <div className="flex items-center justify-center min-h-[250px]">
            <div className="bg-white border-2 border-red-200 rounded-2xl shadow-xl p-3 flex flex-col items-center max-w-md w-full">
                <HiOutlineExclamationCircle className="h-16 w-16 text-red-400 mb-4" />
                <h1 className="text-2xl font-semibold text-red-500 mb-2 text-center">Information cards are empty</h1>
            </div>
        </div>
    )
}

export default Message;