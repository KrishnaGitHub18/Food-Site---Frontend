import './App.css';
import Homea from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './screens/Login';
import Signup from './screens/Signup.jsx'
import Cart from './screens/Cart.jsx';
import Home from './screens/Home1.jsx'
import Stripe from './screens/StripePayment.jsx'
import CartProvider from './components/ContextReducer.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/a" element={<Homea />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Stripe />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

