import {Link} from 'react-router-dom'
import {useContext, useState} from 'react'
import {CartContext} from '../cartContext.js'
const Product = (props) => {
    const {product} = props
    const [isAdding,setAdding] = useState(false)
    const {cart , setCart} =  useContext(CartContext)
    const addToCart = (event,product)=>{
            event.preventDefault()
            
            let _cart = {...cart}
            if(!cart.items){
                _cart.items = {}
            }
            if(_cart.items[product._id] ){
                _cart.items[product._id]++
            }
            else{
                _cart.items[product._id]=1
            }
            if(!_cart.totalItems){
                _cart.totalItems=0
            }
            _cart.totalItems += 1
            setCart(_cart)
            setAdding(true)
            setTimeout(() => {
                setAdding(false)
            }, 1000);
    }
    return (
        <Link to={`/products/${product._id}`}>
            <div className="text-center">
                    <img src= {product.image} alt={product.name}/>
                    <h2 className="text-lg font-bold py-2">{product.name}</h2>
                    <div className="flex justify-between items-center mt-4">
                        <span>Rs. {product.price}</span>
                        <button onClick = {(e)=>{addToCart(e,product)}}
                            disabled={isAdding}
                        className={`${isAdding ? "bg-green-500" : "bg-red-700"} py-1 px-4 rounded-full text-sm font-bold `}>
                            ADD{isAdding  ?'ED':''}
                        </button>
                    </div>
                    
            </div>
        </Link>
    )
}

export default Product
