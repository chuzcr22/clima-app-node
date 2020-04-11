const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const colors = require('colors');

//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log)

//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log)

const getInfo = async(direccion) => {
    try {
        let datosLugar = await lugar.getLugarLatLng(direccion)
        let infoClima = await clima.getClima(datosLugar.lat, datosLugar.lng)

        //se muestra la info
        console.log("===================================================".green);
        console.log(`DATOS DEL CLIMA PARA LA CUIDAD DE: ${direccion}`);
        console.log(`Temp. actual: ${infoClima.temp}`);
        console.log(`Temp. máxima: ${infoClima.temp_max}`);
        console.log(`Temp. mínima: ${infoClima.temp_min}`);
        console.log(`Humedad: ${infoClima.humi}`);
        console.log("===================================================".green);
    } catch (e) {
        console.log(`No se pudo encontrar el clima para la ciudad: ${direccion}`, e);
    }
};


getInfo(argv.direccion);