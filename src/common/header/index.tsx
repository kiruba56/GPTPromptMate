import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { create_path, explore_path } from "../../utils/config/path";

const Header = () => {
    return (
        <div className="sticky top-0 bg-bg-light w-full flex flex-row justify-between items-center p-5 pb-3 border-b border-gray px-10">
            <img src={require('../../assets/logo/logo.png')} className="w-7 h-7" />
            <Tabs />
            <Profile />
        </div>

    );
};  



const tabs = [{id:explore_path,title:'🏠 Explore'},{id:create_path,title:'🖋️ Create'}];

const Tabs = () => {

    const location = useLocation();


    const [selected,setSelected] = useState(location.pathname);

    useEffect(()=>{
        setSelected(location.pathname);
    },[location.pathname])

    // const _set_selected = (id:string) => {
    //     // setSelected(id);
    // };

    const _render_tabs = (x:typeof tabs[0]) => {
        // onChange={_set_selected}
       return <Option id={x.id} selected={selected===x.id} title={x.title} key={x.id}/>
    };

    return (
        <div className="self-center flex flex-row items-end !-mb-5">
                {tabs.map(_render_tabs)}
        </div>
    )
};

const Option = React.memo(({title,selected,id,onChange}:{id:string,onChange?:(id:string)=>void,selected?:boolean, title:string}) => {

    // const _on_click = () => {
    //     onChange(id);
    // };

    return (
        <Link to={id}  className={`pb-2 flex items-center flex-row cursor-pointer  px-10 border-b-2 ${selected?'border-bg-dark':'border-transparent'}`}>
            <span className={`font-mono subpixel-antialiased text-md ${selected?' text-highlight':''}`}>{title}</span>
        </Link>
    )
});


const Profile = () => {
    return (
        <div className="rounded-full cursor-pointer">
                <img className="w-7 h-7" src={require('../../assets/icons/user.png')}/>
        </div>
    )
};

export default Header;