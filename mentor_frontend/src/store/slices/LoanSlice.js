/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';

export const submitLoanForm = createAsyncThunk(
    'loan/submitLoanForm',
    async(values, thunkAPI) => {
        try{
            const token = localStorage.getItem('token')
            const response = await axiosClient.post('/smth', 
            { values },
            { headers: { 'Authorization' : `Bearer ${token}` }}
            )
            console.log('[complete response]', response.data);
            // values.moveToLanding()
            return response.data

        }catch(e) {
            console.log('[submit loan form info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }

    }
)

export const LoanSlice = createSlice({
    name: 'loan',
    initialState: {
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(submitLoanForm.pending, (state) => {
            state.isFetching = true;
            return state;
        }),
        builder.addCase(submitLoanForm.rejected, (state, { payload }) => {
            state.errorMessage = payload;
            state.isError = true;
            state.isFetching = false;
            state.isSuccess = false;
            return state;
        }),
        builder.addCase(submitLoanForm.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.data = payload;
            return state;
        })     
        }  
})

export const loanSelector = state => state.loan;