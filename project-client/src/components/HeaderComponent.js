import React from 'react'
import { Link } from 'react-router-dom';

export const HeaderComponent = () => {
    return (
        /* Start Header */
        <header className="header">
            {/* <div className="header-top">
                <div className="container">
                    <div className="countdown-text">
                        Exclusive Black Friday ! Offer
                        <span className="span skewBg">10</span> Days
                    </div>
                    <div className="social-wrapper">
                        <p className="social-title">Follow us on :</p>
                        <ul className="social-list">
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* Start Header Main */}
            <div className="header-bottom skewBg" data-header>
                <div className="container">
                <a href="#" className="logo">WowGames</a>

                <nav className="navbar" data-navbar>
                    <ul className="navbar-list">
                    <li className="navbar-item">
                    <Link to="/home" className="navbar-link skewBg" data-nav-link>
                        Inicio
                    </Link>
                    </li>

                    {/* <li className="navbar-item">
                        <a href="#live" className="navbar-link skewBg" data-nav-link>
                        Live
                        </a>
                    </li> */}

                    {/* <li className="navbar-item">
                        <a href="#features" className="navbar-link skewBg" data-nav-link>
                        Features
                        </a>
                    </li> */}

                    {/* <li className="navbar-item">
                        <a href="#shop" className="navbar-link skewBg" data-nav-link>
                        Shop
                        </a>
                    </li> */}

                    <li className="navbar-item">
                        <Link to="/blog" className="navbar-link skewBg" data-nav-link>
                            Blog
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/contactanos" className="navbar-link skewBg" data-nav-link>
                            Contáctanos
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/login" className="navbar-link skewBg" data-nav-link>
                            Login
                        </Link>
                    </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    {/* <button className="cart-btn" aria-label="cart">
                    <ion-icon name="cart"></ion-icon>
                    <span className="cart-badge">0</span>
                    </button> */}

                    {/* <button className="search-btn" aria-label="open search" data-search-toggler>
                    <ion-icon name="search-outline"></ion-icon>
                    </button> */}

                    <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
                        <ion-icon name="menu-outline" className="menu"></ion-icon>
                        <ion-icon name="close-outline" className="close"></ion-icon>
                    </button>
                </div>
                </div>
            </div>
            {/* End Header Main */}
        </header>
        /* End Header */
    )
}

export default HeaderComponent;