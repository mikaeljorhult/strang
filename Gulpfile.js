var gulp = require( 'gulp' ),
	plugins = require( 'gulp-load-plugins' )();

gulp.task( 'styles', function() {
	gulp.src( './assets/scss/*.scss' )
		.pipe( plugins.plumber() )
		.pipe( plugins.compass( {
			config_file: './config.rb',
			css: 'assets/css',
			sass: 'assets/scss'
		} ) )
		.pipe( plugins.autoprefixer( '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1' ) )
		.pipe( gulp.dest( 'assets/css' ) );
} );

gulp.task( 'sprites', function() {
	return gulp.src( './assets/img/svg/*.svg' )
		.pipe( plugins.svgSymbols( {
			svgId: '%f',
			css: false
		} ) )
		.pipe( gulp.dest( './assets/img' ) );
} );

gulp.task( 'watch', function() {
	plugins.livereload.listen();
	
	gulp.watch( './assets/scss/**/*.scss', [ 'styles' ] );
	gulp.watch( './assets/img/svg/*.svg', [ 'sprites' ] );
	
	gulp.watch( [ './**/*.html', './**/*.php' , './assets/css/*.css' ] ).on( 'change', function( file ) {
		plugins.livereload.changed( file.path );
	} );
} );