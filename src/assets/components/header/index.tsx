import './style.css'
import menuIcon from '../../img/Hamburger Menu.svg'
import Button from '../button'
import {useState} from 'react'



function Header() {
    const [navBar, setNavBar] = useState(false)


    const HandleToggle = () => {
        setNavBar(!navBar);
      };

    return (
        <header>
            <div className='logo'><h2>Johnathan Speeder</h2></div>
            <ul className={navBar ? 'navbar' : 'navbar responsive'} >
                <li className='nav-item'><a href="#" className='nav-link'>Articles</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Chats</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>Awards</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>About</a></li>              
            </ul>
            <div className='menu' onClick={HandleToggle}><img src={menuIcon} alt="Menu" /></div>
            <Button href='google.com'>Get in touch</Button>
        </header>
    )
}

export default Header