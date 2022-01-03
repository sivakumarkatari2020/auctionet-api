//script for fetching the json data from '../assets/bidList.json'
import convertor from './convertor.js';

let URL = './assets/bidList.json'

let convert = new convertor(1);
console.log(await convert.toEUR(5))

const fetchList = async (url) => {
    let list = await fetch(url)
                .then(response => response.json())
                .then(data => data)
                .catch(err => console.log(err))
    return list;
}

function template(item){
    if(sessionStorage.uname && sessionStorage.ucurrency){

    }else{
        //let keysTemplate = ''
        //item.keywords.map(key => {keysTemplate+`<div class="card-key"><p>${key}</p></div>`})
        return `<div class="item-card">
                    <h2 class="card-title">${item.item_name}</h2>
                    <p class="card-desc">${item.item_description}</p>
                    <div class="card-section">
                        <div class="card-amts">
                            <div class="card-amt">Min : ${item.amount} USD</div>
                            <div class="card-amt">Max : ${item.max_value} USD</div>
                        </div>
                        <div class="card-keys">
                            ${
                                item.keywords.map(key => `<div class="card-key"><p>${key}</p></div>`)
                            }
                        </div>
                    </div>
                    <button class="card-btn card-act-btn" id="bidButton">Bid now</button>
                </div>`
    }
}

async function main(){
    const data = await fetchList(URL);

    let row1 = document.querySelector('.c-row-1');
    let row2 = document.querySelector('.c-row-2');

    if(data.length >= 10){
        let data1 = [];
        let data2 = [];

        for(let i=0;i<data.length/2;i++){
            data1.push(data[i]);
        }
        for(let i=data.length/2;i<data.length;i++){
            data2.push(data[i]);
        }

        let htmlTemplate1 = '';

        data1.map(item => {htmlTemplate1 = htmlTemplate1 + template(item)});
    
        row1.innerHTML = htmlTemplate1;
    
        let htmlTemplate2 = '';

        data2.map(item => {htmlTemplate2 = htmlTemplate2 + template(item)});
    
        row2.innerHTML = htmlTemplate2;
    }else{
        let htmlTemplate = '';

        data.map(item => {htmlTemplate = htmlTemplate + template(item)});
    
        row1.innerHTML = htmlTemplate;
    }
}

main();