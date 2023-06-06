import Image from "next/image";
import stylesHeader from "../styles/Navbar.module.css";
import alohaLogo from "../images/AlohaHeader.svg";
import { MobileNavbar } from "../components/MobileNavbar";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <header className={stylesHeader.header}>
          <div className={stylesHeader.navContainer}>
          <div className={stylesHeader.logo}>
          <Link href="/">
            <Image src={alohaLogo} alt="Picture of the logo" />
            </Link>
          </div>
          <nav className={stylesHeader.navListContainer}>
            <ul className={stylesHeader.navList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Surfing</Link>
              </li>
              <li>
                <Link href="/">Hula</Link>
              </li>
              <li>
                <Link href="/">Volcano</Link>
              </li>
            </ul>
          </nav>
          </div>
          <div className={stylesHeader.navbarButton}>
            <button>Book a Trip</button>
          </div>
        </header>
      </div>

      <div className={stylesHeader.mobileNavbarView}>
        <MobileNavbar />
      </div>
    </>
  );
};

export default Header;
