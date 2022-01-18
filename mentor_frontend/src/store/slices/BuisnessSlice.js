/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';


export const submitUserInfo = createAsyncThunk(
    'buisness/submitUserInfo',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/something', 
            {values},
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[verify otp response]', response.data);
            return response.data
        }
        catch(e) {
            console.log('[submit user info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const submitBuinessInfo = createAsyncThunk(
    'buisness/submitBuinessInfo',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/something', 
            {values},
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[employee response]', response.data);
            return response.data
        }
        catch(e) {
            console.log('[employee info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const submitAccountInfo = createAsyncThunk(
    'buisness/submitAccountInfo',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/something', 
            {values},
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[next of kin response]', response.data);
            return response.data
        }
        catch(e) {
            console.log('[next of kin info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const submitRemittanceInfo = createAsyncThunk(
    'buisness/submitRemittanceInfo',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/something', 
            {values},
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[remittance response]', response.data);
            return response.data
        }
        catch(e) {
            console.log('[remittance info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const completeRegistration = createAsyncThunk(
    'buisness/completeRegistration',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/create/MemberAccountDetail/v1', 
            {
                ...values.values
            },
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[complete response]', response.data);
            values.moveToLanding()
            return response.data
        }
        catch(e) {
            console.log('[complete info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const BuisnessSlice = createSlice({
    name: 'buisness',
    initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    personalInfo: [],
    buisnessInfo: {},
    accountInfo: {},
    remittanceInfo: {}
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.personalInfo(action.payload)
        },

        addBuisnessInfo: (state, action) => {
            state.buisnessInfo = action.payload
        },

        addAccountInfo: (state, action) => {
            state.accountInfo = action.payload           
        },
        addRemittance: (state, action) => {
            state.remittanceInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(completeRegistration.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(completeRegistration.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(completeRegistration.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.data = payload;
            return state;
        })     
    }
          
})

// export const { submitUserInfo } = TscSlice.actions;

export const { addUserInfo, addAccountInfo, addRemittance, addBuisnessInfo } = BuisnessSlice.actions

export const buisnessSelector = state => state.buisness;