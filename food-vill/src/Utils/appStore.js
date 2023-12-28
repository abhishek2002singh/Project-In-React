import {configureStore} from '@reduxjs/toolkit'
import cardReducer from './cardSlice'



const appStore = configureStore({
    reducer :{
         card: cardReducer,
        //  user :useReducer
    },

});

export default appStore