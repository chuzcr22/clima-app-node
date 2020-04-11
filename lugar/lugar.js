const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    /*con esto se aegura de dar formato correcto a un parametro para un RUL*/
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-key': '4ea661f7bdmshabf5829def9aafcp1777cfjsnd783fab61884' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No ha resultados para la dirección: ${dir}`);
    }
    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}