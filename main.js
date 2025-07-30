const { crawlPage}  = require('./crawl.js')
const { printReport, exportLinksToCSV  } = require('./report.js')

async function main(){
    if (process.argv.length < 3){
        console.log("No website provied")
        process.exit(1)
    }

    if (process.argv.length > 3){
        console.log("Too many command line args")
        process.exit(1)
    }
    const baseURL = process.argv[2]
    console.log(`Starting Crawl of ${baseURL}`)
    const pages = await crawlPage(baseURL, baseURL, {})

    printReport(pages)
    exportLinksToCSV(pages)
}


main()