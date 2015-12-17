module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			files: ["js/*.js", "components/**/*.js"],
		},
		jasmine: {
		    pivotal: {
		      src: ['node*/angular/angular.min.js', 'node*/angular-mocks/angular-mocks.js', 'js/main.js', 'js/controller.js'],
		      options: {
		        specs: 'tests/test.js'
		      }
		    }
		},
		watch: {
		  scripts: {
		    files: ["js/*.js", "components/**/*.js"],
		    tasks: ['jasmine','jshint'],
		    options: {
		      spawn: false,
		    },
		  },
		}
	});

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch'])
};