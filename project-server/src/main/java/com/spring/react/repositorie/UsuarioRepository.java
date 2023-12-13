package com.spring.react.repositorie;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.react.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
}
