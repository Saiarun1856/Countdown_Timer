const products = [
    {
        id: 1,
        category:"Electronics",
        type:'Mobile',
        name: "Iphone",
        price: 50000,
    },
    {
        id: 2,
        category: "Electronics",
        type: "Tv",
        name: "LG",
        price: 20000,
    },
    {
        id: 3,
        category: "Electronics",
        type: "Mobile",
        name: "Samsung",
        price: 40000,
    },
]


// const value = products.filter((arr)=>{
   
//     if(arr.type == 'Mobile'){
//         return arr
//     }
// })

// const totalprice = value.reduce((x,y)=>{
//     return x.price+y.price
// })
// console.log(totalprice)

const doubleSum = (arr)=>{

    return arr.map((item)=>{
        if(item.type == 'Mobile'){
            return{
                ...item,
                price : item.price*2
            }
        }
        return item
    })
}
console.log(doubleSum(products))