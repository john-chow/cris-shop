import { ADD_GOODS } from '../constants/action_types'

const initialState = {
    goods_list:     [],
    current_goods:  {},
}

export default function(state, action) {
    switch(action.type) {
        case ADD_GOODS:
            return state
        default:
            return state
    }
}