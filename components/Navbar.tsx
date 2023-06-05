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
          <div className={stylesHeader.logo}>
            <Image src={alohaLogo} alt="Picture of the logo" />
          </div>
          <nav className={stylesHeader.nav}>
            <ul className={stylesHeader.navList}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/surfing">Surfing</Link>
              </li>
              <li>
                <Link href="/hula">Hula</Link>
              </li>
              <li>
                <Link href="/volcano">Volcano</Link>
              </li>
            </ul>
          </nav>
          <div className={stylesHeader.button}>
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
