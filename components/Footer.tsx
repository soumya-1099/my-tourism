import Image from "next/image";
import alohaLogo from "../images/alohaLogo.png";
import stylesFooter from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={stylesFooter.logo}>
      <Image
        src={alohaLogo}
        alt="Picture of the logo"
      />
    </div>
  );
};

export default Footer;
