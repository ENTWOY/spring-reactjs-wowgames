package com.spring.react.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.react.excepcion.ResourceNotFoundException;
import com.spring.react.model.Game;
import com.spring.react.repositorie.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepository;

	public List<Game> findAll() {
		return gameRepository.findAll();
	}
	
	public List<Game> findAllReversed() {
	    List<Game> games = gameRepository.findAll();
	    Collections.reverse(games);
	    return games;
	}

	public String register(Game game) {
		Game guardado = gameRepository.save(game);

		if (guardado != null) {
			return "¡Registro exitoso! Registrado con ID: " + guardado.getGameId();
		} else {
			return "Error al realizar el registro. Por favor, inténtalo de nuevo.";
		}
	}

	public Game findById(Long id) {
		return gameRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public String update(Game game) {
		Game actualizado = gameRepository.save(game);

		if (actualizado != null) {
			return "Actualización exitosa. Actualizado con ID: " + actualizado.getGameId();
		} else {
			return "Error al realizar la actualización. Verifica el ID correspondiente.";
		}
	}

	public void deleteById(Long id) {
		Game game = gameRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id));
		gameRepository.delete(game);
	}
}
