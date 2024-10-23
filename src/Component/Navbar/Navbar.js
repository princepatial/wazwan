import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleModal = () => {
    setShowModal(!showModal); // Toggle modal visibility
  };

  const getBackgroundImage = () => {
    switch (location.pathname) {
      case '/about-us':
        return '/images/background-about.webp';
      case '/our-menus':
        return '/images/background-menu.jpg';
      case '/catering':
        return '/images/background-about.webp';
      case '/contact':
        return '/images/background-contatc.webp';
      default:
        return '/images/background-home.webp';
    }
  };

  const getHeaderText = () => {
    switch (location.pathname) {
      case '/about-us':
        return 'about us';
      case '/our-menus':
        return 'our menus';
      case '/catering':
        return 'catering';
      case '/contact':
        return 'contact us';
      default:
        return '"Tradition On Every Plate,\nExcellence In Every Bite"';
    }
  };

  const getSubText = () => {
    switch (location.pathname) {
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
    <div
      className='navbar-up'
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        minHeight: isHomePage ? '100vh' : '60vh'
      }}>
      <div className='nav-smaller'>
        <div className='navbar-small container-fluid'>
          <ul className="d-flex flex-wrap">
            <li className="d-flex align-items-center">
              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 384 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>

              Chandigarh, India<br /> Mohali, India </li>
            <li className="d-flex align-items-center">
              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
              </svg>
              +91 884-7026594 <br /> +91 73888 48178 </li>

            <li className="d-flex align-items-center">
              <svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
              contact.wazwan@gmail.com</li>

            <li>
              <div className='d-flex align-items-center contact-icons mx-5'>
              <a href="https://www.facebook.com/people/Wazwan-Legacy/61556216672676/?mibextid=LQQJ4d&rdid=Hol2WGch2Qzv04WD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F2wZwvR22bwzE7a1M%2F%3Fmibextid%3DLQQJ4d" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className='svg-icons' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
                </a>
                 
                <a href="https://www.instagram.com/wazwan_legacy/" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className='svg-icons' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
                </a>
                 
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className='svg-icons' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775a4.958 4.958 0 0 0 2.163-2.724 9.865 9.865 0 0 1-3.127 1.184 4.936 4.936 0 0 0-8.401 4.49A14.01 14.01 0 0 1 1.671 3.149 4.933 4.933 0 0 0 3.192 9.72a4.936 4.936 0 0 1-2.23-.616c-.054 2.282 1.582 4.415 3.946 4.89a4.935 4.935 0 0 1-2.224.085c.627 1.956 2.444 3.379 4.6 3.419a9.874 9.874 0 0 1-6.102 2.104c-.394 0-.779-.023-1.158-.067a13.933 13.933 0 0 0 7.548 2.209c9.057 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.014-.637a9.936 9.936 0 0 0 2.455-2.549z" />
                </svg>
                </a>

                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <svg aria-hidden="true" className='svg-icons' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d="M17.472 14.382c-.297-.148-1.76-.867-2.033-.964-.273-.099-.472-.148-.672.148-.198.297-.768.964-.94 1.163-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.474-.883-.79-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.132.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.148-.672-1.614-.923-2.22-.242-.581-.487-.502-.672-.512l-.573-.012c-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.098 3.202 5.083 4.487.711.307 1.264.491 1.696.629.713.226 1.362.194 1.875.118.572-.085 1.76-.719 2.006-1.413.247-.694.247-1.29.173-1.413-.074-.123-.273-.198-.572-.347zM11.997 2c5.514 0 9.997 4.483 9.997 9.997a9.948 9.948 0 0 1-1.608 5.402l1.127 4.101-4.202-1.104A9.942 9.942 0 0 1 12 22c-5.514 0-9.997-4.483-9.997-9.997S6.483 2 11.997 2z" />
                </svg>
                </a>
              </div>

            </li>
          </ul>
        </div>
        <div className={`navbar-main text-center ${showModal ? 'modal-open' : ''}`}>
          <div className='main-logo'>
            <Link to={'/'}>
            <img src='../images/wazwan-logo.jpg' className='main-logo-here' alt='Logo' /> </Link>
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
            <button id='btn-online' onClick={toggleModal}>Order Online</button>
          </div>
          {/* Modal for ordering online */}
          {/* Modal for ordering online */}
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h1 className="modal-header">Place Your Online Order</h1> {/* Header title with class */}
                <h2 className="modal-header">Order Online</h2>
                <div className="modal-body">
                  {/* Chandigarh Section */}
                  <div className="location">
                    <h3 className='model-text'>Chandigarh</h3>
                    <p className='model-text'>Order online from:</p>
                    <div className="images">
                      <img src="../images/zomato-logo.png" alt="Zomato - Chandigarh" />
                      <img src="../images/swiggy-logo.png" alt="Swiggy - Chandigarh" />
                      <img src="../images/fatafat.jpg" alt="Fatafat - Chandigarh" />
                    </div>
                  </div>
                  {/* Vertical Divider */}
                  <div className="vertical-divider"></div>

                  {/* Mohali Section */}
                  <div className="location">
                    <h3 className='model-text'>Mohali</h3>
                    <p className='model-text'>Order online from:</p>
                    <div className="images">
                      <img src="../images/zomato-logo.png" alt="Zomato - Mohali" />
                      <img src="../images/swiggy-logo.png" alt="Swiggy - Mohali" />
                      <img src="../images/fatafat.jpg" alt="Fatafat - Mohali" />
                    </div>
                  </div>
                </div>
                <button onClick={toggleModal} className="close-btn">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`text-over-img ${!isHomePage ? 'text-move-up' : ''}`}>
        <h1>{getHeaderText()}</h1>
      </div>
      {isHomePage && (
        <div className='main-txt-lower1'>
          <span id='subtext'>{getSubText()}</span>
        </div>
      )}
      {isHomePage && (
        <div className='btn-menu'>
          <Link to={'/our-menus'}>
          <button>View Menus</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar
