import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import GameService from "../services/GameService";

export const AddPostComponent = () => {

    const [gameId, setGameId] = useState('');
    const [name, setName] = useState('');
    const [synopsis, setSynopsis] = useState('');
    const [coverUrl, setCoverUrl] = useState('');
    const navigate = useNavigate();

    const {id} = useParams('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const game = {gameId, name, synopsis, coverUrl}
    
    
        if(id) {
            GameService.update(game).then((response) => {
                console.log(response.data);
                navigate('/home');
            }).catch(error => {
                    console.log(error);
            })
            } else {
                GameService.save(game).then((response) => {
                console.log(response.data);
                navigate('/home');
            }).catch(error => {
                console.log(error);
            })
            }
        }

    return (
        <main className="create-post-main">
            <h1 className="title-add-post">Crear un Nuevo Post</h1>
            <form className="create-post-form">
                <label>Nombre:</label>
                <input type="text" 
                id="name" 
                name="name" 
                placeholder="Ingrese el nombre del juego"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />

                <label>Sinopsis:</label>
                <textarea id="synopsis" 
                name="synopsis" 
                placeholder="Ingrese la sinopsis del juego"
                value={synopsis}
                onChange={(e) => setSynopsis(e.target.value)}
                rows="4" 
                required></textarea>

                <label>URL de la Portada:</label>
                <input 
                type="text" 
                id="coverUrl" 
                name="coverUrl" 
                placeholder="Ingrese la URL de la Imagen"
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                required />

                <button onClick={(e) => handleSubmit(e)}>
                    Publicar Post
                </button>
            </form>
        </main>
    );
}

export default AddPostComponent;