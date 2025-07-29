const {normalizaURL, getUrlsFromHtml} = require('./crawl.js')
const { test, expect }= require('@jest/globals')

test('normalizaURL strip prottocol', () =>{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizaURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizaURL strip trailing slash', () =>{
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizaURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizaURL strip Capitals', () =>{
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizaURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test('normalizaURL strip http', () =>{
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizaURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})


test('getUrlsFromHtml absolute', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://blog.boot.dev/"> Boot.dev Blog  </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev/"
    const actual = getUrlsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
})


test('getUrlsFromHtml relative', () =>{
    const inputHTMLBody = `
    <html>
        <body>
            <a href = "https://blog.boot.dev/"> Boot.dev Blog  </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://blog.boot.dev/"
    const actual = getUrlsFromHtml(inputHTMLBody, inputBaseURL)
    const expected = ['https://blog.boot.dev/']
    expect(actual).toEqual(expected)
})
