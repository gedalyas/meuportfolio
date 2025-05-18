import { FaInstagram, FaLinkedin } from 'react-icons/fa';

function SocialIcons() {
  return (
    <div className="social-icons-container">

      <a href="https://www.instagram.com/davisouto.a?igsh=MWttZzdqZjBocXRwdw==" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="#E1306C" />
      </a>

    
      <a href="http://www.linkedin.com/in/davi-alsouto" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} color="#0077B5" />
      </a>
    </div>
  );
}

export default SocialIcons;
