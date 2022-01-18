/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';


export const submitUserInfo = createAsyncThunk(
    'tsc/submitUserInfo',
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
            console.log('[user info response]', response.data);
            return response.data
        }
        catch(e) {
            console.log('[submit user info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const submitEmploymentInfo = createAsyncThunk(
    'tsc/submitEmploymentInfo',
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

export const submitNextOfKinInfo = createAsyncThunk(
    'tsc/submitNextOfKinInfo',
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
    'tsc/submitRemittanceInfo',
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

export const submitData = createAsyncThunk(
    'tsc/submitRemittanceInfo',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/create/MemberAccountDetail/v1', 
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
    'tsc/completeRegistration',
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

export const TscSlice = createSlice({
    name: 'tsc',
    initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    personalInfo: {},
    employmentInfo: {},
    nextOfKinInfo: [],
    remittanceinfo: {},
    data: []
    },

    reducers: {
        addUserInfo: (state, action) => {
            console.log('personal info', action.payload)
            state.personalInfo = action.payload.data
            localStorage.setItem('tscPersonalinfo', action.payload.data)
            action.payload.moveToNext(1)
            return state
        },

        addEmploymentInfo: (state, action) => {
            console.log('employment info', action.payload)
            state.employmentInfo = action.payload.data
            localStorage.setItem('tscEmploymentinfo', action.payload.data)
            action.payload.moveToNext(2)
            return state
        },

        addNextOfKin: (state, action) => {
            state.nextOfKinInfo = action.payload.data           
            localStorage.setItem('tscnextofkininfo', action.payload.data)
            action.payload.moveToNext(3)
            return state
        },
        addRemittance: (state, action) => {
            state.remittanceinfo = action.payload
            localStorage.setItem('tscRemitanceInfo', action.payload)
            return state
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

export const { addUserInfo, addNextOfKin, addRemittance, addEmploymentInfo } = TscSlice.actions;

export const tscSelector = state => state.tsc;



    // builder.addCase(submitUserInfo.pending, (state) => {
    //     state.isFetching = true;
    //     return state;
    // }),
    // builder.addCase(submitUserInfo.rejected, (state, { payload }) => {
    //     state.errorMessage = payload;
    //     state.isError = true;
    //     state.isFetching = false;
    //     state.isSuccess = false;
    //     return state;
    // }),
    // builder.addCase(submitUserInfo.fulfilled, (state, { payload }) => {
    //     state.isFetching = false;
    //     state.isSuccess = true;
    //     state.personalInfo = payload;
    //     return state;
    // }),
    // builder.addCase(submitEmploymentInfo.pending, (state) => {
    //     state.isFetching = true;
    //     return state;
    // }),
    // builder.addCase(submitEmploymentInfo.rejected, (state, { payload }) => {
    //     state.errorMessage = payload;
    //     state.isError = true;
    //     state.isFetching = false;
    //     state.isSuccess = false;
    //     return state;
    // }),
    // builder.addCase(submitEmploymentInfo.fulfilled, (state, { payload }) => {
    //     state.isFetching = false;
    //     state.isSuccess = true;
    //     state.employmentInfo = payload;
    //     return state;
    // }),
    // builder.addCase(submitNextOfKinInfo.pending, (state) => {
    //     state.isFetching = true;
    //     return state;
    // }),
    // builder.addCase(submitNextOfKinInfo.rejected, (state, { payload }) => {
    //     state.errorMessage = payload;
    //     state.isError = true;
    //     state.isFetching = false;
    //     state.isSuccess = false;
    //     return state;
    // }),
    // builder.addCase(submitNextOfKinInfo.fulfilled, (state, { payload }) => {
    //     state.isFetching = false;
    //     state.isSuccess = true;
    //     state.nextOfKinInfo = payload;
    //     return state;
    // }),
    // builder.addCase(submitRemittanceInfo.pending, (state) => {
    //     state.isFetching = true;
    //     return state;
    // }),
    // builder.addCase(submitRemittanceInfo.rejected, (state, { payload }) => {
    //     state.errorMessage = payload;
    //     state.isError = true;
    //     state.isFetching = false;
    //     state.isSuccess = false;
    //     return state;
    // }),
    // builder.addCase(submitRemittanceInfo.fulfilled, (state, { payload }) => {
    //     state.isFetching = false;
    //     state.isSuccess = true;
    //     state.nextOfKinInfo = payload;
    //     return state;
    // })