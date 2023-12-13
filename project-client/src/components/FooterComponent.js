import React from 'react'

export const FooterComponent = () => {
    return (
        /* Start Footer */
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand">
                        <a href="#" className="logo">WowGames</a>

                        <p className="footer-text">
                            Enciclopedia colaborativa, donde pueden explorar y contribuir con información detallada de juegos.
                        </p>

                        <ul className="contact-list">
                        <li className="contact-item">
                            <div className="contact-icon">
                            <ion-icon name="location"></ion-icon>
                            </div>

                            <address className="item-text">
                            Dirección : 456 Avenida Reyes, Ciudad Madrid, Código Postal 12345, País España
                            </address>
                        </li>

                        <li className="contact-item">
                            <div className="contact-icon">
                            <ion-icon name="headset"></ion-icon>
                            </div>

                            <a href="tel:+241245654235" className="item-text">
                            Phone : + 123 556 789
                            </a>
                        </li>

                        <li className="contact-item">
                            <div className="contact-icon">
                            <ion-icon name="mail-open"></ion-icon>
                            </div>

                            <a href="mailto:info@exemple.com" className="item-text">
                            Email : wowgames@gmail..com
                            </a>
                        </li>
                        </ul>
                    </div>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Juegos</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Géneros</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Plataformas</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Desarrolladores</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Gráficos</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Música y Sonido</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Historia y Narrativa</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Personajes</a>
                        </li>
                    </ul>

                    <ul className="footer-list">
                        <li>
                            <p className="footer-list-title">Necesitas Ayuda?</p>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Preguntas Frecuentes</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Soporte Técnico</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Contáctanos</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Términos y Condiciones</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Política de Privacidad</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Política de Reembolso</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Programa de Afiliados</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Casos de Uso</a>
                        </li>
                    </ul>

                    <div className="footer-wrapper">
                        <div className="social-wrapper">
                        <p className="footer-list-title">Síguenos</p>

                        <ul className="social-list">
                            <li>
                                <a
                                    className="social-link"
                                    style={{ backgroundColor: '#3b5998' }}
                                >
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                </li>

                                <li>
                                    <a
                                        className="social-link"
                                        style={{ backgroundColor: '#55acee' }}
                                    >
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="social-link"
                                        style={{ backgroundColor: '#d71e18' }}
                                    >
                                        <ion-icon name="logo-pinterest"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="social-link"
                                        style={{ backgroundColor: '#1565c0' }}
                                    >
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container-center">
                    <p className="copyright">&copy; 2023 WowGames. Todos los derechos reservados.</p>
                </div>
            </div>
    </footer>
    /* End Footer */
    )
}

export default FooterComponent;