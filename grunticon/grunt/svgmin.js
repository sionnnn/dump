module.exports = {
    options: {
        
    },
    icons: {
        files: [
            {
                expand: true,
                cwd: "<%= paths.icons.raw %>",
                src: ["*.svg"],
                dest: "<%= paths.icons.opt %>"
            }

        ]
    }
}