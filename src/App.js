import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import statement
import Login from './screens/Login';
import Signup from './screens/Signup.jsx'
import Cart from './screens/Cart.jsx';
import Homea from './screens/Home1.jsx'

// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import CartProvider from './components/ContextReducer.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/a" element={<Home />} />
            <Route exact path="/" element={<Homea />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route exact path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

