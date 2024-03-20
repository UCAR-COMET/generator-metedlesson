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
            "build/media/video",
            "build/assets",
            "dist/src",
            "dist/src/js",
            "dist/src/css",
            "dist/media",
            "dist/media/graphics",
            "dist/media/video"
          ]
        }
      }
    },
    // Copy original SRC files to DIST
    copy: {
      main: {
        files: [
          { //CORE php and htm files
            expand: true,
            flatten: true,
            src: ["build/*.php", "build/index.htm"],
            dest: "dist/.",
            filter: "isFile"
          },
          { //CORE css files
            expand: true,
            flatten: true,
            src: [
              "build/jquery/jquery.min.css",
              "build/bootstrap/css/bootstrap.min.css",
              "build/css/*.css"
            ],
            dest: "dist/dev/css/.",
            filter: "isFile"
          },
          { //module-custom.*
            expand: true,
            flatten: true,
            src: ["build/css/module-custom.*"],
            dest: "dist/src/css/.",
            filter: "isFile"
          }
        ]
      },
      vendor: {
        files: [
          { //Jquery and Bootstrap
            expand: true,
            flatten: true,
            src: [
              "build/jquery/jquery*.min.js",
              "build/bootstrap/js/bootstrap.min.js"
            ],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          { //Modernizr
            expand: true,
            flatten: true,
            src: ["build/modernizr/modernizr.min.js"],
            dest: "dist/dev/js/modernizr/.",
            filter: "isFile"
          },
          { //Media Element Player, Fancybox, Image Sweep
            expand: true,
            flatten: true,
            src: [
              "build/jquery/meted-player/mediaelement-and-player.min.js",
              "build/jquery/apps/fancybox/fancybox.min.js",
              "build/jquery/apps/image-sweep/image-sweep.js"
            ],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          { //Drag, Draw
            expand: true,
            flatten: true,
            src: [
              "build/jquery/apps/draw/draw.js",
              "build/jquery/apps/drag/drag.js"
            ],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          { //LC defaults.js
            expand: true,
            flatten: true,
            src: ["build/jquery/defaults.js"],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          { //All vendor CSS
            expand: true,
            flatten: true,
            src: [
              "build/jquery/meted-player/mediaelementplayer.min.css",
              "build/jquery/apps/**/*.css"
            ],
            dest: "dist/dev/css/.",
            filter: "isFile"
          },
          { //Bootstrap static elements
            expand: true,
            flatten: true,
            src: ["build/bootstrap/fonts/**", "build/css/fonts/**"],
            dest: "dist/src/css/static/fonts/.",
            filter: "isFile"
          },
          { //Other static elements
            expand: true,
            flatten: true,
            src: [
              "build/jquery/img/*",
              "build/jquery/meted-player/mejs-controls.svg",
              "build/jquery/apps/fancybox/*.gif",
              "build/jquery/apps/fancybox/*.png",
              "build/assets/*"
            ],
            dest: "dist/src/css/static/img/."
          },
          { //IE Support
            expand: true,
            flatten: true,
            src: ["build/ie-support/**"],
            dest: "dist/src/js/ie-support/.",
            filter: "isFile"
          }
        ]
      }
    },
    // CONCAT AND MINIFY CSS: styles.css
    /*cssmin: {
      options: {
        mergeIntoShorthands: true,
        roundingPrecision: -1
      },
      target: {
        files: {
          "build/css/meted-base.min.css": ["build/css/meted-base.css"],
          "dist/src/css/module-custom.css": ["dist/src/css/module-custom.css"]
        }
      }
    },*/
    
    /*sass: {
      options: {
          implementation: sass,
          sourceMap: true
      },
      dist: {
          files: {
              'dist/src/css/module-custom.css': 'dist/src/css/module-custom.scss'
          }
      }
    },*/
    // CONCAT AND COMPRESS JS: core.js
    concat: {
      options: {
        separator: " ",
        // Replace all 'use strict' statements in the code with a single one at the top
        banner: "'use strict';\n",
        process: function(src, filepath) {
          return (
            "// Source: " +
            filepath +
            "\n" +
            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, "$1")
          );
        }
      },
      dist: {
        src: [
          "dist/dev/js/jquery.min.js",
          "dist/dev/js/jquery-plugins.min.js",
          "dist/dev/js/jquery-ui.min.js",
          "dist/dev/js/bootstrap.min.js",
          "dist/dev/js/modernizr.min.js",
          "dist/dev/js/defaults.js"
        ],
        dest: "dist/src/js/core.js"
      }
    },
    // ADD JS AND CSS LINK TAGS TO PAGES
    tags: {
      tagIndex: {
        options: {
          linkTemplate: '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- =CORE TAGS START= -->",
          closeTag: "<!-- =CORE TAGS END= -->"
        },
        src: [
          "dist/src/css/styles.css",
          "dist/src/css/module-custom.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/index.htm"
      },
      tagDownload: {
        options: {
          linkTemplate: '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- =CORE TAGS START= -->",
          closeTag: "<!-- =CORE TAGS END= -->"
        },
        src: [
          "dist/src/css/styles.css",
          "dist/src/css/module-custom.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/download.php"
      },
      tagMedia: {
        options: {
          linkTemplate: '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- =CORE TAGS START= -->",
          closeTag: "<!-- =CORE TAGS END= -->"
        },
        src: [
          "dist/src/css/styles.css",
          "dist/src/css/module-custom.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/media_gallery.php"
      },
      tagPageTemplate: {
        options: {
          linkTemplate: '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- =CORE TAGS START= -->",
          closeTag: "<!-- =CORE TAGS END= -->"
        },
        src: [
          "dist/src/css/styles.css",
          "dist/src/css/module-custom.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/pageTemplate.php"
      }
    },
    concat_css: {
      options: {
        assetBaseUrl: "static/",
        baseDir: "dist/src/css/static/(styles|assets)"
      },
      all: {
        src: ["dist/dev/css/*.css", "!dist/dev/css/module-custom.css"],
        dest: "dist/src/css/styles.css"
      }
    },
    // CLEAN THE BUILDS
    clean: {
      core: ["dist/dev", "./.sass-cache/"],
      node: ["node_modules", "package*"],
      grunt: ["./Gruntfile.js"]
    }
  });

  grunt.registerTask("default", [
    "mkdir",
    "copy",
    "concat",
    "concat_css",
    "tags",
    //"clean"
    /*"sass",
    "cssmin",*/
  ]);
  // Grunt.registerTask("default", ['mkdir']);
  // grunt.registerTask("optimize", ['mkdir']);
  // grunt.registerTask('conversion', ['mkdir']);
 
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-concat-css");
  grunt.loadNpmTasks("grunt-script-link-tags");
  grunt.loadNpmTasks("grunt-contrib-clean");
  //grunt.loadNpmTasks("grunt-contrib-cssmin");
};
