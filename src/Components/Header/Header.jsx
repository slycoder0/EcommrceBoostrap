import { useState, useRef, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/imgs/LogoCrystal.png';
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      // Verifica se o clique foi fora do menu
      if (
        navbarOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarOpen]);

  return (
    <header>
      <div className='container-header'>
        <a href='#'>
          <img className='logo' src={logo} />
        </a>
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
        <div className='navbarM'>
          <button
            className='toggle'
            onClick={() => setNavbarOpen(prev => !prev)}
          >
            {navbarOpen ? (
              <MdClose
                style={{ width: '32px', height: '32px', color: '#000' }}
              />
            ) : (
              <FiMenu
                style={{ width: '32px', height: '32px', color: '#000' }}
              />
            )}
          </button>
        </div>
        <ul
          ref={menuRef}
          className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}
        >
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
