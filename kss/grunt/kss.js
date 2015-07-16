module.exports = {
	options: {
		includeType: 'css',
        includePath: '<%= paths.doc.root %>/assets/css/site.css',
        template: '<%= paths.src.root %>/styleguide_template',
        title: 'Fink Styleguide'
	},
	dist: {
		files: {
			'docs/styleguide/': '<%= paths.dest.root %>/assets/css'
		}
	}
};