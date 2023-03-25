import React from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../db/redux/store';
import { AuthContextType,IAuthState } from '../types/auth';
import { on_user_login, on_user_logout } from '../../db/redux/features/auth/auth.slice';
import Header from '../../common/header';




const AuthContext = React.createContext<AuthContextType>(null!);


const _user_ = createSelector((state:RootState)=>state.auth,(auth)=>auth);

function AuthProvider({children}:{children:React.ReactNode}) {

    const user = useSelector(_user_);
    const dispatch = useDispatch();




    const login = async(user: IAuthState):Promise<boolean> =>{
        return new Promise((resolve,reject)=>{
            // localStorage.setItem("tokens",JSON.stringify({token:user.token,refreshToken:user.refreshToken}));
            dispatch(on_user_login(user));
            resolve(true);
        });
    };  

    const signout = async():Promise<boolean> => {
        return new Promise(async(resolve,reject)=>{
            // axios.defaults.headers.common['Authorization'] = '';
            dispatch(on_user_logout());
            // localStorage.removeItem("tokens");
            resolve(true);
        });
    };


    const value = { user, login, signout };
    return (
      <AuthContext.Provider value={value}>
      
          <div className={`w-full h-full bg-bg-light`}>
              <Header />
              {children}
          </div>
         
      </AuthContext.Provider>
    );
};

function useAuth(){
  return React.useContext(AuthContext);
};
  
export default AuthProvider;
export { useAuth };