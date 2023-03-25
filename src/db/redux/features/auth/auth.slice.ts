import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthState } from '../../../../utils/types/auth';

const initialState: IAuthState = {
    uid:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    on_user_login: (state, action: PayloadAction<IAuthState>) => {
        state.uid = action.payload.uid;
    },
    on_user_logout: (state) => {
        state.uid = null;
    }
  },
});

// Action creators are generated for each case reducer function
export const { on_user_login,on_user_logout } = authSlice.actions;

export default authSlice.reducer;


