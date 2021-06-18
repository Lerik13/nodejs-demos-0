/*
const chalk = require('chalk')
const text = require('./data')

console.log(chalk.blue(text));
*/
// Creating custom Servers
const http = require('http')
const fs = require('fs')
const path = require('path')
const { reset } = require('chalk')

const server = http.createServer((req, res) => {
/*
	if (req.url === '/') {
		//const path_file = path.join('file:///',__dirname, 'public', 'index.html');
		//fs.readFile(path_file, (err, data) => {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
			if (err) {
				console.log('Error: ', err);
				throw err
			}
			res.writeHead(200, {
				'Content-Type': 'text/html'
			})
			res.end(data)
		})
	}
*/
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
	const ext = path.extname(filePath)
	if (!ext) {
		filePath += '.html'
	}

	console.log(filePath);
	
	fs.readFile(filePath, (err, content) => {
		if (err) {
			fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
				if (err) {
					// Server Error = 500
					res.writeHead(500)
					res.end('Error')
				} else {
					res.writeHead(200, {
						'Content-Type': 'text/html'
					})
					res.end(data)
				}
			})
		} else {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			})
			res.end(content)
		}
	})
	res.end()

})


server.listen(3000, () => {
	console.log('Server has been started ...');
})


