import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { useState, useEffect } from 'react';

const Home = () => {

  const [foodItemsDisplay, setFoodItemsDisplay] = useState([]);
  const [foodCategoryDisplay, setFoodCategoryDisplay] = useState([]);

  const fetchData = async () => {
    let res = await fetch("http://localhost:5000/api/foodItemsData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const finalData = await res.json();
    console.log(finalData); 
  }
  useEffect(()=>{fetchData()}, []);

  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div> <Card /> </div>
      <div> <Footer /> </div>
    </div>
  );
}

export default Home;
