import { getElement } from '../utils.js';
import display from '../displayProducts.js';


const setupSearch = (store) => {
    const form = getElement('.input-form');
    const nameInput = getElement('.search-input');
    form.addEventListener('keyup',(e)=>{
        const value = nameInput.value;
        if(value){
            const filteredProducts = store.filter((product)=>{
                let {name} = product;
                name = name.toLowerCase();
                return name.includes(value);
            });
            if(filteredProducts.length < 1)
            {
                const products = getElement('.products-container');
                products.innerHTML = `<h3 class='filter-error'>Sorry, no products matched your search</h3>`
            }
            else{
                display(filteredProducts,getElement('.products-container'))
            }

        }
        else{
            display(store,getElement('.products-container'), true);
        }
    })
};

export default setupSearch;
