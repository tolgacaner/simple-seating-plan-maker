import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  index: '',
  item: {
    name: '',
    date: '',
    time: '',
    price: 0,
    seatingArrangement: false,
    blocks: [],
  },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}


export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setIndex: (state, action) => {
      const id = action.payload
      console.log(id)
      state.index = id
    },
    addBlock: (state, action) => {
      const { id, roomname } = action.payload
      const col = 2
      const row = 10
      const seats = []

      state.item.blocks.push({
        id: id,
        roomname: roomname,
        col,
        row,
        seats,

      })
      state.index = id
    },
    addSeats: (state, action) => {
      const { id, seats } = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      item.seats = []
      item.seats.push(...seats)
    },
    removeSeats: (state, action) => {
      const id = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      item.seats = []
    },
    changeCol: (state, action) => {
      const { id, value } = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      item.col = Number(value)
    },
    changeRow: (state, action) => {
      const { id, value } = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      item.row = Number(value)
    },
    changeSeatingArrangement: (state, action) => {
      const value = action.payload
      const item = state.item
      if (value) {
        item.seatingArrangement = false
        item.col = 0
        item.row = 0
      } else {
        item.seatingArrangement = true
        item.col = 2
        item.row = 10
      }
    },
    changeCheck: (state, action) => {
      const value = action.payload
      if (value) {
        state.item.seatingArrangement = false
      } else {
        state.item.seatingArrangement = true
      }
    },
    removeRoom: (state, action) => {
      const id = action.payload
      const items = state.item.blocks.filter((item) => item.id !== id)
      state.index = ''
      state.item.blocks = []
      state.item.blocks.push(...items)
    },
    ticket: (state, action) => {
      const { type, value } = action.payload
      if (type === 'name') {
        state.item.name = value
      } else if (type === 'date') {
        state.item.date = value
      } else if (type === 'time') {
        state.item.time = value
      } else if (type === 'price') {
        state.item.price = Number(value)
      }
    },
    changeRowName: (state, action) => {
      const { id, rowId, value } = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      const row = item.seats.find((item) => rowId === item.id)
      row.rowName = value
    },
    addRowSeats: (state, action) => {
      const { id, rowId, itemId, distanceFirstNum, distanceLastNum } = action.payload
      const item = state.item.blocks.find((item) => id === item.id)
      const row = item.seats.find((item) => rowId === item.id)


      const firstItemIndex = row.rowSeats.findIndex((item) => itemId === item.id)
      const lastItemIndex = firstItemIndex + (distanceLastNum - distanceFirstNum + 1)
      let num = Number(distanceFirstNum)
      if((distanceFirstNum && distanceLastNum)!=-1)
      for (let index = firstItemIndex; index < lastItemIndex; index++) {

        row.rowSeats[index].activeSeat = true
        row.rowSeats[index].seatNumber = num

        num = num + 1

      }
      
    },
    reset: (state) => initialState,
    getTicket: (state, action) => {
      state.item = action.payload
    }
  },
})

export const {
  addBlock,
  changeCol,
  addSeats,
  removeSeats,
  changeRow,
  changeSeatingArrangement,
  removeRoom,
  ticket,
  changeRowName,
  addRowSeats,
  reset,
  getTicket,
  changeCheck,
  setIndex
} = ticketSlice.actions
export default ticketSlice.reducer