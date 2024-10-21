import React, { useEffect, useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [scrollDown, setScrollDown] = useState(false);

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

    return (
        <div className="contact-container mt-5">
            <div className="contact-info1">
                <img src="../images/contact-info.jpg" alt="Kashmiri Wazwan" />
                <div className="contact-details">
                    <h2>Contact Info</h2>
                    <p> <svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg> +966 55 512 7624</p>
                    <p><svg aria-hidden="true" className='svg-icons' viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'>
                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                    </svg> info@wazwanksa.com</p>
                    <p><svg aria-hidden="true" className='svg-icons' viewBox='0 0 384 512' xmlns='http://www.w3.org/2000/svg'>
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg> Al Olaya, Riyadh, Saudi Arabia</p>
                </div>
            </div>
            <div className={`contact-form ${scrollDown ? "moved" : ""}`}>
                <h2>Get In <font>Touch</font></h2>
                <form>
                    <input type="text" name="name" placeholder="Name*" required />
                    <div className="inline-fields">
                        <input type="email" name="email" placeholder="Email*" required />
                        <input type="tel" name="phone" placeholder="Phone*" required />
                    </div>
                    <textarea id='textareaa' name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
