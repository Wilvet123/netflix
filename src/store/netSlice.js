import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    username:'',
    userIcon: '',
  }

export const netSlice = createSlice({
    name: 'net',
    initialState,
    reducers:{
      setUsername: (state, action) => {
        console.log(action)
        return {...state, username: action.payload}
      },  
      
      setUserIcon: (state, action) => {
        console.log(action)
        return {...state, userIcon: action.payload}
      }
    }

})

export const {setUsername, setUserIcon} = netSlice.actions
export default netSlice.reducer