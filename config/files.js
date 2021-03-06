/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  ngtemplates: {
    dest: "generated/angular/template-cache.js"
  },

  js: {
    vendor: [
      "vendor/js/angular.js",
      "vendor/js/**/*.js"
    ],
    app: [
      "src/js/**/*.js"
    ],
    concatenated: 'generated/js/ui-grid.dev.js',
    minified: 'dist/js/ui-grid.min.js',
    uncompressed: 'dist/js/ui-grid.js',
    vendorCurrent: 'generated/js/vendor.js',
    spec: ["spec/**/*.js", "!spec/helpers/**/*.js"],
    spechelpers: 'generated/js/spec-helpers.js'
  },

  less: {
    compile: {
      options: {
        paths: ["vendor/less/**/*.css", "src/less/**/*.less"]
      }
    },
    app: "src/less/**/*.less",
    vendor: "vendor/less/**/*.less",
    generatedApp: "generated/less/ui-grid.css",
    generatedVendor: "generated/less/vendor.css",
    dist: "dist/less/ui-grid.css"
  }
});
