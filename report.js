function exportLinksToCSV(pages, filename = 'pages.csv'){
    const headers = ['URL', 'Page']
    const csvRows = [headers.join('')]

    pages.array.forEach(page => {
        const row = [
            `"${page.url.replace(/"/g, '""')}"`,
            `"${page.text.replace(/"/g, '""')}"`,
            
        ]
        csvRows.push(row.join(','));
        
    });
}

function printReport(pages){
    console.log("==========")
    console.log("Report")
    console.log("==========")
    const sordtedPages = sortPages(pages)

    for( sortedPage of sordtedPages){
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`Found ${hits} Links to page ${url}`)

    }
    console.log("==========")
    console.log("Report")
    console.log("==========")
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
    exportLinksToCSV,
    
}