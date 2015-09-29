'use strict';

module.exports = function(grunt) {

	var watchFiles = {
		serverViews: ['app/**/*.js'],
		serverJS: ['gruntfile.js', 'app.js', 'app/**/*.js'],
		clientViews: ['public/*.html'],
		clientJS: ['public/javascripts/**/*.js'],
		clientCSS: ['public/stylesheets/*.css']
		//mochaTests: ['app/tests/**/*.js']
	};

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			serverViews: {
				files: watchFiles.serverViews,
				options: {
					livereload: true
				}
			},
			serverJS: {
				files: watchFiles.serverJS,
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			clientViews: {
				files: watchFiles.clientViews,
				options: {
					livereload: true,
				}
			},
			clientJS: {
				files: watchFiles.clientJS,
				tasks: ['jshint'],
				options: {
					livereload: true
				}
			},
			clientCSS: {
				files: watchFiles.clientCSS,
				tasks: ['csslint'],
				options: {
					livereload: true
				}
			}
		},

		jshint: {
			all: {
				src: watchFiles.clientJS.concat(watchFiles.serverJS),
				options: {
					jshintrc: true
				}
			}
		},

		csslint: {
			all: {
				src: watchFiles.clientCSS
				// options: {
				// 	csslintrc: '.csslintrc',
				// }
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');

	// Making grunt default to force in order not to break the project.
	grunt.option('force', true);

	// Default task(s).
	grunt.registerTask('default', ['lint']);
};
