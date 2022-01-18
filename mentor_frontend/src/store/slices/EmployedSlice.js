/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';


export const completeRegistration = createAsyncThunk(
    'employed/completeRegistration',
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



export const EmployedSlice = createSlice({
    name: 'employed',
    initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
    personalInfo: {},
    employmentInfo: {},
    nextOfKinInfo: {},
    remittanceinfo: {}
    },
    reducers: {
        addUserInfo: (state, action) => {
            state.personalInfo = action.payload.data
            localStorage.setItem('employedPersonalinfo', action.payload.data)
            action.payload.moveToNext(1)
        },

        addEmploymentInfo: (state, action) => {
            state.employmentInfo = action.payload.data
            localStorage.setItem('employedEmploymentinfo', action.payload.data)
            action.payload.moveToNext(2)
        },

        addNextOfKin: (state, action) => {
            state.nextOfKinInfo = action.payload.data 
            localStorage.setItem('employednextofkininfo', action.payload.data)
            action.payload.moveToNext(3)                      
        },
        addRemittance: (state, action) => {
            state.remittanceinfo = action.payload
            localStorage.setItem('employedRemitanceInfo', action.payload)
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

export const { addUserInfo, addNextOfKin, addRemittance, addEmploymentInfo } = EmployedSlice.actions

export const employedSelector = state => state.employed;