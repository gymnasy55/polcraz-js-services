const fetch = require('node-fetch')

module.exports = async () => {
    let response = await fetch('https://api.github.com/users/gymnasy55/repos')
    let json = null
    if(response.ok) {
        json = await response.json()
    } else {
        console.error(`Error with status: ${response.status}`)
    }
    return json
}