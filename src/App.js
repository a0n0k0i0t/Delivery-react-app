import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom'

import Home from './pages/Home.js'
import About from './pages/About.js'
import Navigation from './components/Navigation.js'
import Cart from './pages/Cart.js'
import ProductsPage from './pages/ProductsPage.js'
import SingleProduct from './pages/SingleProduct.js'   
import {CartContext} from './cartContext.js'
import { useState ,useEffect} from 'react'


const App=()=>{
    const [cart,setCart]= useState({})

    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
        setCart(JSON.parse(cart))
    }, [])

    useEffect(() => {
        window.localStorage.setItem('cart',JSON.stringify(cart))
    }, [cart])

    return (
        <>
            <Router>
                <CartContext.Provider value ={{cart: cart, setCart : setCart}}>
                <Navigation/>
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    <Route path="/about" component={About} exact></Route>
                    <Route path="/cart" component={Cart} exact></Route>
                    <Route path="/products"  component={ProductsPage} exact></Route>
                    <Route path= "/products/:_id"  component={SingleProduct} ></Route>
                </Switch>
                </CartContext.Provider>
            </Router>
        </> 
    )
}

export default App;