const product = [
    {
        id: 1,
        image:'cinnamonWhirl.jpeg',
        title:'Cinnamon Whirl',
        price:'RM 1.30'
    },
    {
        id: 2,
        image:'vanillaWhirl.jpeg',
        title:'Vanilla Whirl',
        price:'RM 1.70'
    },
    {
        id: 3,
        image:'tunaPuff.jpeg',
        title:'Tuna Puff',
        price:'RM 2.30'
    },
    {
        id: 4,
        image:'croissant.jpeg',
        title:'Plain Crossaint',
        price:'RM 1.80'
    },
    {
        id: 5,
        image:'chocRoll.jpeg',
        title:'Chocolate Roll',
        price:'RM 2.40'
    },
    {
        id: 6,
        image:'mexBun.jpeg',
        title:'Mexican Bun',
        price:'RM 3.20'
    },
    {
        id: 7,
        image:'cheeseCake.jpeg',
        title:'Cheese Cake',
        price:'RM 4.30'
    },
    {
        id: 8,
        image:'chocCake.jpeg',
        title:'Chocolate Cake',
        price:'RM 5.50'
    },
]
const categories = [...new Set(product.map((item)=>
    {return item}))]

let cart = document.getElementById('root')
cart.innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
       `<div class="box">
            <div class="img-box">
                <img src=${image}></img>
            </div>
            <div class="left">
                <p>${title}</p>
                <h2>${price}</h2>
                <button>Add to Cart</button>
            </div>
        </div>`
    )
}).join('')