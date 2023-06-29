import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { log } from 'console';
import { useSelector } from 'react-redux';
import { RootState } from './store';

type NavLink={
  name:string
}


interface LinkState {
  activelink: string
}


const initialState: LinkState = {
  activelink:"home"
}

export const linkSlice = createSlice({
  name:"link",
  initialState,
  reducers: {
    setActive: (state, action:PayloadAction<string>) => {
      state.activelink=action.payload
    },
  },
});

// actions
export const {
  setActive,
} = linkSlice.actions;

// selectors
export const selectActiveLink = (state: RootState) => state.activelink.activelink;

export default linkSlice.reducer;


// export const cartReducer = cartSlice.reducer;

