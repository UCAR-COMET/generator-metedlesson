"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const grunt = require("grunt");

module.exports = class extends Generator {
  prompting() {
    // 1) Let's create some variables to use in the generator: current year, splash credit
    const generatorYear = new Date().getFullYear();
    const copyrightText = "The COMET Program";
    const articulatePages = [];

    // 2) Have Yeoman greet the user
    this.log(yosay(`Let's generate a new ${chalk.blue("MetEd Lesson")}!`));

    // 3) Let's make prompts in the CLI
    const prompts = [
      {
        type: "list",
        name: "templateType",
        message: "Choose the lesson template:",
        choices: ["single-print", "multi-print", "articulate-shell"],
        default: "single-print"
      },
      {
        type: "list",
        name: "metedLang",
        message: "Choose the lesson language:",
        choices: ["EN", "ES", "FR"],
        default: "EN"
      },
      {
        type: "input",
        name: "metedName",
        message: "What is the name of the lesson?",
        default: "Lesson Title Here"
      },
      {
        type: "input",
        name: "metedID",
        message: "What is the lesson ID?",
        default: 0
      },
      {
        type: "input",
        name: "metedDesc",
        message: "Enter the lesson description:",
        default: ""
      },
      {
        type: "input",
        name: "metedKeys",
        message: "Enter the lesson keywords (comma separated):",
        default: ""
      },
      {
        type: "input",
        name: "metedPath",
        message: "What is the MetEd lesson path structure?",
        default: "/example/path/"
      },
      {
        type: "confirm",
        name: "hasAdditionalOptions",
        message:
          "Would you like to include additional components? (copyright year(s), image credit, narration switch)",
        default: false
      }
    ];

    // 4) Additional prompts
    const additionalPrompts = [
      {
        type: "input",
        name: "customYear",
        message: "Enter custom copyright year(s): ",
        default: generatorYear
      },
      {
        type: "input",
        name: "splashImageCredit",
        message: "Enter a splash image credit: ",
        default: copyrightText
      },
      {
        type: "confirm",
        name: "narratedLesson",
        message: "Does this lesson need a switch to Narrated/Text button?",
        default: false
      }
    ];

    const articulateShellPrompts = [
      {
        type: "checkbox",
        name: "articulatePages",
        message: "Select any additional pages to include:",
        choices: [{
          name: 'Resources',
          value: 'ResourcesPage',
          checked: true
        }/*, {
          name: 'Print',
          value: 'PrintPage',
          checked: false
        }*/]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.generatorYear = generatorYear;

      // Generate path structure from given meted path, must remove first "/"
      let pathString = this.props.metedPath;
      let pathArray = pathString.split("/").splice("");
      let structure = pathArray
        .map(word => word.replace(/[^ ]+/, ".."))
        .join("/")
        .substring(1);
      this.structure = structure; // Expose so it can be defined in the template
      this.copyrightText = copyrightText;

      // Check additional prompts for LC
      if (props.hasAdditionalOptions && props.templateType !== "articulate-shell") {
        return this.prompt(additionalPrompts).then(props => {
          console.log("RETURN STUFF FOR ADDITIONAL PROMPTS AND OPTIONS!!!");
          // To access props from additional options
          // this.props = props;

          // Adjusted vars
          this.generatorYear = props.customYear;
          this.copyrightText = props.splashImageCredit;
        });
      }
      // Check additional prompts for Articulate Shell
      if (props.templateType === "articulate-shell") {
        return this.prompt(articulateShellPrompts).then(props => {
          console.log("RETURN STUFF FOR ARTICULATE SHELL PROMPTS!!!");
          // To access props from additional options
          // this.props = props;

          // Adjusted vars
          this.articulatePages = props.articulatePages;
          console.log("Articulate Pages: ", this.articulatePages);
        });
      }

      /* Console.log('Continue building lesson without additional options...');
        adjustVars(this.generatorYear, this.splashCredit); */
    });
  }

  writing() {
    // INSTALL DEPENDENCIES
    const pkgJson = {
      devDependencies: {
        grunt: "^1.5.3",
        "grunt-cli": "^1.4.3",
        "grunt-concat-css": "^0.3.2",
        "grunt-contrib-clean": "^2.0.1",
        "grunt-contrib-concat": "^2.1.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-cssmin": "^4.0.0",
        "grunt-mkdir": "^1.1.0",
        "grunt-script-link-tags": "^1.0.2"
      },
      dependencies: {
        grunt: "^1.5.3",
        "grunt-cli": "^1.4.3",
        "grunt-concat-css": "^0.3.2",
        "grunt-contrib-clean": "^2.0.1",
        "grunt-contrib-concat": "^2.1.0",
        "grunt-contrib-copy": "^1.0.0",
        "grunt-contrib-cssmin": "^4.0.0",
        "grunt-mkdir": "^1.1.0",
        "grunt-script-link-tags": "^1.0.2"
      }
    };
    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath("package.json"), pkgJson);

    // BUILD

    // Articulate shell setup if selected
    if (this.props.templateType === "articulate-shell") {
      // source files
      this.fs.copy(
        this.templatePath("articulate_rise/src"),
        this.destinationPath("build/src")
      );
      // gruntfile
      this.fs.copy(
        this.templatePath("extensions/grunt/articulate/Gruntfile.js"),
        this.destinationPath("Gruntfile.js")
      );
      // index.htm
      this.fs.copyTpl(
        this.templatePath("articulate_rise/index.htm"),
        this.destinationPath("build/index.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // contributors.htm
      this.fs.copyTpl(
        this.templatePath("articulate_rise/contributors.htm"),
        this.destinationPath("build/contributors.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // gallery.php
      this.fs.copyTpl(
        this.templatePath("articulate_rise/gallery.php"),
        this.destinationPath("build/gallery.php"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // preassessment.htm
      this.fs.copyTpl(
        this.templatePath("articulate_rise/preassessment.htm"),
        this.destinationPath("build/preassessment.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // quiz.htm
      this.fs.copyTpl(
        this.templatePath("articulate_rise/quiz.htm"),
        this.destinationPath("build/quiz.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // survey.html
      this.fs.copyTpl(
        this.templatePath("articulate_rise/survey.htm"),
        this.destinationPath("build/survey.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          usedPages: this.articulatePages,
          lessonLang: this.props.metedLang
        }
      );
      // download.php
      this.fs.copyTpl(
        this.templatePath("articulate_rise/download.php"),
        this.destinationPath("build/download.php"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          lessonLang: this.props.metedLang,
          usedPages: this.articulatePages,
          pathStructure: this.structure
        }
      );
      // conditional pages
      if (this.articulatePages.includes("ResourcesPage")) {
        this.fs.copy(
          this.templatePath("articulate_rise/resources.htm"),
          this.destinationPath("build/resources.htm"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID,
            lessonDesc: this.props.metedDesc,
            lessonKeys: this.props.metedKeys,
            copyrightYear: this.generatorYear,
            lessonLang: this.props.metedLang,
            usedPages: this.articulatePages,
            pathStructure: this.structure
          }
        );
      }
      /*if (this.articulatePages.includes("PrintPage")) {
        this.fs.copy(
          this.templatePath("print.php"),
          this.destinationPath("build/print.php"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID,
            lessonDesc: this.props.metedDesc,
            lessonKeys: this.props.metedKeys,
            copyrightYear: this.generatorYear,
            lessonLang: this.props.metedLang,
            usedPages: this.articulatePages,
            pathStructure: this.structure
          }
        );
      }
      if (this.articulatePages.includes("BlankPage")) {
        this.fs.copy(
          this.templatePath("articulate_rise/blank.htm"),
          this.destinationPath("build/blank.htm"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID,
            lessonDesc: this.props.metedDesc,
            lessonKeys: this.props.metedKeys,
            copyrightYear: this.generatorYear,
            lessonLang: this.props.metedLang,
            usedPages: this.articulatePages,
            pathStructure: this.structure
          }
        );
      }*/
      
    } else {

    // Single-print and multi-print setup
    this.fs.copy(
      this.templatePath("extensions/grunt/newlesson/Gruntfile.js"),
      this.destinationPath("Gruntfile.js")
    );
    this.fs.copy(
      this.templatePath("assets"),
      this.destinationPath("build/assets")
    );
    this.fs.copy(
      this.templatePath("bootstrap"),
      this.destinationPath("build/bootstrap")
    );
    this.fs.copy(this.templatePath("css"), this.destinationPath("build/css"));
    this.fs.copy(
      this.templatePath("jquery"),
      this.destinationPath("build/jquery")
    );
    this.fs.copy(
      this.templatePath("ie-support"),
      this.destinationPath("build/ie-support")
    );
    this.fs.copy(
      this.templatePath("modernizr"),
      this.destinationPath("build/modernizr")
    );
    this.fs.copy(
      this.templatePath("navmenu.inc.php"),
      this.destinationPath("build/navmenu.inc.php")
    );
    this.fs.copy(
      this.templatePath("simple_html_dom.php"),
      this.destinationPath("build/simple_html_dom.php")
    );

    // MODS
    // index.htm
    this.fs.copyTpl(
      this.templatePath("index.htm"),
      this.destinationPath("build/index.htm"),
      {
        templateType: this.props.templateType,
        lessonTitle: this.props.metedName,
        lessonID: this.props.metedID,
        lessonLang: this.props.metedLang,
        lessonDesc: this.props.metedDesc,
        lessonKeys: this.props.metedKeys,
        copyrightYear: this.generatorYear,
        splashImageCredit: this.copyrightText
      }
    );
    // Download.php
    this.fs.copyTpl(
      this.templatePath("download.php"),
      this.destinationPath("build/download.php"),
      {
        templateType: this.props.templateType,
        lessonTitle: this.props.metedName,
        lessonID: this.props.metedID,
        lessonLang: this.props.metedLang,
        copyrightYear: this.generatorYear,
        pathStructure: this.structure
      }
    );
    // Media_gallery.php
    this.fs.copyTpl(
      this.templatePath("media_gallery.php"),
      this.destinationPath("build/media_gallery.php"),
      {
        templateType: this.props.templateType,
        lessonTitle: this.props.metedName,
        lessonID: this.props.metedID,
        lessonLang: this.props.metedLang,
        copyrightYear: this.generatorYear
      }
    );
    // PageTemplate.php
    this.fs.copyTpl(
      this.templatePath("pageTemplate.php"),
      this.destinationPath("build/pageTemplate.php"),
      {
        templateType: this.props.templateType,
        lessonLang: this.props.metedLang,
        narratedSwitch: this.props.narratedLesson,
        copyrightYear: this.generatorYear
        // MultiPrint: this.props.multiLesson,
      }
    );
    // Navmenu.php
    this.fs.copyTpl(
      this.templatePath("navmenu.php"),
      this.destinationPath("build/navmenu.php"),
      { lessonPath: this.props.metedPath }
    );
    // Print.php
    this.fs.copyTpl(
      this.templatePath("print.php"),
      this.destinationPath("build/print.php"),
      {
        templateType: this.props.templateType,
        lessonTitle: this.props.metedName,
        lessonID: this.props.metedID,
        lessonDesc: this.props.metedDesc,
        lessonKeys: this.props.metedKeys,
        copyrightYear: this.generatorYear,
        lessonLang: this.props.metedLang
      }
    );

    // POST LANGUAGE CONDITIONALS
    // defaults.js
    switch (this.props.metedLang) {
      case "EN": // English
        this.fs.copyTpl(
          this.templatePath("extensions/lc-default/defaults.js"),
          this.destinationPath("build/jquery/defaults.js"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID
          }
        );
        this.fs.copy(
          this.templatePath("navmenu.inc.php"),
          this.destinationPath("build/navmenu.inc.php")
        );
        break;
      case "ES": // Spanish
        this.fs.copyTpl(
          this.templatePath("extensions/lc-default/defaults_es.js"),
          this.destinationPath("build/jquery/defaults.js"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID
          }
        );
        this.fs.copy(
          this.templatePath("navmenu.inc_es.php"),
          this.destinationPath("build/navmenu.inc.php")
        );
        break;
      case "FR": // French
        this.fs.copyTpl(
          this.templatePath("extensions/lc-default/defaults_fr.js"),
          this.destinationPath("build/jquery/defaults.js"),
          {
            templateType: this.props.templateType,
            lessonTitle: this.props.metedName,
            lessonID: this.props.metedID
          }
        );
        this.fs.copy(
          this.templatePath("navmenu.inc_fr.php"),
          this.destinationPath("build/navmenu.inc.php")
        );
    }

    // MULTI-PRINT ONLY
    if (this.props.templateType === "multi-print") {
      this.fs.copyTpl(
        this.templatePath("print.php"),
        this.destinationPath("build/print.php"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          lessonLang: this.props.metedLang
        }
      );
      this.fs.copyTpl(
        this.templatePath("print.php"),
        this.destinationPath("build/print_02.php"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          lessonLang: this.props.metedLang
        }
      );
      this.fs.copyTpl(
        this.templatePath("contributors.htm"),
        this.destinationPath("build/contributors.htm"),
        {
          templateType: this.props.templateType,
          lessonTitle: this.props.metedName,
          lessonID: this.props.metedID,
          lessonDesc: this.props.metedDesc,
          lessonKeys: this.props.metedKeys,
          copyrightYear: this.generatorYear,
          lessonLang: this.props.metedLang
        }
      );
    }
  }
  }

  // Install dependencies
  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      grunt: true
    });
    this.npmInstall(
      [
        "grunt",
        "grunt-cli",
        "grunt-contrib-clean",
        "grunt-contrib-concat",
        "grunt-contrib-copy",
        "grunt-contrib-cssmin",
        "grunt-html-build",
        "grunt-mkdir",
        "grunt-sails-linker",
        "grunt-script-link-tags"
      ],
      { "save-dev": false }
    );
    // Run npm install && grunt on end
    this.on("end", function() {
      if (!this.options["skip-install"]) {
        this.npmInstall();
        this.spawnCommand("grunt", ["default"]);
      }
    });

    // Log Output
    this.log(
      yosay(
        `${chalk.green(
          "I made the MetEd lesson scaffolding with the following settings:"
        )}`
      )
    );
    this.log("Lesson: " + `${chalk.red(this.props.metedName)}`);
    this.log("ID: " + `${chalk.red(this.props.metedID)}`);
    this.log("Language: " + `${chalk.red(this.props.metedLang)}`);
    this.log("Copyright year: " + `${chalk.red(this.generatorYear)}`);
    this.log(`${chalk.green("build & dist")} folders READY`);
    this.log(yosay(`${chalk.green("Just running a few more tasks...")}`));
    // Log additional Articulate options
    if (this.articulatePages){
      this.log("Articulate pages:" + this.articulatePages);
    }
  }
};
