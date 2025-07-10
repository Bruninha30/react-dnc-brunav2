import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// assets
import './Header.css';
import logo from '../../assets/dnc-logo.svg';
// components
import Button from '../Button/Button';

//contexto
import { AppContext } from '../../contexts/AppContext';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggLeMenu = () =>{
        setIsOpen(!isOpen);
    }
    const appContext = useContext(AppContext);

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="DNC company logo"
                        />
                    </Link>

                    <div className="mobile-menu">
                        <Button
                            buttonStyle="secondary"
                            onClick={toggLeMenu}
                        >
                            Menu
                        </Button>

                    </div>

                    <nav className={`${isOpen ? 'open' : ''}`}>
                        <Button buttonStyle="unstyled" className="mobile-menu close-btn"  onClick={toggLeMenu}>x</Button>
                        <ul className="d-flex jc-space-between">
                            <li><Link to="/home"> {appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to="/about"> {appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to="/projects"> {appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to="/contact"> {appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
