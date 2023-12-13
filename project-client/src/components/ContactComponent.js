import React from 'react';

export const ContactComponent = () => {
    return (
        <main className="contact-main">
            <article className="contact-article">
                <h2>Contáctanos</h2>
                <p>¿Tienes preguntas, sugerencias o simplemente quieres ponerte en contacto con nosotros? ¡Estamos aquí para ayudarte!</p>
                <form className="contact-form">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" />

                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje"></textarea>

                    <button type="submit">Enviar Mensaje</button>
                </form>
            </article>
        </main>
    );
}

export default ContactComponent;
