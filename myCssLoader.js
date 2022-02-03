module.exports = function myloader(content) {
	console.log('myCssLoader가 동작함')
	return content.replace('green', 'yellow')
}