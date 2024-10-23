import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MenuItem.css';
import { Breakfast, Beverages,Staters, wazwan, indian, veg,kids } from '../Pages/MenuData';

const MenuItem = () => {
    const { id } = useParams();
    const allItems = [...Breakfast, ...Beverages,...Staters,...wazwan,...indian,...veg,...kids];
    const item = allItems.find(item => item.id === parseInt(id));

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="menu-item-page">
            <div className="item-details">
                <h1 className="item-name">{item.name}</h1>
                <div className="item-image">
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                    <span className="item-pieces">{item.pieces || '(2 Pieces)'}</span>
                    <span className="item-calories">{item.calories} Calories</span>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-price">sar {item.price}</div>
                <div className="button-container">
                    <Link to="/our-menus" className="button">Back to Menu</Link>
                    <Link to="/contact" className="button contact">Contact Us</Link>
                </div>
            </div>


            <div className="online-order">
                <h2>Online Order</h2>
                <div className="order-options">
                    <img src="../images/zomato-logo.png" alt="Jahez" />
                    <img src="../images/swiggy-logo.png" alt="Hunger Station" />
                    <img src="../images/fatafat.jpg" alt="The Chefz" />
                </div>
            </div>
        </div>
    );
};

export default MenuItem;