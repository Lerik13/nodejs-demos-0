// File System
const fs = require('fs')
const path = require('path')
/*
fs.mkdir(path.join(__dirname, 'test'), (err) => {
	if (err) {
		throw err
	}
	console.log('Directory was created');
})
*/
const filePath = path.join(__dirname, 'test', 'text.txt')
/*
// if file is already existed, method 'writeFile' rewrite content in file
fs.writeFile(filePath, 'Hello NodeJS!', err => {
	if (err) {
		throw err
	}
	console.log('File was created');
})

fs.appendFile(filePath, '\nHello Again!', err => {
	if (err) {
		throw err
	}
	console.log('File was created');
})
*/

//fs.readFile(filePath, (err, content) => {
// using second parameter = Code, we avoid working with Buffer
fs.readFile(filePath, 'utf-8', (err, content) => {
	if (err) {
		throw err
	}
	//by default read Buffer
	console.log('Content: ', content);
	// use object Buffer
	//const data = Buffer.from(content)
	//console.log('Content: ', data.toString());

})