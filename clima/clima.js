const axios = require('axios');

const getClima = async(lat, lng) => {
    const encodeLat = encodeURI(lat);
    const encodedLng = encodeURI(lng);

    /*con esto se aegura de dar formato correcto a un parametro para un RUL*/
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${encodeLat}&lon=${encodedLng}&appid=7ad758d7064565f1fdb3b5ab1e937b02&units=metric`,
        //timeout: 1000,
        //headers: { 'x-rapidapi-key': '4ea661f7bdmshabf5829def9aafcp1777cfjsnd783fab61884' }
    });

    const resp = await instance.get();
    const repuesta = resp.data.main;
    return {
        temp: repuesta.temp,
        humi: repuesta.humidity,
        temp_min: repuesta.temp_min,
        temp_max: repuesta.temp_max
    };

};

module.exports = {
    getClima
}