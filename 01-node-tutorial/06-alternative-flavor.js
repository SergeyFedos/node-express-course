module.exports.items = ['item1', 'item2']
const person = {
  name: 'bob',
}
// module.exports is an object an we can assign whatever property we want to this object
module.exports.singlePerson = person
module.exports.banana = 'banana'
console.log(module.exports)
