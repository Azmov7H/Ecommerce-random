"use client"
import { useState } from 'react';
import style from './Navbars.module.css';
import Image from 'next/image';

export default function Navbars() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <h4>ElReda</h4>
      </div>

      <div className={style.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/page/product">Product</a></li>
          <li><a href="/page/contact">Contact</a></li>
          <li><a href="/page/about">About</a></li>
        </ul>
      </div>

      <div className={style.nav_h} onClick={toggleMenu}>
        {menuOpen ? (
          <Image src='/close.svg' width={30} height={30} alt='Close Menu' />
        ) : (
          <Image src='/bar.svg' width={30} height={30} alt='Open Menu' />
        )}
      </div>

      {menuOpen && (
        <div className={style.nav_hiden}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/page/product">Product</a></li>
            <li><a href="/page/contact">Contact</a></li>
            <li><a href="/page/about">About</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
