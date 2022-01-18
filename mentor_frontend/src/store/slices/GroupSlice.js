/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';


export const submitUserInfo = createAsyncThunk(
    'group/submitUserInfo',
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

export const submitGroupDetails = createAsyncThunk(
    'group/submitBuinessInfo',
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
    'group/submitAccountInfo',
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
    'group/submitRemittanceInfo',
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

export const GroupSlice = createSlice({
    name: 'group',
    initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    personalInfo: {},
    groupInfo: {},
    accountInfo: {},
    remittanceInfo: {}
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.personalInfo(action.payload)
        },

        addGroupInfo: (state, action) => {
            state.groupInfo = action.payload
        },

        addAccountInfo: (state, action) => {
            state.accountInfo = action.payload           
        },
        addRemittanceInfo: (state, action) => {
            state.remittanceInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(submitUserInfo.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(submitUserInfo.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(submitUserInfo.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.personalInfo = payload;
            return state;
        }),
        builder.addCase(submitGroupDetails.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(submitGroupDetails.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(submitGroupDetails.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.buisnessInfo = payload;
            return state;
        }),
        builder.addCase(submitAccountInfo.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(submitAccountInfo.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(submitAccountInfo.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.accountInfo= payload;
            return state;
        }),
        builder.addCase(submitRemittanceInfo.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(submitRemittanceInfo.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(submitRemittanceInfo.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.nextOfKinInfo = payload;
            return state;
        })
        
        }  
})

// export const { submitUserInfo } = TscSlice.actions;

export const { addAccountInfo, addGroupInfo, addUserInfo, addRemittanceInfo } = GroupSlice.actions

export const groupSelector = state => state.group;