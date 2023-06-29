import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart.slice"
import linkReducer from "./nav.slice"

export const store = configureStore({
  reducer: {
    // reference reducers here
    cartitems:cartReducer,
    activelink:linkReducer,
  }
})

// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch