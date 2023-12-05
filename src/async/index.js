// const doSomethingAsync = () => {
//     return new Promise((resolve, reject)=>{
//         (true)
//         ? setTimeout (() => resolve('Do Somethig Async'),3000)
//         : reject(new Error('Test Error'))
//     });
// }

// const doSomething = async () => {
//     const something = await doSomethingAsync(); 
//     console.log(something);
// }

// console.log('Before');
// doSomething();
// console.log('After');

// const anotherFunction = async () => {
//     try{
//         const something = await doSomethingAsync();
//         console.log(something);
//     }catch(error){
//         console.error(error);
//     }
// }

// console.log('Before 1');
// anotherFunction();
// console.log('After 2');

const fnAsync =() =>{
    return new Promise((resolve, reject)=>{
        (true) ? setTimeout(()=>resolve('async!!!'),2000): reject(new Error('Error!'));
    });
}
const anotherFunction = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('activo');

}


console.log('activo en la jugada');
anotherFunction();
console.log('activo en la despues');
