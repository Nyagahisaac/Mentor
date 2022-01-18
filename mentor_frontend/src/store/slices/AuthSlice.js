/* eslint-disable no-unused-expressions */

/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (values, thunkAPI) => {
    // console.log('reg values', values)
    try {
      // const response = await axios.post('https://demo-mentorproject.herokuapp.com/api/add/User/Record/v1', 
      const response = await axiosClient.post('/add/User/Record/v1',
      {
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        username: values.username,
        phone_number: values.phoneNumber,
        password: values.password,
        account_type: values.accountType,
      });

      let { data } = response;
      // console.log('[Sign up response]', data);
      values.moveToLogin()
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('account', JSON.stringify(data.account))
      localStorage.setItem('personalInfo', JSON.stringify(data.personal_info))
      return response.data
    } catch (e) {
      console.log('[Sign up Error]', e.message);
      return thunkAPI.rejectWithValue(e.message);
      
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (values, thunkAPI) => {
    // console.log('[values sent to login function]', values);
    try {
      const response = await axiosClient.post('/login/v1/', {
        username: values.username,
        password: values.password
      });
      console.log('[Login response]', response.data);
      localStorage.setItem('token', response.data.access);
      localStorage.setItem('refresh token', response.data.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user))
      // localStorage.setItem('account', JSON.stringify(response.data.account))
      // localStorage.setItem('personalInfo', JSON.stringify(response.data.personal_info))
      values.moveToOtp()
      return response.data
    } catch (e) {
      console.log('[Login Error]', e);
      return thunkAPI.rejectWithValue(e.message);
     
    }
  },
);
export const fetchUserByToken = createAsyncThunk(
  'auth/fetchUserByToken',
  async (token, thunkAPI) => {
    try {
      const response = await axiosClient.get('/user');
      let { data } = response;
      console.log('[fetch user response]', data);
    } catch (e) {
      console.log('[fetch user Error]', e.message);
      thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async (values, thunkAPI) => {
    try{
      const token = localStorage.getItem('token')
      console.log('token', token)
      const response = await axiosClient.post('/validate/OTPCode/v1', 
      {otp: values.otp},
      {
        headers: {
          'Authorization' : `Bearer ${token}`
        }
      })
      console.log('[verify otp response]', response.data);
      
      // localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('account', JSON.stringify(response.data.account_info))
      localStorage.setItem('accountType', JSON.stringify(response.data.account_type))
      localStorage.setItem('personalInfo', JSON.stringify(response.data.personal_info))
      values.moveToLanding()
      return response.data

    } catch (e) {
      console.log('[otp verification Error]', e.message);
      thunkAPI.rejectWithValue(e.message);
      localStorage.removeItem('token')
      return e.message
    }
  }
)

// export const setError = () => {
//   dispatch()
// }



export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    personalInfo: {},
    user: {},
    account: {},
    accountType: {}
  },
  reducers: {
    clearState: state => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
    logoutStateClear: state => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.user = {}
      state.account = {}
      state.personalInfo = {}
    },
    getCurrentUser : state => {
      const storedUser = localStorage.getItem('user')
      if(storedUser){
         state.user = JSON.parse(storedUser)
         return state
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase (registerUser.pending, (state) => {
      state.isFetching = true;
    }),
    builder.addCase (registerUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      return state;
    }),
    builder.addCase (registerUser.fulfilled, (state, {payload}) => {
      console.log('payload', payload)
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.personalInfo = payload.personal_info;
      state.account = payload.account;
      return state;
    }),
    builder.addCase (loginUser.pending, (state) => {
      state.isFetching = true;
      return state;
    }),
    builder.addCase (loginUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      return state;
    }),
    builder.addCase (loginUser.fulfilled, (state, { payload }) => {
      // console.log('payload', payload)
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.personalInfo = payload.personal_info;
      return state;
    }),
    builder.addCase (fetchUserByToken.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.username = payload.username;
      state.email = payload.email;
      return state;
    }),
    builder.addCase (fetchUserByToken.pending, (state) => {
      state.isFetching = true;
      return state;
    }),
    builder.addCase (fetchUserByToken.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      return state;
    }), 
    builder.addCase(verifyOTP.pending, (state) => {
      state.isFetching = true;
      return state;
    }),
    builder.addCase(verifyOTP.rejected, (state, {payload}) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload;
      return state;
    }),
    builder.addCase(verifyOTP.fulfilled, (state, {payload}) => {
      console.log('payload', payload)
      state.isFetching = false;
      state.isSuccess = true;
      state.user = payload.user;
      state.personalInfo = payload.personal_info;
      state.accountType = payload.account_type;
      state.account = payload.account_info;
      return state;
    })
  }
});

export const { clearState, logoutStateClear, getCurrentUser } = AuthSlice.actions;

export const authSelector = state => state.auth;
