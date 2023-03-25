import React from 'react';
import { Routes, Route,BrowserRouter, useLocation,useNavigationType,createRoutesFromChildren,matchRoutes, Navigate } from "react-router-dom";


import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import firebase from './utils/config/firebase';
import AuthProvider from './utils/providers/auth.provider';
import { create_path, default_path, explore_path } from './utils/config/path';
import AuthWithSuspenseWrapper from './utils/wrapper/AuthWithSuspenseWrapper';


const Explore = React.lazy(()=>import('./pages/explore'));
const Create = React.lazy(()=>import('./pages/create'));



const _fb_app_ = initializeApp(firebase);
const analytics = getAnalytics(_fb_app_);


const App = () => {
  return (
          <BrowserRouter>
                    <AuthProvider>
                            <ApppRoutes />
                    </AuthProvider>
          </BrowserRouter>
  );
};  


const ApppRoutes = () => {

        return (
                <Routes>
                       <Route path={explore_path} element={AuthWithSuspenseWrapper(Explore)} /> 
                       <Route path={create_path} element={AuthWithSuspenseWrapper(Create)} /> 
                       <Route path='*' element={<Navigate to={explore_path}/>}/>
                 </Routes>
    
        )
};


export {_fb_app_};
export default App;