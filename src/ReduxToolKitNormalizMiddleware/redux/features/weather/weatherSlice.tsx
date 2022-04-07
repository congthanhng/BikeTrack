import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMoviesFromApi } from "../../../../api/client";
import { serverUrl } from "../../../../api/constantServer";
import { RootState } from "../../store";

// type WeatherState =
//     {
//         status: 'idle' | 'loading' | 'succeeded' | 'failed',
//         error: string | null
//     }
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

const initialState = {
    weather: {},
    status: 'idle',
    error: null
}
export const fetchWeather = createAsyncThunk('weather/fetchWeather', async () => {
    console.log("begin fetch")
    await sleep(3000)
    const response = await getMoviesFromApi()
    return response
  })

export const weatherSlice = createSlice({
    name: "weather",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
          .addCase(fetchWeather.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchWeather.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            // state.weater.push(action)
            state.weather = action.payload
          })
          .addCase(fetchWeather.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
          
      },
});



// export const { fetchWeather } = weatherSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectWeather = (state: RootState) => state.weather; 

export default weatherSlice.reducer;