const initialState = {
    data:   [],
    filter: {},
}

export default function(state=initialState, action) {
    switch(action.type) {
        case 'SHOW_CATEGORY':
            return state;
        default:
            return state
    }
}