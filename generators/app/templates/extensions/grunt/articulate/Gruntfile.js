// NEW BUILD: ARTICULATE RISE TEMPLATE VERSION
module.exports = function(grunt) {
  grunt.initConfig({
    
    // CLEAN THE BUILDS
    clean: {
      node: ["node_modules", "package*"],
      grunt: ["./Gruntfile.js"]
    }
  });

  grunt.registerTask("default", [
    "clean",
  ]);
 

  grunt.loadNpmTasks("grunt-contrib-clean");
};
