var gulp = require( 'gulp' ),
	plugins = require( 'gulp-load-plugins' )();

gulp.task( 'scripts', function() {
	return gulp.src( './assets/js/main.js' )
		.pipe( plugins.plumber() )
		.pipe( plugins.requirejsOptimize( {
			baseUrl: './assets/js',
			include: [ 'require.js', 'main' ],
			insertRequire: [ 'main' ],
			wrap: true
		} ) )
		.pipe( plugins.uglify() )
		.pipe( plugins.rename( { extname: '.min.js' } ) )
		.pipe( gulp.dest( './assets/js' ) );
} );

gulp.task( 'styles', function() {
	gulp.src( './assets/scss/*.scss' )
		.pipe( plugins.plumber() )
		.pipe( plugins.sourcemaps.init() )
		.pipe( plugins.sass( {
			errLogToConsole: true
		} ) )
		.pipe( plugins.autoprefixer( '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1' ) )
		.pipe( plugins.sourcemaps.write( './' ) )
		.pipe( gulp.dest( './assets/css' ) );
} );

gulp.task( 'sprites', function() {
	return gulp.src( './assets/img/svg/*.svg' )
		.pipe( plugins.svgSprites( {
			mode: 'symbols',
			preview: false,
			svg: {
				symbols: 'icons.svg'
			}
		} ) )
		.pipe( gulp.dest( './assets/img' ) );
} );

gulp.task( 'watch', function() {
	plugins.livereload.listen();
	
	gulp.watch( [ './assets/js/**/*.js', '!./assets/js/main.min.js' ], [ 'scripts' ] );
	gulp.watch( './assets/scss/**/*.scss', [ 'styles' ] );
	gulp.watch( './assets/img/svg/*.svg', [ 'sprites' ] );
	
	gulp.watch( [ './**/*.html', './**/*.php' , './assets/css/*.css' ] ).on( 'change', function( file ) {
		plugins.livereload.changed( file.path );
	} );
} );