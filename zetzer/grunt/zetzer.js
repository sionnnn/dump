module.exports = {
	prototype: {
      options: {
        env: {
          title: "Fink Prototype",
            pageurl: "/zetzer/docs/prototype"
        },
        partials: "<%= paths.src.root %>/partials",
        templates: "<%= paths.src.root %>/templates",
        dot_template_settings: { 
            strip: false,
            varname: 'it'
        }
      },
      files: [
        {
          expand: true,
          cwd: "<%= paths.src.root %>/pages/",
          src: "**/*.html",
          dest: "<%= paths.doc.root %>/prototype",
          ext: ".html",
          flatten: false
        }
      ]
    }
};