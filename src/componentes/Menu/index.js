import './menu.css'
import logo from "../../imagens/logo.png";
import whats from '../../imagens/whatsapp.svg'
import insta from '../../imagens/instagram.svg'
import React, { useEffect } from 'react';


const Menu = () => {
    useEffect(() => {
        const openMenu = document.getElementById("openMenu");
        const closeMenu = document.getElementById("closeMenu");
        const menu = document.getElementById("menu");
        const menuItems = document.querySelectorAll('.nav__link');
      
        const openMenuClickHandler = () => {
            menu.style.display = 'block';
            menu.classList.add('menuOpen');
        };
      
        const closeMenuClickHandler = () => {
            menu.style.display = 'none';
            menu.classList.remove('menuOpen');
        };
      
        const menuItemClickHandler = () => {
            if (menu.classList.contains('menuOpen')) {
                menu.style.display = 'none';
            }
        };
        
        if (window.innerWidth < 768){
            window.addEventListener('scroll', closeMenuClickHandler)
        }

        openMenu.addEventListener("click", openMenuClickHandler);
        closeMenu.addEventListener("click", closeMenuClickHandler);
      
        menuItems.forEach((menuItem) => {
            menuItem.addEventListener('click', menuItemClickHandler);
        });
      
        return () => {
            openMenu.removeEventListener("click", openMenuClickHandler);
            closeMenu.removeEventListener("click", closeMenuClickHandler);
            menuItems.forEach((menuItem) => {
                menuItem.removeEventListener('click', menuItemClickHandler);
            });
        };
      }, []);
      
    return(
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo"><img src={logo} alt="logo studio moov" /></a>

                <div className="nav__menu" id="menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className='nav__link'>
                                <i className="uil uil-home nav__icon"></i> Início
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#servicos" className='nav__link'>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Serviços
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#depoimentos" className='nav__link'>
                                <i className="uil uil-user nav__icon"></i> Quem somos
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#localizacao" className='nav__link'>
                                <i className="uil uil-map-marker nav__icon"></i> Localização
                            </a>
                        </li>
                    </ul>

                    <i id="closeMenu" className="uil uil-times nav__close"></i>
                </div>

                <div className="nav__contact">
                    <a href="https://www.instagram.com/" className="nav__contact-button" target="_blank" rel="noreferrer">
                        <img className="nav__contact-icon" src={insta} alt="icone instagram" />
                    </a>
                    <a href="whahttps://web.whatsapp.com/" className="nav__contact-button" target="_blank" rel="noreferrer">
                        <img className="nav__contact-icon" src={whats} alt="icone instagram" />
                    </a>
                </div>

                <div className="nav__toggle">
                    <i id="openMenu" className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )};

export default Menu;
