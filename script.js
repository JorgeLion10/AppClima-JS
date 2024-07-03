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


});