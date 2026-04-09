import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit'

const layoutSlice = createSlice({
  name: "layout",
  initialState: { navbarHeight: 0 },
  reducers: {
    // Specific name makes it clear what is being updated
    setNavbarHeight: (state, action: PayloadAction<number>) => {
      state.navbarHeight = action.payload
    }
  }
})

export const { setNavbarHeight } = layoutSlice.actions

export const store = configureStore({
  reducer: {
    layout: layoutSlice.reducer
  }
})

// Standard naming for Redux types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
