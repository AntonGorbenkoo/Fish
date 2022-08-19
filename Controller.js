const Model = require("./Model");
const View = require('./View');
const fs = require('fs').promises;


class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
  async hello(){
    const name = await this.view.greeting();
    this.model.name = name;
    this.run();
  }

  async run() {
    const themesArray = await this.model.getThemes();
    this.printTopicsController(themesArray);
  }

  async printTopicsController(themesArray) {
    const choiceTopic = await this.view.show(themesArray, this.model.name);
    
  }

  
}

module.exports = Controller