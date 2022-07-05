import { RiLogoutCircleLine } from 'react-icons/ri'
import Banner from '../../assets/banner.jpg'
import Logo from '../../assets/logo-marvel.png'
import './style.css'

const Header = () => {
  return (
    <header>
        <RiLogoutCircleLine className='header-logout' />
        <img className='header-background' src={Banner} alt="Folha de quadrinho como fundo" />

        <section>
            <div>
                <img className='header-logo' src={Logo} alt="Logo da Marvel" />
                <h1>Personagens</h1>
            </div>
            <button className='header-button'>Criar personagem</button>
        </section>
    </header>
  )
}

export default Header