const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    const[el] = await page.$x('//*[@id="main-image"]');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    const[el2] = await page.$x('//*[@id="main-image"]');
    const src1 = await el.getProperty('txt');
    const newTxt = await src1.jsonValue();

    console.log({srcTxt, newTxt});

    browser.close();

}

scrapeProduct('https://www.amazon.com/Black-Swan-Impact-Highly-Improbable/dp/B000VXBVN6/ref=sr_1_1?crid=3FB4LXOLN78C5&dchild=1&keywords=the+black+swan+the+impact+of+the+highly+improbable&qid=1587188189&sprefix=black+swan+impa%2Caps%2C157&sr=8-1')
