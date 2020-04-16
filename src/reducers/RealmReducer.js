import * as types from '../actions/ActionTypes'

const initialState = {
    allData:[],
    ayahsData:[],
    isLoading: false
}

const RealmReducer = (state = initialState, action)=>{
    switch(action.type) {
        case types.REALM_ACTION:
            return {...state, allData: action.payloadData, ayahsData: action.payloadAyahs}
        
        case types.IS_LOADING:
            return {...state, isLoading: action.payload}    
        default:
            return state    
    }
}

export default RealmReducer