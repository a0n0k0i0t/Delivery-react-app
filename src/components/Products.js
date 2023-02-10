
import {useState,useEffect, useContext} from 'react'
import Product from './Product.js'
import {CartContext} from '../cartContext.js'
const Products = () => {

    const {name} = useContext(CartContext)

    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch(`/api/products`)
        .then(response=> response.json() )
        .then(products=>{
            setProducts(products)
        })
    },[])


    return (
        <div className="container mx-auto pd-24">
            <h1>{name}</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                {
                    products.map(product=><Product key={product._id} product={product}/>)
                }
                
            </div>
        </div>
    )
}

export default Products
