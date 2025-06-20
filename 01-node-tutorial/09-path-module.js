const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
// resolve returns an absolute path
// __dirname points to directory where app.js is located
// if you're wondering why we ever want that, because our app will run in different enviroments so path to some kind of resourses is going to be different
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)



// /content/subfolder/test.txt
// test.txt
// /mnt/c/Users/user/Desktop/React/Node/node-express-course/01-node-tutorial/content/subfolder/test.txt