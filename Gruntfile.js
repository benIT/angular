module.exports = function(grunt) {
    grunt.config.init({
        cssIncludeInMain: [...]
    });
    // Project configuration.
    grunt.initConfig({
      ngAnnotate: {
        options: {
           add:true
        },
        target: {
           files: [{
                expand: true,
                cwd: 'app/',
                src: ['*.js', '**/*.js'],
                dest: 'app/',
                ext: '.js'
            }]
        }
      },
      uglify: {
        options: {
          compress: {
            drop_console: true
          }
        },
        target: {
          files: [{
                expand: true,
                cwd: 'app/',
                src: ['*.js', '**/*.js'],
                dest: 'app/',
                ext: '.js'
            }]
        }
      },
      concat: {
        dist: {
          src: grunt.config.get("cssIncludeInMain"),
          dest: 'css/main.css'
        }
      },
      //same options for css minify
      cssmin: {
        styles: {
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/',
            ext: '.css'
        }
      },
      clean: {
        before: {
            src: ['css/main.css']
        },
        after: {
            src: grunt.config.get("cssIncludeInMain")
        }
      },
      usemin: {
        html: ['index.html']
      }
    });
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.registerTask('default', ['clean:before', 'ngAnnotate','usemin', 'concat', 'clean:after', 'cssmin', 'uglify']);
};