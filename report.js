const fs = require('fs');
const { url } = require('inspector');
const path = require('path');

function printReport(pages, filename = 'pages.csv'){
    console.log("==========")
    console.log("Report")
    console.log("==========")
    const sordtedPages = sortPages(pages)

    for( sortedPage of sordtedPages){
        const url = sortedPage[0]
        const hits = sortedPage[1]
        console.log(`Found ${hits} pages to page ${url}`)

    }
    console.log("==========")
    console.log("Report")
    console.log("==========")
    const csvPath = path.join(__dirname, filename)
    
    let csvContent = `*${hits}* to :   ${url}`
    
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const escapedUrl = page.hits.replace(/"/g, '""')
      const escapedText = page.url.replace(/"/g, '""')
  
      csvContent += `"${escapedUrl}","${escapedText}"`
      if (i < pages.length - 1) csvContent += '\n'
    }
    
    fs.writeFileSync(csvPath, csvContent)

    return csvPath
}

// function exportpagesToCSV(pages, filename = 'pages.csv'){
//     // const csvPath = path.join(__dirname, filename);
    
//     // let csvContent = `*${hits}* to :   ${url}`;
    
//     // for (let i = 0; i < pages.length; i++) {
//     //   const page = pages[i];
//     //   const escapedUrl = page.hits.replace(/"/g, '""');
//     //   const escapedText = page.url.replace(/"/g, '""');
  
//     //   csvContent += `"${escapedUrl}","${escapedText}"`;
//     //   if (i < pages.length - 1) csvContent += '\n';
//     // }
    
//     // fs.writeFileSync(csvPath, csvContent);
//     return csvPath;
      
//   }




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