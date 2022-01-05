
import convertionRatio from "./convertor.api.js";
import convertor from "./convertor.js";

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await convertionRatio();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('In convertor class toSEK method not working propoerly',async ()=>{
    const convert = new convertor(1);
    expect.assertions(1);
    try{
        const val = await convert.toSEK(1);
        expect(val).tobe(9.05369);
    } catch (e) {
        expect(e).toMatch('error');
    }
})

test('In convertor class toEUR method not working propoerly',async ()=>{
    const convert = new convertor(1);
    expect.assertions(1);
    try{
        const val = await convert.toEUR(1);
        expect(val).tobe(0.882135);
    } catch (e) {
        expect(e).toMatch('error');
    }
})

test('In convertor class toGBP method not working propoerly',async ()=>{
    const convert = new convertor(1);
    expect.assertions(1);
    try{
        const val = await convert.toGBP(1);
        expect(val).tobe(0.737225);
    } catch (e) {
        expect(e).toMatch('error');
    }
})