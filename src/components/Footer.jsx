import React from 'react';
import Logo from './Logo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__section">
                        <Logo/>
                        <p className="footer__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="footer__section">
                        <h3 className="footer__title">Quick Links</h3>
                        <ul className="footer__links">
                            <li className="footer__link-item">
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>
                            <li className="footer__link-item">
                                <a href="#" className="footer__link">Terms of Service</a>
                            </li>
                            <li className="footer__link-item">
                                <a href="#" className="footer__link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {currentYear} Michel Moraes. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
