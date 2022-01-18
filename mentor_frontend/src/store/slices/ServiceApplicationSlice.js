/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';

export const completeApplication = createAsyncThunk(
    'serviceApplication/completeRegistration',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/something', 
            {
                ...values.data
            },
            {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
            )
            console.log('[complete response]', response.data);
            // values.moveToLanding()
            return response.data
        }
        catch(e) {
            console.log('[complete info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)


export const ServiceApplicationSlice = createSlice({
    name: 'serviceApplication',
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(completeApplication.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(completeApplication.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(completeApplication.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.data = payload;
            return state;
        })     
        }  
})