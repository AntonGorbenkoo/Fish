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
    let choiceTopic = await this.view.show(themesArray, this.model.name);
      switch(choiceTopic){
        case '1': choiceTopic = themesArray[0]; break;
        case '2': choiceTopic = themesArray[1]; break;
        case '3': choiceTopic = themesArray[2]; break;
        case '4': choiceTopic = themesArray[3]; break;
        default: choiceTopic = themesArray[0]; break;
      }
    const quest = await this.model.getQuestions(choiceTopic);
    this.startGame(quest);
  }

  async startGame(quest){
    for(let i = 0; i < quest.length; i++){
      const answer = await this.view.showQuestions(quest, i);
      
      if(answer.toLowerCase().trim() === quest[i][4]){
        console.log('Молодец, это правильный ответ!');
      }else{
        console.log('Плохо!');
      }
    }
    await this.run();
  }
  
}

module.exports = Controller