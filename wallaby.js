module.exports = () => {
	return {
	  files: [
		'*.js',
		'lib/**/*.js'
	  ],
	  tests: [
		'test/*.js'
	  ],
	  env: {
		type: 'node',
		runner: 'node'
	  }
	};
  };