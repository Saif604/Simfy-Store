// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async() =>{
    const products = await fetchProducts();
    if(products){
        //add products to store 
        setupStore(products);
        const featured = store.filter((item)=>{
            const {featured} = item;
            if(featured)
            return item;
        })
        display(featured,getElement('.featured-center'));
    }
}

window.addEventListener('DOMContentLoaded', init);