'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user
    this.log(
      yosay(`Let's generate a new ${chalk.blue('MetEd Lesson')}!`)
    );
    // Let's get the current year
    const generatorYear = new Date().getFullYear();

    const prompts = [
      {
        type: 'input',
        name: 'metedName',
        message: 'What is the name of the lesson?',
        default: 'Lesson Title Here'
      },
      {
        type: 'input',
        name: 'metedID',
        message: 'What is the lesson ID?',
        default: 0
      },
      {
        type: 'input',
        name: 'metedDesc',
        message: 'Enter the lesson description:',
        default: ''
      },
      {
        type: 'input',
        name: 'metedKeys',
        message: 'Enter the lesson keywords (comma separated):',
        default: ''
      },
      {
        type: 'input',
        name: 'metedPath',
        message: 'What is the MetEd lesson path?',
        default: '/example/path/'
      },
      {
        type: 'confirm',
        name: 'multiLesson',
        message: 'Is this a multi-print lesson?',
        default: false
      },
      {
        type: 'confirm',
        name: 'narratedLesson',
        message: 'Does this lesson need a switch to Narrated/Text button?',
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      // Constants
      this.generatorYear = generatorYear;
    });
  }

  writing() {
    //BUILD
    this.fs.copy(
      this.templatePath('assets'),
      this.destinationPath('build/assets'),
    );
    this.fs.copy(
      this.templatePath('bootstrap'),
      this.destinationPath('build/bootstrap'),
    );
    this.fs.copy(
      this.templatePath('css'),
      this.destinationPath('build/css'),
    );
    this.fs.copy(
      this.templatePath('jquery'),
      this.destinationPath('build/jquery'),
    );
    this.fs.copy(
      this.templatePath('ie-support'),
      this.destinationPath('build/ie-support'),
    );
    this.fs.copy(
      this.templatePath('modernizr'),
      this.destinationPath('build/modernizr'),
    );
    this.fs.copy(
      this.templatePath('navmenu.inc.php'),
      this.destinationPath('build/navmenu.inc.php'),
    );
    this.fs.copy(
      this.templatePath('simple_html_dom.php'),
      this.destinationPath('build/simple_html_dom.php'),
    );

    //MODS
    //index.htm
    this.fs.copyTpl(
      this.templatePath('index.htm'),
      this.destinationPath('build/index.htm'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear }
    );
    //download.php
    this.fs.copyTpl(
      this.templatePath('download.php'),
      this.destinationPath('build/download.php'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, currentYear: this.generatorYear  }
    );
    //media_gallery.php
    this.fs.copyTpl(
      this.templatePath('media_gallery.php'),
      this.destinationPath('build/media_gallery.php'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, currentYear: this.generatorYear  }
    );
    //pageTemplate.php
    this.fs.copyTpl(
      this.templatePath('pageTemplate.php'),
      this.destinationPath('build/pageTemplate.php'),
      { currentYear: this.generatorYear, narratedSwitch: this.props.narratedLesson }
    );
    //navmenu.php
    this.fs.copyTpl(
      this.templatePath('navmenu.php'),
      this.destinationPath('build/navmenu.php'),
      { lessonPath: this.props.metedPath }
    );

    //POST
    //defaults.js
    this.fs.copyTpl(
      this.templatePath('jquery/defaults.js'),
      this.destinationPath('build/jquery/defaults.js'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID }
    );
    //print.php
    this.fs.copyTpl(
      this.templatePath('print.php'),
      this.destinationPath('build/print.php'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear }
    );
    
    //LOGS
    this.log("Lesson name set to: " + `${chalk.red(this.props.metedName)}`);
    this.log("Lesson ID set to: " + `${chalk.red(this.props.metedID)}`);
    this.log("Copyright year set to: " + `${chalk.red(this.generatorYear)}`);
  }

  /*install() {
    this.installDependencies();
  }*/
};
