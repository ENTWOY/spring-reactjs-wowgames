import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import UsuarioService from "../services/UsuarioService";

export const AddUsuarioComponent = () => {

  const [usuarioId, setUsuarioId] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const navigate = useNavigate();

  const {id} = useParams('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = {usuarioId, nombre, apellido, edad}


    if(id) {
      UsuarioService.updateUser(usuario).then((response) => {
        console.log(response.data);
        navigate('/usuarios');
      }).catch(error => {
        console.log(error);
      })
    } else {
      UsuarioService.createUser(usuario).then((response) => {
        console.log(response.data);
        navigate('/usuarios');
      }).catch(error => {
        console.log(error);
      })
    }
  }

  useEffect(() => {
    UsuarioService.getUserById(id).then((response) => {
      setUsuarioId(response.data.usuarioId);
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setEdad(response.data.edad);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  const title = () => {
    if(id) {
      return <h2 className="text-center mb-4">Actualizar Usuario</h2>
    } else {
      return <h2 className="text-center mb-4">Agregar Usuario</h2>
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{ title() }</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Id</label>
            <input
              type="text"
              className="form-control"
              disabled="true"
              value={usuarioId}
              onChange={(e) => setUsuarioId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
              className="form-control"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              placeholder="Ingrese su Apellido"
              className="form-control"
              name="apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Edad</label>
            <input
              type="number"
              placeholder="Ingrese su edad"
              className="form-control"
              name="edad"
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <button onClick={(e) => handleSubmit(e)} className="btn btn-primary">Guardar</button>
          <Link to='/usuarios' className="btn btn-danger">Cancelar</Link>
        </form>
    </div>
  );
};

export default AddUsuarioComponent;
