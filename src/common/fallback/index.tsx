import React from 'react';

const Fallback  = () => {
    return (
        <div className={`w-full h-full flex justify-center items-center`}>
               <img src={require('../../assets/logo/logo.png')} className="w-7 h-7 animate-pulse" />
        </div>
    )
};

export default Fallback;