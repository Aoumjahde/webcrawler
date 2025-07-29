const {normalizaURL} = require('./crawl.js')
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
