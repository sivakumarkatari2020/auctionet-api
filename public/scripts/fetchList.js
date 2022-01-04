//script for fetching the json data from '../assets/bidList.json'
import convertor from './convertor.js';
import bidItem from './bidItem.js';

let URL = './assets/bidList.json';

const fetchList = async (url) => {
    let list = await fetch(url)
                .then(response => response.json())
                .then(data => data)
                .catch(err => console.log(err))
    return list;
}

async function template(item){
    if(sessionStorage.uname && sessionStorage.ucurrency){
        let keysTemplate = ''
        item.keywords.map(key => {keysTemplate = keysTemplate+`<div class="card-key"><p>${key}</p></div>`})

        if(sessionStorage.getItem('ucurrency') === 'SEK'){
            let convert = new convertor(1);

            let low_amt = await convert.toSEK(item.amount);
            let max_amt = await convert.toSEK(item.max_value);

            return `<div class="item-card">
                <h2 class="card-title">${item.item_name}</h2>
                <p class="card-desc">${item.item_description}</p>
                <div class="card-section">
                    <div class="card-amts">
                        <div class="card-amt">Min : ${Math.ceil(low_amt)} SEK</div>
                        <div class="card-amt">Max : ${Math.ceil(max_amt)} SEK</div>
                    </div>
                    <div class="card-keys">
                        ${keysTemplate}
                    </div>
                </div>
                <button class="card-btn card-act-btn" id="bidButton">Bid now</button>
            </div>`
        }
        if(sessionStorage.getItem('ucurrency') === 'EUR'){
            let convert = new convertor(1);

            let low_amt = await convert.toEUR(item.amount);
            let max_amt = await convert.toEUR(item.max_value);

            return `<div class="item-card">
                <h2 class="card-title">${item.item_name}</h2>
                <p class="card-desc">${item.item_description}</p>
                <div class="card-section">
                    <div class="card-amts">
                        <div class="card-amt">Min : ${Math.ceil(low_amt)} EUR</div>
                        <div class="card-amt">Max : ${Math.ceil(max_amt)} EUR</div>
                    </div>
                    <div class="card-keys">
                        ${keysTemplate}
                    </div>
                </div>
                <button class="card-btn card-act-btn" id="bidButton">Bid now</button>
            </div>`
        }
        if(sessionStorage.getItem('ucurrency') === 'GBP'){
            let convert = new convertor(1);

            let low_amt = await convert.toGBP(item.amount);
            let max_amt = await convert.toGBP(item.max_value);

            return `<div class="item-card">
                <h2 class="card-title">${item.item_name}</h2>
                <p class="card-desc">${item.item_description}</p>
                <div class="card-section">
                    <div class="card-amts">
                        <div class="card-amt">Min : ${Math.ceil(low_amt)} GBP</div>
                        <div class="card-amt">Max : ${Math.ceil(max_amt)} GBP</div>
                    </div>
                    <div class="card-keys">
                        ${keysTemplate}
                    </div>
                </div>
                <button class="card-btn card-act-btn" id="bidButton">Bid now</button>
            </div>`
        }

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

    }else{
        let keysTemplate = ''
        item.keywords.map(key => {keysTemplate = keysTemplate+`<div class="card-key"><p>${key}</p></div>`})
        return `<div class="item-card">
                    <h2 class="card-title">${item.item_name}</h2>
                    <p class="card-desc">${item.item_description}</p>
                    <div class="card-section">
                        <div class="card-amts">
                            <div class="card-amt">Min : ${item.amount} USD</div>
                            <div class="card-amt">Max : ${item.max_value} USD</div>
                        </div>
                        <div class="card-keys">
                            ${keysTemplate}
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

        for(let i=0;i<data1.length;i++){
            htmlTemplate1 = htmlTemplate1 + await template(data1[i]);
        }

        //data1.map(async item => {htmlTemplate1 = htmlTemplate1 + await template(item)});

        row1.innerHTML = htmlTemplate1;
    
        let htmlTemplate2 = '';

        for(let i=0;i<data2.length;i++){
            htmlTemplate2 = htmlTemplate2 + await template(data2[i]);
        }

        //data2.map(async item => {htmlTemplate2 = htmlTemplate2 + await template(item)});
    
        row2.innerHTML = htmlTemplate2;
    }else{
        let htmlTemplate = '';

        for(let i=0;i<data.length;i++){
            htmlTemplate = htmlTemplate + await template(data[i]);
        }

        //data.map(async item => {htmlTemplate = htmlTemplate + await template(item)});
        
        row1.innerHTML = htmlTemplate;
    }
}

main();