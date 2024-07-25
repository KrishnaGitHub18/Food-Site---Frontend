import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card m-3" style={{ width: '18rem' }}>
                <img src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <div className='container w-100 d-flex flex-row'>
                        <select className='m-2 h-100 w-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 w-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                    <div> Total Price </div>
                </div>
            </div>
        </div>

    );
}

export default Card;
