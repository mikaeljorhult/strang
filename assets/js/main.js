requirejs.config( {
	paths: {
		jquery: 'vendor/jquery.min'
	},
	shim: {
		jquery: {
			exports: '$'
		}
	}
} );

define( [ 'jquery' ], function( $ ) {
	// Do magic.
} );