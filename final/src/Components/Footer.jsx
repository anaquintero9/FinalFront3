import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div>
        <button className="back-btn" onClick={() => navigate(-1)}>
          « Volver
        </button>
      </div>
      <div className="footer">
        <div className="dh-logo">
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
        </div>
        <div className="icon-footer">
          <a href="http://facebok.com" target="_blank"><img className="icons" src="/images/ico-facebook.png" alt="Facebook-logo" /></a>
          <a href="http://instagram.com" target="_blank"><img className="icons" src="/images/ico-instagram.png" alt="Instagram-logo" /></a>
          <a href="http://tiktok.com" target="_blank"><img className="icons" src="/images/ico-tiktok.png" alt="TikTok-logo" /></a>
          <a href="http://whatsapp.com" target="_blank"><img className="icons" src="/images/ico-whatsapp.png" alt="WhatsApp-logo" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
