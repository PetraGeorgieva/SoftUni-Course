const Nightmare = require('nightmare')
const nightmare = Nightmare()

nightmare
	.goto('https://it.ryobitools.eu/')
	.type()
	.click('#submit-button')
	.wait('#results a')
	.evaluate(
		() => document.querySelector('#results a').href
	)
	.end()
	.then((link) => {
		console.log('ScrapingBee Web Link:', link)
	})
	.catch((error) => {
		console.error('Search failed:', error)
	})