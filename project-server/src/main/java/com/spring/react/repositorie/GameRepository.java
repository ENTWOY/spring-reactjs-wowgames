package com.spring.react.repositorie;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.react.model.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
