import axios from "axios";

const apiUrl = "http://localhost:8091/api/v1/user";

class UsuarioService {

    getAllUsers() {
        return axios.get(apiUrl);
    }

    createUser(usuario) {
        return axios.post(apiUrl, usuario);
    }

    getUserById(userId) {
        return axios.get(apiUrl + '/' + userId);
    }

    updateUser(usuario) {
        return axios.put(apiUrl, usuario);
    }

    deleteUser(usuarioId) {
        return axios.delete(apiUrl + '/' + usuarioId)
    }
}

export default new UsuarioService();