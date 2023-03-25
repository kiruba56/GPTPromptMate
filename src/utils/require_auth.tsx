import React from 'react';
// import { useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
// import { on_user_logout } from '../db/redux/features/auth/auth.slice';
import { create_path, default_path, explore_path } from './config/path';
// import { useAuth } from './providers/auth.provider';



const paths:any[string] = [default_path,explore_path,create_path];

function RequireAuth({ children,replace }: { children?: JSX.Element|null,replace?:string }):any {
    // let auth = useAuth();
    let location = useLocation();
    // const dispatch = useDispatch();

    // const _logout = () => {
    //   try{
    //          dispatch(on_user_logout());
    //      }catch(e){}
    //  };

    // if(auth.user?.uid&&onboarding_paths.includes(location.pathname)){
    //   return <Navigate to={default_path} state={{ from: location }}  replace />;
    // };
    // if (!auth.user?.uid&&!onboarding_paths.includes(location.pathname)) {
    //   return <Navigate to="/login" state={{ from: location }} replace />;
    // };


    // if(!paths.includes(location.pathname)){
    //   return <Navigate to={explore_path} state={{ from: location }}  replace />;
    // };

    if(replace){
      return <Navigate to={`${replace}`} state={{ from: location }}  replace />;
    }
    if(!children){
      return <div/>
    };
    return children;
};


export default RequireAuth;