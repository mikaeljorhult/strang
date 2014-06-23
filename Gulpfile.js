var gulp = require( 'gulp' ),
	livereload = require( 'gulp-livereload' ),
	plugins = require( 'gulp-load-plugins' )();

gulp.task( 'styles', function() {
	gulp.src( './assets/scss/*.scss' )
		.pipe( plugins.compass( {
			config_file: './config.rb',
			css: 'assets/css',
			sass: 'assets/scss'
		} ) )
		.pipe( plugins.autoprefixer( '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1' ) )
		.pipe( gulp.dest( 'assets/css' ) );
} );

gulp.task( 'watch', function() {
	livereload.listen();
	
	gulp.watch( [ './**/*.html', './**/*.php' , './assets/css/*.css' ] ).on( 'change', function( file ) {
		livereload.changed( file.path );
	} );
} );