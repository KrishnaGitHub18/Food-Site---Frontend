import React from 'react';
import imgPizza from '../Images/pizzas.jpg';
import imgBurgers from '../Images/burgers.jpg';
import imgMomos from '../Images/momos.jpg';

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-caption" style={{zIndex:"10"}}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success fw-bolder" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" style={{ maxHeight: "650px", objectFit: "contain"}}>
                        <img src={imgPizza} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "650px", objectFit: "contain !important" }}>
                        <img src={imgBurgers} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" style={{ maxHeight: "650px", objectFit: "contain !important" }}>
                        <img src={imgMomos} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
