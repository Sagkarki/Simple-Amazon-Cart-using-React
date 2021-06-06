import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CartItems from './Components/CartItems';
import CartTotal from './Components/CartTotal';
import data from'./Data'

function App() {
 
  const [cartItems, setCartItems]=useState(data);
  
  return (
    <div className = "App">
     <Header title= "Amazon Cart"/>
     <div className="App-main">

    
       <CartItems items = {cartItems}/>
       <CartTotal/>
       <CartTotal items ={cartItems}/>
     </div>
    </div>
  );
}

export default App;
