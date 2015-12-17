module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ["js/*.js", "components/**/*.js"],
		},
		watch: {
		  scripts: {
		    files: ["js/*.js", "components/**/*.js"],
		    tasks: ['jshint'],
		    options: {
		      spawn: false,
		    },
		  },
		}
	});

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch'])
};