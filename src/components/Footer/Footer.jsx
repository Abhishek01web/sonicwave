import React from "react";
import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope
} from 'react-icons/fa';
import Payment from '../../assets/payments.png';

import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam in repellat sunt consequatur distinctio alias perspiciatis sed fugit voluptatem iure incidunt perferendis, eius dolores tempora.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        kailadevi, karauli, Rajasthan 3222243
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone : 6378933312
                    </div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email : abhishek01web@gmail.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooth Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privacy policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    FindNow 2022 created by Abhishek Chauhan.
                </div>
                <img src={Payment} alt={Payment} />
            </div>
        </div>
    </footer>
};

export default Footer;
