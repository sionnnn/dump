
module.exports =
{
	options:
	{
        sourceMap		:false,
        outputStyle		:'<%= config.sass.outputStyle %>',
        includePaths	:'<%= config.sass.includePaths %>',
    },
	build:
	{

        files:[
        	{
	            expand	:true,
	            cwd		:'<%= paths.assets.styles.dir %>',
	            src		:['*.scss', '!_*.scss'],
	            dest	:'<%= paths.public.styles %>',
	            ext		:'.css'
	        }
        ]
    }
};
