import React from 'react';
import './Contact.css';

function Contact() {
  const contactDetails = {
    email: 'Holycowramralph@gmail.com',
    phone: '09457063193',
    address: 'Brgy 24, Rizal Street, Legazpi City',
  };

  const socialMediaLinks = [
    { url: 'https://www.facebook.com', icon: 'src/assets/icons8-facebook-48.png', alt: 'Facebook' },
    { url: 'https://www.instagram.com', icon: 'src/assets/icons8-instagram-48.png', alt: 'Instagram' },
    { url: 'https://www.twitter.com', icon: 'src/assets/icons8-twitterx-50.png', alt: 'Twitter' },
    { url: 'https://www.whatsapp.com', icon: 'src/assets/icons8-whatsapp-48.png', alt: 'Whatsapp' },
    { url: 'https://www.tiktok.com', icon: 'src/assets/icons8-tiktok-48.png', alt: 'Tiktok' },
  ];

  return (
    <div className="contact-container">
      <h1>Contact Page</h1>
      <div className="contact-details">
        <p>Email: {contactDetails.email}</p>
        <p>Phone: {contactDetails.phone}</p>
        <p>Address: {contactDetails.address}</p>
      </div>
      <div className="social-media">
        {socialMediaLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>
      <div className="map-image">
        <img src="src/assets/map.png" alt="Map" />
        <p className="image-caption">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </div>
    </div>
  );
}

export default Contact;
