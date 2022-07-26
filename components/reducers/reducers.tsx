import {combineReducers} from 'redux'


export const menuState = (state = false, action: {type: string})=>{
    switch (action.type){
        case 'MENU_ACTIVE':
            return true
        case 'MENU_INACTIVE':
            return false
        default:
            return state
    }
}

const allReducers = combineReducers({
    menuState
})

export default allReducers