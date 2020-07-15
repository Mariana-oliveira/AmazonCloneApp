export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to Basket
            return { // Return how the new data layer looks like
                ...state, 
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex( (basketItem) => basketItem.id ===action.id);
            

            if (index >= 0){
                // item exists in basket -> remove item
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id} as its not in basket)`)
            }

            return { 
                ...state, 
                basket: newBasket
             };            
        default:
            return state;
    }
}



export default reducer;