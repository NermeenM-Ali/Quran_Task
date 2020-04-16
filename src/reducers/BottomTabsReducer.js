import * as types from '../actions/ActionTypes'

const initialState = {
    isQuran: true,
    isState: false
}

const BottomTabsReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.BOTTOM_TABS:
            return {...state, isQuran: action.payloadQuran, isState: action.payloadState}
        
        default:
            return state
    }
}

export default BottomTabsReducer