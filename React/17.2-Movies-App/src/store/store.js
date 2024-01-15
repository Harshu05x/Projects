import { configureStore } from "@reduxjs/toolkit"
import MovieSlice from "./slices/MovieSlice"

export const store = configureStore( {
    reducer: {
        movies: MovieSlice
    }
})