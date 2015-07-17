module.exports = {	
    
      		options: {
       			// Include only styles for a screen 800px wide
        		width: 1024,
            type: 'screen',
            //'device-width': int
            //height: int,
            //'device-height': int,
            //resolution: '1dppx',
            //orientation : 'landscape',
            //'aspect-ratio' : int
            //color
      		},
          all: {
        		files: {
          		'css/legacy-main.css': 'css/main.css',
              'css/legacy-anglian.css': 'css/anglian.css'
        		}
          },
    	 	
};