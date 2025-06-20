const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
// if the file doesnt exit node will create new one, if if exist it overwites this
// if we want just append to the file we need add third argument { flag: 'a' }
// // this task might be very time consuming, imagine if we have even 10 users that all the time are using our app and if one user does this one task or both of them and they take really long time what means that node is not going to be able serve other users and js reat this file sinchronisly line by line 
// start
// done with this task
// starting the next one
// if this is something that takes really long time then pretty much your app is down no other user can do anything with this app because one of the users for example reading these two files and then writing one and as alternative lets take a look at async approach..
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
