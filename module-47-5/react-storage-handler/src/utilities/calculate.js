const Add = (first, second) =>{
    return first + second;
}
const Multifly = (first, second) =>{
    return first * second;
}
/* const items = [
    {id : 1, name : 'alta', price : 100},
    {id : 2, name : 'palish', price : 200},
    {id : 3, name : 'talish', price : 300},
    {id : 4, name : 'malish', price : 400},
    {id : 5, name : 'balish', price : 500}
];
const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer, 0); */
const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}
export {Add, Multifly, getTotalPrice as getTotal};