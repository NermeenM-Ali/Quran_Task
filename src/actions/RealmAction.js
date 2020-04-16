import * as types from './ActionTypes'

export const RealmAction = (allData, ayahsData) =>{
    return (dispatch)=>{
        dispatch({type: types.REALM_ACTION, payloadData: allData, payloadAyahs: ayahsData})
    }
}

export const isLoading = (loading)=>{
    return (dispatch)=>{
        dispatch({type: types.IS_LOADING, payload: loading})
    }
}