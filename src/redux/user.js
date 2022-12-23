import { createSlice } from '@reduxjs/toolkit'

export const getUser = () => {
  return localStorage.getItem('user_profile_meta') ? JSON.parse(localStorage.getItem('user_profile_meta')) : null;
}
export const getToken = () => {
  return localStorage.getItem('user_profile_meta') ? localStorage.getItem('authT') || null : null;
}


const initialState = {
  email: "",
  loggedin: getToken() !== null,
  token: getToken(),
  password: '',
  user: getUser(),
  balance: getUser()?.walletbalance
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => initialState,
    updateBalance: (state, action) => {
      userSlice.caseReducers.reset();
      state.balance = action.payload;
      var new_balance = action.payload;
      let profile = JSON.parse(localStorage.getItem('user_profile_meta'));
      profile.walletbalance = new_balance;
      state.user = profile;
      localStorage.setItem('user_profile_meta',JSON.stringify(profile))
    },
    saveUser: (state, action) => {
      state.user = JSON.parse(action.payload)
      state.loggedin = true
      state.token = JSON.parse(action.payload).token
      localStorage.setItem('authT',JSON.parse(action.payload).token);
      localStorage.setItem('user_profile_meta', action.payload)
    },
    logoutUser: (state, action) => {
      userSlice.caseReducers.reset();
      state.token = '';
      state.loggedin = false;
      localStorage.removeItem('user_profile_meta');
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,updateBalance, logoutUser, saveUser } = userSlice.actions

export default userSlice.reducer