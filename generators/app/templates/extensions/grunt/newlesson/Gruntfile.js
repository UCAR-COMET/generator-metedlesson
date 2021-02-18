//FOR NEW BUILD WITH YEOMAN
module.exports = function (grunt) {

    grunt.initConfig({
        //Build project scaffold
        mkdir: {
            all: {
              options: {
                create: ['build/src', 'build/src/js', 'build/src/css', 'build/media', 'build/media/graphics', 'build/media/video', 'build/src/assets']
              },
            },
          },
        //Copy original src files if existent
        copy: {
            main: {
              files: [
                // Include all php files and index.htm
                {expand: true, flatten: true, src: ['./*.php', './index.htm'], dest: 'build/.', filter: 'isFile'},
                // Include asset folders
                {expand: true, flatten: true, src: ['./assets/*'], dest: 'build/src/assets/.'},
              ],
            },
            vendor: {
                files: [
                  // Copy Primary JS
                  {expand: true, flatten: true, src: ['./jquery/jquery*.min.js', './bootstrap/js/bootstrap.min.js', './modernizr/modernizr.min.js'], dest: 'build/src/js/.', filter: 'isFile'},
                  // Copy Secondary JS (apps and defaults)
                  {expand: true, flatten: true, src: ['build/jquery/defaults.js'], dest: 'build/src/js/.', filter: 'isFile'},
                  // Copy CSS
                  {expand: true, flatten: true, src: ['build/jquery/jquery*.min.css', 'build/bootstrap/css/bootstrap.min.css', 'build/css/meted-base.min.css', 'build/css/module-custom.css', 'build/css/module-print.css'], dest: 'build/src/css/.', filter: 'isFile'},
                  // Copy Web Fonts
                  {expand: true, flatten: true, src: ['./bootstrap/fonts/**', './css/fonts/**'], dest: 'build/src/fonts/.', filter: 'isFile'},
                  // Copy img assets
                  {expand: true, flatten: true, src: ['./jquery/img/*'], dest: 'build/src/css/img/.'},
                  // Include IE support
                  {expand: true, flatten: true, src: ['./ie-support/**'], dest: 'build/src/js/ie-support/.', filter: 'isFile'}
                ],
              },
          },
        //Concat js files (in array order)
        concat: {
            options: {
              separator: ' ',
                // Replace all 'use strict' statements in the code with a single one at the top
                banner: "'use strict';\n",
                process: function(src, filepath) {
                return '// Source: ' + filepath + '\n' +
                    src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                },
            },
            dist: {
              src: ['build/jquery/jquery.min.js', 'build/jquery/jquery-plugins.min.js', 'build/jquery/jquery-ui.min.js', 'build/bootstrap/js/bootstrap.min.js', /*'build/modernizr/modernizr.min.js'*/],
              dest: 'build/src/js/core.js',
            },
          },
        concat_css: {
            options: {
              // Task-specific options go here.
              assetBaseUrl: 'static/assets',
              baseDir: 'build/css/(styles|assets)'
            },
            all: {
              src: ['build/jquery/jquery-ui.min.css', 'build/bootstrap/css/bootstrap.min.css', 'build/css/meted-base.min.css'],
              dest: 'build/src/css/styles.css'
            },
          },
        // Deletes to clean directories
        clean: {
            js: ['build/jquery', 'build/src/js/*.js', '!build/src/js/core.js', '!build/src/js/defaults.js'],
            css: ['build/src/css/*.min.css'],
            grunt: ['./Gruntfile.js']
        },
        htmlbuild: {
          dist: {
              src: './index.htm',
              dest: 'build/index.htm',
              options: {
                  beautify: true,
                  scripts: {
                      bundle: [
                          'build/src/js/*.js',
                      ] 
                  },
                  styles: {
                      bundle: [
                          'build/src/css/styles.css',
                          '!build/src/css/module-print.css',
                          'build/src/css/module-custom.css'
                      ],
                  },
                  /*data: {
                      // Data to pass
                      copyright: "2020",
                      title: "Latest Core",
                  },*/
              }
          }
      },
      tags: {
        build: {
            options: {
              linkTemplate: '<link rel="stylesheet" href="{{ path }}"/>',  
              scriptTemplate: '<script src="{{ path }}"></script>',
                openTag: '<!-- STYLES =======================================-->',
            closeTag: '<!-- PRESET OVERRIDES =============================-->'
            },
            src: [
                'build/src/css/styles.css',
                'build/src/css/module-custom.css',
                'build/src/css/module-print.css',
                'build/src/js/*.js',
                '!build/js/vendor/**/*.js',
            ],
            dest: 'build/index.htm'
        }
      }
    })


    grunt.registerTask("default", ['mkdir', 'copy', 'concat', 'concat_css', 'clean', 'tags']);
    //grunt.registerTask("default", ['mkdir']);
    //grunt.registerTask("optimize", ['mkdir']);
    //grunt.registerTask('conversion', ['mkdir']);


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html-build');

    grunt.loadNpmTasks('grunt-script-link-tags');
}