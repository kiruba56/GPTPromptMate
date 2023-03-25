import React from 'react';

const Card = ({w}:{w?:boolean}) => {
    return (
        <div className={`border  p-5 rounded-md shadow-sm ${w?'w-[60%]':'w-[38%]'} bg-white`}>

            <div className='flex flex-row items-center justify-between pb-2.5 border-b mb-5 border-gray'>

                <h1 className='font-mono text-lg font-bold subpixel-antialiased'>Write App features</h1>

                <div className='flex flex-row space-x-3'>
                    <div className='px-2.5 py-1 cursor-pointer bg-bg-dark bg-opacity-10 rounded-full self-start'>
                            <span className="font-mono subpixel-antialiased text-sm whitespace-nowrap">💻 Development</span>
                    </div>
                    <div className='bg-opacity-10 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
                        <span className='text-sm'>✍️</span>
                    </div>
                </div>
              
                
            </div>

            <span className='font-mono text-md whitespace-pre-line break-normal subpixel-antialiased'>
                {`Write [number] app feature ideas to improve user experience and increase user retention for our agency's mobile app.

                Context:
                Target audience — [your target audience here]
                What our app does — [your app elevator pitch here]
                Current app features — [list current app features here]`}
            </span>

            <div className='border-t border-gray pt-2.5 mt-5 flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center space-x-2'>
                    {/* <div className='bg-bg-dark bg-opacity-10 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
                    </div> */}
                    <div className='bg-bg-dark bg-opacity-10 rounded-2xl py-1.5 space-x-1 px-3 justify-center items-center cursor-pointer flex flex-row '>
                        <span className='font-mono text-sm'>10</span>
                        <span className='text-sm'>🔥</span>
                    </div>
                </div>
          

                <div className='flex items-center justify-center bg-highlight rounded-full px-8 py-2 cursor-pointer'>
                    <span className='text-white font-mono text-md font-medium subpixel-antialiased'>💾 Copy</span>
                </div>
                
            </div>

        </div>
    )
};


export default Card;