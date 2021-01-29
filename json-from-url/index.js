const getJSON = require('./json-from-url')

let mainFunction = async () => {
    (await getJSON()).forEach(repos => {
        console.log(`${repos.name}: ${repos.url}`)
    })
}

mainFunction()