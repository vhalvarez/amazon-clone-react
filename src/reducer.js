
export const initialState = {
    basket: ['Hola', 'Hola2']
};

function reducer(state, action) {
    switch(action.type){
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            break;
        case 'REMOVE_FROM_BASKET':
        // Logic for Removing item to basket
        break;
        default:
            return state;
            
    }
}

export default reducer;