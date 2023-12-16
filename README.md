# Nasa App - Astronomic Picture of the day!

Esta aplicacion fue desarrollada con propositos educativos, en ningun momento busca ser un ejemplo de buenas practicas ni tampoco de desarrollo seguro.

Tome como base los ejemplos que se ven en los cursos de [ALT Academy](https://www.youtube.com/@atl.academy), especificamente el video llamado [Curso completo de React Native + Hooks (con CERTIFICACIÓN)](https://www.youtube.com/watch?v=Dl8x8EWXq8s&t=6430s&ab_channel=ATLAcademy%28byLucasMoy%29)


## Diferencias entre mi implementacion y la del curso

La principal diferencia entre el curso de Lucas Moy y mi implementacion es que el utilizo Metro mientras yo use Expo. ¿Por que esta diferencia? pues con Metro me fallaba la compilacion por no tener configurado correctamente JAVA_HOME y me interesaba mas comenzar con el curso que ponerme a pelear con la variable de entorno en Debian.

Otra diferencia importante es que Lucas Moy utiliza como componentes/screens mientras que yo voy a intentar dejar todos los componentes separados segun lo dicta [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).

Finalmente y no menos importante es que no voy a respetar estrictamente los lineamientos visuales de la aplicacion. Voy a intentar acomodar los componentes, colores y formas a lo que a mi me parezca mas agradable.

## API de la NASA
Para poder ejecutar la APP se requiere tener un API Key de la nasa, el mismo se obtiene [la documentacion de la API de la nasa](https://api.nasa.gov/).

## Variables de entorno
Las variables de entorno requeridas son:

BASE_URL: https://api.nasa.gov/planetary/apod?api_key=

API_KEY: API Key generado.


| Variable    | Descripcion        | Valor por default                             |
|-------------|--------------------|-----------------------------------------------|
| BASE_URL    | Url base de la api | https://api.nasa.gov/planetary/apod?api_key=  |
| API_KEY     | Api key generado   | undefined                                     |


