import { allProductsUrl } from './utils.js';

const fetchProducts = async () => {
    try{
        const response = await fetch(allProductsUrl).catch((err)=>console.log(err));
        if(response)
        {
            return response.json();
        }
    }
    catch(err){
        console.log(err);
    };
};

export default fetchProducts;
