

## Configuración inicial

Antes de comenzar, necesitarás obtener una clave de API de OpenWeatherMap. Sigue estos pasos para obtener tu propia clave de API:

1.  Regístrate en el sitio web de OpenWeatherMap en [https://openweathermap.org](https://openweathermap.org/) si aún no tienes una cuenta.
2.  Inicia sesión en tu cuenta y navega a la sección "API Keys" (Claves de API) en tu perfil.
3.  Genera una nueva clave de API y asegúrate de copiarla, ya que la necesitarás más adelante en el código.

## Estructura del código

A continuación se muestra el código JavaScript necesario para realizar la solicitud a la API de OpenWeatherMap y mostrar los datos del clima en tu aplicación. Asegúrate de que el código esté vinculado correctamente con tu archivo HTML y que la etiqueta `<div>` con el ID "datosClima" esté presente en tu página.

## Explicación del código

1. Declaracion de Variables y crea una funcion para el boton de buscar: 

const contenedor = document.querySelector('.contenedor');
const buscar = document.querySelector('.busqueda-box button');
const tiempoBox = document.querySelector('.tiempo-box');
const tiempoDetalles = document.querySelector('.tiempo-detalles');
const error404 = document.querySelector('.no-encontrado');
const ciudadEscondida = document.querySelector('.esconder-ciudad');


buscar.addEventListener('click', () => {

    const apiKey = 'bd6038871f442f7055a593b383120a12';
    const ciudad = document.querySelector('.busqueda-box input').value;

    if (ciudad == '') 
        return;

 })
2.  `fetch`: Esta función se encarga de hacer una solicitud a la API de OpenWeatherMap para obtener los datos del clima de la ciudad especificada. Recibe el nombre de la ciudad como parámetro. Utiliza la función `fetch()` para enviar una solicitud GET a la URL de la API, incluyendo la ciudad y tu clave de API. Luego, convierte la respuesta en formato JSON utilizando el método `json()`.
   
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`).then(response => response.json()).then(json => {

        if (json.cod == '404') {

            ciudadEscondida.textContent = ciudad;

            contenedor.style.height = '400px';
            tiempoBox.classList.remove('active');
            tiempoDetalles.classList.remove('active');
            error404.classList.add('active');
            return;
            
        }
        
        const imagen = document.querySelector('.tiempo-box img');
        const temperatura = document.querySelector('.tiempo-box .temperatura');
        const descripcion = document.querySelector('.tiempo-box .descripcion');
        const humedad = document.querySelector('.tiempo-detalles .humedad span');
        const viento = document.querySelector('.tiempo-detalles .viento span');

        if (ciudadEscondida.textContent == ciudad) {
            return;
        }else{
            ciudadEscondida.textContent = ciudad;

            contenedor.style.height = '555px';
            contenedor.classList.add = ('active');
            tiempoBox.classList.add('active');
            tiempoDetalles.classList.add('active');
            error404.classList.remove('active');

        setTimeout(() =>{
            contenedor.classList.remove = ('active'); 
        }, 2500);    

            switch (json.weather[0].main) {
                case 'Clear':
                    imagen.src = 'img/clear.png';
                    break;
    
                case 'Rain':
                    imagen.src = 'img/rain.png';
                    break;
                
                case 'Snow':
                    imagen.src = 'img/snow.png';
                    break;    
    
                case 'Clouds':
                    imagen.src = 'img/cloud.png';
                    break; 
                 
                case 'Mist':
                    imagen.src = 'img/mist.png';
                    break;
    
                case 'Haze':
                    imagen.src = 'img/mist.png';
                    break;    
                    
                default:
                    imagen.src = 'img/cloud.png';
                    
            }
    
            temperatura.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            descripcion.innerHTML = `${json.weather[0].description}`;
            humedad.innerHTML = `${json.main.humidity}%`;
            viento.innerHTML = `${parseInt(json.wind.speed)}Km/h`;



        }

        
    });

    

## Uso de la aplicación

1.  Asegúrate de tener los archivos HTML y CSS vinculados correctamente en tu página web.
2.  Inserta un campo de entrada de texto en tu página con el ID "ciudadEntrada" para que los usuarios puedan ingresar el nombre de la ciudad.
3.  Agrega un botón con el ID "botonBusqueda" para permitir a los usuarios buscar el clima de la ciudad ingresada.
4.  Cuando un usuario haga clic en el botón de búsqueda, se llamará a la función `fetchDatosClima(ciudad)` con el valor ingresado en el campo de entrada de texto.
5.  La función `fetchDatosClima(ciudad)` realizará una solicitud a la API de OpenWeatherMap y obtendrá los datos del clima correspondientes a la ciudad ingresada.
6.  Una vez que se obtengan los datos del clima, la función `mostrarDatosClima(data)` mostrará los detalles relevantes del clima en la página.

Recuerda reemplazar `'API_KEY'` en el código con tu propia clave de API obtenida de OpenWeatherMap.

¡Ahora deberías tener una aplicación de clima completamente funcional en tu página web! Los usuarios podrán ingresar una ciudad y obtener información actualizada sobre el clima en esa ubicación.
