import * as types from '../actions/ActionTypes'

const initialState = {
    isSora: true,
    isPage: false,
    isJuz: false,
    isHizb: false
}

const TopBarReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.TOP_TABS:
            return {...state,
                    isSora: action.payloadSora,
                    isPage: action.payloadPage,
                    isJuz: action.payloadJuz,
                    isHizb: action.payloadHizb
                }
        
        default:
            return state
    }
}

export default TopBarReducer