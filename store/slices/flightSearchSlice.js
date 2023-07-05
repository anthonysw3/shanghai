import { createSlice } from "@reduxjs/toolkit";

const flightSearchSlice = createSlice({
  name: "flightSearch",
  initialState: {
    origin: {
      iata_code: "",
      iata_city_code: "",
      city_name: "",
      name: "",
    },
    destination: {
      iata_code: "",
      iata_city_code: "",
      city_name: "",
      name: "",
    },
    dates: {
      departure_date: "",
      return_date: "",
    },
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    travel_class: "economy",
  },
  reducers: {
    // Define your actions and reducers here
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setDates: (state, action) => {
      state.dates = action.payload;
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
    setTravelClass: (state, action) => {
      state.travel_class = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setDates,
  setPassengers,
  setTravelClass,
} = flightSearchSlice.actions;

export default flightSearchSlice.reducer;
