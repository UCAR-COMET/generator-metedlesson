'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const grunt = require('grunt');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user
    this.log(
      yosay(`Let's generate a new ${chalk.blue('MetEd Lesson')}!`)
    );
    // Let's get the current year
    const generatorYear = new Date().getFullYear();
    let addPrompts = false;

    const prompts = [
      {
        type: 'input',
        name: 'metedName',
        message: 'What is the name of the lesson?',
        default: 'Lesson Title Here'
      },
      {
        type: 'list',
        name: 'metedLang',
        message: 'Choose the lesson language:',
        choices: ['EN', 'ES', 'FR'],
        default: 'EN'
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
      },
      {
        type: 'confirm',
        name: 'additionalOptions',
        message: 'Would you like to change any additional options?',
        default: false
      }
    ];

    const additionalPrompts = [
      {
        type: 'input',
        name: 'customYear',
        message: 'Enter custom copyright year(s)',
        default: this.generatorYear
      },
      {
        type: 'input',
        name: 'splashImageCredit',
        message: 'Enter a splash image credit',
        default: '** Image Credit'
      },
    ];


    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      

      // Constants and adjusted vars
      this.generatorYear = generatorYear;
        let pathString = this.props.metedPath;
        let pathArray = pathString.split("/").splice("");
        let structure = pathArray.map(word => word.replace(/[^ ]+/, "..")).join("/").substring(1); //Generate path structure from given meted path, must remove first "/"
      this.structure = structure; //Expose so it can be defined in the template
    });
  }

  writing() {
    //BUILD
    this.fs.copy(
      this.templatePath('extensions/grunt/newlesson/Gruntfile.js'),
      this.destinationPath('Gruntfile.js'),
    );
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
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonLang: this.props.metedLang, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear }
    );
    //download.php
    this.fs.copyTpl(
      this.templatePath('download.php'),
      this.destinationPath('build/download.php'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonLang: this.props.metedLang, currentYear: this.generatorYear, pathStructure: this.structure  }
    );
    //media_gallery.php
    this.fs.copyTpl(
      this.templatePath('media_gallery.php'),
      this.destinationPath('build/media_gallery.php'),
      { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonLang: this.props.metedLang, currentYear: this.generatorYear  }
    );
    //pageTemplate.php
    this.fs.copyTpl(
      this.templatePath('pageTemplate.php'),
      this.destinationPath('build/pageTemplate.php'),
      { lessonLang: this.props.metedLang, narratedSwitch: this.props.narratedLesson, multiPrint: this.props.multiLesson, currentYear: this.generatorYear }
    );
    //navmenu.php
    this.fs.copyTpl(
      this.templatePath('navmenu.php'),
      this.destinationPath('build/navmenu.php'),
      { lessonPath: this.props.metedPath }
    );

    //POST CONDITIONALS
    //defaults.js
    switch (this.props.metedLang){
      case 'EN': //English
        this.fs.copyTpl(
          this.templatePath('extensions/lc-default/defaults.js'),
          this.destinationPath('build/jquery/defaults.js'),
          { lessonTitle: this.props.metedName, lessonID: this.props.metedID }
        );
        this.fs.copy(
          this.templatePath('navmenu.inc.php'),
          this.destinationPath('build/navmenu.inc.php'),
        );
      break;
      case 'ES': //Spanish
        this.fs.copyTpl(
          this.templatePath('extensions/lc-default/defaults_es.js'),
          this.destinationPath('build/jquery/defaults.js'),
          { lessonTitle: this.props.metedName, lessonID: this.props.metedID }
        );
        this.fs.copy(
          this.templatePath('navmenu.inc_es.php'),
          this.destinationPath('build/navmenu.inc.php'),
        );
      break;
      case 'FR': //French
        this.fs.copyTpl(
          this.templatePath('extensions/lc-default/defaults_fr.js'),
          this.destinationPath('build/jquery/defaults.js'),
          { lessonTitle: this.props.metedName, lessonID: this.props.metedID }
        );
        this.fs.copy(
          this.templatePath('navmenu.inc_fr.php'),
          this.destinationPath('build/navmenu.inc.php'),
        );
    }
    
    //print.php
    if (this.props.multiLesson) {
      this.fs.copyTpl(
        this.templatePath('print.php'),
        this.destinationPath('build/print.php'),
        { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear, lessonLang: this.props.metedLang, multiPrint: this.props.multiLesson }
      );
      this.fs.copyTpl(
        this.templatePath('print.php'),
        this.destinationPath('build/print_02.php'),
        { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear, lessonLang: this.props.metedLang, multiPrint: this.props.multiLesson }
      );
    } else {
      this.fs.copyTpl(
        this.templatePath('print.php'),
        this.destinationPath('build/print.php'),
        { lessonTitle: this.props.metedName, lessonID: this.props.metedID, lessonDesc: this.props.metedDesc, lessonKeys: this.props.metedKeys, currentYear: this.generatorYear, lessonLang: this.props.metedLang, multiPrint: this.props.multiLesson }
      );
    }
    
    //LOGS
    //this.log("Lesson name set to: " + `${chalk.red(this.props.metedName)}`);
    //this.log("Lesson ID set to: " + `${chalk.red(this.props.metedID)}`);
    //this.log("Lesson language set to: " + `${chalk.red(this.props.metedLang)}`);
    //this.log("Copyright year set to: " + `${chalk.green(this.generatorYear)}`);
    //this.log(this.structure);
    
  }

  //Install dependencies and run Grunt
  install() {
    this.installDependencies({
      bower: false,
      grunt: true
    });
    this.npmInstall();
    this.spawnCommand('grunt', ['default']);
  }

};
