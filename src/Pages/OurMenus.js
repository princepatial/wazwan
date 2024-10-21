import React from 'react'
import { Link } from 'react-router-dom';
import './OurMenus.css' 
import { Breakfast, Beverages } from '../Pages/MenuData';

const OurMenus = () => {
    return (
        <>
            <div className="breakfast-menu">
                <nav className="menu-nav mt-5">
                    <ul>
                        <li>Breakfast</li>
                        <li>Beverages</li>
                        <li>Starters</li>
                        <li>Main Course</li>
                        <li>Indian Delicacies</li>
                        <li>Vegetarian Specialties</li>
                        <li>Rice and Breads</li>
                        <li>Kids Menu</li>
                    </ul>
                </nav>
                <div className="image-container">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Breakfast</h2>
                </div>
            </div>



            <div className="food-menu mt-5 mb-5">
                {Breakfast.map(item => (
                    <Link to={`/menu-item/${item.id}`} key={item.id} className="food-item">
                        <img src={item.image} alt={item.name} className="food-image" />
                        <div className="item-info mt-4">
                            <h3>{item.name}</h3>
                            <span className="calories">{item.calories} Calories</span>
                        </div>
                        <p id='desc'>{item.description}</p>
                        <div className="price">sar {item.price}</div>
                    </Link>
                ))}
            </div>



            <div className='beverages'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Beverages</h2>
                </div>
                <div className="beverages-menu mt-5 mb-5">
                    {Beverages.map(item => (
                        <div className="food-item1" key={item.id}>
                            <img src={item.image} alt={item.name} className="food-image1" />
                            <div className="item-info1 mt-4">
                                <h3>{item.name}</h3>
                                <span className="calories">{item.calories} Calories</span>
                            </div>
                            <p id='desc'>{item.description}</p>
                            <div className="price">sar {item.price}</div> {/* Adding price field */}
                        </div>
                    ))}
                </div>

            </div>


            <div className='starters'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Starters</h2>
                </div>
                <div className="starters-menu mt-5 mb-5">
                    {Beverages.map(item => (
                        <div className="food-item1" key={item.id}>
                            <img src={item.image} alt={item.name} className="food-image1" />
                            <div className="item-info1 mt-4">
                                <h3>{item.name}</h3>
                                <span className="calories">{item.calories} Calories</span>
                            </div>
                            <p id='desc'>{item.description}</p>
                            <div className="price">sar {item.price}</div> {/* Adding price field */}
                        </div>
                    ))}
                </div>

            </div>





            <div className='wazwan'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Wazwan Main Course</h2>
                </div>
            <div className="wazwan-menu mt-5 mb-5">
                {Breakfast.map(item => (
                    <div className="food-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="food-image" />
                        <div className="item-info mt-4">
                            <h3>{item.name}</h3>
                            <span className="calories">{item.calories} Calories</span>
                        </div>
                        <p id='desc'>{item.description}</p>
                        <div className="price">sar {item.price}</div> {/* Adding price field */}
                    </div>
                ))}
            </div>
            </div>


            <div className='indian-delicious'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Indian Delicious</h2>
                </div>
            <div className="indian-menu mt-5 mb-5">
                {Beverages.map(item => (
                    <div className="food-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="food-image" />
                        <div className="item-info mt-4">
                            <h3>{item.name}</h3>
                            <span className="calories">{item.calories} Calories</span>
                        </div>
                        <p id='desc'>{item.description}</p>
                        <div className="price">sar {item.price}</div> {/* Adding price field */}
                    </div>
                ))}
            </div>
            </div>


            <div className='vegatrian-speciliciiest'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Vegetarian Specialties</h2>
                </div>
            <div className="vegetrian-menu mt-5 mb-5">
                {Breakfast.map(item => (
                    <div className="food-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="food-image" />
                        <div className="item-info mt-4">
                            <h3>{item.name}</h3>
                            <span className="calories">{item.calories} Calories</span>
                        </div>
                        <p id='desc'>{item.description}</p>
                        <div className="price">sar {item.price}</div> {/* Adding price field */}
                    </div>
                ))}
            </div>
            </div>


            
            <div className='kids-section'>
                <div className="image-container1">
                    <img src="../images/home-img.jpg" alt="Breakfast items" />
                    <h2>Kids Menu</h2>
                </div>
            <div className="kids-menu mt-5 mb-5">
                {Beverages.map(item => (
                    <div className="food-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="food-image" />
                        <div className="item-info mt-4">
                            <h3>{item.name}</h3>
                            <span className="calories">{item.calories} Calories</span>
                        </div>
                        <p id='desc'>{item.description}</p>
                        <div className="price">sar {item.price}</div> {/* Adding price field */}
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}

export default OurMenus
