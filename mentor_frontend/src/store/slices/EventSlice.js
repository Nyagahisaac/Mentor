/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClient } from '../../axios';

export const getEvents = createAsyncThunk(
    'events/getEvents',
    async(values, thunkAPI) => {
        try{
        const token = localStorage.getItem('token')
        const response = await axiosClient.get('/get/Events/Blogs/v1', 
        {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
        )
        console.log('[events response]', response.data.events);
            return response.data.events
        }
        catch(e) {
            console.log('[get events Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)
export const registerEvent = createAsyncThunk(
    'events/registerEvent',
    async(values, thunkAPI) => {
        try{
        const token = localStorage.getItem('token')
        const response = await axiosClient.post('/register_event/v1', 
        {event_id: values.eventID,
         user_id: values.userID   
        },
        {
            headers: {
                'Authorization' : `Bearer ${token}`
              }
            }
        )
        console.log('[events response]', response.data);
            values.close()
            values.success()
            return response.data
        }
        catch(e) {
            console.log('[remittance info Error]', e.message);
            thunkAPI.rejectWithValue(e.message);
            return e.message
        }
    }
)

export const EventSlice = createSlice({
   name: 'events',
   initialState: {
       user: {},
       eventData: [],
   },
   reducers: {},
   extraReducers: (builder) => {
    builder.addCase(getEvents.pending, (state) => {
        state.isFetching = true;
        return state;
    }),
    builder.addCase(getEvents.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isError = true;
        state.isFetching = false;
        state.isSuccess = false;
        return state;
    }),
    builder.addCase(getEvents.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.eventData = payload;
        return state;
    }),
    builder.addCase(registerEvent.pending, (state) => {
        state.isFetching = true;
        return state;
    }),
    builder.addCase(registerEvent.rejected, (state, { payload }) => {
        state.errorMessage = payload;
        state.isError = true;
        state.isFetching = false;
        state.isSuccess = false;
        return state;
    }),
    builder.addCase(registerEvent.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        // state.eventData = payload;
        return state;
    })          
    }  
})


// export const { addUserInfo, addNextOfKin, addRemittance, addEmploymentInfo } = TscSlice.actions;

export const eventSelector = state => state.events