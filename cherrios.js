const cheerio = require ('cheerio')
const request = require ('request')

for (i=0; i <= 94; i++){
    request(`https://www.wikileaf.com/strains/?page=${i}`, (error, response, html) => {
        if (!error && response.statusCode === 200){
            const $ = cheerio.load(html)

            $('.container.strains-list').find('mat-card').each((i, el) => {

                // const name = $(el)
                // .find('.name.disp-title')
                // .text()

                const image = $(el)
                .find('.mat-card-image')
                .attr('src')

                console.log(image)
            })

            

        }
    })
}