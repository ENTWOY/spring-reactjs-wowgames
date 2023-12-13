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

import com.spring.react.model.Game;
import com.spring.react.service.GameService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GameController {

	@Autowired
	private GameService gameService;

	@GetMapping("/game")
	public ResponseEntity<?> findAll() {
		List<Game> games = gameService.findAll();
		return new ResponseEntity<>(games, games.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/gameReversed")
	public ResponseEntity<?> findAllReversed() {
		List<Game> games = gameService.findAllReversed();
		return new ResponseEntity<>(games, games.size() > 0 ? HttpStatus.OK : HttpStatus.NOT_FOUND);
	}

	@PostMapping("/game")
	public ResponseEntity<String> register(@RequestBody Game game) {
		return ResponseEntity.ok(gameService.register(game));
	}

	@GetMapping("/game/{id}")
	public ResponseEntity<Game> findById(@PathVariable Long id) {
		Game game = gameService.findById(id);
		return ResponseEntity.ok(game);
	}

	@PutMapping("/game")
	public ResponseEntity<String> update(@RequestBody Game game) {
		return ResponseEntity.ok(gameService.update(game));
	}

	@DeleteMapping("/game/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteById(@PathVariable Long id) {
		gameService.deleteById(id);
		return ResponseEntity.ok(Map.of("deleted: "+ id, true));
	}
}
