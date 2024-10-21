import React,{useState,useEffect,useCallback} from 'react'
import './Home.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const popularItems = [
  { id: 1, title: "Rice and breads", subtitle: "Chicken Biryani", image: "../images/four-collge2.png" },
  { id: 2, title: "Kids Menu", subtitle: "Chicken Nuggets", image: "../images/fou-collage4.webp" },
  { id: 3, title: "Breakfast", subtitle: "Harissa", image: "../images/four-collge2.png" },
  { id: 4, title: "Kids Menu", subtitle: "Chicken Nuggets", image: "../images/fou-collage4.webp" },
  { id: 5, title: "Beverages", subtitle: "Noon Chai Kashmiri", image: "../images/fou-collage4.webp" },
  { id: 6, title: "Kids Menu", subtitle: "Chicken Nuggets", image: "../images/fou-collage4.webp" },
  { id: 7, title: "Desserts", subtitle: "Phirni", image: "../images/four-collge2.png" },
  { id: 8, title: "Appetizers", subtitle: "Kashmiri Kebabs", image: "../images/four-collge2.png" },
  { id: 9, title: "Main Course", subtitle: "Rogan Josh", image: "../images/four-collge2.png" },
  { id: 10, title: "Sides", subtitle: "Kashmiri Pulao", image: "../images/four-collge2.png" },
];

const Home = ({autoSlideInterval = 5000 }) => {

  const [scrollDown, setScrollDown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const gap = 20;

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setScrollDown(true); // Scrolling down
      } else {
        setScrollDown(false); // Scrolling up
      }

      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % popularItems.length);
  }, [popularItems.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + popularItems.length) % popularItems.length);
  }, [popularItems.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoSlideInterval]);

  // Create an array with additional items for seamless looping
  const extendedItems = [
    ...popularItems.slice(-itemsPerPage),
    ...popularItems,
    ...popularItems.slice(0, itemsPerPage)
  ];


  


  return (
    <>

<div className="container mt-5">
  <div className="section-one">
    <img src="../images/home-section1.webp" alt="Kashmiri Wazwan"/>
  </div>
  <div className={`side-text ${scrollDown ? "moved" : ""}`}>
    <h1>about <font>Wazwan</font></h1>
    <h2>"Kashmiri Wazwan, Where Heritage Meets Culinary Art"</h2>
    <p>Welcome to <b>WAZWAN</b> where we bring the soulful allure of Kashmiri Wazwan to the heart of Saudi Arabia. Immerse yourself in a culinary journey that transcends borders, as we proudly present the authentic flavors of Kashmir right to your home.</p>
    <button>Read More</button>
  </div>
</div>

<div className="container-another mt-5">
  <div className={`side-text ${scrollDown ? "move-right" : ""}`}>
    <h1>about <font>Wazwan</font></h1>
    <h2>"Kashmiri Wazwan, Where Heritage Meets Culinary Art"</h2>
    <p>Welcome to <b>WAZWAN</b> where we bring the soulful allure of Kashmiri Wazwan to the heart of Saudi Arabia. Immerse yourself in a culinary journey that transcends borders, as we proudly present the authentic flavors of Kashmir right to your home.</p>
    <button>Read More</button>
  </div>
  <div className="section-two">
    <div className="image-collage">
      <img src="../images/four-collage1.webp" alt="Kashmiri Wazwan 1" />
      <img src="../images/four-collge2.png" alt="Kashmiri Wazwan 2" />
      <img src="../images/four-collage3.webp" alt="Kashmiri Wazwan 3" />
      <img src="../images/fou-collage4.webp" alt="Kashmiri Wazwan 4" />
    </div>
  </div>
</div>


<div className="popular-items">
        <h1>Our Popular <span className="highlight">Items</span></h1>
        <p>"Wazwan's, each dish is a masterpiece, carrying the rich heritage of Kashmir"</p>

        <div className="menus-page" style={{ position: 'relative', padding: '0 40px', overflow: 'hidden' }}>
          <div style={{ 
            display: 'flex', 
            gap: `${gap}px`, // Add gap between items
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(calc(-${(currentIndex + itemsPerPage) * (100 / itemsPerPage)}% - ${currentIndex * gap}px))`,
          }}>
            {extendedItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="menu-item" style={{ 
                flex: `0 0 calc(${100 / itemsPerPage}% - ${gap * (itemsPerPage - 1) / itemsPerPage}px)` 
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '300px', // Increased height
                    objectFit: 'cover' 
                  }} 
                />
                <div className="menu-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={prevSlide} className="nav-button prev" aria-label="Previous item">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="nav-button next" aria-label="Next item">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="btn-menu-order">
          <button>View Menu</button>
        </div>
      </div>


    
<div className="container mt-5">
  <div className="section-one">
    <img src="../images/home-section1.webp" alt="Kashmiri Wazwan"/>
  </div>
  <div className={`side-text ${scrollDown ? "moved" : ""}`}>
    <h1>Meet <font>with us</font></h1>
    <h2>"Kashmiri Wazwan, Where Heritage Meets Culinary Art"</h2>
    <p>Welcome to <b>WAZWAN</b> where we bring the soulful allure of Kashmiri Wazwan to the heart of Saudi Arabia. Immerse yourself in a culinary journey that transcends borders, as we proudly present the authentic flavors of Kashmir right to your home.</p>
    <button>Read More</button>
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
              <span>or call us +966 55 512 7624, +966 53 271 8265</span>
  </div>
</div>

<div className='delivery-area-des mt-5'>
  <h1>delivery <font> Area</font></h1>
  <p>We are available for delivery of our Kashmiri wazwan in <b>Riyadh</b> region of Saudi Arabia. For delivery in other regions, <br /> please contact us directly.</p>
</div>
    </>
  )
}

export default Home
