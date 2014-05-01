module.exports = function(grunt) {
	// Configure Grunt and tasks.
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		
		// Settings for Compass.
		compass: {
			dist: {
				options: {
					config: './config.rb'
				}
			}
		},
		
		// Settings for ImageOptim.
		imageoptim: {
			optimize: {
				options: {
					jpegMini: false,
					imageAlpha: true,
					quitAfter: true
				},
				src: [ 'assets/img/' ]
			}
		},
		
		// Setup watcher.
		watch: {
			html: {
				files: [ '*.html', '*.php' ],
				tasks: [  ],
				options: {
					spawn: false,
				}
			},
			scss: {
				files: [ 'assets/scss/**/*.scss' ],
				tasks: [ 'compass', 'autoprefixer' ],
				options: {
					spawn: false,
				}
			},
			css: {
				files: [ 'assets/css/**/*.css' ],
				tasks: [  ],
				options: {
					livereload: true
				}
			},
			js: {
				files: [ 'assets/js/**/*.js' ],
				tasks: [  ],
				options: {
					livereload: true
				}
			}
		}
	} );

	// Load Grunt plugins.
	require( 'load-grunt-tasks' )( grunt );

	// Register tasks.
	grunt.registerTask( 'default', [ 'compass' ] );
};