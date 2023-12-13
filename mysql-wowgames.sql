-- DROP DATABASE IF EXISTS wowgames;
CREATE DATABASE wowgames;
USE wowgames;

CREATE TABLE IF NOT EXISTS usuario (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    edad INT NOT NULL
);

CREATE TABLE IF NOT EXISTS game (
    game_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    synopsis TEXT,
    cover_url TEXT
);

INSERT INTO game (name, synopsis, cover_url) VALUES
    ('The Witcher 3: Wild Hunt', 'Embárcate en una épica búsqueda como Geralt de Rivia en un rico mundo de fantasía abierto.', 'https://m.media-amazon.com/images/M/MV5BMDU4ODc1M2UtODg3Ny00NDViLTkxNmQtMzMzZWM1NGRmYTNjXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg'),
    ('Red Dead Redemption 2', 'Vive el Salvaje Oeste americano en un relato inmersivo de forajidos y redención.', 'https://m.media-amazon.com/images/I/71xnh5WM+GL.jpg'),
    ('Fortnite', 'Únete a la batalla para ser el último en pie en este trepidante y siempre cambiante battle royale.', 'https://pcgamercdmx.mx/wp-content/uploads/2023/05/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg'),
    ('Minecraft', 'Libera tu creatividad en un mundo sandbox, donde el único límite es tu imaginación.', 'https://i.pinimg.com/originals/61/3c/46/613c46e74f40e3dcfc3607715d83fd4b.jpg'),
    ('The Legend of Zelda: Breath of the Wild', 'Embarcarte en un viaje por Hyrule en este aclamado juego de acción y aventuras.', 'https://cdn02.plentymarkets.com/qozbgypaugq8/item/images/1613/full/PSTR-ZELDA005.jpg');

INSERT INTO usuario (nombre, apellido, edad) VALUES
	('Luis', 'González', 28),
	('Elena', 'Martínez', 35),
	('André', 'Dubois', 22),
	('Sophie', 'Lefevre', 30),
	('Matteo', 'Ricci', 25),
	('Isabella', 'Rossi', 29),
	('Miguel', 'Silva', 31),
	('Agnieszka', 'Kowalska', 27),
	('Henrik', 'Andersen', 33),
	('Aurora', 'López', 26);

-- select * from usuario;
-- select * from game;
