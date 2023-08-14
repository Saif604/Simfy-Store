import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCart = getElement('.toggle-cart');
 
closeCartBtn.addEventListener('click',()=>{
    cartOverlay.classList.remove('show');
});
toggleCart.addEventListener('click',()=>{
    cartOverlay.classList.add('show');
});


export const openCart = () => {
    cartOverlay.classList.add('show');
};
