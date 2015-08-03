var gulp = require('gulp');
var sassdoc = require('sassdoc');

gulp.task('sassdoc', function () {
	return gulp.src('src/styles/**/*.scss')
	.pipe(sassdoc
		(
			{
				/*
				dest: 'docs',
				verbose: true,
				display: {
					access: ['public', 'private'],
					alias: true,
					watermark: true,
				},
				groups: {
					'undefined': 'Ungrouped',
					foo: 'Foo group',
					bar: 'Bar group',
				},
				basePath: 'https://github.com/SassDoc/sassdoc',
				*/
			}		
		)
	);
});