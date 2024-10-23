import React,{useState,useEffect,useCallback} from 'react'
import './About.css'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const popularItems = [
  { id: 1, title: "Kids Menu",  image: "../images/kids_menu.jpg", link: "/menu/kids-menu" },
  { id: 2, title: "Breakfast", image: "../images/breakfast.jpg", link: "/menu/breakfast" },
  { id: 3, title: "Beverages",  image: "../images/beverages.png", link: "/menu/beverages" },
  { id: 4, title: "Starters",  image: "../images/staters.jpg", link: "/menu/starters" },
  { id: 5, title: "Indian-delicacies",  image: "./images/indian_del.jpg", link: "/menu/indian-delicacies" },
  { id: 6, title: "Main Course",  image: "../images/home-section1.webp", link: "/menu/main-course" },
  { id: 7, title: "Vegetarian Specialties", image: "../images/vegetrian.jpg", link: "/menu/vegetarian-specialties" },
];

const About = ({autoSlideInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const gap = 20;
  const navigate = useNavigate();


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

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    navigate(link);
};



  return (
    <>
    <div className="wazwan-container">
      <div className="wazwan-header">
        <h1>"Kashmiri Wazwan, Where Heritage Meets Culinary Art"</h1>
        <p>
          Welcome to WAZWAN where we bring the soulful allure of Kashmiri Wazwan to the heart of Saudi Arabia. Immerse yourself in a culinary journey that transcends borders, as we proudly present the authentic flavors of Kashmir right to your home.
        </p>
        <p>
          Our passion for perfection and commitment to preserving the rich traditions of Kashmiri cuisine have garnered applause from every corner of Saudi Arabia. At WAZWAN, we don't just serve food; we craft experiences. From the vibrant Shallots (Fregnet elongated type of onion called Pran in Kashmir) to the meticulous preparation, each dish reflects the essence of Wazwan, leaving an indelible mark on the palates of those who seek true culinary delight.
        </p>
        <p>
          Join us in celebrating the magic of Kashmiri Wazwan, where every meal is a testament to our dedication, and every customer is a cherished guest in our journey of flavors. Discover the unparalleled blend of tradition and taste that defines WAZWAN, your oasis of Kashmiri hospitality in the heart of Saudi Arabia.
        </p>
        <div className="wazwan-buttons">
          <button className="contact-btn">Contact Us</button>
          <button className="menu-btn">View Menu</button>
        </div>
      </div>
      </div>



    <div className='online-delivery1 mt-5'>
            <div className="popular-items1">
                <h1>Our Popular <span className="highlight">Items</span></h1>
                <p>"Wazwan's, each dish is a masterpiece, carrying the rich heritage of Kashmir"</p>

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

</div>



<div className="kashmiri-wazwan mt-5">
      <div className="header">
        <h1>"Thank you very much for supporting us, we are open to meet you!"</h1>
        <p>"We are proud to deliver you the finest Kashmiri WAZWAN using the freshest ingredients that Saudi Arabia has to offer and importing specific ingredients from Kashmir. This is a unique food experience serving the finest Kashmiri cuisine in your area."</p>
      </div>
      <div className="description">
        <p>
          From wedding celebrations to host important guests, the wazwan feast forms an integral part of family gatherings in Kashmir. And while it is an inextricable part of Kashmiri culture, the dishes' names and their bountiful, spice-rich sauces tell of a long history of Persian, Arabic, and Central Asian influences.
        </p>
        <p>
          What makes a wazwan truly special is that the Kashmiri feast can be put together only by a master chef known as a wusta waza. And with more than three dozen dishes, many of which feature mutton (sheep or lamb), having a professional is essential. The wusta waza leads a team of men who tenderize, cut, spice, and blend the meat before cooking the dishes in large copper cauldrons. Hardwoods from fruit trees provide fuel for the fires that burn beneath the pots, which rest upon low bricks.
        </p>
        <p>
          While the meat and sauces bubble away, family members (men are separated from women) gather in groups of four around wide, tin-coated copper plates called tramis. Using long ladles, wazas, or sometimes male family members, serve dish after dish onto these large platters. From ghee-fried ribs (tabak maz) to minced mutton balls (trista) to lamb shoulder cooked in milk and spices (aab goshT), the feast has no shortage of flavor. A particular favorite is the Kashmiri specialty rogan josh, a thick red stew of braised mutton and gravy made with spices such as ginger, garlic, fiery red chiles, cloves, and cinnamon.
        </p>
        <p>
          The meal is served upon heaps of rice and accompanied by yogurt garnished with Kashmiri saffron and pickles. It ends with kahwa, a traditional, aromatic Kashmiri tea flavored with cardamom and topped with almonds. In fact, the feast is so opulent that each platter customarily gets piled with 8 to 13 pounds of meat and can take more than two hours to eat.
        </p>
      </div>
      <div className="buttons">
        <button className="contact-us">Contact Us</button>
        <button className="view-menu">View Menu</button>
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
              <button>Get online delivery</button></Link>
              <span>or call us +91 884-7026594, +91 73888 48178</span>
  </div>
</div>

<div className='delivery-area-des mt-5'>
  <h1>delivery <font> Area</font></h1>
  <p>We are available for delivery of our Kashmiri wazwan in <b>Chandigarh and Mohali</b> region in India. For delivery in other regions, <br /> please contact us directly.</p>
</div>
</>
  )
}

export default About
