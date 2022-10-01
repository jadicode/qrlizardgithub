import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  const [small, setSmall] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 0)
      );
    }
  }, []);

  return (
    <header className={`header ${
      small ? "scrolled" : ""
    }`}>
      <div className="header-layout">
        <div className="logo">
            <img className='logo' src='/iguana.svg' alt='Lizard QR Generator Logo'/>
            <h1>QR Generator</h1>
        </div>
        <div className="menu">
            <Link className='menu-link' to="/">¿Qué es Lizard?</Link>
            <Link className='menu-link' to="/">Licencia de Uso</Link>
            <Link className='menu-link' to="/">Contacto</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
