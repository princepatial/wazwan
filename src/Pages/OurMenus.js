import React, { useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './OurMenus.css';
import { Breakfast, Beverages,Staters,wazwan,indian, veg,kids} from '../Pages/MenuData';

const OurMenus = () => {
    const refs = {
        'breakfast': useRef(null),
        'beverages': useRef(null),
        'starters': useRef(null),
        'main-course': useRef(null),
        'indian-delicacies': useRef(null),
        'vegetarian-specialties': useRef(null),
        'kids-menu': useRef(null),
        'desserts': useRef(null),
        'appetizers': useRef(null),
        'sides': useRef(null)
    };

    const location = useLocation();

    useEffect(() => {
        const section = location.pathname.split('/').pop();
        if (refs[section] && refs[section].current) {
            setTimeout(() => {
                refs[section].current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);

    const scrollToSection = (e, sectionRef) => {
        e.preventDefault();
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="breakfast-menu">
                <nav className="menu-nav mt-5">
                    <ul>
                        <li><Link to="/menu/breakfast" onClick={(e) => scrollToSection(e, refs['breakfast'])}>Breakfast</Link></li>
                        <li><Link to="/menu/beverages" onClick={(e) => scrollToSection(e, refs['beverages'])}>Beverages</Link></li>
                        <li><Link to="/menu/starters" onClick={(e) => scrollToSection(e, refs['starters'])}>Starters</Link></li>
                        <li><Link to="/menu/main-course" onClick={(e) => scrollToSection(e, refs['main-course'])}>Main Course</Link></li>
                        <li><Link to="/menu/indian-delicacies" onClick={(e) => scrollToSection(e, refs['indian-delicacies'])}>Indian Delicacies</Link></li>
                        <li><Link to="/menu/vegetarian-specialties" onClick={(e) => scrollToSection(e, refs['vegetarian-specialties'])}>Vegetarian Specialties</Link></li>
                        <li><Link to="/menu/kids-menu" onClick={(e) => scrollToSection(e, refs['kids-menu'])}>Kids Menu</Link></li>
                    </ul>
                </nav>

                <div ref={refs['breakfast']} className="breakfast-menu">
                    <div className="image-container">
                    <div class="overlay"></div>
                        <img src="../images/breakfast-img.webp" alt="Breakfast items" />
                        <h2>Breakfast</h2>
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
                                <div className="price">SAR {item.price}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div ref={refs['beverages']} className='beverages'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/beverages/beverage-bg.jpg" alt="Beverages" />
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
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={refs['starters']} className='starters'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/Staters/starters-bg.jpg" alt="Starters" />
                        <h2>Starters</h2>
                    </div>
                    <div className="starters-menu mt-5 mb-5">
                        {Staters.map(item => (
                            <div className="food-item1" key={item.id}>
                                <img src={item.image} alt={item.name} className="food-image1" />
                                <div className="item-info1 mt-4">
                                    <h3>{item.name}</h3>
                                    <span className="calories">{item.calories} Calories</span>
                                </div>
                                <p id='desc'>{item.description}</p>
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={refs['main-course']} className='wazwan'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/background-about.webp" alt="Wazwan Main Course" />
                        <h2>Wazwan Main Course</h2>
                    </div>
                    <div className="wazwan-menu mt-5 mb-5">
                        {wazwan.map(item => (
                            <div className="food-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="food-image" />
                                <div className="item-info mt-4">
                                    <h3>{item.name}</h3>
                                    <span className="calories">{item.calories} Calories</span>
                                </div>
                                <p id='desc'>{item.description}</p>
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={refs['indian-delicacies']} className='indian-delicious'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/indian/indian-bf.jpg" alt="Indian Delicious" />
                        <h2>Indian Delicious</h2>
                    </div>
                    <div className="indian-menu mt-5 mb-5">
                        {indian.map(item => (
                            <div className="food-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="food-image" />
                                <div className="item-info mt-4">
                                    <h3>{item.name}</h3>
                                    <span className="calories">{item.calories} Calories</span>
                                </div>
                                <p id='desc'>{item.description}</p>
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={refs['vegetarian-specialties']} className='vegatrian-speciliciiest'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/veg/veg-bg.webp" alt="Vegetarian Specialties" />
                        <h2>Vegetarian Specialties</h2>
                    </div>
                    <div className="vegetrian-menu mt-5 mb-5">
                        {veg.map(item => (
                            <div className="food-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="food-image" />
                                <div className="item-info mt-4">
                                    <h3>{item.name}</h3>
                                    <span className="calories">{item.calories} Calories</span>
                                </div>
                                <p id='desc'>{item.description}</p>
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div ref={refs['kids-menu']} className='kids-section'>
                    <div className="image-container1">
                    <div class="overlay"></div>
                        <img src="../images/kids/kids-bg.jpg" alt="Kids Menu" />
                        <h2>Kids Menu</h2>
                    </div>
                    <div className="kids-menu mt-5 mb-5">
                        {kids.map(item => (
                            <div className="food-item" key={item.id}>
                                <img src={item.image} alt={item.name} className="food-image" />
                                <div className="item-info mt-4">
                                    <h3>{item.name}</h3>
                                    <span className="calories">{item.calories} Calories</span>
                                </div>
                                <p id='desc'>{item.description}</p>
                                <div className="price">sar {item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMenus;
