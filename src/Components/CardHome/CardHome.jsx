import './CardHome.css';
import relogio1 from '../../assets/imgs/relogio1.png';

export default function CardHome() {
  return (
    <div className='CardHomeContent'>
      <div className='card1 card'>
        <div className='contentCard'>
          <h3>NOVA COLEÇÃO</h3>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
      <div className='card2 card'>
        <div className='contentCard'>
          <h3>PROMOÇÕES </h3>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
      <div className='card3 card'>
        <div className='contentCard'>
          <h3>EDIÇÃO LIMITADA</h3>
        </div>
        <div className='imgs'>
          <img src={relogio1} alt='' className='imgRelogio' />
        </div>
      </div>
    </div>
  );
}
