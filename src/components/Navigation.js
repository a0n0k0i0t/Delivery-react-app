import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../cartContext.js'
const Navigation = () => {

    const cartStyle={
        background : '#F4B400',
        display : 'flex',
        padding : '6px-12px',
        borderRadius : '50px'
    }

    const {cart} = useContext(CartContext)

    return (
        <div style={{background : '#F4B400'}}>
            <nav className="container mx-auto flex items-center justify-between py-4">
                    <Link to="/">
                        <img style={{height:65 ,borderRadius : '25px'}} src="/images/logo_pizza.png" alt="logo"/>
                    </Link>

            <ul className="flex items-center">
                <li><Link to="/">Home</Link></li>
                <li className="ml-6"><Link to="/products">Products</Link></li>
                <li className="ml-6">
                    <Link to="/cart">
                        <div style={cartStyle}>
                            
                            <img style={{height: 30, display: "flex items-center",borderRadius : '20px'}} src="/images/logo_cart1.png" alt="Cart"/>
                            <span style={{color : "green"}}className="ml-1 mt-1"><b>{ cart.totalItems}</b></span>
                        </div>
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Navigation
