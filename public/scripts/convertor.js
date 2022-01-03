//Here we have code for currency convertions

import convertionRatio from "./convertor.api.js";

class convertor{
    constructor(val){
        this.amt = val;
    }

    toEUR = async (amt) => {
        const result = await convertionRatio('USD_EUR');
        return amt*result.USD_EUR;
    }

    toSEK = async (amt) => {
        const result = await convertionRatio('USD_SEK');
        return amt*result.USD_SEK;
    }

    toGBP = async (amt) => {
        const result = await convertionRatio('USD_GBP');
        return amt*result.USD_GBP;
    }

    toUSD = async (fromCurr) => {
        const result = await convertionRatio(`${fromCurr}_USD`);
        let param = `${fromCurr}_USD`;
        return result;
    }
}

export default convertor;