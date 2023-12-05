// const fetchData = require('../utils/fetchData');
// const API = 'https://rickandmortyapi.com/api/character/';

// const anotherFunction = async (url_api) => {
//     try{
//         const data = await fetchData(url_api);
//         const character = await fetchData(`${API}${data.results[0].id}`);
//         const origin = await fetchData(character.origin.url);

//         console.log(data.info.count);
//         console.log(character.name);
//         console.log(origin.dimension);
//     }catch(error){
//         console.error(error);
//     }
// }

// console.log('Bifor');
// anotherFunction(API);
// console.log('After');




import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json()
    return data;
}
const anotherFunction = async(urlApi) =>{
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(products);
        console.log(product.title);
        console.log(category.name);

    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);