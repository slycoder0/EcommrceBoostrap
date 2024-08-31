import './pg404.css';
import img404 from '../../assets/imgs/img404.png';
import { Link } from 'react-router-dom';

export default function pg404() {
  return (
    <div className='container-404'>
      <img src={img404} alt='Imagem 404 error' className='img404' />
      <h6 className='title404'>Sentimos muito pelo acontecido!</h6>
      <p>Página não encontrada ou não existe mais</p>
      <Link to='/' className='linkVoltar'>
        Voltar
      </Link>
    </div>
  );
}
