import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface OrderbookState {
  value: number
}

const initialState = { value: 0 } as OrderbookState

const orderBookSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { reducer: orderBookReducer } = orderBookSlice;
