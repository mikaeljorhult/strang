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
		
		// Setup watcher.
		watch: {
			options: {
				livereload: true,
			},
			scripts: {
				files: ['asset/js/**/*.js'],
				tasks: [  ],
				options: {
					spawn: false,
				}
			},
			css: {
				files: [ 'assets/scss/**/*.scss' ],
				tasks: [ 'compass' ],
				options: {
					spawn: false,
				}
			}
		}
	} );

	// Load Grunt plugins.
	require( 'load-grunt-tasks' )( grunt );

	// Register tasks.
	grunt.registerTask( 'default', [ 'compass' ] );
};