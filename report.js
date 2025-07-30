const fs = require('fs');
const { url } = require('inspector');
const path = require('path');

function printReport(pages, filename = 'pages.csv'){
    // console.log("==========")
    // console.log("Report")
    console.log("=================")
    console.log("Please Waite ...!")
    const sordtedPages = sortPages(pages)
    

    const csvPath = path.join(__dirname, filename)
    let csvContent = 'hits ,url\n'
    for( sortedPage of sordtedPages){
        // const csvPath = path.join(__dirname, filename)
        // let csvContent = 'hits ,url\n'

        const url = sortedPage[0]
        const hits = sortedPage[0]

        // console.log(`Found ${hits} pages to page ${url}`) --> ** Option if you want to print in terminal **
        const escapedUrl = hits
        const escapedText = url

        csvContent += `"Title: ${escapedUrl}" of LINK:  "${escapedText}\n"`
        // if (i < pages.length - 1){csvContent += '\n'}

    }
    fs.writeFileSync(csvPath, csvContent)
    console.log("The file was Created successfly!")

    return csvPath

}





function sortPages(pages){
    const pagesArray =Object.entries(pages)
    pagesArray.sort( (a,b) => {
        aHits = a[1]
        bHits = b[1]

        return b[1] - a[1]
    })

    return pagesArray
}


module.exports = {
    sortPages,
    printReport,
    // exportpagesToCSV,
    
}