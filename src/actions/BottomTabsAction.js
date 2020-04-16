import * as types from './ActionTypes'

export const BottomTabsAction=(isQuran, isState)=> {
    return (dispatch)=>{
        dispatch({type: types.BOTTOM_TABS, payloadQuran: isQuran, payloadState: isState})
    }
}   