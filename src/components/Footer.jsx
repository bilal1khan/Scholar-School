import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-gray-400">Azam Colony, Hingoli, Maharashtra, India - 431513</p>
                    <p className="text-gray-400">Phone: +91 8421391391</p>
                    <p className="text-gray-400">Email: siishingoli@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
                <p className="text-gray-400 text-sm">&copy; 2023 Scholar School. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
