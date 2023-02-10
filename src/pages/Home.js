import Products from '../components/Products.js';
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <>
        <div className="hero py-16">
            <div className="container mx-auto flex items-center  justify-between">
                <div className="w-1/2">
                    <h4 className="text-lg">Don't be Hungry,</h4>
                    <h1 className="text-3xl md:text-6xl font-bold">ORDER NOW</h1>
                    <Link to="/products"><button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 
                    hover:bg-yellow-600" >Menu</button></Link>
                </div>
                <div className="w-1/2">
                    <img className="w-4/5" src="https://media.istockphoto.com/photos/delicious-vegetarian-pizza-on-white-picture-id1192094401?k=20&m=1192094401&s=612x612&w=0&h=jesvXuPyvqM36GQ5QEvJrL3QZjK6YKsziUUF3ZbW0gw=" alt='Food'/>
                </div>
            </div>  
        </div>
        
        <div className='pb-24'>
            <Products/>
        </div>
        </>
    )
}

export default Home
