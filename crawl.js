const {JSDOM} = require('jsdom')

function getUrlsFromHtml(htmlBody, baseURL){
    const urls = []
    const dom = new JSDOM(htmlBody)
    const linkElements = dom.window.document.querySelectorAll('a')
    

    for (const linkElement of linkElements){
        if (linkElement.href.slice(0,1) ==='/'){
            try {
                const urlobj = new URL(`${baseURL}${linkElement.href}`)
                urls.push(urlobj.href)
            }catch (err){
                console.log(`Error with invalid url: ${err.message}`)
            }

        }else{
            try {
                const urlobj = new URL(linkElement.href)
                urls.push(urlobj.href)
            }catch (err){
                console.log(`Error with invalid url: ${err.message}`)
            }
        }
       
    }
    return urls
}





function normalizaURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath =  `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length>0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)

    }
    return hostPath
    
}

module.exports = {
    normalizaURL,
    getUrlsFromHtml
}