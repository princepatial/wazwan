import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();


  const getBackgroundImage = () => {
    switch(location.pathname) {
      case '/about-us':
        return '/images/background-about.webp';
      case '/our-menus':
        return '/images/background-menu.jpg';
      case '/catering':
        return '/images/background-about.webp';
      case '/contact':
        return '/images/background-contact.webp';
      default:
        return '/images/background-home.webp';
    }
  };

  const getHeaderText = () => {
    switch(location.pathname) {
      case '/about-us':
        return '"Our Story, Our Passion"';
      case '/our-menus':
        return '"A Culinary Journey"';
      case '/catering':
        return '"Elevate Your Events"';
      case '/contact':
        return '"Get in Touch"';
      default:
        return '"Tradition On Every Plate,\nExcellence In Every Bite"';
    }
  };

  const getSubText = () => {
    switch(location.pathname) {
      case '/about-us':
        return "Discover the rich heritage behind Wazwan and our commitment to authentic Kashmiri cuisine.";
      case '/our-menus':
        return "Explore our diverse menu, featuring traditional Wazwan delicacies and modern interpretations.";
      case '/catering':
        return "Let us bring the magic of Wazwan to your special occasions and corporate events.";
      case '/contact':
        return "We're here to answer your questions and hear your feedback.";
      default:
        return "Celebrate Kashmir's Culinary Heritage at Wazwan, where each dish is a symphony of tradition and taste, inviting you to savor the essence of Wazwan magic.";
    }
  };



  return (
    <div className='navbar-up' style={{backgroundImage: `url(${getBackgroundImage()})`}}>
    <div className='nav-smaller'>
      <div className='navbar-small container-fluid'>
        <ul className="d-flex flex-wrap">
          <li className="d-flex align-items-center">
            <svg aria-hidden="true" className='svg-icons' viewBox='0 0 384 512' xmlns='http://www.w3.org/2000/svg'>
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>

            Mohali, India</li>
          <li className="d-flex align-items-center">
            <svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            +9876543210</li>

          <li className="d-flex align-items-center">
            <svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
              <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
            </svg>
            info@wazwan.com</li>

          <li>
            <div className='d-flex align-items-center contact-icons mx-5'>
              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
              </svg>

              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>

              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 496 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm169.5 338.9c-3.5 8.1-18.1 14-44.8 18.2-1.4 1.9-2.5 9.8-4.3 15.9-1.1 3.7-3.7 5.9-8.1 5.9h-.2c-6.2 0-12.8-2.9-25.8-2.9-17.6 0-23.7 4-37.4 13.7-14.5 10.3-28.4 19.1-49.2 18.2-21 1.6-38.6-11.2-48.5-18.2-13.8-9.7-19.8-13.7-37.4-13.7-12.5 0-20.4 3.1-25.8 3.1-5.4 0-7.5-3.3-8.3-6-1.8-6.1-2.9-14.1-4.3-16-13.8-2.1-44.8-7.5-45.5-21.4-.2-3.6 2.3-6.8 5.9-7.4 46.3-7.6 67.1-55.1 68-57.1 0-.1.1-.2.2-.3 2.5-5 3-9.2 1.6-12.5-3.4-7.9-17.9-10.7-24-13.2-15.8-6.2-18-13.4-17-18.3 1.6-8.5 14.4-13.8 21.9-10.3 5.9 2.8 11.2 4.2 15.7 4.2 3.3 0 5.5-.8 6.6-1.4-1.4-23.9-4.7-58 3.8-77.1C183.1 100 230.7 96 244.7 96c.6 0 6.1-.1 6.7-.1 34.7 0 68 17.8 84.3 54.3 8.5 19.1 5.2 53.1 3.8 77.1 1.1.6 2.9 1.3 5.7 1.4 4.3-.2 9.2-1.6 14.7-4.2 4-1.9 9.6-1.6 13.6 0 6.3 2.3 10.3 6.8 10.4 11.9.1 6.5-5.7 12.1-17.2 16.6-1.4.6-3.1 1.1-4.9 1.7-6.5 2.1-16.4 5.2-19 11.5-1.4 3.3-.8 7.5 1.6 12.5.1.1.1.2.2.3.9 2 21.7 49.5 68 57.1 4 1 7.1 5.5 4.9 10.8z"></path>
              </svg>

              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
              </svg>
            </div>

          </li>
        </ul>
      </div>
      <div className='navbar-main text-center'>
      <div className='main-logo'>
        <img src='../images/wazwan-logo.jpg' className='main-logo-here' alt='Logo' />
      </div>
      <div className='navbar-components mt-3 mx-5'>
      <ul className="d-flex list-unstyled">
      <li className="mx-3"><Link to="/">Home</Link></li>
              <li className="mx-3"><Link to="/about-us">About Us</Link></li>
              <li className="mx-3"><Link to="/our-menus">Our Menus</Link></li>
              <li className="mx-3"><Link to="/catering">Catering</Link></li>
              <li className="mx-3"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="btn-order">
        <button id='btn-online'>Order Online</button>
      </div>
    </div>
    </div>

    <div className='text-over-img'>
        <h1>{getHeaderText()}</h1>
      </div>
      <div className='main-txt-lower'>
        <span>{getSubText()}</span>
      </div>
    <div className='btn-menu'>
        <button>View Menus</button>
    </div>
 
  </div >
  )
}

export default Navbar
