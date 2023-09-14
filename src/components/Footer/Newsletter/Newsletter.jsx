import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from 'react-icons/fa';

import "./Newsletter.scss";
import { useState } from 'react';

const Newsletter = () => {
    const [input, setInput] = useState();
    console.log(input);
    const handleNewsLetter = () => {
        alert(`email : ${input}`);
    }

    return <div className='newsletter-section'>
        <div className="newsletter-content">
            <span className='small-text'>Newsletter</span>
            <span className='big-text'>sign up for latest updates and offers</span>
            <div className='form'>
                <input type="text" name="" id="" placeholder='Email Address' onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => handleNewsLetter()}>Subscribe</button>
            </div>
            <div className='text'>Will be used in accordance with our Privacy Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14} />
                </div>
                <div className="icon">
                    <FaTwitter size={14} />
                </div>
                <div className="icon">
                    <FaInstagram size={14} />
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14} />
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
