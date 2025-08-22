import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { useState, useEffect } from 'react';
import '../css/Home.css'
import '../css/Card.css';
import { useCartState } from '../components/ContextReducer';
import{ message } from "antd";
import cartImg from "../Images/shopping-cart.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let finalOrder = useCartState();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const offersRef = useRef(null);
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToOffer = () => {
    offersRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [foodItemsDisplay, setFoodItemsDisplay] = useState([]);
  const [foodCategoryDisplay, setFoodCategoryDisplay] = useState([]);

  const fetchData = async () => {
    // let res = await fetch("https://food-site-backend-nine.vercel.app/api/foodItemsData", {
    let res = await fetch("https://food-way-backend.vercel.app/api/foodItemsData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const finalData = await res.json();
    localStorage.setItem('homePageData', JSON.stringify(finalData));
    setFoodItemsDisplay(finalData[0]);
    setFoodCategoryDisplay(finalData[1]);
  }
  useEffect(() => { fetchData() }, []);

  useEffect(() => {
    if (!foodCategoryDisplay || !foodItemsDisplay) {
      const tempDataString = localStorage.getItem('homePageData');
      if (tempDataString) {
        try {
          const tempData = JSON.parse(tempDataString);
          setFoodItemsDisplay(tempData[0]);
          setFoodCategoryDisplay(tempData[1]);
        } catch (error) {
          console.error('Error parsing homePageData from localStorage', error);
        }
      }
    }
  }, []);

  console.log(finalOrder);
  const handleOffer = () => {
    if (finalOrder.length){
      message.success('Offer applied');
    } else {
      message.error('Cart is empty!');
    }
  }

  return (
    <div className='homepageover'>

      <div className='nvb'> <Navbar onMenuClick={scrollToMenu} onOffersClick={scrollToOffer}/> </div>
      <div className='hme'><div className='banner'></div></div>

      <div className='foodMenu'>

        <div className='headingfoodmenu'><h2>All offers from FoodWay</h2></div>

        <div className="offers" ref={offersRef}>
          <div className='offer1' style={{cursor: 'pointer'}} onClick={handleOffer}></div>
          <div className='offer2' style={{cursor: 'pointer'}} onClick={handleOffer}></div>
          <div className='offer3' style={{cursor: 'pointer'}} onClick={handleOffer}></div>
        </div>

        <div className='displayfoodmenumain' ref={menuRef}>
          {
            foodCategoryDisplay
              ? (
                foodCategoryDisplay.map(
                  (data) => {
                    return (
                      <div key={data.id}>
                        <div className='foodcatagoryname'>{data.CategoryName}</div>
                        <hr />
                        <div className="coverfoodboxmain">
                          <div className='foodBoxMain card-main-main'>
                            {
                              foodItemsDisplay
                                ? (
                                  foodItemsDisplay.filter(
                                    (item) => item.CategoryName === data.CategoryName)
                                ).map(
                                  (filteredItems) => {
                                    return (
                                      <div key={filteredItems._id}>
                                        <Card
                                          className='cardboxprint'
                                          foodItemProp={filteredItems}
                                          // foodItemsName={filteredItems.name}
                                          // foodItemsImage={filteredItems.img}
                                          // foodItemsDescription={filteredItems.description}
                                          foodItemsOptions={filteredItems.options[0]}
                                        />
                                      </div>
                                    )
                                  }
                                )

                                : <div>error</div>
                            }
                          </div>
                        </div>
                      </div>
                    )
                  }
                )
              )
              : ""
          }
        </div>

      </div>
      <div> <Footer /> </div>


  {finalOrder.length > 0 && (

      <>
        <img
          src={cartImg}
          alt="Cart"
          style={{
            position: 'fixed',
            bottom: 50,
            right: 50,
            height: 100,
            width: 100,
            borderRadius: '50%',
            cursor: 'pointer',
            zIndex: 1000, 
          }} 
          onClick={()=>navigate("/Cart")}
          />
        <p
          style={{
            position: 'fixed',
            bottom: 110, 
            right: 50,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            height: 24,
            width: 24,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 14,
            margin: 0,
            zIndex: 1001,
            userSelect: 'none',
            pointerEvents: 'none', 
          }}
        >
          {finalOrder.length}
        </p>
    </>
  )}





      {/* <div className="container">
        {foodCategoryDisplay ? (
          foodCategoryDisplay.map((data) => {
            return (
              <div key={data._id}>
                <div className={'fs-3 m-3'}>{data.CategoryName}</div>
                <hr />
                <div className="card-grid">
                  {foodItemsDisplay
                    ? foodItemsDisplay
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filteredItems) => {
                        return (
                          <div key={filteredItems._id}>
                            <Card
                              foodItemProp = {filteredItems}
                              // foodItemsName={filteredItems.name}
                              // foodItemsImage={filteredItems.img}
                              // foodItemsDescription={filteredItems.description}
                              foodItemsOptions={filteredItems.options[0]}
                            />
                          </div>
                        );
                      })
                    : console.log('error displaying food items')}
                </div>
              </div>
            );
          })
        ) : (
          console.log('error displaying food categories')
        )}
      </div>


      <div> <Footer /> </div> */}
    </div>
  );
}

export default Home;