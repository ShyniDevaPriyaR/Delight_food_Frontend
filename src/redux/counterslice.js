import { createSlice } from '@reduxjs/toolkit'

const abc = localStorage.getItem("test")
const change = JSON.parse(abc)
const initialState = {
    zoo: 100,
    zebra: 25,
    tiger: 25,
    lion: 50,
    elephant:2,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // incrementzoo: (state, action) => {
        //     state.zoo += action.payload
        //     localStorage.setItem("test", JSON.stringify(state.zoo))
        // },
        // incrementzebra: (state, action) => {
        //     state.zebra += action.payload
        //      localStorage.setItem("test", JSON.stringify(state.zebra))
        // },
        incrementtiger: (state) => {
            state.tiger += 1
        },
        incrementlion: (state) => {
            state.lion += 1
        },
        incrementelephant: (state) => {
            state.elephant += 1
        },


        decrementzoo: (state) => {
            state.zoo -= 1
        },
        decrementzebra: (state) => {
            state.zebra -= 1
        },
        decrementtiger: (state) => {
            state.tiger -= 1
        },
        decrementlion: (state) => {
            state.lion -= 1
        },
        decrementelephant: (state) => {
            state.elephant -= 1
        },
        incrementByAmount: (state, action) => {
        state.value += action.payload
        },
},
}
)


export const { incrementzoo,incrementzebra,incrementtiger,incrementlion,incrementelephant,decrementzoo,decrementzebra,decrementtiger,decrementlion,decrementelephant, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer