
module.exports =
{
	options:
	{	
		/*
		// sourcemaps
        map				:{
			inline		:false,
			annotation	:'<%= paths.public.styles %>'
		},
		*/
		processors		:[
			 require('autoprefixer-core')({browsers: ["last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"]})
		]
    },
	build:
	{
       src				:'<%= paths.public.styles %>/*.css'
    }
};
