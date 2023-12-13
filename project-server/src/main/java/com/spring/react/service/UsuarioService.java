package com.spring.react.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.react.excepcion.ResourceNotFoundException;
import com.spring.react.model.Usuario;
import com.spring.react.repositorie.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	public List<Usuario> findAll() {
		return usuarioRepository.findAll();
	}

	public String registerUser(Usuario usuario) {
		Usuario guardado = usuarioRepository.save(usuario);

		if (guardado != null) {
			return "¡Registro exitoso! Registrado con ID: " + guardado.getUsuarioId();
		} else {
			return "Error al realizar el registro. Por favor, inténtalo de nuevo.";
		}
	}

	public Usuario findById(Long id) {
		return usuarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public String updateUser(Usuario usuario) {
		Usuario actualizado = usuarioRepository.save(usuario);

		if (actualizado != null) {
			return "Actualización exitosa. Actualizado con ID: " + actualizado.getUsuarioId();
		} else {
			return "Error al realizar la actualización. Verifica el ID correspondiente.";
		}
	}

	public void deleteById(Long id) {
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
		usuarioRepository.delete(usuario);
	}
}
