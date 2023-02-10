import {useContext , useEffect, useState} from 'react'
import {CartContext} from '../cartContext.js'
import Product from '../components/Product.js';

const Cart = () => {
    let total=0
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);
    const [priceFectch,setPrice] =useState(false)
    useEffect(() => {
        if (!cart.items) {
            return;
        }
        if(priceFectch){
            return
        }

        fetch('/api/products/cart-items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ ids: Object.keys(cart.items)})
        }).then(res => res.json())
        .then(products => {
            setProducts(products);
            setPrice(true)
        })
    }, [cart]);

    const Quantity = (productId)=>{
        //console.log(productId);
        return cart.items[productId];
    }
    const inc = (productId)=>{
        const _cart = {...cart}
        _cart.items[productId]++
        _cart.totalItems++
        console.log(_cart.totalItems);
        setCart(_cart)  
    }

    const dec = (productId)=>{
        const _cart = {...cart}
        if(_cart.items[productId]===1)
            return
        _cart.items[productId]--
        _cart.totalItems--
        setCart(_cart)  
    }

    const itemTotal =(productId,price)=>{
        const sum= cart.items[productId]*price
        total+=sum;
        return sum
    }

    const Order =()=>{
        window.alert("Order placed sucessfully.")
        setProducts([])
        setCart([])
        
    }

    const Del= (productId)=>{
        const _cart={...cart}
        _cart.totalItems-=_cart.items[productId]
        delete _cart.items[productId]
        setCart(_cart)
        setProducts(products.filter((product)=>product._id!== productId))
    }
    return (
        !products.length ?
            <img className="mx-auto w-1/2 mt-12" src="/images/empty_cart.jpg" alt="Cart Empty"/>
        :
        
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {   
                    products.map(product=>{
                        console.log(product)
                        return (
                <li className="mb-12" key={product._id}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                           <image className="h-16" src ={product.image} alt={product.name}/>
                            <span className="font-bold ml-4 w-48">{product.name}</span>
                        </div>
                        <div>
                            <button onClick={()=>{dec(product._id)} } className="bg-red-700 px-4 py-2 rounded-full leading-none">-</button>
                            <b className="px-4">{ Quantity(product._id) }</b>
                            <button onClick={()=>{inc(product._id)} } className="bg-red-700 px-4 py-2 rounded-full leading-none">+</button>
                        </div>
                        <span>Rs. { itemTotal(product._id,product.price)}</span>
                        <div onClick={()=>{Del(product._id)}} className="bg-red-700 px-4 py-2 rounded-full leading-none">Delete</div>
                    </div>
                </li>
                        )
                    })
                }
                
            </ul>
            <hr className="my-6"/>
            <div className="text-right">
                <b>Grand Total : Rs {total}</b>
            </div>
            <div className="text-right mt-6">
                <button onClick={Order} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
            </div>
        </div>
        
    )
}

export default Cart