const cheerio = require ('cheerio')
const request = require ('request')

var numTrump = 0;
// var numBiden = 0;
// var numCount = 0;
async function getCount(){
    // var numTrump = 0;
    var numBiden = 0;
    var numCount = 0
    var trumpArr = []
    for (i=1; i <= 10; i++){
       await request(`https://www.politico.com/news/2020-elections/${i}`, (error, response, html) => {
            // numCount++
            if (!error && response.statusCode === 200){
                const $ = cheerio.load(html)
                $('.content.layout-bi-unequal').each((i, el) => {
                    const name = $(el)
                    .find('h1')
                    .text()

                    if (name.includes('Trump')){
                        // console.log(name);
                        // console.log("trump");
                        numTrump++
                        // console.log(numTrump);
                        // numTrump = numTrump + 1 
                        trumpArr.push('trump')
                    }
                    else if (name.includes('Biden')){
                        numBiden += 1
                    }
                    else{
                        null
                    }
                    // console.log({name});
                    // const image = $(el)
                    // .find('.mat-card-image')
                    // .attr('src')
                    // console.log(typeof(name))
                    // console.log('heading', name)
                    // console.log(numCount);
                })
               
            }
            // console.log(numTrump, numBiden)
        })
    }
    return numTrump
    console.log('hello')
}

console.log(getCount())
getCount();


console.log(numTrump, numBiden, numCount)