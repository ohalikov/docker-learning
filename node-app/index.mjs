import fs from 'fs'

fs.appendFile('my-file.txt', 'File created Node.js', (err) => {
    if (err) throw err
    console.log('File saved')
})

setTimeout(()=> console.log('END..'), 10000)