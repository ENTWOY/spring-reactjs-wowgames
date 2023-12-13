<div align="center">
  <h2>WowGames</h2>
  <p>Enciclopedia Colaborativa de Juegos.</p>
</div>

## Requisitos previos
- Java 17: Asegúrate de tener instalada la versión 17 de Java.
- [Spring Tool Suite 4](https://spring.io/tools) o cualquier IDE compatible con Spring.
- [Visual Studio Code](https://code.visualstudio.com/) u otro editor de texto.
- [Node.js](https://nodejs.org/) para el frontend.
- [MySQL](https://www.mysql.com/) o cualquier base de datos compatible con MySQL.

## Instalación y Ejecución
1. Clonar o descarga el repositorio `https://github.com/NeiDenn/spring-reactjs-wowgames.git`
2. Importar el proyecto "project-server" en el IDE Spring Tool Suite 4 y "project-client" en Visual Studio Code
3. Ajustar en el archivo `application.properties` la cadena de conexión `wowgames`
```
server.port=8091
spring.jpa.database=MYSQL
spring.jpa.show-sql=true
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/wowgames?serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=mysql
```

4. Ejecutar la base de datos MySQL `wowgames`
5. Inicia el servidor backend de Spring. 
6. Inicia el servidor frontend de React para lanzar la interfaz de usuario. `npm start`
7. Una vez que hayas iniciado tanto el backend de Spring como el frontend de Angular, podrás acceder a la aplicación en tu navegador web:

- Backend: http://localhost:8091
- Frontend: http://localhost:3000

## Screenshots
![Image](https://github.com/NeiDenn/spring-reactjs-wowgames/assets/85379478/d52e7f22-7890-4630-a76d-a4484cb9bc10)
![Image](https://github.com/NeiDenn/spring-reactjs-wowgames/assets/85379478/2a73c42a-578e-4f95-bc58-45439759c1ac)
![Image](https://github.com/NeiDenn/spring-reactjs-wowgames/assets/85379478/8ce9403f-4549-4551-af88-95a18a0a91aa)
![Image](https://github.com/NeiDenn/spring-reactjs-wowgames/assets/85379478/4243e899-b637-4ff5-b4de-c4ca12489fea)




