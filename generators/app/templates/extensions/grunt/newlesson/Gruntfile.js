//FOR NEW BUILD WITH YEOMAN
module.exports = function (grunt) {

    grunt.initConfig({
        //Build project scaffold
        mkdir: {
            all: {
              options: {
                create: ['build/media', 'build/media/graphics', 'build/media/video', 'build/assets',
                        'dist/src', 'dist/src/js', 'dist/src/css', 'dist/assets']
              },
            },
          },
        //Copy original src files if existent
        copy: {
            main: {
              files: [
                // Include all php files and index.htm
                {expand: true, flatten: true, src: ['build/*.php', 'build/index.htm'], dest: 'dist/.', filter: 'isFile'},
                // Include asset folders
                //{expand: true, flatten: true, src: ['build/assets/*'], dest: 'dist/assets/.', filter: 'isFile'},
              ],
            },
            vendor: {
                files: [
                  // Copy Primary JS
                  {expand: true, flatten: true, src: ['build/jquery/jquery*.min.js', 'build/bootstrap/js/bootstrap.min.js', 'build/modernizr/modernizr.min.js'], dest: 'dist/dev/js/.', filter: 'isFile'},
                  // Copy Secondary JS (apps and defaults)
                  {expand: true, flatten: true, src: ['build/jquery/defaults.js'], dest: 'dist/dev/js/.', filter: 'isFile'},
                  // Copy Bundle CSS and Static CSS
                  {expand: true, flatten: true, src: ['build/jquery/jquery*.min.css', 'build/bootstrap/css/bootstrap.min.css', 'build/css/meted-base.min.css', 'build/css/module-custom.css'], dest: 'dist/dev/css/.', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['build/css/module-custom.scss', /*'build/css/module-print.css'*/], dest: 'dist/dev/css/.', filter: 'isFile'},
                  // Copy static assets
                  {expand: true, flatten: true, src: ['build/bootstrap/fonts/**', 'build/css/fonts/**'], dest: 'dist/src/css/static/fonts/.', filter: 'isFile'},
                  {expand: true, flatten: true, src: ['build/jquery/img/*', 'build/assets/*'], dest: 'dist/src/css/static/img/.'},
                  // Include IE support
                  {expand: true, flatten: true, src: ['build/ie-support/**'], dest: 'dist/dev/js/ie-support/.', filter: 'isFile'}
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
              src: ['dist/dev/js/jquery.min.js', 'dist/dev/js/jquery-plugins.min.js', 'dist/dev/js/jquery-ui.min.js', 'dist/dev/js/bootstrap.min.js', 'dist/dev/js/modernizr.min.js'],
              dest: 'dist/src/js/core.js',
            },
          },
        sass: {
            dist: {
              files: {
                'dist/src/css/module-custom.css': 'dist/dev/css/module-custom.scss'
              }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
              },
            target: {
                files: {
                  'dist/src/css/module-custom.css': ['dist/src/css/module-custom.css']
                }
            }
        },
        concat_css: {
            options: {
              // Task-specific options go here.
              assetBaseUrl: 'static/',
              baseDir: 'dist/src/css/static/(styles|assets)'
            },
            all: {
              src: ['dist/dev/css/*.css'],
              dest: 'dist/src/css/styles.css'
            },
        },
        // Deletes to clean directories
        clean: {
            //js: ['dist/dev', /*'!dist/src/js/core.js', '!dist/src/js/defaults.js'*/],
            //css: ['dist/dev/css'],
            grunt: ['./Gruntfile.js']
        },
      tags: {
        build: {
            options: {
              linkTemplate: '<link rel="stylesheet" media="screen" href="{{ path }}"/>',  
              scriptTemplate: '<script src="{{ path }}"></script>',
                openTag: '<!-- STYLES =======================================-->',
            closeTag: '<!-- PRESET OVERRIDES =============================-->'
            },
            src: [
                'dist/src/css/styles.css',
                '!dist/src/css/module-custom.css',
                '!dist/src/css/module-print.css',
                'dist/src/js/*.js',
            ],
            dest: 'dist/index.htm'
        }
      }
    })


    grunt.registerTask("default", ['mkdir', 'copy', 'concat', 'cssmin', 'sass', 'concat_css', 'clean', 'tags']);
    //grunt.registerTask("default", ['mkdir']);
    //grunt.registerTask("optimize", ['mkdir']);
    //grunt.registerTask('conversion', ['mkdir']);


    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-script-link-tags');
    //grunt.loadNpmTasks('grunt-html-build');
    
}