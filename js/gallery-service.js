'use strict'
var gSearchBy = ''

var gImgs = [
    {
        id: 1, 
        url: 'meme-imgs/1.jpg', 
        keywords: ['funny', 'politic', '']
    },
    {
        id: 2, 
        url: 'meme-imgs/2.jpg', 
        keywords: ['pets']
    },
    {
        id: 3, 
        url: 'meme-imgs/3.jpg', 
        keywords: ['pets', 'baby']
    },
    {
        id: 4, 
        url: 'meme-imgs/4.jpg', 
        keywords: ['pets']
    },
    {
        id: 5, 
        url: 'meme-imgs/5.jpg', 
        keywords: ['baby']
    },
    {
        id: 6, 
        url: 'meme-imgs/6.jpg', 
        keywords: ['movies']
    },
    {
        id: 7, 
        url: 'meme-imgs/7.jpg', 
        keywords: ['baby', 'funny']
    },
    {
        id: 8, 
        url: 'meme-imgs/8.jpg', 
        keywords: ['movies', 'funny']
    },
    {
        id: 9, 
        url: 'meme-imgs/9.jpg', 
        keywords: ['baby', 'funny']
    },
    {
        id: 10, 
        url: 'meme-imgs/10.jpg', 
        keywords: ['politic', 'funny']
    },
    {
        id: 11, 
        url: 'meme-imgs/11.jpg', 
        keywords: ['movies']
    },
    {
        id: 12, 
        url: 'meme-imgs/12.jpg', 
        keywords: ['movies']
    },
    {
        id: 13, 
        url: 'meme-imgs/13.jpg', 
        keywords: ['movies']
    },
    {
        id: 14, 
        url: 'meme-imgs/14.jpg', 
        keywords: ['movies']
    },
    {
        id: 15, 
        url: 'meme-imgs/15.jpg', 
        keywords: ['movies']
    },
    {
        id: 16, 
        url: 'meme-imgs/16.jpg', 
        keywords: ['movies', 'funny']
    },
    {
        id: 17, 
        url: 'meme-imgs/17.jpg', 
        keywords: ['politic']
    },
    {
        id: 18, 
        url: 'meme-imgs/18.jpg', 
        keywords: ['funny', 'movies']
    },

] 

// var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function getImgs(){
    console.log('img.keywords.join()',gImgs[0].keywords.join())
    console.log('gSearchBy',gSearchBy)

    var imgs = gImgs.filter(img => img.keywords.join().includes(gSearchBy))
    console.log('imgs',imgs)
    return imgs    
}
 

function getImg(id){
    return gImgs[id-1]
}

function setSearch(search) {
    gSearchBy = search
    console.log('gSearchBy',gSearchBy)  
    return gSearchBy
}
