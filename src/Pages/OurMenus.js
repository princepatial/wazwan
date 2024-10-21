import React from 'react'
import './OurMenus.css'

const Breakfast = [
    {
        name: 'Sheermal (2 Pieces)',
        calories: 447,
        description: 'Thick flat bread made with milk, butter, flour, and saffron.',
        id: 1,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
    {
        name: 'Chapati plain',
        calories: 104,
        description: 'Traditional Indian flatbread made from whole wheat.',
        id: 2,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 5
    },
    {
        name: 'Kashmiri Saffron Phirni',
        calories: 352,
        description: 'Traditional Kashmiri dessert made of semolina, flavored with saffron and cardamom.',
        id: 3,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
    {
        name: 'Harissa (250 gms)',
        calories: 766,
        description: 'A delicacy made with mutton and aromatic herbs cooked overnight and finished with crispy onion.',
        id: 4,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 40
    },
    {
        name: 'Chicken patty (3 Pieces)',
        calories: 516,
        description: 'Crunchy patties made with mouth-watering minced aromatic chicken.',
        id: 5,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
    {
        name: 'Bakarkhani (5 Pieces)',
        calories: 425,
        description: 'Crispy layered bread made with butter and flour.',
        id: 6,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    }
];


const Beverages = [
    {
        name: 'Sheermal (2 Pieces)',
        calories: 447,
        description: 'Thick flat bread made with milk, butter, flour, and saffron.',
        id: 1,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
    {
        name: 'Chapati plain',
        calories: 104,
        description: 'Traditional Indian flatbread made from whole wheat.',
        id: 2,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 5
    },
    {
        name: 'Kashmiri Saffron Phirni',
        calories: 352,
        description: 'Traditional Kashmiri dessert made of semolina, flavored with saffron and cardamom.',
        id: 3,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
    {
        name: 'Harissa (250 gms)',
        calories: 766,
        description: 'A delicacy made with mutton and aromatic herbs cooked overnight and finished with crispy onion.',
        id: 4,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 40
    },
    {
        name: 'Chicken patty (3 Pieces)',
        calories: 516,
        description: 'Crunchy patties made with mouth-watering minced aromatic chicken.',
        id: 5,
        image: "../images/four-collge2.png", // Replace with your image path
        price: 10
    },
];

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
