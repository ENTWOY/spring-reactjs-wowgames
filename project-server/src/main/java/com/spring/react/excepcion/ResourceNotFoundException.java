package com.spring.react.excepcion;

public class ResourceNotFoundException extends RuntimeException {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ResourceNotFoundException(Long id) {
        super("¡¡¡ No se encontró la entidad con el ID: " + id + " !!!");
    }
}