//-----------------------------Tiempo-----------------------------
let weather = document.getElementById("weather");

fetch(`https://api.weatherbit.io/v2.0/current?
lat=-31.4374&
lon=-68.5612&
key=97f3ce2ef3414a2cab940764e6e9ce1c&
lang=es
`)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data.data[0]);
    //console.log(data.data[0]["weather"]);

    let { app_temp, clouds, pres, wind_spd, wind_cdir, rh, uv } = data.data[0];
    let { description } = data.data[0]["weather"];

    weather.innerHTML = `
    <div class="weather--titulo">
      Temperatura actual:
      <span class="weather--valor">${app_temp}°C</span>
    </div>
    <div class="weather--titulo">
      Nubes:
      <span class="weather--valor">${clouds}%</span>
    </div>
    <div class="weather--titulo">
      Presion:
      <span class="weather--valor">${pres}mb</span>
    </div>
    <div class="weather--titulo">
      Velocidad del viento:
      <span class="weather--valor">${wind_spd}m/s</span>
    </div>
    <div class="weather--titulo">
      Direccion del viento:
      <span class="weather--valor">${wind_cdir}</span>
    </div>
    <div class="weather--titulo">
      Humedad Relativa:
      <span class="weather--valor">${rh}%</span>
    </div>
    <div class="weather--titulo">
      Indice UV:
      <span class="weather--valor">${uv}</span>
    </div>
    <div class="weather--titulo">
      Descripcion:
      <span class="weather--valor">${description}</span>
    </div>


  `;
  });

//-----------------------------Dolar-----------------------------
let dolar = document.getElementById("dolar");

fetch("https://criptoya.com/api/dolar")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // console.log(data.blue);
    // console.log(data.solidario);
    // console.log(data.oficial);
    let { blue, oficial, ccl, mep, ccb, solidario } = data;

    dolar.innerHTML = `
      <div class="dolar--titulo">
        Dolar Oficial:
        <span class="dolar--valor">$${oficial}</span>
      </div>
      <div class="dolar--titulo">
        Dolar Blue:
        <span class="dolar--valor">$${blue}</span>
      </div>
      <div class="dolar--titulo">
      Dolar solidario:
        <span class="dolar--valor">$${solidario}</span>
      </div>
      <div class="dolar--titulo">
      Contado con Liqui:
        <span class="dolar--valor">$${ccl}</span>
      </div>
      <div class="dolar--titulo">
      Contado con Bitcoin:
        <span class="dolar--valor">$${ccb}</span>
      </div>
    `;
  });
