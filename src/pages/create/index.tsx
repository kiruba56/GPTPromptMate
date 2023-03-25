import React from 'react';
import Card from '../../common/card';


const Create = () => {
    return (
       <div className='w-full h-[95%]'>

             <div className='p-44 py-10 bg-bg-dark bg-opacity-5 w-full h-full overflow-hidden'>

                <div className='flex flex-row justify-between h-full space-x-3'>

                    <div className='w-3/12 border bg-bg-light h-full rounded-lg'>

                    </div>

                    <div className='w-9/12  space-y-3 flex flex-col'>
                            <div className='!h-60 bg-bg-light border rounded-lg'>

                            </div>

                            <div className='w-full border p-10 rounded-lg flex flex-col items-center space-y-5 overflow-scroll'>
                                <Card w/>
                                <Card w/>
                            </div>

                    </div>
                </div>

            </div>

       </div>
    );
};


export default Create;