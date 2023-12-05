// const fetchData = require('../utils/fetchData');
// const API = 'https://rickandmortyapi.com/api/character/';

// fetchData(API)
//     .then(data =>{
//         console.log(data.info.count);
//         return fetchData(`${API}${data.results[0].id}`)
//     })
//     .then(data =>{
//         console.log(data.name)
//         return fetchData(data.origin.url)
//     })
//     .then(data =>{
//         console.log(data.dimension)
//     })
//     .catch(err => console.error(err));

import fetch from  "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
}
// fetchData(`${API}/Products`)
// .then(Response =>Response.json())
// .then(products =>{
//     console.log(products);
// }).then(()=>{
//     console.log('hola')
// }).catch(error => console.log(error));

fetchData(`${API}/products`)
.then(Response => Response.json())
.then(products =>{
    return fetchData(`${API}/Products/${products[0].id}`);
})
.then(Response => Response.json())
.then(product =>{
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
})
.then(Response => Response.json())
.then(category =>{
    console.log(category.name);
})