const fs = require('fs');
// fs.readFile('./1.text', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// })
const p = new Promise((resolve, reject) => {
    fs.readFile('./1.1text', (err, data) => {
        if (err) reject(err)
        resolve(data)
    });
})
p.then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log('读取失败');
})