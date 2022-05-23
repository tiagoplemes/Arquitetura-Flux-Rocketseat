export function addToCart(id) {
    return {
        type: 'ADD_TO_CART',
        id,
    };
}

export function removeFromCart(id) {
    return {
        type: 'REMOVE_FROM_CART', 
        id,
    };
}

export function updateAmount(id, amount) {
    return {
        type: 'UPDATE_AMOUNT',
        id,
        amount,
    };
}