//import axios from 'axios';

let API_KEY = 'd738ba9a8dfbc78cea83';

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