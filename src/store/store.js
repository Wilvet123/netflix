import {configureStore} from "@reduxjs//toolkit"
import netReducer from "./netSlice.js"

export default configureStore({
    reducer:{
        net: netReducer
    }
})