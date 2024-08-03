// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';
// import Carousel from '../components/Carousel';
// import { useState, useEffect } from 'react';
// import '../css/Card.css';

// const Home = () => {

//   const [foodItemsDisplay, setFoodItemsDisplay] = useState([]);
//   const [foodCategoryDisplay, setFoodCategoryDisplay] = useState([]);

//   const fetchData = async () => {
//     // let res = await fetch("https://food-site-backend-nine.vercel.app/api/foodItemsData", {
//     let res = await fetch("http://localhost:5000/api/foodItemsData", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     const finalData = await res.json();
//     // console.log(finalData); 
//     setFoodItemsDisplay(finalData[0]);
//     setFoodCategoryDisplay(finalData[1]);
//   }
//   useEffect(() => { fetchData() }, []);

//   return (
//     <div>
//       <div> <Navbar /> </div>
//       <div> <Carousel /> </div>

//       <div className="container">
//         {foodCategoryDisplay ? (
//           foodCategoryDisplay.map((data) => {
//             return (
//               <div key={data._id}>
//                 <div className={'fs-3 m-3'}>{data.CategoryName}</div>
//                 <hr />
//                 <div className="card-grid">
//                   {foodItemsDisplay
//                     ? foodItemsDisplay
//                       .filter((item) => item.CategoryName === data.CategoryName)
//                       .map((filteredItems) => {
//                         return (
//                           <div key={filteredItems._id}>
//                             <Card
//                               foodItemProp = {filteredItems}
//                               // foodItemsName={filteredItems.name}
//                               // foodItemsImage={filteredItems.img}
//                               // foodItemsDescription={filteredItems.description}
//                               foodItemsOptions={filteredItems.options[0]}
//                             />
//                           </div>
//                         );
//                       })
//                     : console.log('error displaying food items')}
//                 </div>
//               </div>
//             );
//           })
//         ) : (
//           console.log('error displaying food categories')
//         )}
//       </div>


//       <div> <Footer /> </div>
//     </div>
//   );
// }

// export default Home;







// //Old piece of code
// {/* <div className='container'>
//   {
//     (foodCategoryDisplay)
//       ? (foodCategoryDisplay.map(
//           (data) => {
//             return ( 
//               <div className='row mb-3'>

//                 <div key={data._id} className={'fs-3 m-3'}> 
//                   {data.CategoryName} 
//                 </div>
                
//                 <hr />

//                 <div>
//                   {
//                     (foodItemsDisplay)
//                       ? (
//                           foodItemsDisplay.filter(
//                             (item) => (item.CategoryName === data.CategoryName)  
//                           ).map(
//                             (filteredItems) => {
//                               return(
//                                 <div key={filteredItems._id} className='col-12 col-md-6 col-lg-3'>
//                                   <Card 
//                                     foodItemsName = {filteredItems.name}
//                                     foodItemsImage = {filteredItems.img}
//                                     foodItemsOptions = {filteredItems.options[0]}
//                                     foodItemsDescription = {filteredItems.description}
//                                   />
//                                 </div>
//                               )
//                             }
//                           )
//                         )
//                       : console.log("error displaying food items")
//                   }
//                 </div>

//               </div>
//             )
//           }
//         ))
//       : console.log("error displaying food catagories")
//   }

// </div> */}


import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  const notify = () => toast("Value added to cart");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer 
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Home
