import axios from "axios";

const apiUrl = "http://localhost:8091/api/v1/game";

class GameService {

    getAllGames() {
        return axios.get(apiUrl);
    }

    getAllGamesReversed() {
        return axios.get(`${apiUrl}Reversed`);
    }

    save(game) {
        return axios.post(apiUrl, game);
    }

    getGameById(gameId) {
        return axios.get(apiUrl + '/' + gameId);
    }

    update(game) {
        return axios.put(apiUrl, game);
    }

    delete(gameId) {
        return axios.delete(apiUrl + '/' + gameId)
    }
}

export default new GameService();