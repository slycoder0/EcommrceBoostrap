import React from 'react';
import './Header.css';
import logo from '../../../assets/imgs/LogoCrystal.png';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
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
      <nav>
        <ul className='navbar'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Produtos</a>
          </li>
          <li>
            <a>Categoria</a>
          </li>
          <li>
            <a>Promoções</a>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
