-- Tabla de Usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    puntuacion_total INT DEFAULT 0
);

-- Tabla de Preguntas
CREATE TABLE preguntas (
    id SERIAL PRIMARY KEY,
    pregunta TEXT NOT NULL,
    respuesta_correcta TEXT NOT NULL
);

-- Tabla de Respuestas / Partidas (guarda el tiempo y la puntuación)
CREATE TABLE respuestas_usuario (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    pregunta_id INT REFERENCES preguntas(id),
    tiempo_segundos INT NOT NULL,
    es_correcta BOOLEAN NOT NULL,
    puntos_obtenidos INT NOT NULL,
    fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
