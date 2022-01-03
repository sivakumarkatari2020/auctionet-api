//import axios from 'axios';

let API_KEY = '13608e4126ef847f0ce2';

const convertionRatio = async (query) => {
    return fetch(`https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => data)
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default convertionRatio;