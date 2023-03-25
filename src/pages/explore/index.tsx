import React from 'react';
import Card from '../../common/card';
import { categories } from '../../utils/config/settings';


const Explore = () => {
    return (
        <div className=''>
            <TopBar />
            <div className=' w-full h-full p-10 flex-col flex items-center bg-bg-dark bg-opacity-5 space-y-5'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};



const TopBar = () => {

    const _render_categories = (item:typeof categories[0]) => {
        return <Category key={item.id} {...item}/>
    };

    return (
        <div className='sticky top-[3.8rem] bg-bg-light top_bar_cateogory w-full flex flex-row items-center  pb-3.5 pt-5   border-b border-gray px-20 space-x-5 overflow-x-auto scroll-smooth'>
                {categories.map(_render_categories)}
        </div>
    )
};

const Category = ({name}:{name:string}) => {
    return (
        <div className='px-5 py-1.5 cursor-pointer bg-bg-dark bg-opacity-10 rounded-full'>
            <span className="font-mono subpixel-antialiased text-sm whitespace-nowrap">{name}</span>
        </div>
    )
};

export default Explore; 