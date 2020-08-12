
function productReducer(state = [], action) {
    switch (action.type) {
        case 'INIT_PRODUCT':
            return action.data
        default:
            return state
    }
}

export default productReducer