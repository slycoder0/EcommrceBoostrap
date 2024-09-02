import './CardHome.css';
import relogio1 from '../../assets/imgs/relogio1.png';

export default function CardHome() {
  return (
    <div className='CardHomeContent'>
      <div className='card1 card'>
        <div className='contentCard'>
          <h3>Nova Coleção</h3>
          <a href='#' className='btn-card'>
            Compre Agora
          </a>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
      <div className='card2 card'>
        <div className='contentCard'>
          <h3>Promoções </h3>
          <a href='#' className='btn-card2'>
            Compre Agora
          </a>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
      <div className='card3 card'>
        <div className='contentCard'>
          <h3>Edição Limitada</h3>
          <a href='#' className='btn-card'>
            Compre Agora
          </a>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
    </div>
  );
}
