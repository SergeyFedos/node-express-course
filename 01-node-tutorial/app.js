console.log('Welcome to Node Tutorial')
// we can destructure
const {john, peter} = require('./04-names')
const names = require('./04-names')
// or we can access like this
console.log(names.john)
console.log(names.peter)
