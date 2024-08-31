import React, { useState } from 'react';
import './Header.css';
import logo from '../../../assets/imgs/LogoCrystal.png';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header>
      <div className='container-header'>
        <img className='logo' src={logo} />
        <form className='form-header'>
          <FaSearch />
          <input type='text'></input>
          <button className='btn-search' type='submit'>
            Pesquisar
          </button>
        </form>
        <div className='icons'>
          <ul className='ul-icons'>
            <li>
              <FaUser />
            </li>
            <li className='heart-icon'>
              <FaHeart />
            </li>
            <li>
              <FaShoppingCart />
            </li>
            <p>R$ 1200,99</p>
          </ul>
        </div>
      </div>
      <nav className='navbar'>
        <button className='toggle' onClick={() => setNavbarOpen(prev => !prev)}>
          {navbarOpen ? (
            <MdClose style={{ width: '32px', height: '32px' }} />
          ) : (
            <FiMenu style={{ width: '32px', height: '32px' }} />
          )}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          <li>
            <span>
              <a onClick={() => setNavbarOpen(false)}>Home</a>
            </span>
          </li>
          <li>
            <span>
              <a onClick={() => setNavbarOpen(false)}>Produtos</a>
            </span>
          </li>
          <li>
            <span>
              <a onClick={() => setNavbarOpen(false)}>Categoria</a>
            </span>
          </li>
          <li>
            <span>
              <a onClick={() => setNavbarOpen(false)}>Promoções</a>
            </span>
          </li>
          <li>
            <span>
              <a onClick={() => setNavbarOpen(false)}>Contato</a>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
