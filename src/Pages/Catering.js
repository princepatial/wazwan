import React, { useState, useEffect } from 'react';
import './Catering.css';

const Catering = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Using requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        const position = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // Calculate scroll percentage with smoother interpolation
        const scrollPercentage = Math.min(
          position / (documentHeight - windowHeight),
          1
        );
        
        setScrollPosition(scrollPercentage);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transform values based on scroll position
  const getTransform = (direction) => {
    const maxMove = 100; // Reduced maximum movement distance
    const move = scrollPosition * maxMove;
    
    return {
      transform: `translateX(${direction === 'left' ? -move : move}px)`,
      transition: 'transform 0.5s ease-out' // Faster transition time with ease-out
    };
  };

  return (
    <>
      <div className='four-buttons'>
        <button>Corporate</button>
        <button>Party</button>
        <button>Event</button>
      </div>

      <div className="container-another1 mt-5">
        <div className="section-one1">
          <img src="https://wazwanksa.com/wp-content/uploads/2023/12/corporate-catering.png" alt="Kashmiri Wazwan"/>
        </div>
        <div className="side-text1" style={getTransform('left')}>
          <h1><font>Corporate </font> Catering</h1>
          <p style={{marginTop:"25px"}}>We will be pleased to to cater our signature Kashmiri Wazwan or authentic Indian dishes at reasonable prices.</p>
          <button>Contact Now</button>
        </div>
      </div>

      <div className="container1 mt-5">
        <div className="side-text1" style={getTransform('right')}>
          <h1><font>Party</font> Catering</h1>
          <p>We are all set to spice up your parties with Kashmiri Wazwan and authentic Indian delicacies. We can serve buffets or family style menus. For further details and discussions please get in touch .</p>
          <button>Contact Now</button>
        </div>
        <div className="section-one1">
          <img src="https://wazwanksa.com/wp-content/uploads/2023/12/party.png" alt="Kashmiri Wazwan"/>
        </div>
      </div>

      <div className="container-another1 mt-5">
        <div className="section-one1">
          <img src="https://wazwanksa.com/wp-content/uploads/2023/12/event.png" alt="Kashmiri Wazwan"/>
        </div>
        <div className="side-text1" style={getTransform('left')}>
          <h1><font>Event </font> Catering</h1>
          <p>Embark on a culinary journey that transcends borders as we invite you to experience the soulful allure of Kashmiri Wazwan, right here in the heart of Saudi Arab.</p>
          <button>Contact Now</button>
        </div>
      </div>

      <div className='online-delivery mt-5'>
        <div className='text-place'>
          <h1>Open<font> 7 days</font></h1>
          <svg aria-hidden="true" className='svg-clock' viewBox='0 0 448 512' xmlns='http://www.w3.org/2000/svg'>
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
          </svg>
          12:00PM - 11:00PM
          <br />
          <button>Get online delivery</button>
          <span>or call us +91 884-7026594, +91 73888 481785</span>
        </div>
      </div>

      <div className='delivery-area-des mt-5'>
        <h1>delivery <font> Area</font></h1>
        <p>We are available for delivery of our Kashmiri wazwan in <b>Riyadh</b> region of Saudi Arabia. For delivery in other regions, <br /> please contact us directly.</p>
      </div>
    </>
  );
};

export default Catering;