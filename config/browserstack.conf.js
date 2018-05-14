exports.config = {
	user: "",
	key: "",

	specs:[
		"./tests/specs/app_launch_test.js"
	],

	capabilities: [{
		name: 'mobilemeettest',
		device: 'Google Pixel 2',
		'os_version': '8.0',
		app: 'MobileMeet',
		'browserstack.debug': true
	}],

	framework: "mocha",
	mochaOpts:{
		ui:"bdd",
		timeout: 9999999,
	}
}