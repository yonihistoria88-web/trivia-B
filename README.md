# Sistema de Preguntas y Respuestas

Proyecto con base de datos relacional y sistema de puntuación dinámico basado en tiempo de respuesta.

## 📊 Reglas de Puntuación

La cantidad de puntos asignados depende directamente del tiempo (en segundos) que tarda el usuario en responder correctamente:

| Tiempo de Respuesta | Puntos Obtenidos | Condición |
| :--- | :---: | :--- |
| **0 a 10 segundos** | 10 pts | Respuesta correcta |
| **11 a 30 segundos** | 7 pts | Respuesta correcta |
| **31 a 60 segundos** | 5 pts | Respuesta correcta |
| **61 a 90 segundos** | 3 pts | Respuesta correcta |
| **Más de 90 segundos** | 0 pts | Tiempo agotado |
| **Incorrecta** | 0 pts | Sin importar el tiempo |

## 📁 Estructura del Proyecto

- `base de datos/schema.sql`: Definición de tablas en la base de datos (Opción 2).
- `src/scoring.js`: Función en JavaScript para evaluar y calcular los puntos por respuesta.
