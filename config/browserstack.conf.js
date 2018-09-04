exports.config = {
	user: "",
	key: "",

	specs:[
		'./features/new.installation.feature'
	],

	maxInstances: 10,
	commonCapabilities: {
		name: 'mobilemeettest',
		build: 'WebDriverIO Cucumberjs Android',
		browserName: 'android',
		app: 'bs://91019c67442cdc6a42c9f5d329acd73a5ee6f2d0',
		'browserstack.debug': true
	},
	capabilities: [
		//{	device: 'Google Pixel'},
		{	device: 'Google Nexus 6'}
	],

	waitforTimeout: 60000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
	framework: "cucumber",
	cucumberOpts: {
		require: require('glob').sync('./steps/new.installation.test.js'),      // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
	},
};

// Code to support common capabilities
  exports.config.capabilities.forEach(function(caps){
    for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });