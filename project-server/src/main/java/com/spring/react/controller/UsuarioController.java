package com.spring.react.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.react.model.Usuario;
import com.spring.react.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping("/user")
	public ResponseEntity<?> findAll() {
		List<Usuario> usuarios = usuarioService.findAll();
		return new ResponseEntity<>(usuarios, usuarios.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping("/user")
	public ResponseEntity<String> registerUser(@RequestBody Usuario usuario) {
		return ResponseEntity.ok(usuarioService.registerUser(usuario));
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Long id) {
		Usuario usuario = usuarioService.findById(id);
		return ResponseEntity.ok(usuario);
	}

	@PutMapping("/user")
	public ResponseEntity<String> updateUser(@RequestBody Usuario usuario) {
		return ResponseEntity.ok(usuarioService.updateUser(usuario));
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Long id) {
		usuarioService.deleteById(id);
		return ResponseEntity.ok(Map.of("deleted: "+ id, true));
	}
}
