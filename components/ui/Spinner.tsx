// Spinner.jsx
import React from "react";

const Spinner = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="animate-spin rounded-full border-4 border-t-transparent border-primary-500 h-16 w-16"></div>
        </div>
    );
};

export default Spinner;
