import {combineReducers} from 'redux'
import { reducer as formReducer} from 'redux-form'
import BottomTabsReducer from './BottomTabsReducer'
import TopBarReducer from './TobBarReducer'
import RealmReducer from './RealmReducer'

const AllReducers = combineReducers({
    form: formReducer,
    bottomTabs: BottomTabsReducer,
    topBar: TopBarReducer,
    realmReducer: RealmReducer

})

export default AllReducers