import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Home.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate} from 'react-router-dom';

const popularItems = [
  { id: 1, title: "Kids Menu",  image: "../images/kids_menu.jpg", link: "/menu/kids-menu" },
  { id: 2, title: "Breakfast", image: "../images/breakfast.jpg", link: "/menu/breakfast" },
  { id: 3, title: "Beverages",  image: "../images/beverages.png", link: "/menu/beverages" },
  { id: 4, title: "Starters",  image: "../images/staters.jpg", link: "/menu/starters" },
  { id: 5, title: "Indian-delicacies",  image: "./images/indian_del.jpg", link: "/menu/indian-delicacies" },
  { id: 6, title: "Main Course",  image: "../images/home-section1.webp", link: "/menu/main-course" },
  { id: 7, title: "Vegetarian Specialties", image: "../images/vegetrian.jpg", link: "/menu/vegetarian-specialties" },
];

const Home = ({ autoSlideInterval = 5000 }) => {
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const gap = 20;
  const navigate = useNavigate();

  // Refs for sections that need animation
  const sideTextRefs = useRef([]);
  const isScrolling = useRef(false);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling.current) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercentage = (scrollTop / maxScroll) * 100;

          // Update scroll direction
          setScrollDown(scrollTop > lastScrollTop.current);
          lastScrollTop.current = scrollTop;

          // Update scroll position for smooth transitions
          setScrollPosition(scrollPercentage);

          // Apply transforms to side-text elements
          sideTextRefs.current.forEach((ref) => {
            if (ref && ref.current) {
              const rect = ref.current.getBoundingClientRect();
              const elementTop = rect.top;
              const elementHeight = rect.height;
              const windowHeight = window.innerHeight;

              // Calculate element's visibility percentage
              const visiblePercentage = Math.min(
                Math.max(
                  (windowHeight - elementTop) / (windowHeight + elementHeight),
                  0
                ),
                1
              );

              // Calculate transform based on scroll direction and position
              const moveAmount = scrollDown ?
                visiblePercentage * 100 :
                (1 - visiblePercentage) * 100;

              // Apply transform with smooth transition
              ref.current.style.transform = ref.current.classList.contains('move-right') ?
                `translateX(-${moveAmount}px)` :
                `translateX(${moveAmount}px)`;
            }
          });

          isScrolling.current = false;
        });
      }
      isScrolling.current = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Initialize refs for each side-text element
  useEffect(() => {
    sideTextRefs.current = Array(3).fill(null).map(() => React.createRef());
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

  const extendedItems = [
    ...popularItems.slice(-itemsPerPage),
    ...popularItems,
    ...popularItems.slice(0, itemsPerPage)
  ];


  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate(link);
};



  return (
    <>
      <div className="container mt-5">
        <div className="section-one">
          <img src="../images/home-section1.webp" alt="Kashmiri Wazwan" />
        </div>
        <div
          ref={sideTextRefs.current[0]}
          className="side-text"
          style={{ transition: 'transform 0.3s ease-out' }}
        >
          <h1>about <font>Wazwan</font></h1>
          <h2>"Kashmiri Wazwan, Where Heritage Meets Culinary Art"</h2>
          <p>Welcome to <b>WAZWAN</b> where we bring the soulful allure of Kashmiri Wazwan to the heart of Saudi Arabia. Immerse yourself in a culinary journey that transcends borders, as we proudly present the authentic flavors of Kashmir right to your home.</p>
          <Link to={'/about-us'}>
          <button>Read More</button> </Link>
        </div>
      </div>

      <div className="container-another mt-5">
        <div
          ref={sideTextRefs.current[1]}
          className="side-text move-right"
          style={{ transition: 'transform 0.3s ease-out' }}
        >
          <h1>View <font>Menu</font></h1>
          <h2>"Wazwan's, each dish is a masterpiece, carrying the rich heritage of Kashmir"</h2>
          <p>Embark on a culinary journey that transcends borders as we invite you to experience the soulful allure of Kashmiri Wazwan, right here in the heart of Saudi Arab. At WAZWAN each dish is a masterpiece, meticulously crafted to showcase the rich heritage and vibrant flavors of Kashmir.</p>
          <Link to={'/our-menus'}>
          <button>View Menu</button> </Link>
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

      <div className="popular-items1">
                <h1>Our Popular <span className="highlight">Items</span></h1>
                <p style={{color:"#333"}}>"Wazwan's, each dish is a masterpiece, carrying the rich heritage of Kashmir"</p>

                <div className="menus-page" style={{ position: 'relative', padding: '0 40px', overflow: 'hidden' }}>
                    <div style={{
                        display: 'flex',
                        gap: `${gap}px`,
                        transition: 'transform 0.5s ease-in-out',
                        transform: `translateX(calc(-${(currentIndex + itemsPerPage) * (100 / itemsPerPage)}% - ${currentIndex * gap}px))`,
                    }}>
                        {extendedItems.map((item, index) => (
                            <Link
                                to={item.link}
                                key={`${item.id}-${index}`}
                                className="menu-item"
                                onClick={(e) => handleLinkClick(e, item.link)}
                                style={{
                                    flex: `0 0 calc(${100 / itemsPerPage}% - ${gap * (itemsPerPage - 1) / itemsPerPage}px)`
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div className="menu-item-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </Link>
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
          <Link to={'/our-menus'}>
          <button>View Menu</button> </Link>
        </div>
                </div>


      <div className="container mt-5">
        <div className="section-one">
          <img src="../images/contact_wazwan.avif" alt="Kashmiri Wazwan" />
        </div>
        <div
          ref={sideTextRefs.current[2]}
          className="side-text"
          style={{ transition: 'transform 0.3s ease-out' }}
        >
          <h1>Meet <font>with us</font></h1>
          <h2>"Thank you very much for supporting us, we are open to meet you!"</h2>
          <p>“We are proud to deliver you the finest Kashmiri wazwan influenced by both Kashmiri culture and Saudi Arabia upbringing, using the freshest ingredients that Saudi Arabia has to offer. This is a unique food experience serving the finest Kashmiri cuisine in your area.”.</p>
          <Link to={'/contact'}>
          <button>Contact Us</button> </Link>
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
          <Link to={'/our-menus'}>
          <button>Get online delivery</button>
          </Link>
          <span>or call us +91 884-7026594, +91 73888 48178</span>
        </div>
      </div>

      <div className='delivery-area-des mt-5'>
        <h1>delivery <font> Area</font></h1>
        <p>We are available for delivery of our Kashmiri wazwan in <b>Chandigrah And Mohali</b> region in India. For delivery in other regions, <br /> please contact us directly.</p>
      </div>
    </>
  );
};

export default Home;