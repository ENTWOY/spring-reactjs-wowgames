import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import GameService from '../services/GameService';
import imgHeroBg from '../images/hero-bg.jpg';
import imgHeroBanner from '../images/hero-banner.png';

export const HomeComponent = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        listGames();
    }, [])

    const listGames = () => {
        GameService.getAllGamesReversed().then(response => {
            setGames(response.data);
            console.log('Games', response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <main>
            <article>
                {/* Start Banner */}
                <section
                    className="section hero"
                    id="home"
                    aria-label="home"
                    style={{ backgroundImage: `url(${imgHeroBg})` }}
                    >
                    <div className="container">
                        <div className="hero-content">
                        <p className="hero-subtitle">Juegos mundiales</p>

                        <h1 className="h1 hero-title">
                            Descubre y Crea <span className="span"></span>
                            <span className="span">Juegos</span>
                        </h1>

                        <p className="hero-text">
                            Enciclopedia colaborativa, donde pueden explorar y contribuir con información detallada sobre sus juegos favoritos.
                        </p>

                        <Link to="/crear-post" data-nav-link>
                            <button className="btn skewBg">Crear Post</button>
                        </Link>
                        </div>

                        <figure className="hero-banner img-holder"
                        style={{ '--width': 700, '--height': 700 }}
                        >
                        <img
                            src={imgHeroBanner}
                            width="700"
                            height="700"
                            className="w-100"
                            alt="hero banner"
                        />
                        </figure>
                    </div>
                </section>
                {/* End Banner */}

                {/* Start Posts */}
                <div className="section-wrapper">
                    <section className="section latest-game" aria-label="latest game">
                        <div className="container">
                            <p className="section-subtitle">últimas actualizaciones</p>

                            <h2 className="h2 section-title">
                            Crea & <span className="span">Descubre</span>
                            </h2>

                            <ul className="has-scrollbar">
                                {games.map(g => 
                                        <li key={ g.gameId } className="scrollbar-item">
                                        <div className="latest-game-card">
                                        <figure
                                            className="card-banner img-holder"
                                            style={{ '--width': 400, '--height': 470 }}
                                        >
                                            <img
                                            src={ g.coverUrl }
                                            width="400"
                                            height="470"
                                            loading="lazy"
                                            className="img-cover"
                                            alt="Cover Game"
                                            />
                                        </figure>
    
                                        <div className="card-content">
                                            <a href="#" className="card-badge skewBg">
                                            Aventura
                                            </a>
    
                                            <h3 className="h3">
                                            <a href="#" className="card-title">
                                                {g.name}
                                                {/* <span className="span">Daily</span> */}
                                            </a>
                                            </h3>
    
                                            <p className="card-price">
                                                Plataformas: <span class="span">PS5, Xbox, PC</span>
                                            </p>
                                        </div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </section>
                </div>
                {/* End Posts */}

                {/* Start Games Recomendacion */}
                <section className="section featured-game" id="features" aria-label="featured game">
                    <div className="container">
                        <h2 className="h2 section-title">
                            Juegos <span className="span">Recomendados</span>
                        </h2>

                        <ul className="has-scrollbar">
                            <li className="scrollbar-item">
                                <div className="featured-game-card">
                                <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                                    <img src="https://e.snmc.io/lk/l/x/98f62fc3265ebb9ead5727994c3e22b0/5280582" width="450" height="600" loading="lazy" alt="Just for Gamers" className="img-cover" />
                                </figure>

                                <div className="card-content-overlay">
                                    <img src="https://e.snmc.io/lk/l/x/98f62fc3265ebb9ead5727994c3e22b0/5280582" width="36" height="61" loading="lazy" alt="" className="card-icon" />
                                    <h3 className="h3">
                                        <a className="card-title">
                                            The Binding of Isaac
                                        </a>
                                    </h3>

                                    <span className="card-meta">
                                    <ion-icon name="notifications"></ion-icon>
                                    <span className="span">Playstation 5, Xbox</span>
                                    </span>
                                </div>
                                </div>
                            </li>

                            <li className="scrollbar-item">
                                <div className="featured-game-card">
                                <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                                    <img src="https://m.media-amazon.com/images/I/71xnh5WM+GL.jpg" width="450" height="600" loading="lazy" alt="Need for Speed" className="img-cover" />
                                </figure>

                                <div className="card-content-overlay">
                                    <img src="https://m.media-amazon.com/images/I/71xnh5WM+GL.jpg" width="36" height="61" loading="lazy" alt="" className="card-icon" />
                                    <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Red Dead Redemption II
                                    </a>
                                    </h3>

                                    <span className="card-meta">
                                    <ion-icon name="notifications"></ion-icon>
                                    <span className="span">Playstation 5, Xbox</span>
                                    </span>
                                </div>
                                </div>
                            </li>

                            <li className="scrollbar-item">
                                <div className="featured-game-card">
                                <figure className="card-banner img-holder" style={{ '--width': 450, '--height': 600 }}>
                                    <img src="https://myhotposters.com/cdn/shop/products/mL4252_1024x1024.jpg?v=1583187222" width="450" height="600" loading="lazy" alt="Egypt Hunting Gamers" className="img-cover" />
                                </figure>

                                <div className="card-content-overlay">
                                    <img src="https://myhotposters.com/cdn/shop/products/mL4252_1024x1024.jpg?v=1583187222" width="36" height="61" loading="lazy" alt="" className="card-icon" />
                                    <h3 className="h3">
                                    <a href="#" className="card-title">
                                        Doom Eternal
                                    </a>
                                    </h3>

                                    <span className="card-meta">
                                    <ion-icon name="notifications"></ion-icon>
                                    <span className="span">Playstation 5, Xbox</span>
                                    </span>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Newsletter Start */}
                <section className="newsletter" aria-label="newsletter"></section>
                {/* Newsletter End */}
            </article>
        </main>
    )
}

export default HomeComponent;
