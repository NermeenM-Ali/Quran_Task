import * as types from './ActionTypes'

export const TopBarAction=(isSore, isPage, isJuz, isHizb)=> {
    return (dispatch)=>{
        dispatch({type: types.TOP_TABS, 
                  payloadSora: isSore,
                  payloadPage: isPage,
                  payloadJuz: isJuz,
                  payloadHizb: isHizb
                })
    }
}   