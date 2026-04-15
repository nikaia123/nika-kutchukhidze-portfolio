import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div style={{backgroundColor:'black', color:'gold'}}>
        <div className="contact-info" >
        <p>კონტაქტი: info@example.com</p>
      </div>
      <div className="social-links">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} ყველა უფლება დაცულია.</p>
      </div>
      </div>
      
    </footer>
  );
};