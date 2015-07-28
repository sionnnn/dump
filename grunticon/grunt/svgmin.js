module.exports = {
    options: {
        plugins: [
            { cleanupAttrs: true },
            { cleanupEnableBackground: true },
            { cleanupIDs: true },
            { cleanupNumericValues: true },
            { collapseGroups: true },
            { convertColors: true },
            { convertPathData: true },
            { convertShapeToPath: true },
            { convertStyleToAttrs: true },
            { convertTransform: true },
            { mergePaths: true },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: true },
            { removeComments: true },
            { removeDoctype: true },
            { removeEditorsNSData: true },
            { removeEmptyAttrs: true },
            { removeEmptyContainers: true },
            { removeEmptyText: true },
            { removeHiddenElems: true },
            { removeMetadata: true },
            { removeNonInheritableGroupAttrs: true },
            { removeRasterImages: false }, //Keep raster images with the svg
            { removeTitle: true },
            { removeUnknownsAndDefaults: true },
            { removeUnusedNS: true },
            { removeUselessStrokeAndFill: false }, //Enabling this may case small details to be removed
            { removeViewBox: false }, //I keep the view box because that's where illustrator hides the SVG dimensions
            { removeXMLProcInst: false }, //Enabling this breaks grunticon because it removes the XML header
            { sortAttrs: true },
            { transformsWithOnePath: false }, //Enabling this breaks Illustrator SVGs with complex text?
        ]
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