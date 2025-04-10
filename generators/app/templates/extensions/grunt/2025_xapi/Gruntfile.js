// Creates Svelte5 Prebuild
module.exports = function(grunt) {
  grunt.initConfig({
    // Build project scaffold
    mkdir: {
      all: {
        options: {
          create: [
            "input_lesson",
          ]
        }
      }
    },
    // Copy original src files if existent
    copy: {
      main: {
        files: [
          // Include all php files and index.htm
          {
            expand: true,
            flatten: true,
            src: ["build/*.php", "build/index.htm"],
            dest: "dist/.",
            filter: "isFile"
          }
          // Include asset folders
          // {expand: true, flatten: true, src: ['build/assets/*'], dest: 'dist/assets/.', filter: 'isFile'},
        ]
      },
      vendor: {
        files: [
          // Copy Javascript
          {
            expand: true,
            flatten: true,
            src: [
              "build/jquery/jquery*.min.js",
              "build/bootstrap/js/bootstrap.min.js"
            ],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          {
            expand: true,
            flatten: true,
            src: ["build/modernizr/modernizr.min.js"],
            dest: "dist/dev/js/modernizr/.",
            filter: "isFile"
          },
          // TODO:ADD APPS HERE!!!
          {
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
          {
            expand: true,
            flatten: true,
            src: [
              "build/jquery/apps/draw/draw.js",
              "build/jquery/apps/drag/drag.js"
            ],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },
          {
            expand: true,
            flatten: true,
            src: ["build/jquery/defaults.js"],
            dest: "dist/dev/js/.",
            filter: "isFile"
          },

          // Copy Bundle CSS, Static CSS, and static assets
          {
            expand: true,
            flatten: true,
            src: [
              "build/jquery/jquery*.min.css",
              "build/bootstrap/css/bootstrap.min.css",
              "build/css/meted-base.css",
              "build/css/module-custom.scss"
            ],
            dest: "dist/dev/css/.",
            filter: "isFile"
          },
          {
            expand: true,
            flatten: true,
            src: ["build/jquery/meted-player/mediaelementplayer.min.css"],
            dest: "dist/dev/css/.",
            filter: "isFile"
          },
          {
            expand: true,
            flatten: true,
            src: ["build/bootstrap/fonts/**", "build/css/fonts/**"],
            dest: "dist/src/css/static/fonts/.",
            filter: "isFile"
          },
          {
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
          {
            expand: true,
            flatten: true,
            src: ["build/ie-support/**"],
            dest: "dist/src/js/ie-support/.",
            filter: "isFile"
          }
        ]
      }
    },
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
    // CONCAT AND MINIFY CSS: styles.css
    cssmin: {
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
    },
    concat_css: {
      options: {
        assetBaseUrl: "static/",
        baseDir: "dist/src/css/static/(styles|assets)"
      },
      all: {
        src: ["dist/dev/css/*.css", "dist/src/css/module-custom.css"],
        dest: "dist/src/css/styles.css"
      }
    },
    /* sass: {
        dist: {
          options: {
            style: 'expanded'
          },
          files: {
            'dist/src/css/module-custom.css': 'dist/dev/css/module-custom.scss',
            //'widgets.css': 'widgets.scss'
          }
        }
      }, */
    // ADD JS AND CSS LINK TAGS TO PAGES
    tags: {
      buildIndex: {
        options: {
          linkTemplate:
            '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- STYLES =======================================-->",
          closeTag: "<!-- PRESET OVERRIDES =============================-->"
        },
        src: [
          "dist/src/css/styles.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/index.htm"
      },
      buildDownload: {
        options: {
          linkTemplate:
            '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- STYLES =======================================-->",
          closeTag: "<!-- PRESET OVERRIDES =============================-->"
        },
        src: [
          "dist/src/css/styles.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/download.php"
      },
      buildMedia: {
        options: {
          linkTemplate:
            '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- STYLES =======================================-->",
          closeTag: "<!-- PRESET OVERRIDES =============================-->"
        },
        src: [
          "dist/src/css/styles.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/media_gallery.php"
      },
      buildTemplate: {
        options: {
          linkTemplate:
            '<link rel="stylesheet" media="screen" href="{{ path }}"/>',
          scriptTemplate: '<script src="{{ path }}"></script>',
          openTag: "<!-- STYLES =======================================-->",
          closeTag: "<!-- PRESET OVERRIDES =============================-->"
        },
        src: [
          "dist/src/css/styles.css",
          "!dist/src/css/module-print.css",
          "dist/src/js/*.js"
        ],
        dest: "dist/pageTemplate.php"
      }
    },
    // CLEAN THE BUILDS
    clean: {
      core: ["dist/dev", "dist/src/css/module-custom.*", "./.sass-cache/"],
      node: ["node_modules", "package*"],
      grunt: ["./Gruntfile.js"]
    }
  });

  grunt.registerTask("default", [
    "mkdir",
    "copy",
    "concat",
    /*"sass",*/
    "cssmin",
    "concat_css",
    "clean",
    "tags"
  ]);
  // Grunt.registerTask("default", ['mkdir']);
  // grunt.registerTask("optimize", ['mkdir']);
  // grunt.registerTask('conversion', ['mkdir']);
 
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-mkdir");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-concat-css");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-script-link-tags");
};
