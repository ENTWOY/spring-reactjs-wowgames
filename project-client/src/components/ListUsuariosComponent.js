import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UsuarioService from '../services/UsuarioService';

export const ListUsuariosComponent = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        listarUsuarios();
    }, [])

    const listarUsuarios = () => {
        UsuarioService.getAllUsers().then(response => {
            setUsuarios(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteUser = (usuarioId) => {
        UsuarioService.deleteUser(usuarioId).then((response) => {
            listarUsuarios();  
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center">Lista de Usuarios</h2>
            <Link to="/add-user" className="btn btn-success">Agregar Usuario</Link>
            <figure className="hero-banner img-holder"
                        style={{ '--width': 700, '--height': 700 }}
                        ></figure>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(u =>
                        <tr key={u.usuarioId}>
                            <td>{u.usuarioId}</td>
                            <td>{u.nombre}</td>
                            <td>{u.apellido}</td>
                            <td>{u.edad}</td>
                            <td>
                                <Link to={`/edit-user/${u.usuarioId}`} className="btn btn-info">Update</Link>
                                <button onClick={() => deleteUser(u.usuarioId)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUsuariosComponent;
