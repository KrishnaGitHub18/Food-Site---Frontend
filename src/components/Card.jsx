import React from 'react';

const Card = (props) => {

    let options = props.foodItemsOptions;
    let priceOptions = Object.keys(options);

    return (
        <div>
            <div className="card m-3 bg-dark">
                {/* <img src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" className="card-img-top" alt="..." /> */}
                <img src={props.foodItemsImage} className="card-img-top" alt="..." style={{height: "120px", objectFit: "fill"}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItemsName}</h5>
                    <p className="card-text" style={{"fontSize": "12.5px"}}>{props.foodItemsDescription}</p>
                    <div className='container w-100 d-flex flex-row'>
                        <select className='m-2 h-100 w-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 w-100 bg-success rounded'>
                            {
                                priceOptions.map(
                                    (data) => {
                                        return(
                                            <option value={data}>{data}</option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </div>
                    <hr />
                    <button className='h-100 w-100 bg-red rounded' >Add to Cart</button>
                    {/* <div> Total Price </div> */}
                </div>
            </div>
        </div>

    );
}

export default Card;
