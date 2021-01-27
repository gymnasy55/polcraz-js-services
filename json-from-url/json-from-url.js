const fetch = require('node-fetch')

//TODO: ДОДЕЛАТЬ ЭТУ ХУЙНЮ
module.exports = (url) => {
    let obj = {}
    fetch(url).then(response => response.json()).then(data => Object.assign(obj, data))
    return obj
}