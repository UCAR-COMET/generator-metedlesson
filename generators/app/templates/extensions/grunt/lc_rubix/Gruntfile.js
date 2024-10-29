// NEW BUILD: LC RUBIX TEMPLATE VERSION
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
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-contrib-clean");
};
