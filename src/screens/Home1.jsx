import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import { useState, useEffect } from 'react';
import '../css/Home.css'
import '../css/Card.css';

const Home = () => {

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
    // console.log(finalData); 
    setFoodItemsDisplay(finalData[0]);
    setFoodCategoryDisplay(finalData[1]);
  }
  useEffect(() => { fetchData() }, []);

  return (
    <div className='homepageover'>

      <div className='nvb'> <Navbar /> </div>
      <div className='hme'><div className='banner'></div></div>

      <div className='foodMenu'>

        <div className='headingfoodmenu'><h2>All offers from FoodWay</h2></div>

        <div className="offers">
          <div className='offer1'></div>
          <div className='offer2'></div>
          <div className='offer3'></div>
        </div>

        <div className='displayfoodmenumain'>
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
                          <div className='foodBoxMain'>
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