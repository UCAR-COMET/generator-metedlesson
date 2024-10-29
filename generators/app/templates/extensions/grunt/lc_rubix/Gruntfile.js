// FOR NEW BUILD WITH YEOMAN
module.exports = function(grunt) {
  grunt.initConfig({
    // Build project scaffold
    mkdir: {
      all: {
        options: {
          create: [
            "build/media",
            "build/media/graphics",
            "build/media/video"
          ]
        }
      }
    },
    // Clean the build
    clean: {
      core: ["dist/dev", "./.sass-cache/"],
      node: ["node_modules", "package*"],
      grunt: ["./Gruntfile.js"]
    }
  });

  // Register tasks
  grunt.registerTask("default", [
    "mkdir",
    "clean"
  ]);
 
  // Load install tasks
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-concat-css");
  grunt.loadNpmTasks("grunt-script-link-tags");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
};
